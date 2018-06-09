"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Component and Modules
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import { firestore } from "nativescript-plugin-firebase";
//Services
var planes_services_1 = require("../../services/planes.services");
//Plugin
var SocialShare = require("nativescript-social-share");
var ImageSource = require("image-source");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(
    // private ngZone: NgZone,
    router, _planesService) {
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
        // Use the "ngOnInit" handler to initialize data for the view.
        // firebase.initializeApp({
        //     persist: false
        //   }).then(() => {
        //     console.log("Firebase initialized");
        // });    
        this._planesService.getConexion();
        this.planes = this._planesService.getAllPlanes();
        // const planesCollection = firebase.firestore().collection("planes"); 
        // this.ngZone.run(() => {
        //     this.planes = [];
        //     planesCollection.get().then(querySnapshot => {
        //         querySnapshot.forEach(doc => {
        //             // console.log(`${doc.id} => ${doc.data()}`);
        //             this.planes.push(doc.data());  
        //             // console.dir(this.planes);             
        //         });
        //     });
        // }); 
        // this.firestoreDocumentObservable(); 
    };
    HomeComponent.prototype.ngDoCheck = function () {
        // this.firestoreDocumentObservable();         
    };
    HomeComponent.prototype.firestoreDocumentObservable = function () {
        // const changePlanesCollection = firebase.firestore().collection("planes");
        // this.ngZone.run(()=>{
        //     const unsubscribe = changePlanesCollection.onSnapshot((snapshot: firestore.QuerySnapshot) => {
        //         this.changePlanes = [];
        //         this.planes = [];
        //         snapshot.forEach(change => {
        //           // console.log(change.data());
        //           this.changePlanes.push(change.data());
        //         });           
        //           for ( var i = 0; i<this.changePlanes.length;i++){ 
        //               console.log(i);        
        //               this.planes[i] = this.changePlanes[i];
        //               console.log(this.planes[i]);
        //           }
        //       });
        // });       
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
            providers: [planes_services_1.PlanesServices],
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            planes_services_1.PlanesServices])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF1QjtBQUN2QixzQ0FBeUY7QUFFekYsc0RBQStEO0FBSS9ELDREQUE0RDtBQUU1RCxVQUFVO0FBQ1Ysa0VBQStEO0FBSy9ELFFBQVE7QUFDUix1REFBeUQ7QUFDekQsMENBQTRDO0FBYzVDO0lBV0k7SUFDSSwwQkFBMEI7SUFDbEIsTUFBd0IsRUFDeEIsY0FBOEI7UUFEOUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTm5DLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFPakMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztJQUdoRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQiwyQ0FBMkM7UUFDM0MsVUFBVTtRQUVWLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWxELHVFQUF1RTtRQUN2RSwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHFEQUFxRDtRQUNyRCx5Q0FBeUM7UUFDekMsNERBQTREO1FBQzVELDhDQUE4QztRQUM5Qyx3REFBd0Q7UUFDeEQsY0FBYztRQUNkLFVBQVU7UUFDVixPQUFPO1FBRVAsdUNBQXVDO0lBQzNDLENBQUM7SUFFRyxpQ0FBUyxHQUFUO1FBQ0ksK0NBQStDO0lBQ25ELENBQUM7SUFFTCxtREFBMkIsR0FBM0I7UUFDSSw0RUFBNEU7UUFDNUUsd0JBQXdCO1FBQ3hCLHFHQUFxRztRQUNyRyxrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLHVDQUF1QztRQUN2QywyQ0FBMkM7UUFDM0MsbURBQW1EO1FBRW5ELHlCQUF5QjtRQUV6QiwrREFBK0Q7UUFDL0Qsd0NBQXdDO1FBQ3hDLHVEQUF1RDtRQUN2RCw2Q0FBNkM7UUFDN0MsY0FBYztRQUVkLFlBQVk7UUFDWixhQUFhO0lBRWpCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFPRCw0QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFBO1FBRTlDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUE7UUFDakQsQ0FBQztRQUtELG1CQUFtQjtRQUNuQixrREFBa0Q7UUFDbEQsa0JBQWtCO1FBQ2xCLDRDQUE0QztRQUM1QyxvQkFBb0I7UUFDcEIsTUFBTTtJQUVWLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsV0FBVyxHQUFHLDhCQUE4QixDQUFDO1FBQ2xELFdBQVcsQ0FBQyxPQUFPLENBQUMsdUVBQXVFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQ3BHLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUF0SG1CO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFZLGlCQUFVO29EQUFDO0lBSmpDLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FFdEMsQ0FBQzt5Q0Fjc0IseUJBQWdCO1lBQ1IsZ0NBQWM7T0FkakMsYUFBYSxDQTJIekI7SUFBRCxvQkFBQztDQUFBLEFBM0hELElBMkhDO0FBM0hZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgYW5kIE1vZHVsZXNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgTmdab25lLCBEb0NoZWNrfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG4vLyBpbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBQbGFuZXNTZXJ2aWNlc30gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYW5lcy5zZXJ2aWNlc1wiO1xyXG5cclxuLy9Nb2RlbG9cclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFuZXNcIjtcclxuXHJcbi8vUGx1Z2luXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcclxuLy8gY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbi8vIGNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgcHJvdmlkZXJzOiBbUGxhbmVzU2VydmljZXNdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOmFueTtcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKFwibGlrZXNcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgcHVibGljIHRvb2dsZUhlYXJ0OnN0cmluZztcclxuICAgIHB1YmxpYyB0b29nbGVMaWtlOmJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJlc3NTaGFyZWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHBsYW5lczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgcHVibGljIGNoYW5nZVBsYW5lczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8vIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGxhbmVzU2VydmljZTogUGxhbmVzU2VydmljZXNcclxuICAgICApe1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxyXG4gICAgICAgIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgICAgICAgICBcclxuXHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgICAgICAvLyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICAvLyAgICAgcGVyc2lzdDogZmFsc2VcclxuICAgICAgICAvLyAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIC8vIH0pOyAgICBcclxuXHJcbiAgICAgICAgdGhpcy5fcGxhbmVzU2VydmljZS5nZXRDb25leGlvbigpOyBcclxuICAgICAgICB0aGlzLnBsYW5lcyA9ICB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldEFsbFBsYW5lcygpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBwbGFuZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKTsgXHJcbiAgICAgICAgLy8gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGFuZXMgPSBbXTtcclxuICAgICAgICAvLyAgICAgcGxhbmVzQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wbGFuZXMucHVzaChkb2MuZGF0YSgpKTsgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMucGxhbmVzKTsgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuZmlyZXN0b3JlRG9jdW1lbnRPYnNlcnZhYmxlKCk7IFxyXG4gICAgfVxyXG5cclxuICAgICAgICBuZ0RvQ2hlY2soKTogdm9pZHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdGhpcy5maXJlc3RvcmVEb2N1bWVudE9ic2VydmFibGUoKTsgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgZmlyZXN0b3JlRG9jdW1lbnRPYnNlcnZhYmxlKCk6IHZvaWQgeyAgICBcclxuICAgICAgICAvLyBjb25zdCBjaGFuZ2VQbGFuZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKTtcclxuICAgICAgICAvLyB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAvLyAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBjaGFuZ2VQbGFuZXNDb2xsZWN0aW9uLm9uU25hcHNob3QoKHNuYXBzaG90OiBmaXJlc3RvcmUuUXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jaGFuZ2VQbGFuZXMgPSBbXTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxhbmVzID0gW107XHJcbiAgICAgICAgLy8gICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGNoYW5nZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZS5kYXRhKCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICB0aGlzLmNoYW5nZVBsYW5lcy5wdXNoKGNoYW5nZS5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAvLyAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpPHRoaXMuY2hhbmdlUGxhbmVzLmxlbmd0aDtpKyspeyBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpOyAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICB0aGlzLnBsYW5lc1tpXSA9IHRoaXMuY2hhbmdlUGxhbmVzW2ldO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGFuZXNbaV0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgfSk7XHJcbiAgICAgICAgLy8gfSk7ICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaXRlbU5leHQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIklyIGEgaXRlbVwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyYWRpb1wiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuIFxyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgbGlrZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnRvb2dsZUxpa2Upe1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIlxyXG4gICAgICAgIH0gIFxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRXhhbXBsZSBBbmltYXRpb25cclxuICAgICAgICAvLyBsZXQgbGlrZXMgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIC8vIGxpa2VzLmFuaW1hdGUoe1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcigneWVsbG93JyksXHJcbiAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAyMDBcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKCl7ICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmUtcHJlc3NcIjsgICAgICAgXHJcbiAgICAgICAgSW1hZ2VTb3VyY2UuZnJvbVVybChcImh0dHBzOi8vY29udHJvbGRpYW1hbnRlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS8yMDE4LTA1LTE0LmpwZ1wiKS50aGVuKChpbWFnZSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICBcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==