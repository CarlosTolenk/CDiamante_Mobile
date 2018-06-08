"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var canal_component_1 = require("./canal/canal.component");
var home_component_1 = require("./home/home.component");
var radio_component_1 = require("./radio/radio.component");
var contact_component_1 = require("./contact/contact.component");
var producto_component_1 = require("./producto/producto.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tabs_routing_module_1.TabsRoutingModule
            ],
            declarations: [
                tabs_component_1.TabsComponent,
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
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsMkRBQXlEO0FBQ3pELHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsaUVBQStEO0FBQy9ELG9FQUFpRTtBQUNqRSw2REFBMEQ7QUFDMUQsbURBQWlEO0FBbUJqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBakJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQ2FuYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jYW5hbC9jYW5hbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tIFwiLi9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdG9Db21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBUYWJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RhYnMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBUYWJzUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBDYW5hbENvbXBvbmVudCxcclxuICAgICAgICBSYWRpb0NvbXBvbmVudCxcclxuICAgICAgICBDb250YWN0Q29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3RvQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUgeyB9XHJcbiJdfQ==