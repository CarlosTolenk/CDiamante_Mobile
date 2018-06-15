"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var page_1 = require("ui/page");
// import { registerElement } from "nativescript-angular";
// import { registerElement } from "nativescript-angular";
// registerElement("AdvanceWebview", () => require("nativescript-android-advanced-webview").AndroidAdvancedWebview);
// import { AndroidAdvancedWebview, AndroidAdvanceWebviewOptions } from "nativescript-android-advanced-webview";
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
            templateUrl: "./canal.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CanalComponent);
    return CanalComponent;
}());
exports.CanalComponent = CanalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLG1DQUFxQztBQUNyQyxnQ0FBK0I7QUFHL0IsMERBQTBEO0FBQzFELDBEQUEwRDtBQUMxRCxvSEFBb0g7QUFDcEgsZ0hBQWdIO0FBUWhIO0lBR0ksd0JBQW9CLElBQVU7UUFDMUIscURBQXFEO1FBRHJDLFNBQUksR0FBSixJQUFJLENBQU07SUFHOUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSwrREFBK0Q7SUFFbkUsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixxRkFBcUY7SUFFckYsbURBQW1EO0lBQ25ELHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixRQUFRO0lBRVIsZ0RBQWdEO0lBRWhELG9EQUFvRDtJQUNwRCxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixxREFBcUQ7SUFDckQsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsSUFBSTtJQUVKLGdDQUFPLEdBQVA7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBS0QsbUNBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRyxDQUFDO0lBQzlCLENBQUM7SUE5Q1EsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FJNEIsV0FBSTtPQUhyQixjQUFjLENBb0QxQjtJQUFELHFCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcblxyXG4vLyBpbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbi8vIHJlZ2lzdGVyRWxlbWVudChcIkFkdmFuY2VXZWJ2aWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5kcm9pZC1hZHZhbmNlZC13ZWJ2aWV3XCIpLkFuZHJvaWRBZHZhbmNlZFdlYnZpZXcpO1xyXG4vLyBpbXBvcnQgeyBBbmRyb2lkQWR2YW5jZWRXZWJ2aWV3LCBBbmRyb2lkQWR2YW5jZVdlYnZpZXdPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmRyb2lkLWFkdmFuY2VkLXdlYnZpZXdcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhbmFsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYW5hbC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW5hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy4gXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmdBZnRlclZpZXdJbml0KCk6IHZvaWR7XHJcbiAgICAvLyAgICAgbGV0IGFkdmFuY2VXZWJ2aWV3OiBBbmRyb2lkQWR2YW5jZWRXZWJ2aWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwid2Vidmlld1wiKTtcclxuIFxyXG4gICAgLy8gICAgIGxldCBvcHRvbnM6IEFuZHJvaWRBZHZhbmNlV2Vidmlld09wdGlvbnMgPSB7XHJcbiAgICAvLyAgICAgICAgIGFuZHJvaWQ6IHtcclxuICAgIC8vICAgICAgICAgICAgIHNldEdlb2xvY2F0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgICAgICBzZXRDb29raWVzRW5hYmxlZDogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgICBcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5zZXRXZWJ2aWV3T3B0aW9ucyhvcHRvbnMpO1xyXG4gICAgIFxyXG4gICAgLy8gICAgIGFkdmFuY2VXZWJ2aWV3Lm9uKFwic3RhcnRlZFwiLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZFwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBhZHZhbmNlV2Vidmlldy5vbihcImZpbmlzaGVkXCIsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZFwiKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvcGVuVVJMKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuYWxcIik7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHA6Ly9kb21pbmljYW5wbGF5ZXJzLmNvbS92aWRlby1wbGF5ZXIvNTM4XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBwYWdlTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB7IH07XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==