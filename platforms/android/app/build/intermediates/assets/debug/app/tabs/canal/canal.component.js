"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var reproductor_modal_1 = require("../reproductor/reproductor.modal");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
// import * as utils from "utils/utils";
var CanalComponent = /** @class */ (function () {
    function CanalComponent(modal, vcRef) {
        // Use the component constructor to inject providers.
        this.modal = modal;
        this.vcRef = vcRef;
    }
    CanalComponent.prototype.openReproductor = function () {
        console.log("Entro aqui");
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(reproductor_modal_1.ReproductorComponent, options).then(function (res) {
            console.log(res);
        });
    };
    CanalComponent = __decorate([
        core_1.Component({
            selector: "Canal",
            moduleId: module.id,
            templateUrl: "./canal.component.html",
            styleUrls: ['./canal.component.css']
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], CanalComponent);
    return CanalComponent;
}());
exports.CanalComponent = CanalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELG1FQUE2RTtBQUU3RSxzRUFBd0U7QUFHeEUsMEVBQXdFO0FBQ3hFLHFFQUFpRDtBQUNqRCxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsZ0NBQUssRUFBTCxDQUFLLENBQUMsQ0FBQztBQUU1Qyx3Q0FBd0M7QUFTeEM7SUFFSSx3QkFDWSxLQUF5QixFQUFVLEtBQXVCO1FBRWxFLHFEQUFxRDtRQUY3QyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO0lBSXRFLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekIsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx3Q0FBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBcEJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBSXFCLDRCQUFrQixFQUFpQix1QkFBZ0I7T0FIN0QsY0FBYyxDQTBCMUI7SUFBRCxxQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVwcm9kdWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVwcm9kdWN0b3IvcmVwcm9kdWN0b3IubW9kYWxcIjtcclxuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWRlb3BsYXllcic7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IFZpZGVvKTtcclxuXHJcbi8vIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ2FuYWxcIiwgICAgXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYW5hbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FuYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW5hbENvbXBvbmVudCB7ICAgICAgIFxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggICAgXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgICApIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgXHJcbiAgICB9ICBcclxuXHJcbiAgICBwdWJsaWMgb3BlblJlcHJvZHVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW50cm8gYXF1aVwiKVxyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUmVwcm9kdWN0b3JDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICBcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=