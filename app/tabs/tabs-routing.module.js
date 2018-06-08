"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var tabs_component_1 = require("./tabs.component");
var home_component_1 = require("./home/home.component");
var canal_component_1 = require("./canal/canal.component");
var radio_component_1 = require("./radio/radio.component");
var contact_component_1 = require("./contact/contact.component");
var producto_component_1 = require("./producto/producto.component");
var routes = [
    { path: "", component: tabs_component_1.TabsComponent },
    //   { path: "", redirectTo: "/(homeTab:home//canalTab:canal//radioTab:radio//contactTab:contact)", pathMatch: "full" },  // 
    { path: "home", component: home_component_1.HomeComponent, outlet: 'homeTab' },
    { path: "canal", component: canal_component_1.CanalComponent, outlet: 'canalTab' },
    { path: "radio", component: radio_component_1.RadioComponent, outlet: 'radioTab' },
    { path: "contact", component: contact_component_1.ContactComponent, outlet: 'contactTab' },
    { path: "item", component: producto_component_1.ProductoComponent }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
exports.TabsRoutingModule = TabsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1EQUFpRDtBQUNqRCx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCxpRUFBK0Q7QUFDL0Qsb0VBQWtFO0FBRWxFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUcxQyw2SEFBNkg7SUFFekgsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUM7SUFDNUQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7SUFDL0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7SUFDL0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBRXJFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7Q0FDaEQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDYW5hbENvbXBvbmVudCB9IGZyb20gXCIuL2NhbmFsL2NhbmFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gXCIuL3JhZGlvL3JhZGlvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0b0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudFwiO1xyXG4gXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFRhYnNDb21wb25lbnQgfSxcclxuICAgXHJcblxyXG4vLyAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvKGhvbWVUYWI6aG9tZS8vY2FuYWxUYWI6Y2FuYWwvL3JhZGlvVGFiOnJhZGlvLy9jb250YWN0VGFiOmNvbnRhY3QpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSwgIC8vIFxyXG5cclxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgb3V0bGV0OiAnaG9tZVRhYid9LCBcclxuICAgIHsgcGF0aDogXCJjYW5hbFwiLCBjb21wb25lbnQ6IENhbmFsQ29tcG9uZW50LCBvdXRsZXQ6ICdjYW5hbFRhYid9LFxyXG4gICAgeyBwYXRoOiBcInJhZGlvXCIsIGNvbXBvbmVudDogUmFkaW9Db21wb25lbnQsIG91dGxldDogJ3JhZGlvVGFiJ30sXHJcbiAgICB7IHBhdGg6IFwiY29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQsIG91dGxldDogJ2NvbnRhY3RUYWInfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiaXRlbVwiLCBjb21wb25lbnQ6IFByb2R1Y3RvQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic1JvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==