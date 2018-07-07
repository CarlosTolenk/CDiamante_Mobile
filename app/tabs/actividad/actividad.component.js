"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var phone = require("nativescript-phone");
//Services
var planes_services_1 = require("../../services/planes.services");
var ActividadComponent = /** @class */ (function () {
    function ActividadComponent(route, ngZone, router, _planesService, page) {
        // Use the component constructor to inject providers.
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this._planesService = _planesService;
        this.page = page;
        // page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //  page.on("navigatingFrom",function(){
        //         orientationCleanup();
        // });
        var platform = require("tns-core-modules/platform");
        var maxwidth = platform.screen.mainScreen.widthDIPs;
        console.log('Densidad de pixeles' + maxwidth);
        this.xColumnas =
            "          \n            " + maxwidth * 0.35 + ",\n            " + maxwidth * 0.15 + ",\n            " + maxwidth * 0.01 + ",\n            " + maxwidth * 0.19 + ",\n            " + maxwidth * 0.30 + ",\n           \n            \n        \n        ";
        console.log(this.xColumnas);
    }
    ActividadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        console.log("Desde los Actividad: " + id);
        this.ngZone.run(function () {
            _this.actividad = _this._planesService.getActividadId(id);
            console.log(_this.actividad);
        });
    };
    ActividadComponent.prototype.backPage = function () {
        this.router.backToPreviousPage();
    };
    ActividadComponent.prototype.callHome = function (call) {
        console.log("Llamando");
        phone.dial(call, true);
    };
    ActividadComponent.prototype.ngOnDestroy = function () {
        console.log("Mierda para el Destroy");
    };
    ActividadComponent = __decorate([
        core_1.Component({
            selector: "Actividad",
            moduleId: module.id,
            providers: [planes_services_1.PlanesServices],
            templateUrl: "./actividad.component.html",
            styleUrls: ['./actividad.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_1.NgZone,
            router_2.RouterExtensions,
            planes_services_1.PlanesServices,
            page_1.Page])
    ], ActividadComponent);
    return ActividadComponent;
}());
exports.ActividadComponent = ActividadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpZGFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aWRhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCxnQ0FBK0I7QUFFL0IsMENBQTRDO0FBRTVDLFVBQVU7QUFDVixrRUFBZ0U7QUFhaEU7SUFNSSw0QkFDWSxLQUFxQixFQUNyQixNQUFjLEVBQ2QsTUFBd0IsRUFDeEIsY0FBOEIsRUFDL0IsSUFBUztRQUdoQixxREFBcUQ7UUFQN0MsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBS2hCLG9DQUFvQztRQUNwQyxvREFBb0Q7UUFDcEQsMkNBQTJDO1FBQzNDLFVBQVU7UUFDVixPQUFPO1FBQ1Asd0NBQXdDO1FBQ3hDLGdDQUFnQztRQUNoQyxNQUFNO1FBR04sSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDcEQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVM7WUFDZCw2QkFDTSxRQUFRLEdBQUMsSUFBSSx1QkFDYixRQUFRLEdBQUMsSUFBSSx1QkFDYixRQUFRLEdBQUMsSUFBSSx1QkFDYixRQUFRLEdBQUMsSUFBSSx1QkFDYixRQUFRLEdBQUMsSUFBSSxxREFJbEIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLHFDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFqRVEsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBUXFCLHVCQUFjO1lBQ2IsYUFBTTtZQUNOLHlCQUFnQjtZQUNSLGdDQUFjO1lBQzFCLFdBQUk7T0FYWCxrQkFBa0IsQ0FzRTlCO0lBQUQseUJBQUM7Q0FBQSxBQXRFRCxJQXNFQztBQXRFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lLCBPbkRlc3Ryb3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge3NldEN1cnJlbnRPcmllbnRhdGlvbiAsIG9yaWVudGF0aW9uQ2xlYW51cH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNjcmVlbi1vcmllbnRhdGlvbic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgcGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcclxuXHJcbi8vU2VydmljZXNcclxuaW1wb3J0IHsgUGxhbmVzU2VydmljZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGxhbmVzLnNlcnZpY2VzXCI7XHJcblxyXG4vL01vZGVsb1xyXG5pbXBvcnQgeyBBY3RpdmlkYWQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FjdGl2aWRhZFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQWN0aXZpZGFkXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgcHJvdmlkZXJzOiBbUGxhbmVzU2VydmljZXNdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hY3RpdmlkYWQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2FjdGl2aWRhZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGl2aWRhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xyXG5cclxuICAgIHB1YmxpYyBhY3RpdmlkYWQ6IEFjdGl2aWRhZDsgXHJcbiAgICBwdWJsaWMgeENvbHVtbmFzOnN0cmluZztcclxuICAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgX3BsYW5lc1NlcnZpY2U6IFBsYW5lc1NlcnZpY2VzLFxyXG4gICAgICAgIHB1YmxpYyBwYWdlOlBhZ2VcclxuICAgICkge1xyXG5cclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG5cclxuICAgICAgICAvLyBwYWdlLm9uKFwibmF2aWdhdGVkVG9cIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBzZXRDdXJyZW50T3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInBvcnRyYWl0IG9yaWVudGF0aW9uXCIpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyAgfSk7XHJcbiAgICAgICAgLy8gIHBhZ2Uub24oXCJuYXZpZ2F0aW5nRnJvbVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgICAgICBvcmllbnRhdGlvbkNsZWFudXAoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcclxuICAgICAgICB2YXIgbWF4d2lkdGggPSBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RlbnNpZGFkIGRlIHBpeGVsZXMnK21heHdpZHRoKTtcclxuICAgICAgICB0aGlzLnhDb2x1bW5hcyA9IFxyXG4gICAgICAgIGAgICAgICAgICAgXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4zNX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4xNX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4wMX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4xOX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4zMH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnhDb2x1bW5hcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDsgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2RlIGxvcyBBY3RpdmlkYWQ6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+eyAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmlkYWQgPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldEFjdGl2aWRhZElkKGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmlkYWQpOyBcclxuICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJhY2tQYWdlKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGxIb21lKGNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxsYW1hbmRvXCIpO1xyXG4gICAgICAgIHBob25lLmRpYWwoY2FsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1pZXJkYSBwYXJhIGVsIERlc3Ryb3lcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=