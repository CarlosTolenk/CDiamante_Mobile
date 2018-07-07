"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var reproductor_modal_1 = require("../reproductor/reproductor.modal");
// import { registerElement } from "nativescript-angular/element-registry";
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);
// import * as utils from "utils/utils";
var CanalComponent = /** @class */ (function () {
    function CanalComponent(modal, vcRef) {
        // Use the component constructor to inject providers.
        this.modal = modal;
        this.vcRef = vcRef;
    }
    CanalComponent.prototype.openReproductor = function () {
        console.log("Abriendo el MOdal");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELG1FQUE2RTtBQUU3RSxzRUFBd0U7QUFJeEUsMkVBQTJFO0FBQzNFLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFFL0Msd0NBQXdDO0FBU3hDO0lBRUksd0JBQ1ksS0FBeUIsRUFBVSxLQUF1QjtRQUdsRSxxREFBcUQ7UUFIN0MsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUt0RSxDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx3Q0FBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBdEJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBSXFCLDRCQUFrQixFQUFpQix1QkFBZ0I7T0FIN0QsY0FBYyxDQTRCMUI7SUFBRCxxQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVwcm9kdWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVwcm9kdWN0b3IvcmVwcm9kdWN0b3IubW9kYWxcIjtcclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuLy8gaW1wb3J0IHsgVmlkZW8gfSBmcm9tICduYXRpdmVzY3JpcHQtdmlkZW9wbGF5ZXInO1xyXG4vLyByZWdpc3RlckVsZW1lbnQoXCJWaWRlb1BsYXllclwiLCAoKSA9PiBWaWRlbyk7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhbmFsXCIsICAgIFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FuYWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2NhbmFsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FuYWxDb21wb25lbnQgeyAgICAgICBcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoICAgIFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gXHJcbiAgICApIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgXHJcbiAgICB9ICBcclxuXHJcbiAgICBwdWJsaWMgb3BlblJlcHJvZHVjdG9yKCkgeyAgICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBYnJpZW5kbyBlbCBNT2RhbFwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFJlcHJvZHVjdG9yQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19