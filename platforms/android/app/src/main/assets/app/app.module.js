"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modulos de Nativos
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
//Plugin
// import { TNSFontIconModule } from 'nativescript-ng2-fonticon'; 
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
// Rutas
var app_routing_module_1 = require("./app-routing.module");
// import { TabsRoutingModule } from "./tabs/tabs-routing.module";
//Componentes
var app_component_1 = require("./app.component");
var canal_component_1 = require("./tabs/canal/canal.component");
var home_component_1 = require("./tabs/home/home.component");
var radio_component_1 = require("./tabs/radio/radio.component");
var contact_component_1 = require("./tabs/contact/contact.component");
var producto_component_1 = require("./tabs/producto/producto.component");
var actividad_component_1 = require("./tabs/actividad/actividad.component");
var play_component_1 = require("./tabs/play/play.component");
var reproductor_modal_1 = require("./tabs/reproductor/reproductor.modal");
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
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                canal_component_1.CanalComponent,
                radio_component_1.RadioComponent,
                contact_component_1.ContactComponent,
                producto_component_1.ProductoComponent,
                actividad_component_1.ActividadComponent,
                reproductor_modal_1.ReproductorComponent,
                play_component_1.PlayComponent
            ],
            entryComponents: [
                canal_component_1.CanalComponent,
                reproductor_modal_1.ReproductorComponent
            ],
            providers: [
                modal_dialog_1.ModalDialogService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQkFBcUI7QUFDckIsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxrRUFBdUU7QUFHdkUsUUFBUTtBQUNSLGtFQUFrRTtBQUNsRSxpRUFBd0Q7QUFFeEQsUUFBUTtBQUNSLDJEQUF3RDtBQUN4RCxrRUFBa0U7QUFFbEUsYUFBYTtBQUNiLGlEQUErQztBQUMvQyxnRUFBOEQ7QUFDOUQsNkRBQTJEO0FBQzNELGdFQUE4RDtBQUM5RCxzRUFBb0U7QUFDcEUseUVBQXVFO0FBQ3ZFLDRFQUEwRTtBQUMxRSw2REFBMkQ7QUFDM0QsMEVBQTRFO0FBbUM1RTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBaENyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHVDQUFjO2dCQUNkLHFDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsd0NBQWtCO2dCQUNsQix3Q0FBb0I7Z0JBQ3BCLDhCQUFhO2FBQ2hCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLGdDQUFjO2dCQUNkLHdDQUFvQjthQUN2QjtZQUNELFNBQVMsRUFBQztnQkFDTixpQ0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBRW5CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsb3MgZGUgTmF0aXZvc1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcblxyXG4vL1BsdWdpblxyXG4vLyBpbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nOyBcclxuaW1wb3J0IHsgTmdTaGFkb3dNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JzsgXHJcblxyXG4vLyBSdXRhc1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IFRhYnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdGFicy90YWJzLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG4vL0NvbXBvbmVudGVzXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FuYWxDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2NhbmFsL2NhbmFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0b0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjdGl2aWRhZENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvYWN0aXZpZGFkL2FjdGl2aWRhZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvcGxheS9wbGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXByb2R1Y3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvcmVwcm9kdWN0b3IvcmVwcm9kdWN0b3IubW9kYWxcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSwgICAgICAgIFxyXG4gICAgICAgIE5nU2hhZG93TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsIFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIENhbmFsQ29tcG9uZW50LFxyXG4gICAgICAgIFJhZGlvQ29tcG9uZW50LFxyXG4gICAgICAgIENvbnRhY3RDb21wb25lbnQsXHJcbiAgICAgICAgUHJvZHVjdG9Db21wb25lbnQsXHJcbiAgICAgICAgQWN0aXZpZGFkQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcHJvZHVjdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIFBsYXlDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBDYW5hbENvbXBvbmVudCxcclxuICAgICAgICBSZXByb2R1Y3RvckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczpbXHJcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==