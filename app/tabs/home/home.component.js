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
        this.actividad = [];
        this.changePlanes = [];
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";
        this.isEvent = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getInfo = [];
        this.ngZone.run(function () {
            // this.planes =  this._planesService.getAllPlanes();
            // getInfo = this._planesService.getConexion();
            _this.planes = _this._planesService.getConexion();
            _this.actividad = _this._planesService.getAllActividad();
            if (_this.actividad.length > 0) {
                console.log("Existen eventos ");
                _this.isEvent = true;
            }
            // console.log("Alex ees un locooo");
            //  imageCache(id_imagen, viewModel, url_imagen)
        });
    };
    HomeComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.ngZone.run(function () {
            console.log("DoCheck");
            console.log(_this.actividad);
            if (_this.actividad.length > 0) {
                console.log("Existen eventos ");
                _this.isEvent = true;
            }
            else {
                _this.isEvent = false;
            }
        });
        console.log(this.isEvent);
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
        var _this = this;
        // console.log("ID:" + id + "Total:"+ t_shared);
        console.log(this._planesService.getConection());
        var connection = this._planesService.getConection();
        if (connection == "No connection") {
            SocialShare.shareUrl(image, "Nuevo Plan de Control Diamante", "Nuevo Plan de Control Diamante");
        }
        else {
            // Imagen Local
            // let imagen_local = ImageSource.fromFile("~/images/send.jpg");
            // SocialShare.shareImage(imagen_local);
            // Descargar Imagen directamente de la url y pasarla
            ImageSource.fromUrl(image).then(function (image) {
                SocialShare.shareImage(image, "Nuevo plan de Control Diamante");
                _this.pressShared = "font-awesome ico-share-press";
                console.log("Presionado");
                setTimeout(function () {
                    _this.pressShared = "font-awesome ico-share";
                    console.log("Soltando");
                }, 800);
            });
            this._planesService.putPlusShare(id, t_shared);
        }
        this.pressShared = "font-awesome ico-share";
        // const vm = new Observable();       
        // this._planesService.imageCache(id, vm, image);
    };
    HomeComponent.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
        this.ngZone.run(function () {
            _this.planes = [];
            _this.planes = _this._planesService.getConexion();
            var cache = _this._planesService.getLike();
            _this.pressShared = "font-awesome ico-share";
            // this.actividad = this._planesService.getAllActividad();          
        });
        console.log(this.isEvent);
    };
    HomeComponent.prototype.IsEventA = function () {
        this.actividad = this._planesService.getAllActividad();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFFekYsc0RBQStEO0FBTS9ELElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFcEUsNERBQTREO0FBRTVELFVBQVU7QUFDVixrRUFBZ0U7QUFNaEUsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFLNUMsMEVBQXdFO0FBR3hFLGtDQUFlLENBQUMsZUFBZSxFQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVczRjtJQWdCSSx1QkFDWSxNQUFjLEVBQ2QsTUFBd0IsRUFDeEIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVhuQyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQVlqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBSXpCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxPQUFPLEdBQWMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1oscURBQXFEO1lBQ3JELCtDQUErQztZQUMvQyxLQUFJLENBQUMsTUFBTSxHQUFJ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T0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQS9Mb0I7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVksaUJBQVU7b0RBQUM7SUFKakMsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUV0QyxDQUFDO3lDQWtCc0IsYUFBTTtZQUNOLHlCQUFnQjtZQUNSLGdDQUFjO09BbkJqQyxhQUFhLENBb016QjtJQUFELG9CQUFDO0NBQUEsQUFwTUQsSUFvTUM7QUFwTVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBhbmQgTW9kdWxlc1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUsIERvQ2hlY2t9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7c2V0Q3VycmVudE9yaWVudGF0aW9uICwgb3JpZW50YXRpb25DbGVhbnVwfSBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuLW9yaWVudGF0aW9uJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgY29ubmVjdGl2aXR5TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCIpO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG4vLyBpbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBQbGFuZXNTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFuZXMuc2VydmljZXNcIjtcclxuXHJcbi8vTW9kZWxvXHJcbmltcG9ydCB7IFBsYW5lcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhbmVzXCI7XHJcbmltcG9ydCB7IEFjdGl2aWRhZCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWN0aXZpZGFkXCI7XHJcblxyXG4vL1BsdWdpblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG4vLyBjb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgUHVsbFRvUmVmcmVzaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwicHVsbFRvUmVmcmVzaFwiLCgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtQbGFuZXNTZXJ2aWNlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6YW55O1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoXCJsaWtlc1wiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgYWN0aXZpZGFkOiBBcnJheTxBY3RpdmlkYWQ+ID0gW107XHJcbiAgICBwdWJsaWMgY2hhbmdlUGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuICAgIHB1YmxpYyBpc0V2ZW50OmJvb2xlYW47XHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIF9wbGFuZXNTZXJ2aWNlOiBQbGFuZXNTZXJ2aWNlcyxcclxuICAgICAgIFxyXG4gICAgICl7ICBcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7XHJcbiAgICAgICAgdGhpcy5pc0V2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgbGV0IGdldEluZm86QXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICAvLyBnZXRJbmZvID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7ICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpZGFkID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRBbGxBY3RpdmlkYWQoKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZpZGFkLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGlzdGVuIGV2ZW50b3MgXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFsZXggZWVzIHVuIGxvY29vb1wiKTtcclxuICAgICAgICAgICAgICAgLy8gIGltYWdlQ2FjaGUoaWRfaW1hZ2VuLCB2aWV3TW9kZWwsIHVybF9pbWFnZW4pXHJcblxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICBuZ0RvQ2hlY2soKXtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb0NoZWNrXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFjdGl2aWRhZCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZpZGFkLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGlzdGVuIGV2ZW50b3MgXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0V2ZW50KTtcclxuICAgIH1cclxuXHJcbiBcclxuXHJcbiAgXHJcbiAgIFxyXG5cclxuICAgIC8vIGl0ZW1OZXh0KCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJJciBhIGl0ZW1cIik7XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicmFkaW9cIl0sIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgLy8gICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIC8vICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICBcclxuXHJcbiAgICBsaWtlKGlkLCBsaWtlLCBzdGF0dXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQ6XCIgKyAgaWQgKyBcIlRvdGFsIExpa2U6XCIrIGxpa2UgKyBcImNsYXNzXCIgKyBzdGF0dXMpOyAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHN0YXR1cyA9PSAnZm9udC1hd2Vzb21lIGljby1kaXNsaWtlJyl7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9vZ2xlTGlrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tbGlrZVwiXHJcbiAgICAgICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KFwiTGlrZVwiLCBcImxvbmdcIikuc2hvdygpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBsYW5lcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGlkID09IHRoaXMucGxhbmVzW2ldLmlkKXtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0ubGlrZXNfcmVjaWJpZG9zKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxhbmVzW2lkXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dFBsdXNMaWtlKGlkLCBsaWtlKTsgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNleyBcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVMaWtlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiXHJcbiAgICAgICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KFwiRGlzbGlrZVwiLCBcImxvbmdcIikuc2hvdygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wbGFuZXMubGVuZ3RoO2krKyl7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpeyAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsaWtlID09IHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3MtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0ubGlrZXNfcmVjaWJpZG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dE1pbnVzTGlrZShpZCwgbGlrZSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaGFyZShpbWFnZSxpZCx0X3NoYXJlZCl7ICAgXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQ6XCIgKyBpZCArIFwiVG90YWw6XCIrIHRfc2hhcmVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmVjdGlvbigpKTtcclxuICAgICAgICBsZXQgY29ubmVjdGlvbiA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZWN0aW9uKCk7XHJcbiAgIFxyXG5cclxuICAgICAgICBpZihjb25uZWN0aW9uID09IFwiTm8gY29ubmVjdGlvblwiKXtcclxuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoaW1hZ2UsIFwiTnVldm8gUGxhbiBkZSBDb250cm9sIERpYW1hbnRlXCIsIFwiTnVldm8gUGxhbiBkZSBDb250cm9sIERpYW1hbnRlXCIpOyAgICAgICBcclxuICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbWFnZW4gTG9jYWxcclxuICAgICAgICAgICAgLy8gbGV0IGltYWdlbl9sb2NhbCA9IEltYWdlU291cmNlLmZyb21GaWxlKFwifi9pbWFnZXMvc2VuZC5qcGdcIik7XHJcbiAgICAgICAgICAgIC8vIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2VuX2xvY2FsKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRGVzY2FyZ2FyIEltYWdlbiBkaXJlY3RhbWVudGUgZGUgbGEgdXJsIHkgcGFzYXJsYVxyXG4gICAgICAgICAgICBJbWFnZVNvdXJjZS5mcm9tVXJsKGltYWdlKS50aGVuKChpbWFnZSkgPT4geyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlLCBcIk51ZXZvIHBsYW4gZGUgQ29udHJvbCBEaWFtYW50ZVwiKTsgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlLXByZXNzXCI7ICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJlc2lvbmFkb1wiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29sdGFuZG9cIik7XHJcbiAgICAgICAgICAgICAgICB9LDgwMCk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucHV0UGx1c1NoYXJlKGlkLHRfc2hhcmVkKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyBcclxuICAgICAgICAvLyBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7ICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuX3BsYW5lc1NlcnZpY2UuaW1hZ2VDYWNoZShpZCwgdm0sIGltYWdlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTsgICAgICAgICAgXHJcbiAgICAgICAgfSwgMTAwMCk7ICAgIFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldExpa2UoKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7IFxyXG4gICAgICAgICAgICAvLyB0aGlzLmFjdGl2aWRhZCA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsQWN0aXZpZGFkKCk7ICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICBcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNFdmVudCk7XHJcbiAgIH1cclxuXHJcbiAgIElzRXZlbnRBKCl7XHJcbiAgICB0aGlzLmFjdGl2aWRhZCA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsQWN0aXZpZGFkKCk7IFxyXG4gICB9XHJcbn1cclxuIl19