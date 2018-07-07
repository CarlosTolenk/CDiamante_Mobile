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
        console.log(this.tabSelectedIndex);
    };
    AppComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    AppComponent.prototype.onSelectedIndexChanged = function (event, page) {
        // if(event.newIndex != 1){
        //   this.page.on("navigatedTo",function(){
        //     setCurrentOrientation("portrait",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //   this.page.on("navigatingFrom",function(){
        //     orientationCleanup();
        //   });
        // }
        // else{
        //   this.page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //   this.page.on("navigatingFrom",function(){
        //     orientationCleanup();
        //   });
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQXFDO0FBT3JDLFFBQVE7QUFDUix1REFBMEQ7QUFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUdYLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRO0lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsRUFDRCxVQUFBLEtBQUs7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxLQUFPLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQ0YsQ0FBQztBQU1KO0lBS0k7UUFDRSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQVk7UUFDdEIsSUFBTSxVQUFVLEdBQUcsb0JBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUU1RCxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUMsNkNBQXNCLEdBQXRCLFVBQXVCLEtBQUssRUFBRSxJQUFTO1FBQ3JDLDJCQUEyQjtRQUMzQiwyQ0FBMkM7UUFDM0MsbURBQW1EO1FBQ25ELDJDQUEyQztRQUMzQyxVQUFVO1FBQ1YsT0FBTztRQUNQLDhDQUE4QztRQUM5Qyw0QkFBNEI7UUFDNUIsUUFBUTtRQUNSLElBQUk7UUFDSixRQUFRO1FBQ1IsMkNBQTJDO1FBQzNDLG9EQUFvRDtRQUNwRCwyQ0FBMkM7UUFDM0MsVUFBVTtRQUNWLE9BQU87UUFDUCw4Q0FBOEM7UUFDOUMsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUixJQUFJO0lBQ04sQ0FBQztJQXpDUSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O09BQ1csWUFBWSxDQTBDeEI7SUFBRCxtQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7c2V0Q3VycmVudE9yaWVudGF0aW9uICwgb3JpZW50YXRpb25DbGVhbnVwfSBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuLW9yaWVudGF0aW9uJztcclxuXHJcblxyXG5cclxuLy9QbHVnaW5cclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmZpcmViYXNlLmluaXQoeyAgICAgICAgICAgIFxyXG4gICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICB9KS50aGVuKFxyXG4gICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZSBhcHAuY29tcG9uZW50LnRzXCIpO1xyXG4gICAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3IgYXBwLmNvbXBvbmVudC50czogJHtlcnJvcn1gKTtcclxuICAgIH1cclxuICApOyAgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG5cclxuICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBwYWdlOlBhZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFiU2VsZWN0ZWRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uU291cmNlKGljb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgIGNvbnN0IGljb25QcmVmaXggPSBpc0FuZHJvaWQgPyBcInJlczovL1wiIDogXCJyZXM6Ly90YWJJY29ucy9cIjtcclxuXHJcbiAgICAgIHJldHVybiBpY29uUHJlZml4ICsgaWNvbjtcclxuICB9XHJcblxyXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChldmVudCwgcGFnZTpQYWdlKXtcclxuICAgICAgLy8gaWYoZXZlbnQubmV3SW5kZXggIT0gMSl7XHJcbiAgICAgIC8vICAgdGhpcy5wYWdlLm9uKFwibmF2aWdhdGVkVG9cIixmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICAgc2V0Q3VycmVudE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIixmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwb3J0cmFpdCBvcmllbnRhdGlvblwiKTtcclxuICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAvLyAgfSk7XHJcbiAgICAgIC8vICAgdGhpcy5wYWdlLm9uKFwibmF2aWdhdGluZ0Zyb21cIixmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICAgb3JpZW50YXRpb25DbGVhbnVwKCk7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZXtcclxuICAgICAgLy8gICB0aGlzLnBhZ2Uub24oXCJuYXZpZ2F0ZWRUb1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICAgICBzZXRDdXJyZW50T3JpZW50YXRpb24oXCJsYW5kc2NhcGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwb3J0cmFpdCBvcmllbnRhdGlvblwiKTtcclxuICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAvLyAgfSk7XHJcbiAgICAgIC8vICAgdGhpcy5wYWdlLm9uKFwibmF2aWdhdGluZ0Zyb21cIixmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICAgb3JpZW50YXRpb25DbGVhbnVwKCk7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=