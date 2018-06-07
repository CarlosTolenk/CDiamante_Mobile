"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component and Modules
var core_1 = require("@angular/core");
//Plugin
var SocialShare = require("nativescript-social-share");
var ImageSource = require("image-source");
var firebase = require("nativescript-plugin-firebase/app");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
// registerElement('CardView', () => CardView);
var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngZone) {
        this.ngZone = ngZone;
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
        this.firestoreDocumentObservable();
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
        __metadata("design:paramtypes", [core_1.NgZone])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFTekYsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFFNUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDN0QsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFLbkUsK0NBQStDO0FBYS9DO0lBWUksdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjNCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFJakMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztJQUloRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRyw4REFBOEQ7UUFDOUQsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxhQUFhO2dCQUNyQyxh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QyxDQUFDO3lDQWE4QixhQUFNO09BWnpCLGFBQWEsQ0FpSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpIRCxJQWlIQztBQWpIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IGFuZCBNb2R1bGVzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIE5nWm9uZSwgRG9DaGVja30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFBsYW5lcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhbmVzXCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcblxyXG4vL1BsdWdpblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcblxyXG5cclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcmR2aWV3JztcclxuLy8gcmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6YW55O1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuICAgIEBWaWV3Q2hpbGQoXCJsaWtlc1wiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgY2hhbmdlUGxhbmVzOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICBcclxuICAgICAgICBcclxuXHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICAgICAgcGVyc2lzdDogZmFsc2VcclxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH0pOyAgICBcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBsYW5lc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpOyBcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW5lcyA9IFtdO1xyXG4gICAgICAgICAgICBwbGFuZXNDb2xsZWN0aW9uLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7ZG9jLmRhdGEoKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW5lcy5wdXNoKGRvYy5kYXRhKCkpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5wbGFuZXMpOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5maXJlc3RvcmVEb2N1bWVudE9ic2VydmFibGUoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgICAgIG5nRG9DaGVjaygpOiB2b2lke1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVEb2N1bWVudE9ic2VydmFibGUoKTsgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBmaXJlc3RvcmVEb2N1bWVudE9ic2VydmFibGUoKTogdm9pZCB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGNoYW5nZVBsYW5lc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IGNoYW5nZVBsYW5lc0NvbGxlY3Rpb24ub25TbmFwc2hvdCgoc25hcHNob3Q6IGZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBsYW5lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHNuYXBzaG90LmZvckVhY2goY2hhbmdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hhbmdlLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxhbmVzLnB1c2goY2hhbmdlLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGk8dGhpcy5jaGFuZ2VQbGFuZXMubGVuZ3RoO2krKyl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaSk7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzW2ldID0gdGhpcy5jaGFuZ2VQbGFuZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYW5lc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiBcclxuXHJcblxyXG4gIFxyXG5cclxuICAgIGxpa2UoKXtcclxuICAgICAgICBpZighdGhpcy50b29nbGVMaWtlKXtcclxuICAgICAgICAgICAgdGhpcy50b29nbGVMaWtlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCJcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCJcclxuICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0V4YW1wbGUgQW5pbWF0aW9uXHJcbiAgICAgICAgLy8gbGV0IGxpa2VzID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBsaWtlcy5hbmltYXRlKHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJ3llbGxvdycpLFxyXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZSgpeyAgICAgICAgICBcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlLXByZXNzXCI7ICAgICAgIFxyXG4gICAgICAgIEltYWdlU291cmNlLmZyb21VcmwoXCJodHRwczovL2NvbnRyb2xkaWFtYW50ZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvMjAxOC0wNS0xNC5qcGdcIikudGhlbigoaW1hZ2UpID0+IHsgICAgICAgIFxyXG4gICAgICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=