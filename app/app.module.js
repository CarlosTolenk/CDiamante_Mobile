"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modulos de Nativos
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
//Plugin
// import { TNSFontIconModule } from 'nativescript-ng2-fonticon'; 
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
// Rutas
var app_routing_module_1 = require("./app-routing.module");
//Componentes
var app_component_1 = require("./app.component");
var canal_component_1 = require("./tabs/canal/canal.component");
var home_component_1 = require("./tabs/home/home.component");
var radio_component_1 = require("./tabs/radio/radio.component");
var contact_component_1 = require("./tabs/contact/contact.component");
var producto_component_1 = require("./tabs/producto/producto.component");
var actividad_component_1 = require("./tabs/actividad/actividad.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_ng_shadow_1.NgShadowModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                canal_component_1.CanalComponent,
                radio_component_1.RadioComponent,
                contact_component_1.ContactComponent,
                producto_component_1.ProductoComponent,
                actividad_component_1.ActividadComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQkFBcUI7QUFDckIsc0NBQWtGO0FBQ2xGLGdGQUE4RTtBQUc5RSxRQUFRO0FBQ1Isa0VBQWtFO0FBQ2xFLGlFQUF3RDtBQUV4RCxRQUFRO0FBQ1IsMkRBQXdEO0FBRXhELGFBQWE7QUFDYixpREFBK0M7QUFDL0MsZ0VBQThEO0FBQzlELDZEQUEyRDtBQUMzRCxnRUFBOEQ7QUFDOUQsc0VBQW9FO0FBQ3BFLHlFQUFzRTtBQUN0RSw0RUFBeUU7QUEwQnpFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF4QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsdUNBQWM7Z0JBQ2QscUNBQWdCO2FBR25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQix3Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsb3MgZGUgTmF0aXZvc1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcblxyXG4vL1BsdWdpblxyXG4vLyBpbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nOyBcclxuaW1wb3J0IHsgTmdTaGFkb3dNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JzsgXHJcblxyXG4vLyBSdXRhc1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG4vL0NvbXBvbmVudGVzXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FuYWxDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2NhbmFsL2NhbmFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0b0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQWN0aXZpZGFkQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9hY3RpdmlkYWQvYWN0aXZpZGFkLmNvbXBvbmVudFwiXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOZ1NoYWRvd01vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICAgICBcclxuICBcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBDYW5hbENvbXBvbmVudCxcclxuICAgICAgICBSYWRpb0NvbXBvbmVudCxcclxuICAgICAgICBDb250YWN0Q29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3RvQ29tcG9uZW50LFxyXG4gICAgICAgIEFjdGl2aWRhZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==