"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component and Modules
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var connectivityModule = require("tns-core-modules/connectivity");
// import { firestore } from "nativescript-plugin-firebase";
//Services
var planes_services_1 = require("../../services/planes.services");
//Plugin
var SocialShare = require("nativescript-social-share");
var ImageSource = require("image-source");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("pullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngZone, router, _planesService) {
        this.ngZone = ngZone;
        this.router = router;
        this._planesService = _planesService;
        this.planes = [];
        this.changePlanes = [];
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getInfo = [];
        this.ngZone.run(function () {
            // this.planes =  this._planesService.getAllPlanes();
            // getInfo = this._planesService.getConexion();
            _this.planes = _this._planesService.getConexion();
        });
    };
    // itemNext(){
    //     console.log("Ir a item");
    //     this.router.navigate(["radio"], {
    //         transition: {
    //             name: "flip",
    //             duration: 2000,
    //             curve: "linear"
    //         }
    //     });
    // }
    HomeComponent.prototype.like = function (id, like, status) {
        console.log("id:" + id + "Total Like:" + like + "class" + status);
        if (status == 'font-awesome ico-dislike') {
            // this.toogleLike = true;
            // this.toogleHeart = "font-awesome ico-like"
            // Toast.makeText("Like", "long").show();
            // this.planes = JSON.parse(appSettings.getString("allPlanes",""));       
            for (var i = 0; i < this.planes.length; i++) {
                if (id == this.planes[i].id) {
                    this.planes[i].likes_recibidos++;
                    this.planes[i].class_likes = "font-awesome ico-like";
                    // console.log(this.planes[id].id);
                }
            }
            this._planesService.putPlusLike(id, like);
        }
        else {
            // this.toogleLike = false;
            // this.toogleHeart = "font-awesome ico-dislike"
            // Toast.makeText("Dislike", "long").show();
            // this.planes = JSON.parse(appSettings.getString("allPlanes",""));       
            for (var i = 0; i < this.planes.length; i++) {
                if (id == this.planes[i].id) {
                    if (like == this.planes[i].likes_recibidos) {
                        this.planes[i].likes_recibidos--;
                        this.planes[i].class_likes = "font-awesome ico-dislike";
                    }
                    else {
                        this.planes[i].likes_recibidos;
                        this.planes[i].class_likes = "font-awesome ico-dislike";
                    }
                }
            }
            this._planesService.putMinusLike(id, like);
        }
    };
    HomeComponent.prototype.share = function (image, id, t_shared) {
        // console.log("ID:" + id + "Total:"+ t_shared);
        console.log(this._planesService.getConection());
        var connection = this._planesService.getConection();
        if (connection == "No connection") {
            SocialShare.shareUrl(image, "Nuevo Plan de Control Diamante", "Nuevo Plan de Control Diamante");
        }
        else {
            this.pressShared = "font-awesome ico-share-press";
            var imagen_local = ImageSource.fromFile("res://locationsantod");
            SocialShare.shareImage(imagen_local);
            // Descargar Imagen directamente de la url y pasarla
            // ImageSource.fromUrl(image).then((image) => {                    
            //     SocialShare.shareImage(image, "Nuevo plan de Control Diamante");    
            //     this.pressShared = "font-awesome ico-share";                   
            // });
            this._planesService.putPlusShare(id, t_shared);
        }
    };
    HomeComponent.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
        console.log("Entrando");
        this.ngZone.run(function () {
            _this.planes = [];
            _this.planes = _this._planesService.getConexion();
            var cache = _this._planesService.getLike();
            console.log(cache);
        });
    };
    __decorate([
        core_1.ViewChild("likes"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "container", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            providers: [planes_services_1.PlanesServices],
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css'],
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            router_1.RouterExtensions,
            planes_services_1.PlanesServices])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBZ0Y7QUFFaEYsc0RBQStEO0FBSy9ELElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFcEUsNERBQTREO0FBRTVELFVBQVU7QUFDVixrRUFBZ0U7QUFLaEUsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFLNUMsMEVBQXdFO0FBR3hFLGtDQUFlLENBQUMsZUFBZSxFQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVczRjtJQWFJLHVCQUNZLE1BQWMsRUFDZCxNQUF3QixFQUN4QixjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUm5DLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBU2pDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7SUFHaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLHFEQUFxRDtZQUNyRCwrQ0FBK0M7WUFDL0MsS0FBSSxDQUFDLE1BQU0sR0FBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FB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LE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUV0QyxDQUFDO3lDQWVzQixhQUFNO1lBQ04seUJBQWdCO1lBQ1IsZ0NBQWM7T0FoQmpDLGFBQWEsQ0FnSnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhKRCxJQWdKQztBQWhKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IGFuZCBNb2R1bGVzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgY29ubmVjdGl2aXR5TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCIpO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG4vLyBpbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBQbGFuZXNTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFuZXMuc2VydmljZXNcIjtcclxuXHJcbi8vTW9kZWxvXHJcbmltcG9ydCB7IFBsYW5lcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhbmVzXCI7XHJcblxyXG4vL1BsdWdpblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG4vLyBjb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgUHVsbFRvUmVmcmVzaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiO1xyXG4gXHJcbnJlZ2lzdGVyRWxlbWVudChcInB1bGxUb1JlZnJlc2hcIiwoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgcHJvdmlkZXJzOiBbUGxhbmVzU2VydmljZXNdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOmFueTtcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKFwibGlrZXNcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgcHVibGljIHRvb2dsZUhlYXJ0OnN0cmluZztcclxuICAgIHB1YmxpYyB0b29nbGVMaWtlOmJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJlc3NTaGFyZWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHBsYW5lczogQXJyYXk8UGxhbmVzPiA9IFtdO1xyXG4gICAgcHVibGljIGNoYW5nZVBsYW5lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgcHVibGljIHBydWViYTpzdHJpbmc7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgX3BsYW5lc1NlcnZpY2U6IFBsYW5lc1NlcnZpY2VzXHJcbiAgICAgKXtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICAgICAgICAgXHJcblxyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgbGV0IGdldEluZm86QXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICAvLyBnZXRJbmZvID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7ICAgIFxyXG5cclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICBcclxuXHJcbiAgICAvLyBpdGVtTmV4dCgpe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSXIgYSBpdGVtXCIpO1xyXG4gICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJhZGlvXCJdLCB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgIC8vICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxyXG4gICAgLy8gICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAvLyAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgXHJcblxyXG4gICAgbGlrZShpZCwgbGlrZSwgc3RhdHVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkOlwiICsgIGlkICsgXCJUb3RhbCBMaWtlOlwiKyBsaWtlICsgXCJjbGFzc1wiICsgc3RhdHVzKTsgICAgIFxyXG4gICAgICBcclxuICAgICAgICBpZihzdGF0dXMgPT0gJ2ZvbnQtYXdlc29tZSBpY28tZGlzbGlrZScpe1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlVGV4dChcIkxpa2VcIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wbGFuZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZihpZCA9PSB0aGlzLnBsYW5lc1tpXS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYW5lc1tpZF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5wdXRQbHVzTGlrZShpZCwgbGlrZSk7IFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXsgXHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIlxyXG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlVGV4dChcIkRpc2xpa2VcIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGlkID09IHRoaXMucGxhbmVzW2ldLmlkKXsgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGlrZSA9PSB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0ubGlrZXNfcmVjaWJpZG9zLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5wdXRNaW51c0xpa2UoaWQsIGxpa2UpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmUoaW1hZ2UsaWQsdF9zaGFyZWQpeyAgIFxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklEOlwiICsgaWQgKyBcIlRvdGFsOlwiKyB0X3NoYXJlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25lY3Rpb24oKSk7XHJcbiAgICAgICAgbGV0IGNvbm5lY3Rpb24gPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZihjb25uZWN0aW9uID09IFwiTm8gY29ubmVjdGlvblwiKXtcclxuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoaW1hZ2UsIFwiTnVldm8gUGxhbiBkZSBDb250cm9sIERpYW1hbnRlXCIsIFwiTnVldm8gUGxhbiBkZSBDb250cm9sIERpYW1hbnRlXCIpOyAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZS1wcmVzc1wiOyAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGltYWdlbl9sb2NhbCA9IEltYWdlU291cmNlLmZyb21GaWxlKFwicmVzOi8vbG9jYXRpb25zYW50b2RcIik7XHJcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2VuX2xvY2FsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERlc2NhcmdhciBJbWFnZW4gZGlyZWN0YW1lbnRlIGRlIGxhIHVybCB5IHBhc2FybGFcclxuICAgICAgICAgICAgLy8gSW1hZ2VTb3VyY2UuZnJvbVVybChpbWFnZSkudGhlbigoaW1hZ2UpID0+IHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgU29jaWFsU2hhcmUuc2hhcmVJbWFnZShpbWFnZSwgXCJOdWV2byBwbGFuIGRlIENvbnRyb2wgRGlhbWFudGVcIik7ICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucHV0UGx1c1NoYXJlKGlkLHRfc2hhcmVkKTtcclxuICAgICAgICB9ICAgICAgIFxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50cmFuZG9cIik7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTsgICBcclxuICAgICAgICAgICAgbGV0IGNhY2hlID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRMaWtlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhY2hlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgXHJcbiAgIH1cclxufVxyXG4iXX0=