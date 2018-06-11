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
        this.ngZone.run(function () {
            _this.planes = _this._planesService.getAllPlanes();
            // this.planes =  this._planesService.getConexion();
            // console.dir(this.planes);            
        });
    };
    HomeComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.planes = _this._planesService.getConexion();
            // console.dir(this.planes);            
        });
    };
    HomeComponent.prototype.itemNext = function () {
        console.log("Ir a item");
        this.router.navigate(["radio"], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    HomeComponent.prototype.like = function () {
        if (!this.toogleLike) {
            this.toogleLike = true;
            this.toogleHeart = "font-awesome ico-like";
        }
        else {
            this.toogleLike = false;
            this.toogleHeart = "font-awesome ico-dislike";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFFekYsc0RBQStEO0FBSy9ELElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDcEUsNERBQTREO0FBRTVELFVBQVU7QUFDVixrRUFBZ0U7QUFLaEUsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFjNUM7SUFZSSx1QkFDWSxNQUFjLEVBQ2QsTUFBd0IsRUFDeEIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVBuQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBUWpDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7SUFHaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSSxDQUFDLE1BQU0sR0FBSSxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xELG9EQUFvRDtZQUNwRCx3Q0FBd0M7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFJLENBQUMsTUFBTSxHQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakQsd0NBQXdDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlELGdDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDRCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUE7UUFHOUMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQTtRQUNqRCxDQUFDO1FBS0QsbUJBQW1CO1FBQ25CLGtEQUFrRDtRQUNsRCxrQkFBa0I7UUFDbEIsNENBQTRDO1FBQzVDLG9CQUFvQjtRQUNwQixNQUFNO0lBRVYsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxFQUFFO1FBQVIsaUJBT0M7UUFORyxJQUFJLENBQUMsV0FBVyxHQUFHLDhCQUE4QixDQUFDO1FBQ2xELFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUMvQixXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBakZtQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBWSxpQkFBVTtvREFBQztJQUpqQyxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBRXRDLENBQUM7eUNBY3NCLGFBQU07WUFDTix5QkFBZ0I7WUFDUixnQ0FBYztPQWZqQyxhQUFhLENBc0Z6QjtJQUFELG9CQUFDO0NBQUEsQUF0RkQsSUFzRkM7QUF0Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBhbmQgTW9kdWxlc1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmUsIERvQ2hlY2t9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXHJcbmNvbnN0IGNvbm5lY3Rpdml0eU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiKTtcclxuLy8gaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuXHJcbi8vU2VydmljZXNcclxuaW1wb3J0IHsgUGxhbmVzU2VydmljZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGxhbmVzLnNlcnZpY2VzXCI7XHJcblxyXG4vL01vZGVsb1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5cclxuLy9QbHVnaW5cclxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuaW1wb3J0ICogYXMgSW1hZ2VTb3VyY2UgZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG4vLyBjb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuLy8gY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcmR2aWV3JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtQbGFuZXNTZXJ2aWNlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6YW55O1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoXCJsaWtlc1wiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgY2hhbmdlUGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgX3BsYW5lc1NlcnZpY2U6IFBsYW5lc1NlcnZpY2VzXHJcbiAgICAgKXtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICAgICAgICAgXHJcblxyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0QWxsUGxhbmVzKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5wbGFuZXMpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWR7ICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gIHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5wbGFuZXMpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBpdGVtTmV4dCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXIgYSBpdGVtXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJhZGlvXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgbGlrZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRvb2dsZUxpa2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCJcclxuICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0V4YW1wbGUgQW5pbWF0aW9uXHJcbiAgICAgICAgLy8gbGV0IGxpa2VzID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBsaWtlcy5hbmltYXRlKHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJ3llbGxvdycpLFxyXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZShpZCl7ICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgICAgICAgXHJcbiAgICAgICAgSW1hZ2VTb3VyY2UuZnJvbVVybChpZCkudGhlbigoaW1hZ2UpID0+IHsgICAgICAgIFxyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=