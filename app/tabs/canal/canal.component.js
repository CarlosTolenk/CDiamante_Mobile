"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var CanalComponent = /** @class */ (function () {
    function CanalComponent() {
        // Use the component constructor to inject providers.
        console.log("Entrando al canal constructor");
    }
    CanalComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view. 
        // this.page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //  this.page.on("navigatingFrom",function(){
        //      orientationCleanup();
        //     });
        console.log("Entrando al canal onInit");
    };
    // ngAfterViewInit(): void{
    //     let advanceWebview: AndroidAdvancedWebview = this.page.getViewById("webview");
    //     let optons: AndroidAdvanceWebviewOptions = {
    //         android: {
    //             setGeolocationEnabled: false,
    //             setCookiesEnabled: true,
    //         }
    //     }
    //     advanceWebview.setWebviewOptions(optons);
    //     advanceWebview.on("started", function (res) {
    //         console.log("started");
    //         console.dir(res);
    //     });
    //     advanceWebview.on("finished", function (res) {
    //         console.log("finished");
    //         console.dir(res);
    //     });
    // }
    CanalComponent.prototype.openURL = function () {
        console.log("Canal");
        utils.openUrl("http://dominicanplayers.com/video-player/538");
    };
    CanalComponent.prototype.ngOnDestroy = function () {
        console.log("Saliendo del canal TV");
    };
    CanalComponent = __decorate([
        core_1.Component({
            selector: "Canal",
            moduleId: module.id,
            templateUrl: "./canal.component.html",
            styleUrls: ['./canal.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CanalComponent);
    return CanalComponent;
}());
exports.CanalComponent = CanalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELG1DQUFxQztBQUtyQywwRUFBd0U7QUFDeEUscUVBQWlEO0FBQ2pELGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxnQ0FBSyxFQUFMLENBQUssQ0FBQyxDQUFDO0FBUzVDO0lBSUk7UUFFSSxxREFBcUQ7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRWpELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksK0RBQStEO1FBQy9ELHlDQUF5QztRQUN6QyxvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLFVBQVU7UUFDVixPQUFPO1FBQ1AsNkNBQTZDO1FBQzdDLDZCQUE2QjtRQUM3QixVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IscUZBQXFGO0lBRXJGLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osUUFBUTtJQUVSLGdEQUFnRDtJQUVoRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YscURBQXFEO0lBQ3JELG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLElBQUk7SUFFSixnQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQXREUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOztPQUNXLGNBQWMsQ0EwRDFCO0lBQUQscUJBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgT25EZXN0cm95fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7c2V0Q3VycmVudE9yaWVudGF0aW9uICwgb3JpZW50YXRpb25DbGVhbnVwfSBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuLW9yaWVudGF0aW9uJztcclxuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWRlb3BsYXllcic7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IFZpZGVvKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhbmFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYW5hbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FuYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW5hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xyXG5cclxuICAgICAgICBwcml2YXRlIHBhZ2U6UGFnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJhbmRvIGFsIGNhbmFsIGNvbnN0cnVjdG9yXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuIFxyXG4gICAgICAgIC8vIHRoaXMucGFnZS5vbihcIm5hdmlnYXRlZFRvXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgc2V0Q3VycmVudE9yaWVudGF0aW9uKFwibGFuZHNjYXBlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwb3J0cmFpdCBvcmllbnRhdGlvblwiKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gIH0pO1xyXG4gICAgICAgIC8vICB0aGlzLnBhZ2Uub24oXCJuYXZpZ2F0aW5nRnJvbVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgICBvcmllbnRhdGlvbkNsZWFudXAoKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnRyYW5kbyBhbCBjYW5hbCBvbkluaXRcIik7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lke1xyXG4gICAgLy8gICAgIGxldCBhZHZhbmNlV2VidmlldzogQW5kcm9pZEFkdmFuY2VkV2VidmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcIndlYnZpZXdcIik7XHJcbiBcclxuICAgIC8vICAgICBsZXQgb3B0b25zOiBBbmRyb2lkQWR2YW5jZVdlYnZpZXdPcHRpb25zID0ge1xyXG4gICAgLy8gICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRHZW9sb2NhdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICAgICAgc2V0Q29va2llc0VuYWJsZWQ6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAgXHJcbiAgICAvLyAgICAgYWR2YW5jZVdlYnZpZXcuc2V0V2Vidmlld09wdGlvbnMob3B0b25zKTtcclxuICAgICBcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5vbihcInN0YXJ0ZWRcIiwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWRcIik7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgYWR2YW5jZVdlYnZpZXcub24oXCJmaW5pc2hlZFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWRcIik7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb3BlblVSTCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbmFsXCIpO1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwOi8vZG9taW5pY2FucGxheWVycy5jb20vdmlkZW8tcGxheWVyLzUzOFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2FsaWVuZG8gZGVsIGNhbmFsIFRWXCIpO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==