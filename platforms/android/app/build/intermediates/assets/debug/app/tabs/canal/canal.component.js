"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
// import { registerElement } from "nativescript-angular";
var CanalComponent = /** @class */ (function () {
    function CanalComponent() {
        // Use the component constructor to inject providers.
    }
    CanalComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view. 
    };
    CanalComponent.prototype.openURL = function () {
        console.log("Canal");
        utils.openUrl("http://dominicanplayers.com/video-player/538");
    };
    CanalComponent = __decorate([
        core_1.Component({
            selector: "Canal",
            moduleId: module.id,
            templateUrl: "./canal.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], CanalComponent);
    return CanalComponent;
}());
exports.CanalComponent = CanalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1DQUFxQztBQUVyQywwREFBMEQ7QUFRMUQ7SUFHSTtRQUNJLHFEQUFxRDtJQUV6RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLCtEQUErRDtJQUVuRSxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFoQlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7T0FDVyxjQUFjLENBc0IxQjtJQUFELHFCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDYW5hbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FuYWwuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FuYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5VUkwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW5hbFwiKTtcclxuICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cDovL2RvbWluaWNhbnBsYXllcnMuY29tL3ZpZGVvLXBsYXllci81MzhcIik7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==