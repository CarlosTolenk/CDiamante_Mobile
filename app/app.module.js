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
                reproductor_modal_1.ReproductorComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQkFBcUI7QUFDckIsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUM5RSxrRUFBdUU7QUFHdkUsUUFBUTtBQUNSLGtFQUFrRTtBQUNsRSxpRUFBd0Q7QUFFeEQsUUFBUTtBQUNSLDJEQUF3RDtBQUN4RCxrRUFBa0U7QUFFbEUsYUFBYTtBQUNiLGlEQUErQztBQUMvQyxnRUFBOEQ7QUFDOUQsNkRBQTJEO0FBQzNELGdFQUE4RDtBQUM5RCxzRUFBb0U7QUFDcEUseUVBQXVFO0FBQ3ZFLDRFQUEwRTtBQUMxRSwwRUFBNEU7QUFrQzVFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEvQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsdUNBQWM7Z0JBQ2QscUNBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQix3Q0FBa0I7Z0JBQ2xCLHdDQUFvQjthQUN2QjtZQUNELGVBQWUsRUFBRTtnQkFDYixnQ0FBYztnQkFDZCx3Q0FBb0I7YUFDdkI7WUFDRCxTQUFTLEVBQUM7Z0JBQ04saUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUVuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bG9zIGRlIE5hdGl2b3NcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcblxyXG5cclxuLy9QbHVnaW5cclxuLy8gaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJzsgXHJcbmltcG9ydCB7IE5nU2hhZG93TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7IFxyXG5cclxuLy8gUnV0YXNcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG4vLyBpbXBvcnQgeyBUYWJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RhYnMvdGFicy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuLy9Db21wb25lbnRlc1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhbmFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9jYW5hbC9jYW5hbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvcmFkaW8vcmFkaW8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdG9Db21wb25lbnQgfSBmcm9tIFwiLi90YWJzL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBY3RpdmlkYWRDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2FjdGl2aWRhZC9hY3RpdmlkYWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlcHJvZHVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9yZXByb2R1Y3Rvci9yZXByb2R1Y3Rvci5tb2RhbFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLCAgICAgICAgXHJcbiAgICAgICAgTmdTaGFkb3dNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSwgXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgQ2FuYWxDb21wb25lbnQsXHJcbiAgICAgICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcclxuICAgICAgICBQcm9kdWN0b0NvbXBvbmVudCxcclxuICAgICAgICBBY3RpdmlkYWRDb21wb25lbnQsXHJcbiAgICAgICAgUmVwcm9kdWN0b3JDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBDYW5hbENvbXBvbmVudCxcclxuICAgICAgICBSZXByb2R1Y3RvckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczpbXHJcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==