"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var canal_component_1 = require("./canal/canal.component");
var radio_component_1 = require("./radio/radio.component");
var contact_component_1 = require("./contact/contact.component");
var routes = [
    { path: "", redirectTo: "/(homeTab:home//canalTab:canal//radioTab:radio//contactTab:contact//)", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent, outlet: "homeTab" },
    { path: "canal", component: canal_component_1.CanalComponent, outlet: "canalTab" },
    { path: "radio", component: radio_component_1.RadioComponent, outlet: "radioTab" },
    { path: "contact", component: contact_component_1.ContactComponent, outlet: "contactTab" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBR3ZFLHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUcvRCxJQUFNLE1BQU0sR0FBVztJQUVuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHVFQUF1RSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEgsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0NBR3pFLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FuYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jYW5hbC9jYW5hbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tIFwiLi9yYWRpby9yYWRpby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdG9Db21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnRcIjtcclxuIFxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFsgIFxyXG5cclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvKGhvbWVUYWI6aG9tZS8vY2FuYWxUYWI6Y2FuYWwvL3JhZGlvVGFiOnJhZGlvLy9jb250YWN0VGFiOmNvbnRhY3QvLylcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LCAgXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIG91dGxldDogXCJob21lVGFiXCIgfSxcclxuICAgIHsgcGF0aDogXCJjYW5hbFwiLCBjb21wb25lbnQ6IENhbmFsQ29tcG9uZW50LCBvdXRsZXQ6IFwiY2FuYWxUYWJcIiB9LFxyXG4gICAgeyBwYXRoOiBcInJhZGlvXCIsIGNvbXBvbmVudDogUmFkaW9Db21wb25lbnQsIG91dGxldDogXCJyYWRpb1RhYlwiIH0sXHJcbiAgICB7IHBhdGg6IFwiY29udGFjdFwiLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQsIG91dGxldDogXCJjb250YWN0VGFiXCIgfSxcclxuXHJcbiBcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=