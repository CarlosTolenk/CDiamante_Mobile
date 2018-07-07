"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
// import * as utils from "utils/utils";
var page_1 = require("ui/page");
var nativescript_screen_orientation_1 = require("nativescript-screen-orientation");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var ReproductorComponent = /** @class */ (function () {
    function ReproductorComponent(page, params) {
        this.params = params;
        // Use the component constructor to inject providers.
        page.on("navigatedTo", function () {
            nativescript_screen_orientation_1.setCurrentOrientation("landscape", function () {
                console.log("portrait landscape");
            });
        });
        page.on("navigatingFrom", function () {
            nativescript_screen_orientation_1.orientationCleanup();
        });
        //  this.frameworks = [
        //      "M",
        //      "I",
        //      "E",
        //      "R",
        //      "D",
        //      "A"
        //  ];
        console.log("Desde el reproductor");
    }
    ReproductorComponent = __decorate([
        core_1.Component({
            selector: "Reproductor",
            moduleId: module.id,
            templateUrl: "./reproductor.modal.html",
            styleUrls: ['./reproductor.modal.css'],
        }),
        __metadata("design:paramtypes", [page_1.Page,
            dialogs_1.ModalDialogParams])
    ], ReproductorComponent);
    return ReproductorComponent;
}());
exports.ReproductorComponent = ReproductorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwcm9kdWN0b3IubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXByb2R1Y3Rvci5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxtRUFBNEU7QUFFNUUsd0NBQXdDO0FBQ3hDLGdDQUErQjtBQUMvQixtRkFBMkY7QUFHM0YsMEVBQXdFO0FBQ3hFLHFFQUFpRDtBQUNqRCxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsZ0NBQUssRUFBTCxDQUFLLENBQUMsQ0FBQztBQVc1QztJQUlJLDhCQUNJLElBQVUsRUFDRixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUVqQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUM7WUFDbEIsdURBQXFCLENBQUMsV0FBVyxFQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUM7WUFDckIsb0RBQWtCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVKLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxNQUFNO1FBRUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUE1QlEsb0JBQW9CO1FBUmhDLGdCQUFTLENBQUM7WUFFUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUV6QyxDQUFDO3lDQU1ZLFdBQUk7WUFDTSwyQkFBaUI7T0FONUIsb0JBQW9CLENBbUNoQztJQUFELDJCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcbi8vIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtzZXRDdXJyZW50T3JpZW50YXRpb24gLCBvcmllbnRhdGlvbkNsZWFudXB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW4tb3JpZW50YXRpb24nO1xyXG5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZpZGVvcGxheWVyJztcclxucmVnaXN0ZXJFbGVtZW50KFwiVmlkZW9QbGF5ZXJcIiwgKCkgPT4gVmlkZW8pO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgXHJcbiAgICBzZWxlY3RvcjogXCJSZXByb2R1Y3RvclwiLCAgXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXByb2R1Y3Rvci5tb2RhbC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yZXByb2R1Y3Rvci5tb2RhbC5jc3MnXSxcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwcm9kdWN0b3JDb21wb25lbnR7XHJcblxyXG4gICAgcHVibGljIGZyYW1ld29ya3M6IEFycmF5PHN0cmluZz47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zXHJcbiAgICApIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgICAgIHBhZ2Uub24oXCJuYXZpZ2F0ZWRUb1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRPcmllbnRhdGlvbihcImxhbmRzY2FwZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9ydHJhaXQgbGFuZHNjYXBlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHBhZ2Uub24oXCJuYXZpZ2F0aW5nRnJvbVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICBvcmllbnRhdGlvbkNsZWFudXAoKTtcclxuICAgICAgICAgfSk7ICAgICAgIFxyXG5cclxuICAgICAgICAvLyAgdGhpcy5mcmFtZXdvcmtzID0gW1xyXG4gICAgICAgIC8vICAgICAgXCJNXCIsXHJcbiAgICAgICAgLy8gICAgICBcIklcIixcclxuICAgICAgICAvLyAgICAgIFwiRVwiLFxyXG4gICAgICAgIC8vICAgICAgXCJSXCIsXHJcbiAgICAgICAgLy8gICAgICBcIkRcIixcclxuICAgICAgICAvLyAgICAgIFwiQVwiXHJcbiAgICAgICAgLy8gIF07XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2RlIGVsIHJlcHJvZHVjdG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBjbG9zZShyZXNwb25zZTogc3RyaW5nKXtcclxuICAgIC8vICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgIC8vIH0gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==