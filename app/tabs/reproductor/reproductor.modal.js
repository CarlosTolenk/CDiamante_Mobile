"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
// import * as utils from "utils/utils";
var page_1 = require("ui/page");
// import { registerElement } from "nativescript-angular/element-registry";
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("exoplayer", function () { return require("nativescript-exoplayer").Video; });
var ReproductorComponent = /** @class */ (function () {
    function ReproductorComponent(page, params) {
        this.params = params;
        this.isBusy = true;
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("landscape");
        // Use the component constructor to inject providers.
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
    ReproductorComponent.prototype.onBusyChanged = function (args) {
        var indicator = args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
        this.isBusy = false;
    };
    // public close(response: string){
    //     this.params.closeCallback(response);
    // }  
    ReproductorComponent.prototype.ngOnDestroy = function () {
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("portrait");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwcm9kdWN0b3IubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXByb2R1Y3Rvci5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUNwRCxtRUFBNEU7QUFHNUUsd0NBQXdDO0FBQ3hDLGdDQUErQjtBQUkvQiwyRUFBMkU7QUFDM0Usb0RBQW9EO0FBQ3BELCtDQUErQztBQUUvQywwRUFBc0U7QUFDdEUsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0FBYTVFO0lBS0ksOEJBQ0ksSUFBVSxFQUNGLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMscURBQXFEO1FBR3JELHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxNQUFNO1FBRUwsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksU0FBUyxHQUFzQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsMkNBQTJDO0lBQzNDLE1BQU07SUFFTiwwQ0FBVyxHQUFYO1FBQ0ksSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBeENRLG9CQUFvQjtRQVJoQyxnQkFBUyxDQUFDO1lBRVAsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FFekMsQ0FBQzt5Q0FPWSxXQUFJO1lBQ00sMkJBQWlCO09BUDVCLG9CQUFvQixDQTRDaEM7SUFBRCwyQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbi8vIGltcG9ydCB7IFZpZGVvIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZpZGVvcGxheWVyJztcclxuLy8gcmVnaXN0ZXJFbGVtZW50KFwiVmlkZW9QbGF5ZXJcIiwgKCkgPT4gVmlkZW8pO1xyXG5cclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcImV4b3BsYXllclwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWV4b3BsYXllclwiKS5WaWRlbyk7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIFxyXG4gICAgc2VsZWN0b3I6IFwiUmVwcm9kdWN0b3JcIiwgIFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVwcm9kdWN0b3IubW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVwcm9kdWN0b3IubW9kYWwuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcHJvZHVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95e1xyXG5cclxuICAgIHB1YmxpYyBmcmFtZXdvcmtzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHVibGljIGlzQnVzeTpib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbicpO1xyXG4gICAgICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwibGFuZHNjYXBlXCIpOyAgXHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gIHRoaXMuZnJhbWV3b3JrcyA9IFtcclxuICAgICAgICAvLyAgICAgIFwiTVwiLFxyXG4gICAgICAgIC8vICAgICAgXCJJXCIsXHJcbiAgICAgICAgLy8gICAgICBcIkVcIixcclxuICAgICAgICAvLyAgICAgIFwiUlwiLFxyXG4gICAgICAgIC8vICAgICAgXCJEXCIsXHJcbiAgICAgICAgLy8gICAgICBcIkFcIlxyXG4gICAgICAgIC8vICBdO1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJEZXNkZSBlbCByZXByb2R1Y3RvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1c3lDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgaW5kaWNhdG9yID0gPEFjdGl2aXR5SW5kaWNhdG9yPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kaWNhdG9yLmJ1c3kgY2hhbmdlZCB0bzogXCIgKyBpbmRpY2F0b3IuYnVzeSk7XHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgY2xvc2UocmVzcG9uc2U6IHN0cmluZyl7XHJcbiAgICAvLyAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAvLyB9ICBcclxuXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbicpO1xyXG4gICAgICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIik7ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19