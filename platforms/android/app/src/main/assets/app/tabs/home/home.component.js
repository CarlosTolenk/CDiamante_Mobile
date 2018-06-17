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
        console.log("id:" + id + "Total Like:" + like);
        // console.log("GetPlanId");        
        if (status == 'font-awesome ico-dislike') {
            this.toogleLike = true;
            this.toogleHeart = "font-awesome ico-like";
            this._planesService.putPlusLike(id, like);
            this.planes = JSON.parse(appSettings.getString("allPlanes", ""));
            for (var i = 0; i < this.planes.length; i++) {
                if (id == this.planes[i].id) {
                    this.planes[i].likes_recibidos++;
                    this.planes[i].class_likes = "font-awesome ico-like";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBZ0Y7QUFFaEYsc0RBQStEO0FBSS9ELG1FQUFvRTtBQUNwRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ3BFLDREQUE0RDtBQUU1RCxVQUFVO0FBQ1Ysa0VBQWdFO0FBS2hFLFFBQVE7QUFDUix1REFBeUQ7QUFDekQsMENBQTRDO0FBSzVDLDBFQUF3RTtBQUd4RSxrQ0FBZSxDQUFDLGVBQWUsRUFBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsYUFBYSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFhM0Y7SUFhSSx1QkFDWSxNQUFjLEVBQ2QsTUFBd0IsRUFDeEIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJuQyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQVNqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO0lBR2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLE9BQU8sR0FBYyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixxREFBcUQ7WUFDckQsK0NBQStDO1lBQy9DLEtBQUksQ0FBQyxNQUFNLEdBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyRCxDQUFDLENBQUMs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bkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBRXRDLENBQUM7eUNBZXNCLGFBQU07WUFDTix5QkFBZ0I7WUFDUixnQ0FBYztPQWhCakMsYUFBYSxDQThIekI7SUFBRCxvQkFBQztDQUFBLEFBOUhELElBOEhDO0FBOUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgYW5kIE1vZHVsZXNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xyXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XHJcbi8vIGltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcblxyXG4vL1NlcnZpY2VzXHJcbmltcG9ydCB7IFBsYW5lc1NlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYW5lcy5zZXJ2aWNlc1wiO1xyXG5cclxuLy9Nb2RlbG9cclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFuZXNcIjtcclxuXHJcbi8vUGx1Z2luXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcclxuLy8gY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbi8vIGNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XHJcbiBcclxucmVnaXN0ZXJFbGVtZW50KFwicHVsbFRvUmVmcmVzaFwiLCgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHVsbHRvcmVmcmVzaFwiKS5QdWxsVG9SZWZyZXNoKTtcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHByb3ZpZGVyczogW1BsYW5lc1NlcnZpY2VzXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczphbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcImxpa2VzXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyB0b29nbGVIZWFydDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9vZ2xlTGlrZTpib29sZWFuO1xyXG4gICAgcHVibGljIHByZXNzU2hhcmVkOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXM6IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBjaGFuZ2VQbGFuZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHB1YmxpYyBwcnVlYmE6c3RyaW5nO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIF9wbGFuZXNTZXJ2aWNlOiBQbGFuZXNTZXJ2aWNlc1xyXG4gICAgICl7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgdGhpcy50b29nbGVMaWtlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgICAgICAgIFxyXG5cclxuICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IFxyXG4gICAgICAgIGxldCBnZXRJbmZvOkFycmF5PGFueT4gPSBbXTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRBbGxQbGFuZXMoKTtcclxuICAgICAgICAgICAgLy8gZ2V0SW5mbyA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0Q29uZXhpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpOyAgICBcclxuXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgXHJcblxyXG4gICAgLy8gaXRlbU5leHQoKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIklyIGEgaXRlbVwiKTtcclxuICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyYWRpb1wiXSwge1xyXG4gICAgLy8gICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIixcclxuICAgIC8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgLy8gICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIFxyXG5cclxuICAgIGxpa2UoaWQsIGxpa2UsIHN0YXR1cyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZDpcIiArICBpZCArIFwiVG90YWwgTGlrZTpcIisgbGlrZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJHZXRQbGFuSWRcIik7ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZihzdGF0dXMgPT0gJ2ZvbnQtYXdlc29tZSBpY28tZGlzbGlrZScpe1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgICB0aGlzLl9wbGFuZXNTZXJ2aWNlLnB1dFBsdXNMaWtlKGlkLCBsaWtlKTsgXHJcbiAgICAgICAgICAgIHRoaXMucGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMucGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5wbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCJcclxuICAgICAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5wdXRNaW51c0xpa2UoaWQsIGxpa2UpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnBsYW5lcy5sZW5ndGg7aSsrKXsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpZCA9PSB0aGlzLnBsYW5lc1tpXS5pZCl7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGlrZSA9PSB0aGlzLnBsYW5lc1tpXS5saWtlc19yZWNpYmlkb3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0ubGlrZXNfcmVjaWJpZG9zLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldLmxpa2VzX3JlY2liaWRvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICBcclxuXHJcblxyXG4gICAgICAgIC8vRXhhbXBsZSBBbmltYXRpb25cclxuICAgICAgICAvLyBsZXQgbGlrZXMgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIC8vIGxpa2VzLmFuaW1hdGUoe1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcigneWVsbG93JyksXHJcbiAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAyMDBcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKGlkKXsgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZS1wcmVzc1wiOyAgICAgICBcclxuICAgICAgICBJbWFnZVNvdXJjZS5mcm9tVXJsKGlkKS50aGVuKChpbWFnZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5yZW1vdmVTdG9yYWdlKCk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJhbmRvXCIpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldENvbmV4aW9uKCk7ICAgXHJcbiAgICAgICAgICAgIGxldCBjYWNoZSA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0TGlrZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICBcclxuICAgICAgIFxyXG4gICB9XHJcbn1cclxuIl19