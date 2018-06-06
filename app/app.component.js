"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Plugin
var firebase = require("nativescript-plugin-firebase");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done app.module.ts");
}, function (error) {
    console.log("firebase.init error app.module.ts: " + error);
});
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsUUFBUTtBQUNSLHVEQUEwRDtBQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBR1gsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVE7SUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUNELFVBQUEsS0FBSztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXNDLEtBQU8sQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FDRixDQUFDO0FBTUo7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLy9QbHVnaW5cclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmZpcmViYXNlLmluaXQoeyAgICAgICAgICAgIFxyXG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICB9KS50aGVuKFxyXG4gICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZSBhcHAubW9kdWxlLnRzXCIpO1xyXG4gICAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgYXBwLm1vZHVsZS50czogJHtlcnJvcn1gKTtcclxuICAgIH1cclxuICApOyAgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cclxuIl19