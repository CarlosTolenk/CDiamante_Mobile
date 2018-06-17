"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component and Modules
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var appSettings = require("tns-core-modules/application-settings");
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
    HomeComponent.prototype.ngDoCheck = function () {
        // this.ngZone.run(()=>{
        //     this.planes =  this._planesService.getAllPlanes();
        //     console.log(this.planes);            
        // });  
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
    HomeComponent.prototype.like = function (id, like) {
        console.log("id:" + id + "Total Like:" + like);
        // console.log("GetPlanId");        
        if (!this.toogleLike) {
            this.toogleLike = true;
            this.toogleHeart = "font-awesome ico-like";
            this._planesService.putPlusLike(id, like);
            this.planes = JSON.parse(appSettings.getString("allPlanes", ""));
            for (var i = 0; i < this.planes.length; i++) {
                if (id == this.planes[i].id) {
                    this.planes[i].likes_recibidos++;
                }
            }
        }
        else {
            this.toogleLike = false;
            this.toogleHeart = "font-awesome ico-dislike";
            this._planesService.putMinusLike(id, like);
            this.planes = JSON.parse(appSettings.getString("allPlanes", ""));
            for (var i = 0; i < this.planes.length; i++) {
                if (id == this.planes[i].id) {
                    // this.planes[i].likes_recibidos--;
                }
            }
        }
        //Example Animation
        // let likes = <View>this.container.nativeElement;
        // likes.animate({
        //     backgroundColor: new Color('yellow'),
        //     duration: 200
        // });
    };
    HomeComponent.prototype.share = function (id) {
        var _this = this;
        this.pressShared = "font-awesome ico-share-press";
        ImageSource.fromUrl(id).then(function (image) {
            SocialShare.shareImage(image);
            _this.pressShared = "font-awesome ico-share";
        });
        this._planesService.removeStorage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFFekYsc0RBQStEO0FBSS9ELG1FQUFvRTtBQUNwRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ3BFLDREQUE0RDtBQUU1RCxVQUFVO0FBQ1Ysa0VBQWdFO0FBS2hFLFFBQVE7QUFDUix1REFBeUQ7QUFDekQsMENBQTRDO0FBSzVDLDBFQUF3RTtBQUd4RSxrQ0FBZSxDQUFDLGVBQWUsRUFBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsYUFBYSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFhM0Y7SUFhSSx1QkFDWSxNQUFjLEVBQ2QsTUFBd0IsRUFDeEIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJuQyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQVNqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO0lBR2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLE9BQU8sR0FBYyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixxREFBcUQ7WUFDckQsK0NBQStDO1lBQy9DLEtBQUksQ0FBQyxNQUFNLEdBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksd0JBQXdCO1FBQ3hCLHlEQUF5RDtRQUN6RCw0Q0FBNEM7UUFDNUMsUUFBUTtJQUNaLENBQUM7SUFJRCxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFVBQVU7SUFDVixJQUFJO0lBR0osNEJBQUksR0FBSixVQUFLLEVBQUUsRUFBRSxJQUFJO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUksRUFBRSxHQUFHLGFBQWEsR0FBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxvQ0FBb0M7UUFFcEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFBO1lBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3JDLENBQUM7WUFDTCxDQUFDO1FBR0wsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQTtZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEUsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO29CQUN4QixvQ0FBb0M7Z0JBQ3hDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUdELG1CQUFtQjtRQUNuQixrREFBa0Q7UUFDbEQsa0JBQWtCO1FBQ2xCLDRDQUE0QztRQUM1QyxvQkFBb0I7UUFDcEIsTUFBTTtJQUVWLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sRUFBRTtRQUFSLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsR0FBRyw4QkFBOEIsQ0FBQztRQUNsRCxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDL0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV4QyxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBZUE7UUFiSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFVBQVUsQ0FBQztZQUNSLFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsTUFBTSxHQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakQsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZCLENBQUMsQ0FBQyxDQUFDO0lBRVIsQ0FBQztJQXRIb0I7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVksaUJBQVU7b0RBQUM7SUFKakMsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUV0QyxDQUFDO3lDQWVzQixhQUFNO1lBQ04seUJBQWdCO1lBQ1IsZ0NBQWM7T0FoQmpDLGFBQWEsQ0EySHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNIRCxJQTJIQztBQTNIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IGFuZCBNb2R1bGVzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSwgRG9DaGVja30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgY29ubmVjdGl2aXR5TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCIpO1xyXG4vLyBpbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBQbGFuZXNTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFuZXMuc2VydmljZXNcIjtcclxuXHJcbi8vTW9kZWxvXHJcbmltcG9ydCB7IFBsYW5lcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhbmVzXCI7XHJcblxyXG4vL1BsdWdpblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcbi8vIGNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG4vLyBjb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgUHVsbFRvUmVmcmVzaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiO1xyXG4gXHJcbnJlZ2lzdGVyRWxlbWVudChcInB1bGxUb1JlZnJlc2hcIiwoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIikuUHVsbFRvUmVmcmVzaCk7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtQbGFuZXNTZXJ2aWNlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6YW55O1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoXCJsaWtlc1wiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgY2hhbmdlUGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGxhbmVzU2VydmljZTogUGxhbmVzU2VydmljZXNcclxuICAgICApe1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgICAgIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgICAgICAgICBcclxuXHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcclxuICAgICAgICBsZXQgZ2V0SW5mbzpBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsUGxhbmVzKCk7XHJcbiAgICAgICAgICAgIC8vIGdldEluZm8gPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTsgICAgXHJcblxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkeyAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYW5lcyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfSk7ICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC8vIGl0ZW1OZXh0KCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJJciBhIGl0ZW1cIik7XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicmFkaW9cIl0sIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgLy8gICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIC8vICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICBcclxuXHJcbiAgICBsaWtlKGlkLCBsaWtlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkOlwiICsgIGlkICsgXCJUb3RhbCBMaWtlOlwiKyBsaWtlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdldFBsYW5JZFwiKTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnRvb2dsZUxpa2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dFBsdXNMaWtlKGlkLCBsaWtlKTsgXHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIlxyXG4gICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dE1pbnVzTGlrZShpZCwgbGlrZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcy0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcblxyXG5cclxuICAgICAgICAvL0V4YW1wbGUgQW5pbWF0aW9uXHJcbiAgICAgICAgLy8gbGV0IGxpa2VzID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBsaWtlcy5hbmltYXRlKHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJ3llbGxvdycpLFxyXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZShpZCl7ICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgICAgICAgXHJcbiAgICAgICAgSW1hZ2VTb3VyY2UuZnJvbVVybChpZCkudGhlbigoaW1hZ2UpID0+IHsgICAgICAgIFxyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucmVtb3ZlU3RvcmFnZSgpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRyYW5kb1wiKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpOyAgIFxyXG4gICAgICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldExpa2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICBcclxuICAgfVxyXG59XHJcbiJdfQ==