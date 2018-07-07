"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var CanalComponent = /** @class */ (function () {
    function CanalComponent(page) {
        // Use the component constructor to inject providers.
        // page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //  page.on("navigatingFrom",function(){
        //      orientationCleanup();
        //  });       
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
        __metadata("design:paramtypes", [page_1.Page])
    ], CanalComponent);
    return CanalComponent;
}());
exports.CanalComponent = CanalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELG1DQUFxQztBQUNyQyxnQ0FBK0I7QUFJL0IsMEVBQXdFO0FBQ3hFLHFFQUFpRDtBQUNqRCxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsZ0NBQUssRUFBTCxDQUFLLENBQUMsQ0FBQztBQVM1QztJQUlJLHdCQUFZLElBQVM7UUFDakIscURBQXFEO1FBQ3JELG9DQUFvQztRQUNwQyxvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLFVBQVU7UUFDVixPQUFPO1FBQ1Asd0NBQXdDO1FBQ3hDLDZCQUE2QjtRQUM3QixjQUFjO0lBRWxCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksK0RBQStEO1FBQy9ELHlDQUF5QztRQUN6QyxvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLFVBQVU7UUFDVixPQUFPO1FBQ1AsNkNBQTZDO1FBQzdDLDZCQUE2QjtRQUM3QixVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IscUZBQXFGO0lBRXJGLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osUUFBUTtJQUVSLGdEQUFnRDtJQUVoRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YscURBQXFEO0lBQ3JELG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLElBQUk7SUFFSixnQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQTVEUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQUttQixXQUFJO09BSlosY0FBYyxDQWdFMUI7SUFBRCxxQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBPbkRlc3Ryb3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgVmlkZW8gfSBmcm9tICduYXRpdmVzY3JpcHQtdmlkZW9wbGF5ZXInO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJWaWRlb1BsYXllclwiLCAoKSA9PiBWaWRlbyk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDYW5hbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FuYWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2NhbmFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FuYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlOlBhZ2UpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgICAgIC8vIHBhZ2Uub24oXCJuYXZpZ2F0ZWRUb1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIHNldEN1cnJlbnRPcmllbnRhdGlvbihcImxhbmRzY2FwZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicG9ydHJhaXQgb3JpZW50YXRpb25cIik7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICB9KTtcclxuICAgICAgICAvLyAgcGFnZS5vbihcIm5hdmlnYXRpbmdGcm9tXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgIG9yaWVudGF0aW9uQ2xlYW51cCgpO1xyXG4gICAgICAgIC8vICB9KTsgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy4gXHJcbiAgICAgICAgLy8gdGhpcy5wYWdlLm9uKFwibmF2aWdhdGVkVG9cIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBzZXRDdXJyZW50T3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInBvcnRyYWl0IG9yaWVudGF0aW9uXCIpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyAgfSk7XHJcbiAgICAgICAgLy8gIHRoaXMucGFnZS5vbihcIm5hdmlnYXRpbmdGcm9tXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgIG9yaWVudGF0aW9uQ2xlYW51cCgpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJhbmRvIGFsIGNhbmFsIG9uSW5pdFwiKTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmdBZnRlclZpZXdJbml0KCk6IHZvaWR7XHJcbiAgICAvLyAgICAgbGV0IGFkdmFuY2VXZWJ2aWV3OiBBbmRyb2lkQWR2YW5jZWRXZWJ2aWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwid2Vidmlld1wiKTtcclxuIFxyXG4gICAgLy8gICAgIGxldCBvcHRvbnM6IEFuZHJvaWRBZHZhbmNlV2Vidmlld09wdGlvbnMgPSB7XHJcbiAgICAvLyAgICAgICAgIGFuZHJvaWQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldEdlb2xvY2F0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgICAgICBzZXRDb29raWVzRW5hYmxlZDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgICBcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5zZXRXZWJ2aWV3T3B0aW9ucyhvcHRvbnMpO1xyXG4gICAgIFxyXG4gICAgLy8gICAgIGFkdmFuY2VXZWJ2aWV3Lm9uKFwic3RhcnRlZFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZFwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5vbihcImZpbmlzaGVkXCIsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZFwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvcGVuVVJMKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuYWxcIik7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHA6Ly9kb21pbmljYW5wbGF5ZXJzLmNvbS92aWRlby1wbGF5ZXIvNTM4XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTYWxpZW5kbyBkZWwgY2FuYWwgVFZcIik7XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19