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
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getInfo = [];
        this.ngZone.run(function () {
            // this.planes =  this._planesService.getAllPlanes();
            // getInfo = this._planesService.getConexion();
            _this.planes = _this._planesService.getConexion();
            _this.actividad = _this._planesService.getAllActividad();
            console.log(_this.actividad);
            // console.log("Alex ees un locooo");
            //  imageCache(id_imagen, viewModel, url_imagen)
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
        console.log("Entrando");
        this.ngZone.run(function () {
            _this.planes = [];
            _this.planes = _this._planesService.getConexion();
            _this.actividad = _this._planesService.getAllActividad();
            var cache = _this._planesService.getLike();
            console.log(cache);
            _this.pressShared = "font-awesome ico-share";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBZ0Y7QUFFaEYsc0RBQStEO0FBTS9ELElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFcEUsNERBQTREO0FBRTVELFVBQVU7QUFDVixrRUFBZ0U7QUFNaEUsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFLNUMsMEVBQXdFO0FBR3hFLGtDQUFlLENBQUMsZUFBZSxFQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVczRjtJQWVJLHVCQUNZLE1BQWMsRUFDZCxNQUF3QixFQUN4QixjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVm5DLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBV2pDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7SUFJaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLHFEQUFxRDtZQUNyRCwrQ0FBK0M7WUFDL0MsS0FBSSxDQUFDLE1BQU0sR0FBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lB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QyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLEdBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkQsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFFaEQsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBcEtvQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBWSxpQkFBVTtvREFBQztJQUpqQyxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBRXRDLENBQUM7eUNBaUJzQixhQUFNO1lBQ04seUJBQWdCO1lBQ1IsZ0NBQWM7T0FsQmpDLGFBQWEsQ0F5S3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXpLRCxJQXlLQztBQXpLWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IGFuZCBNb2R1bGVzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtzZXRDdXJyZW50T3JpZW50YXRpb24gLCBvcmllbnRhdGlvbkNsZWFudXB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW4tb3JpZW50YXRpb24nO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xyXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcbi8vIGltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcblxyXG4vL1NlcnZpY2VzXHJcbmltcG9ydCB7IFBsYW5lc1NlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYW5lcy5zZXJ2aWNlc1wiO1xyXG5cclxuLy9Nb2RlbG9cclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFuZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZpZGFkIH0gZnJvbSBcIi4uLy4uL21vZGVscy9hY3RpdmlkYWRcIjtcclxuXHJcbi8vUGx1Z2luXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcclxuLy8gY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbi8vIGNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJwdWxsVG9SZWZyZXNoXCIsKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCIpLlB1bGxUb1JlZnJlc2gpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHByb3ZpZGVyczogW1BsYW5lc1NlcnZpY2VzXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczphbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcImxpa2VzXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyB0b29nbGVIZWFydDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9vZ2xlTGlrZTpib29sZWFuO1xyXG4gICAgcHVibGljIHByZXNzU2hhcmVkOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXM6IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBhY3RpdmlkYWQ6IEFycmF5PEFjdGl2aWRhZD4gPSBbXTtcclxuICAgIHB1YmxpYyBjaGFuZ2VQbGFuZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHB1YmxpYyBwcnVlYmE6c3RyaW5nO1xyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGxhbmVzU2VydmljZTogUGxhbmVzU2VydmljZXMsXHJcbiAgICAgICBcclxuICAgICApeyAgXHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgdGhpcy50b29nbGVMaWtlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiO1xyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IFxyXG4gICAgICAgIGxldCBnZXRJbmZvOkFycmF5PGFueT4gPSBbXTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRBbGxQbGFuZXMoKTtcclxuICAgICAgICAgICAgLy8gZ2V0SW5mbyA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpOyAgIFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2aWRhZCA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsQWN0aXZpZGFkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZpZGFkKTsgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWxleCBlZXMgdW4gbG9jb29vXCIpO1xyXG4gICAgICAgICAgICAgICAvLyAgaW1hZ2VDYWNoZShpZF9pbWFnZW4sIHZpZXdNb2RlbCwgdXJsX2ltYWdlbilcclxuXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgXHJcbiAgICB9IFxyXG5cclxuIFxyXG5cclxuICBcclxuICAgXHJcblxyXG4gICAgLy8gaXRlbU5leHQoKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklyIGEgaXRlbVwiKTtcclxuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyYWRpb1wiXSwge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIixcclxuICAgIC8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgLy8gICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIFxyXG5cclxuICAgIGxpa2UoaWQsIGxpa2UsIHN0YXR1cyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZDpcIiArICBpZCArIFwiVG90YWwgTGlrZTpcIisgbGlrZSArIFwiY2xhc3NcIiArIHN0YXR1cyk7ICAgICBcclxuICAgICAgXHJcbiAgICAgICAgaWYoc3RhdHVzID09ICdmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2UnKXtcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVMaWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCJcclxuICAgICAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoXCJMaWtlXCIsIFwibG9uZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3MrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGFuZXNbaWRdLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucHV0UGx1c0xpa2UoaWQsIGxpa2UpOyBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgICAvLyB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCJcclxuICAgICAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoXCJEaXNsaWtlXCIsIFwibG9uZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBsYW5lcy5sZW5ndGg7aSsrKXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpZCA9PSB0aGlzLnBsYW5lc1tpXS5pZCl7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxpa2UgPT0gdGhpcy5wbGFuZXNbaV0ubGlrZXNfcmVjaWJpZG9zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucHV0TWludXNMaWtlKGlkLCBsaWtlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKGltYWdlLGlkLHRfc2hhcmVkKXsgICBcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRDpcIiArIGlkICsgXCJUb3RhbDpcIisgdF9zaGFyZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZWN0aW9uKCkpO1xyXG4gICAgICAgIGxldCBjb25uZWN0aW9uID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25lY3Rpb24oKTtcclxuICAgXHJcblxyXG4gICAgICAgIGlmKGNvbm5lY3Rpb24gPT0gXCJObyBjb25uZWN0aW9uXCIpe1xyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChpbWFnZSwgXCJOdWV2byBQbGFuIGRlIENvbnRyb2wgRGlhbWFudGVcIiwgXCJOdWV2byBQbGFuIGRlIENvbnRyb2wgRGlhbWFudGVcIik7ICAgICAgIFxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEltYWdlbiBMb2NhbFxyXG4gICAgICAgICAgICAvLyBsZXQgaW1hZ2VuX2xvY2FsID0gSW1hZ2VTb3VyY2UuZnJvbUZpbGUoXCJ+L2ltYWdlcy9zZW5kLmpwZ1wiKTtcclxuICAgICAgICAgICAgLy8gU29jaWFsU2hhcmUuc2hhcmVJbWFnZShpbWFnZW5fbG9jYWwpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEZXNjYXJnYXIgSW1hZ2VuIGRpcmVjdGFtZW50ZSBkZSBsYSB1cmwgeSBwYXNhcmxhXHJcbiAgICAgICAgICAgIEltYWdlU291cmNlLmZyb21VcmwoaW1hZ2UpLnRoZW4oKGltYWdlKSA9PiB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UsIFwiTnVldm8gcGxhbiBkZSBDb250cm9sIERpYW1hbnRlXCIpOyAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcmVzaW9uYWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb2x0YW5kb1wiKTtcclxuICAgICAgICAgICAgICAgIH0sODAwKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5wdXRQbHVzU2hhcmUoaWQsdF9zaGFyZWQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICBcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7IFxyXG4gICAgICAgIC8vIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTsgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5fcGxhbmVzU2VydmljZS5pbWFnZUNhY2hlKGlkLCB2bSwgaW1hZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50cmFuZG9cIik7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTsgIFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2aWRhZCA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsQWN0aXZpZGFkKCk7IFxyXG4gICAgICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldExpa2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FjaGUpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICBcclxuICAgfVxyXG59XHJcbiJdfQ==