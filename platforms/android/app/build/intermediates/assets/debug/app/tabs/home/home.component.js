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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBZ0Y7QUFFaEYsc0RBQStEO0FBTS9ELElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFcEUsNERBQTREO0FBRTVELFVBQVU7QUFDVixrRUFBZ0U7QUFLaEUsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFLNUMsMEVBQXdFO0FBR3hFLGtDQUFlLENBQUMsZUFBZSxFQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVczRjtJQWNJLHVCQUNZLE1BQWMsRUFDZCxNQUF3QixFQUN4QixjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVG5DLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBV2pDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7SUFJaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLHFEQUFxRDtZQUNyRCwrQ0FBK0M7WUFDL0MsS0FBSSxDQUFDLE1BQU0sR0FBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pELHFDQUFxQztZQUNsQyxnREFBZ0Q7UUFFdkQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBT0QsY0FBYztJQUNkLGdDQUFnQztJQUNoQyx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixVQUFVO0lBQ1YsSUFBSTtJQUdKLDRCQUFJLEdBQUosVUFBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU07UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUksRUFBRSxHQUFHLGFBQWEsR0FBRSxJQUFJLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRWxFLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyxDQUFBLENBQUM7WUFDckMsMEJBQTBCO1lBQzFCLDZDQUE2QztZQUM3Qyx5Q0FBeUM7WUFFekMsMEVBQTBFO1lBQzFFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFBLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUM7b0JBQ3JELG1DQUFtQztnQkFDdkMsQ0FBQztZQUVMLENBQUM7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFLOUMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsMkJBQTJCO1lBQzNCLGdEQUFnRDtZQUNoRCw0Q0FBNEM7WUFFNUMsMEVBQTBFO1lBQzFFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFBLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFFcEIsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUEsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7b0JBQzVELENBQUM7b0JBQUMsSUFBSSxDQUFBLENBQUM7d0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7d0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO29CQUM1RCxDQUFDO2dCQUVMLENBQUM7WUFFTCxDQUFDO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9DLENBQUM7SUFFVCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLEtBQUssRUFBQyxFQUFFLEVBQUMsUUFBUTtRQUF2QixpQkFvQ0M7UUFsQ0csZ0RBQWdEO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHcEQsRUFBRSxDQUFBLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQyxDQUFBLENBQUM7WUFDOUIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixlQUFlO1lBQ2YsZ0VBQWdFO1lBQ2hFLHdDQUF3QztZQUd4QyxvREFBb0Q7WUFDcEQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUNsQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsV0FBVyxHQUFHLDhCQUE4QixDQUFDO2dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixVQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBR1gsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFHbEQsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFDNUMsc0NBQXNDO1FBQ3RDLGlEQUFpRDtJQUVyRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBZ0JBO1FBZEksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixVQUFVLENBQUM7WUFDUixXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sR0FBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pELElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO1FBRWhELENBQUMsQ0FBQyxDQUFDO0lBRVIsQ0FBQztJQWhLb0I7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVksaUJBQVU7b0RBQUM7SUFKakMsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUV0QyxDQUFDO3lDQWdCc0IsYUFBTTtZQUNOLHlCQUFnQjtZQUNSLGdDQUFjO09BakJqQyxhQUFhLENBcUt6QjtJQUFELG9CQUFDO0NBQUEsQUFyS0QsSUFxS0M7QUFyS1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBhbmQgTW9kdWxlc1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7c2V0Q3VycmVudE9yaWVudGF0aW9uICwgb3JpZW50YXRpb25DbGVhbnVwfSBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuLW9yaWVudGF0aW9uJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgY29ubmVjdGl2aXR5TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCIpO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG4vLyBpbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBQbGFuZXNTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFuZXMuc2VydmljZXNcIjtcclxuXHJcbi8vTW9kZWxvXHJcbmltcG9ydCB7IFBsYW5lcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhbmVzXCI7XHJcblxyXG4vL1BsdWdpblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG4vLyBjb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgUHVsbFRvUmVmcmVzaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwicHVsbFRvUmVmcmVzaFwiLCgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtQbGFuZXNTZXJ2aWNlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6YW55O1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoXCJsaWtlc1wiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgY2hhbmdlUGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgX3BsYW5lc1NlcnZpY2U6IFBsYW5lc1NlcnZpY2VzLFxyXG4gICAgICAgXHJcbiAgICAgKXsgIFxyXG4gICAgICAgIC8vIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgICAgIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjtcclxuICAgICAgICAgICAgICBcclxuXHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcclxuICAgICAgICBsZXQgZ2V0SW5mbzpBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsUGxhbmVzKCk7XHJcbiAgICAgICAgICAgIC8vIGdldEluZm8gPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTsgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWxleCBlZXMgdW4gbG9jb29vXCIpO1xyXG4gICAgICAgICAgICAgICAvLyAgaW1hZ2VDYWNoZShpZF9pbWFnZW4sIHZpZXdNb2RlbCwgdXJsX2ltYWdlbilcclxuXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgXHJcbiAgICB9IFxyXG5cclxuIFxyXG5cclxuICBcclxuICAgXHJcblxyXG4gICAgLy8gaXRlbU5leHQoKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklyIGEgaXRlbVwiKTtcclxuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyYWRpb1wiXSwge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIixcclxuICAgIC8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgLy8gICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIFxyXG5cclxuICAgIGxpa2UoaWQsIGxpa2UsIHN0YXR1cyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZDpcIiArICBpZCArIFwiVG90YWwgTGlrZTpcIisgbGlrZSArIFwiY2xhc3NcIiArIHN0YXR1cyk7ICAgICBcclxuICAgICAgXHJcbiAgICAgICAgaWYoc3RhdHVzID09ICdmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2UnKXtcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVMaWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCJcclxuICAgICAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoXCJMaWtlXCIsIFwibG9uZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3MrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGFuZXNbaWRdLmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucHV0UGx1c0xpa2UoaWQsIGxpa2UpOyBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgICAvLyB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCJcclxuICAgICAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoXCJEaXNsaWtlXCIsIFwibG9uZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBsYW5lcy5sZW5ndGg7aSsrKXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpZCA9PSB0aGlzLnBsYW5lc1tpXS5pZCl7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxpa2UgPT0gdGhpcy5wbGFuZXNbaV0ubGlrZXNfcmVjaWJpZG9zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucHV0TWludXNMaWtlKGlkLCBsaWtlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKGltYWdlLGlkLHRfc2hhcmVkKXsgICBcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJRDpcIiArIGlkICsgXCJUb3RhbDpcIisgdF9zaGFyZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZWN0aW9uKCkpO1xyXG4gICAgICAgIGxldCBjb25uZWN0aW9uID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25lY3Rpb24oKTtcclxuICAgXHJcblxyXG4gICAgICAgIGlmKGNvbm5lY3Rpb24gPT0gXCJObyBjb25uZWN0aW9uXCIpe1xyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVVybChpbWFnZSwgXCJOdWV2byBQbGFuIGRlIENvbnRyb2wgRGlhbWFudGVcIiwgXCJOdWV2byBQbGFuIGRlIENvbnRyb2wgRGlhbWFudGVcIik7ICAgICAgIFxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEltYWdlbiBMb2NhbFxyXG4gICAgICAgICAgICAvLyBsZXQgaW1hZ2VuX2xvY2FsID0gSW1hZ2VTb3VyY2UuZnJvbUZpbGUoXCJ+L2ltYWdlcy9zZW5kLmpwZ1wiKTtcclxuICAgICAgICAgICAgLy8gU29jaWFsU2hhcmUuc2hhcmVJbWFnZShpbWFnZW5fbG9jYWwpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEZXNjYXJnYXIgSW1hZ2VuIGRpcmVjdGFtZW50ZSBkZSBsYSB1cmwgeSBwYXNhcmxhXHJcbiAgICAgICAgICAgIEltYWdlU291cmNlLmZyb21VcmwoaW1hZ2UpLnRoZW4oKGltYWdlKSA9PiB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UsIFwiTnVldm8gcGxhbiBkZSBDb250cm9sIERpYW1hbnRlXCIpOyAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcmVzaW9uYWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb2x0YW5kb1wiKTtcclxuICAgICAgICAgICAgICAgIH0sODAwKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5wdXRQbHVzU2hhcmUoaWQsdF9zaGFyZWQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICBcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7IFxyXG4gICAgICAgIC8vIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTsgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5fcGxhbmVzU2VydmljZS5pbWFnZUNhY2hlKGlkLCB2bSwgaW1hZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hMaXN0KGFyZ3MpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcHVsbFJlZnJlc2ggPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50cmFuZG9cIik7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTsgICBcclxuICAgICAgICAgICAgbGV0IGNhY2hlID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRMaWtlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhY2hlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgXHJcbiAgIH1cclxufVxyXG4iXX0=