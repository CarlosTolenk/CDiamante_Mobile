"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component and Modules
var core_1 = require("@angular/core");
//Plugin
var SocialShare = require("nativescript-social-share");
var ImageSource = require("image-source");
var firebase = require("nativescript-plugin-firebase/app");
// registerElement('CardView', () => CardView);
var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngZone) {
        this.ngZone = ngZone;
        this.planes = [];
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";
        // this.planes = new Array();    
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
        var _this = this;
        firebase.initializeApp({
            persist: false
        }).then(function () {
            console.log("Firebase initialized");
        });
        var planesCollection = firebase.firestore().collection("planes");
        planesCollection.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id + " => " + doc.data());
                _this.planes.push(doc.data());
            });
        });
    };
    HomeComponent.prototype.like = function () {
        if (!this.toogleLike) {
            this.toogleLike = true;
            this.toogleHeart = "font-awesome ico-like";
            // console.dir(this.planes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBZ0Y7QUFNaEYsUUFBUTtBQUNSLHVEQUF5RDtBQUN6RCwwQ0FBNEM7QUFFNUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFLN0QsK0NBQStDO0FBUy9DO0lBVUksdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjNCLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBRzlCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQXdCLENBQUM7UUFDNUMsaUNBQWlDO0lBRXJDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksOERBQThEO1FBRGxFLGlCQXFCQztRQWxCRyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUlILElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxhQUFhO1lBQ3JDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFJLEdBQUcsQ0FBQyxFQUFFLFlBQU8sR0FBRyxDQUFDLElBQUksRUFBSSxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQTtZQUMxQyw0QkFBNEI7UUFDaEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQTtRQUNqRCxDQUFDO1FBS0QsbUJBQW1CO1FBQ25CLGtEQUFrRDtRQUNsRCxrQkFBa0I7UUFDbEIsNENBQTRDO1FBQzVDLG9CQUFvQjtRQUNwQixNQUFNO0lBRVYsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxXQUFXLEdBQUcsOEJBQThCLENBQUM7UUFDbEQsV0FBVyxDQUFDLE9BQU8sQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDcEcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQW5FbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVksaUJBQVU7b0RBQUM7SUFKakMsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FFdEMsQ0FBQzt5Q0FXOEIsYUFBTTtPQVZ6QixhQUFhLENBd0V6QjtJQUFELG9CQUFDO0NBQUEsQUF4RUQsSUF3RUM7QUF4RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBhbmQgTW9kdWxlc1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5cclxuLy9QbHVnaW5cclxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuaW1wb3J0ICogYXMgSW1hZ2VTb3VyY2UgZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcblxyXG5cclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcmR2aWV3JztcclxuLy8gcmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczphbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcImxpa2VzXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyB0b29nbGVIZWFydDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9vZ2xlTGlrZTpib29sZWFuO1xyXG4gICAgcHVibGljIHByZXNzU2hhcmVkOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXM6IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy50b29nbGVIZWFydCA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgdGhpcy50b29nbGVMaWtlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZVwiOyAgXHJcbiAgICAgICAgLy8gdGhpcy5wbGFuZXMgPSBuZXcgQXJyYXkoKTsgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuXHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlXHJcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBwbGFuZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKTtcclxuXHJcbiAgICAgICAgcGxhbmVzQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2RvYy5pZH0gPT4gJHtkb2MuZGF0YSgpfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuZXMucHVzaChkb2MuZGF0YSgpKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsaWtlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMudG9vZ2xlTGlrZSl7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tbGlrZVwiXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMucGxhbmVzKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50b29nbGVMaWtlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiXHJcbiAgICAgICAgfSAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy9FeGFtcGxlIEFuaW1hdGlvblxyXG4gICAgICAgIC8vIGxldCBsaWtlcyA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgLy8gbGlrZXMuYW5pbWF0ZSh7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKCd5ZWxsb3cnKSxcclxuICAgICAgICAvLyAgICAgZHVyYXRpb246IDIwMFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmUoKXsgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcmVzc1NoYXJlZCA9IFwiZm9udC1hd2Vzb21lIGljby1zaGFyZS1wcmVzc1wiOyAgICAgICBcclxuICAgICAgICBJbWFnZVNvdXJjZS5mcm9tVXJsKFwiaHR0cHM6Ly9jb250cm9sZGlhbWFudGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1LzIwMTgtMDUtMTQuanBnXCIpLnRoZW4oKGltYWdlKSA9PiB7ICAgICAgICBcclxuICAgICAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVJbWFnZShpbWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19