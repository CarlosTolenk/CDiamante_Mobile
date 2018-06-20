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
                producto_component_1.ProductoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQkFBcUI7QUFDckIsc0NBQWtGO0FBQ2xGLGdGQUE4RTtBQUc5RSxRQUFRO0FBQ1Isa0VBQWtFO0FBQ2xFLGlFQUF3RDtBQUV4RCxRQUFRO0FBQ1IsMkRBQXdEO0FBRXhELGFBQWE7QUFDYixpREFBK0M7QUFDL0MsZ0VBQThEO0FBQzlELDZEQUEyRDtBQUMzRCxnRUFBOEQ7QUFDOUQsc0VBQW9FO0FBQ3BFLHlFQUFzRTtBQXlCdEU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQix1Q0FBYztnQkFDZCxxQ0FBZ0I7YUFHbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsb3MgZGUgTmF0aXZvc1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcblxyXG4vL1BsdWdpblxyXG4vLyBpbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nOyBcclxuaW1wb3J0IHsgTmdTaGFkb3dNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JzsgXHJcblxyXG4vLyBSdXRhc1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG4vL0NvbXBvbmVudGVzXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FuYWxDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2NhbmFsL2NhbmFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0b0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50XCJcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5nU2hhZG93TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgICAgIFxyXG4gIFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIENhbmFsQ29tcG9uZW50LFxyXG4gICAgICAgIFJhZGlvQ29tcG9uZW50LFxyXG4gICAgICAgIENvbnRhY3RDb21wb25lbnQsXHJcbiAgICAgICAgUHJvZHVjdG9Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=