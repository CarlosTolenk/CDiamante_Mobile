"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
// import * as utils from "utils/utils";
var page_1 = require("ui/page");
var nativescript_screen_orientation_1 = require("nativescript-screen-orientation");
// import { registerElement } from "nativescript-angular/element-registry";
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("exoplayer", function () { return require("nativescript-exoplayer").Video; });
var ReproductorComponent = /** @class */ (function () {
    function ReproductorComponent(page, params) {
        this.params = params;
        this.isBusy = false;
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("landscape");
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
    ReproductorComponent.prototype.onBusyChanged = function (args) {
        var indicator = args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwcm9kdWN0b3IubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXByb2R1Y3Rvci5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUNwRCxtRUFBNEU7QUFHNUUsd0NBQXdDO0FBQ3hDLGdDQUErQjtBQUMvQixtRkFBMkY7QUFHM0YsMkVBQTJFO0FBQzNFLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFFL0MsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLEVBQXZDLENBQXVDLENBQUMsQ0FBQztBQVc1RTtJQUtJLDhCQUNJLElBQVUsRUFDRixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBQztZQUNsQix1REFBcUIsQ0FBQyxXQUFXLEVBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQztZQUNyQixvREFBa0IsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUosdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLE1BQU07UUFFTCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxTQUFTLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGtDQUFrQztJQUNsQywyQ0FBMkM7SUFDM0MsTUFBTTtJQUVOLDBDQUFXLEdBQVg7UUFDSSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUE5Q1Esb0JBQW9CO1FBUmhDLGdCQUFTLENBQUM7WUFFUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUV6QyxDQUFDO3lDQU9ZLFdBQUk7WUFDTSwyQkFBaUI7T0FQNUIsb0JBQW9CLENBa0RoQztJQUFELDJCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcclxuXHJcbi8vIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtzZXRDdXJyZW50T3JpZW50YXRpb24gLCBvcmllbnRhdGlvbkNsZWFudXB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW4tb3JpZW50YXRpb24nO1xyXG5cclxuXHJcbi8vIGltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbi8vIGltcG9ydCB7IFZpZGVvIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZpZGVvcGxheWVyJztcclxuLy8gcmVnaXN0ZXJFbGVtZW50KFwiVmlkZW9QbGF5ZXJcIiwgKCkgPT4gVmlkZW8pO1xyXG5cclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcImV4b3BsYXllclwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWV4b3BsYXllclwiKS5WaWRlbyk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBcclxuICAgIHNlbGVjdG9yOiBcIlJlcHJvZHVjdG9yXCIsICBcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlcHJvZHVjdG9yLm1vZGFsLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3JlcHJvZHVjdG9yLm1vZGFsLmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXByb2R1Y3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcclxuXHJcbiAgICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBpc0J1c3k6Ym9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW9yaWVudGF0aW9uJyk7XHJcbiAgICAgICAgb3JpZW50YXRpb24uc2V0T3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIik7ICBcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgICAgIHBhZ2Uub24oXCJuYXZpZ2F0ZWRUb1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRPcmllbnRhdGlvbihcImxhbmRzY2FwZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9ydHJhaXQgbGFuZHNjYXBlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHBhZ2Uub24oXCJuYXZpZ2F0aW5nRnJvbVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICBvcmllbnRhdGlvbkNsZWFudXAoKTtcclxuICAgICAgICAgfSk7ICAgICAgIFxyXG5cclxuICAgICAgICAvLyAgdGhpcy5mcmFtZXdvcmtzID0gW1xyXG4gICAgICAgIC8vICAgICAgXCJNXCIsXHJcbiAgICAgICAgLy8gICAgICBcIklcIixcclxuICAgICAgICAvLyAgICAgIFwiRVwiLFxyXG4gICAgICAgIC8vICAgICAgXCJSXCIsXHJcbiAgICAgICAgLy8gICAgICBcIkRcIixcclxuICAgICAgICAvLyAgICAgIFwiQVwiXHJcbiAgICAgICAgLy8gIF07XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2RlIGVsIHJlcHJvZHVjdG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnVzeUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBpbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRpY2F0b3IuYnVzeSBjaGFuZ2VkIHRvOiBcIiArIGluZGljYXRvci5idXN5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgY2xvc2UocmVzcG9uc2U6IHN0cmluZyl7XHJcbiAgICAvLyAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAvLyB9ICBcclxuXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbicpO1xyXG4gICAgICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIik7ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19