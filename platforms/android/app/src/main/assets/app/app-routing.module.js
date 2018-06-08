"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var canal_component_1 = require("./tabs/canal/canal.component");
var home_component_1 = require("./tabs/home/home.component");
var radio_component_1 = require("./tabs/radio/radio.component");
var contact_component_1 = require("./tabs/contact/contact.component");
var producto_component_1 = require("./tabs/producto/producto.component");
var routes = [
    // { path: "", redirectTo: "/tabs", pathMatch: "full" },
    // { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
    { path: "", redirectTo: "/(homeTab:home//canalTab:canal//radioTab:radio//contactTab:contact)", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent, outlet: "homeTab" },
    { path: "canal", component: canal_component_1.CanalComponent, outlet: "canalTab" },
    { path: "radio", component: radio_component_1.RadioComponent, outlet: "radioTab" },
    { path: "contact", component: contact_component_1.ContactComponent, outlet: "contactTab" },
    { path: "item/:id", component: producto_component_1.ProductoComponent, outlet: "homeTab" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUl2RSxnRUFBOEQ7QUFDOUQsNkRBQTJEO0FBQzNELGdFQUE4RDtBQUM5RCxzRUFBb0U7QUFDcEUseUVBQXNFO0FBRXRFLElBQU0sTUFBTSxHQUFXO0lBQ25CLHdEQUF3RDtJQUN4RCxrRUFBa0U7SUFFbEUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxxRUFBcUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBRWxILEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtJQUV0RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7Q0FDeEUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vQ29tcG9uZW50ZXNcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDYW5hbENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY2FuYWwvY2FuYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tIFwiLi90YWJzL3JhZGlvL3JhZGlvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2R1Y3RvQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnRcIlxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICAvLyB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3RhYnNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgLy8geyBwYXRoOiBcInRhYnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vdGFicy90YWJzLm1vZHVsZSNUYWJzTW9kdWxlXCIgfVxyXG5cclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvKGhvbWVUYWI6aG9tZS8vY2FuYWxUYWI6Y2FuYWwvL3JhZGlvVGFiOnJhZGlvLy9jb250YWN0VGFiOmNvbnRhY3QpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIG91dGxldDogXCJob21lVGFiXCIgfSxcclxuICAgIHsgcGF0aDogXCJjYW5hbFwiLCBjb21wb25lbnQ6IENhbmFsQ29tcG9uZW50LCBvdXRsZXQ6IFwiY2FuYWxUYWJcIiB9LFxyXG4gICAgeyBwYXRoOiBcInJhZGlvXCIsIGNvbXBvbmVudDogUmFkaW9Db21wb25lbnQsIG91dGxldDogXCJyYWRpb1RhYlwiIH0sXHJcbiAgICB7IHBhdGg6IFwiY29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQsIG91dGxldDogXCJjb250YWN0VGFiXCIgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBQcm9kdWN0b0NvbXBvbmVudCwgb3V0bGV0OiBcImhvbWVUYWJcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==