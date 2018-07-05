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
        this.page = page;
    }
    CanalComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view. 
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
    CanalComponent.prototype.pageLoaded = function (args) {
        var page = args.object;
        page.bindingContext = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLG1DQUFxQztBQUNyQyxnQ0FBK0I7QUFFL0IsMEVBQXdFO0FBQ3hFLHFFQUFpRDtBQUNqRCxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsZ0NBQUssRUFBTCxDQUFLLENBQUMsQ0FBQztBQVM1QztJQUdJLHdCQUFvQixJQUFVO1FBQzFCLHFEQUFxRDtRQURyQyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBRzlCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksK0RBQStEO0lBRW5FLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IscUZBQXFGO0lBRXJGLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osUUFBUTtJQUVSLGdEQUFnRDtJQUVoRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YscURBQXFEO0lBQ3JELG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLElBQUk7SUFFSixnQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUtELG1DQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUcsQ0FBQztJQUM5QixDQUFDO0lBOUNRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBSTRCLFdBQUk7T0FIckIsY0FBYyxDQW9EMUI7SUFBRCxxQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWRlb3BsYXllcic7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IFZpZGVvKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhbmFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYW5hbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FuYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW5hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy4gXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmdBZnRlclZpZXdJbml0KCk6IHZvaWR7XHJcbiAgICAvLyAgICAgbGV0IGFkdmFuY2VXZWJ2aWV3OiBBbmRyb2lkQWR2YW5jZWRXZWJ2aWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwid2Vidmlld1wiKTtcclxuIFxyXG4gICAgLy8gICAgIGxldCBvcHRvbnM6IEFuZHJvaWRBZHZhbmNlV2Vidmlld09wdGlvbnMgPSB7XHJcbiAgICAvLyAgICAgICAgIGFuZHJvaWQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldEdlb2xvY2F0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgICAgICBzZXRDb29raWVzRW5hYmxlZDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgICBcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5zZXRXZWJ2aWV3T3B0aW9ucyhvcHRvbnMpO1xyXG4gICAgIFxyXG4gICAgLy8gICAgIGFkdmFuY2VXZWJ2aWV3Lm9uKFwic3RhcnRlZFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZFwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5vbihcImZpbmlzaGVkXCIsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZFwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvcGVuVVJMKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuYWxcIik7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHA6Ly9kb21pbmljYW5wbGF5ZXJzLmNvbS92aWRlby1wbGF5ZXIvNTM4XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBwYWdlTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB7IH07XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==