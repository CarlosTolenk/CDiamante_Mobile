"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
//Plugin
var firebase = require("nativescript-plugin-firebase");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done app.component.ts");
}, function (error) {
    console.log("firebase.init error app.component.ts: " + error);
});
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // Use the component constructor to inject providers.
    }
    AppComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AppComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQXFDO0FBS3JDLFFBQVE7QUFDUix1REFBMEQ7QUFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUdYLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRO0lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsRUFDRCxVQUFBLEtBQUs7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxLQUFPLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQ0YsQ0FBQztBQU1KO0lBQ0k7UUFDRSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLElBQU0sVUFBVSxHQUFHLG9CQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFFNUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQWJVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7T0FDVyxZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcblxyXG5cclxuXHJcbi8vUGx1Z2luXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5maXJlYmFzZS5pbml0KHsgICAgICAgICAgICBcclxuICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXHJcbiAgfSkudGhlbihcclxuICAgIGluc3RhbmNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmUgYXBwLmNvbXBvbmVudC50c1wiKTtcclxuICAgIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yIGFwcC5jb21wb25lbnQudHM6ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgKTsgIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gIH1cclxuXHJcbiAgZ2V0SWNvblNvdXJjZShpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICBjb25zdCBpY29uUHJlZml4ID0gaXNBbmRyb2lkID8gXCJyZXM6Ly9cIiA6IFwicmVzOi8vdGFiSWNvbnMvXCI7XHJcblxyXG4gICAgICByZXR1cm4gaWNvblByZWZpeCArIGljb247XHJcbiAgfVxyXG59XHJcbiJdfQ==