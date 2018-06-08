"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component and Modules
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//Plugin
var SocialShare = require("nativescript-social-share");
var ImageSource = require("image-source");
var firebase = require("nativescript-plugin-firebase/app");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
// registerElement('CardView', () => CardView);
var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.planes = [];
        this.changePlanes = [];
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Use the "ngOnInit" handler to initialize data for the view.
        firebase.initializeApp({
            persist: false
        }).then(function () {
            console.log("Firebase initialized");
        });
        var planesCollection = firebase.firestore().collection("planes");
        this.ngZone.run(function () {
            _this.planes = [];
            planesCollection.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // console.log(`${doc.id} => ${doc.data()}`);
                    _this.planes.push(doc.data());
                    // console.dir(this.planes);             
                });
            });
        });
        // this.firestoreDocumentObservable(); 
    };
    HomeComponent.prototype.ngDoCheck = function () {
        // this.firestoreDocumentObservable();         
    };
    HomeComponent.prototype.firestoreDocumentObservable = function () {
        var _this = this;
        var changePlanesCollection = firebase.firestore().collection("planes");
        this.ngZone.run(function () {
            var unsubscribe = changePlanesCollection.onSnapshot(function (snapshot) {
                _this.changePlanes = [];
                _this.planes = [];
                snapshot.forEach(function (change) {
                    // console.log(change.data());
                    _this.changePlanes.push(change.data());
                });
                for (var i = 0; i < _this.changePlanes.length; i++) {
                    console.log(i);
                    _this.planes[i] = _this.changePlanes[i];
                    console.log(_this.planes[i]);
                }
            });
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
    HomeComponent.prototype.share = function () {
        var _this = this;
        this.pressShared = "font-awesome ico-share-press";
        ImageSource.fromUrl("https://controldiamante.com/wp-content/uploads/2018/05/2018-05-14.jpg").then(function (image) {
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
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css'],
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFFekYsc0RBQStEO0FBUy9ELFFBQVE7QUFDUix1REFBeUQ7QUFDekQsMENBQTRDO0FBRTVDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQzdELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBS25FLCtDQUErQztBQWEvQztJQVlJLHVCQUNZLE1BQWMsRUFDZCxNQUF3QjtRQUR4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFON0IsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQU9qQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO0lBR2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJHLDhEQUE4RDtRQUM5RCxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUdILElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLGdCQUFn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QUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBcEhtQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBWSxpQkFBVTtvREFBQztJQUpqQyxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUV0QyxDQUFDO3lDQWNzQixhQUFNO1lBQ04seUJBQWdCO09BZDNCLGFBQWEsQ0F5SHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpIRCxJQXlIQztBQXpIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IGFuZCBNb2R1bGVzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSwgRG9DaGVja30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuLy9QbHVnaW5cclxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuaW1wb3J0ICogYXMgSW1hZ2VTb3VyY2UgZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5cclxuXHJcbi8vIGltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XHJcbi8vIHJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiBDYXJkVmlldyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOmFueTtcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKFwibGlrZXNcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgcHVibGljIHRvb2dsZUhlYXJ0OnN0cmluZztcclxuICAgIHB1YmxpYyB0b29nbGVMaWtlOmJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJlc3NTaGFyZWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHBsYW5lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgcHVibGljIGNoYW5nZVBsYW5lczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgKXtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICAgICAgICAgXHJcblxyXG4gICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlXHJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICB9KTsgICAgXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCBwbGFuZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKTsgXHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSBbXTtcclxuICAgICAgICAgICAgcGxhbmVzQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuZXMucHVzaChkb2MuZGF0YSgpKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMucGxhbmVzKTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuZmlyZXN0b3JlRG9jdW1lbnRPYnNlcnZhYmxlKCk7IFxyXG4gICAgfVxyXG5cclxuICAgICAgICBuZ0RvQ2hlY2soKTogdm9pZHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdGhpcy5maXJlc3RvcmVEb2N1bWVudE9ic2VydmFibGUoKTsgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgZmlyZXN0b3JlRG9jdW1lbnRPYnNlcnZhYmxlKCk6IHZvaWQgeyAgICBcclxuICAgICAgICBjb25zdCBjaGFuZ2VQbGFuZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBjaGFuZ2VQbGFuZXNDb2xsZWN0aW9uLm9uU25hcHNob3QoKHNuYXBzaG90OiBmaXJlc3RvcmUuUXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGFuZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGNoYW5nZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBsYW5lcy5wdXNoKGNoYW5nZS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpPHRoaXMuY2hhbmdlUGxhbmVzLmxlbmd0aDtpKyspeyBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpOyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXSA9IHRoaXMuY2hhbmdlUGxhbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGFuZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaXRlbU5leHQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklyIGEgaXRlbVwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyYWRpb1wiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuIFxyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgbGlrZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRvb2dsZUxpa2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIlxyXG4gICAgICAgIH0gIFxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRXhhbXBsZSBBbmltYXRpb25cclxuICAgICAgICAvLyBsZXQgbGlrZXMgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIC8vIGxpa2VzLmFuaW1hdGUoe1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcigneWVsbG93JyksXHJcbiAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAyMDBcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKCl7ICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgICAgICAgXHJcbiAgICAgICAgSW1hZ2VTb3VyY2UuZnJvbVVybChcImh0dHBzOi8vY29udHJvbGRpYW1hbnRlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS8yMDE4LTA1LTE0LmpwZ1wiKS50aGVuKChpbWFnZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICBcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==