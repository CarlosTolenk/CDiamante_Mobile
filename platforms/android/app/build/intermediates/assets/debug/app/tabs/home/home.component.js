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
        this.ngZone.run(function () {
            // this.planes =  this._planesService.getAllPlanes();
            _this.planes = _this._planesService.getConexion();
            // console.log(this.planes);            
        });
    };
    HomeComponent.prototype.ngDoCheck = function () {
        // this.ngZone.run(()=>{
        //     this.planes =  this._planesService.getConexion();
        //     // console.dir(this.planes);            
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
        });
        var cache = this._planesService.getLike();
        console.dir(cache);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFFekYsc0RBQStEO0FBSS9ELG1FQUFvRTtBQUNwRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ3BFLDREQUE0RDtBQUU1RCxVQUFVO0FBQ1Ysa0VBQWdFO0FBS2hFLFFBQVE7QUFDUix1REFBeUQ7QUFDekQsMENBQTRDO0FBSzVDLDBFQUF3RTtBQUd4RSxrQ0FBZSxDQUFDLGVBQWUsRUFBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsYUFBYSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFhM0Y7SUFhSSx1QkFDWSxNQUFjLEVBQ2QsTUFBd0IsRUFDeEIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJuQyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQVNqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO0lBR2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLHFEQUFxRDtZQUNyRCxLQUFJLENBQUMsTUFBTSxHQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakQsd0NBQXdDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELGlDQUFTLEdBQVQ7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QUM7UUFDOUIsVUFBVSxDQUFDO1lBQ1IsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLEdBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBbkhvQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBWSxpQkFBVTtvREFBQztJQUpqQyxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBRXRDLENBQUM7eUNBZXNCLGFBQU07WUFDTix5QkFBZ0I7WUFDUixnQ0FBYztPQWhCakMsYUFBYSxDQXdIekI7SUFBRCxvQkFBQztDQUFBLEFBeEhELElBd0hDO0FBeEhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgYW5kIE1vZHVsZXNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lLCBEb0NoZWNrfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xyXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XHJcbi8vIGltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcblxyXG4vL1NlcnZpY2VzXHJcbmltcG9ydCB7IFBsYW5lc1NlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYW5lcy5zZXJ2aWNlc1wiO1xyXG5cclxuLy9Nb2RlbG9cclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFuZXNcIjtcclxuXHJcbi8vUGx1Z2luXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcclxuLy8gY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbi8vIGNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XHJcbiBcclxucmVnaXN0ZXJFbGVtZW50KFwicHVsbFRvUmVmcmVzaFwiLCgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHByb3ZpZGVyczogW1BsYW5lc1NlcnZpY2VzXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczphbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcImxpa2VzXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyB0b29nbGVIZWFydDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9vZ2xlTGlrZTpib29sZWFuO1xyXG4gICAgcHVibGljIHByZXNzU2hhcmVkOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXM6IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBjaGFuZ2VQbGFuZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHB1YmxpYyBwcnVlYmE6c3RyaW5nO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIF9wbGFuZXNTZXJ2aWNlOiBQbGFuZXNTZXJ2aWNlc1xyXG4gICAgICl7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgdGhpcy50b29nbGVMaWtlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgICAgICAgIFxyXG5cclxuICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxhbmVzKTsgICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZHsgICAgICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmRpcih0aGlzLnBsYW5lcyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfSk7ICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC8vIGl0ZW1OZXh0KCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJJciBhIGl0ZW1cIik7XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicmFkaW9cIl0sIHtcclxuICAgIC8vICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgLy8gICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIC8vICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICBcclxuXHJcbiAgICBsaWtlKGlkLCBsaWtlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkOlwiICsgIGlkICsgXCJUb3RhbCBMaWtlOlwiKyBsaWtlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdldFBsYW5JZFwiKTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnRvb2dsZUxpa2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dFBsdXNMaWtlKGlkLCBsaWtlKTsgXHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIlxyXG4gICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dE1pbnVzTGlrZShpZCwgbGlrZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcy0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcblxyXG5cclxuICAgICAgICAvL0V4YW1wbGUgQW5pbWF0aW9uXHJcbiAgICAgICAgLy8gbGV0IGxpa2VzID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBsaWtlcy5hbmltYXRlKHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJ3llbGxvdycpLFxyXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZShpZCl7ICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgICAgICAgXHJcbiAgICAgICAgSW1hZ2VTb3VyY2UuZnJvbVVybChpZCkudGhlbigoaW1hZ2UpID0+IHsgICAgICAgIFxyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYW5lc1NlcnZpY2UucmVtb3ZlU3RvcmFnZSgpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRyYW5kb1wiKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgbGV0IGNhY2hlID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRMaWtlKCk7XHJcbiAgICAgICAgY29uc29sZS5kaXIoY2FjaGUpO1xyXG4gICB9XHJcbn1cclxuIl19