"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phone = require("nativescript-phone");
//Register Component NativeScript
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement('CardView', function () { return nativescript_cardview_1.CardView; });
// registerElement("Accordion", () => require("nativescript-accordion").Accordion);
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        // Use the component constructor to inject providers.
        this.items = [
            {
                title: "1", footer: "10", headerText: "First", footerText: "4",
                items: [
                    { image: "~/images/a9ff17db85f8136619feb0d5a200c0e4.png", text: "Stop" },
                    { text: "Drop", image: "http://static.srcdn.com/wp-content/uploads/Superman-fighting-Goku.jpg" }
                ]
            }
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    /// Dial a phone number.
    ContactComponent.prototype.callHome = function () {
        console.log("Llamando");
        phone.dial('809-724-0272', true);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "Contact",
            moduleId: module.id,
            templateUrl: "./contact.component.html",
            styleUrls: ['./contact.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBNEM7QUFFNUMsaUNBQWlDO0FBQ2pDLDBFQUF3RTtBQUN4RSwrREFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsbUZBQW1GO0FBUW5GO0lBR087UUFDQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNUO2dCQUNFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHO2dCQUM5RCxLQUFLLEVBQUU7b0JBQ0wsRUFBRSxLQUFLLEVBQUUsK0NBQStDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtvQkFDeEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSx1RUFBdUUsRUFBRTtpQkFDakc7YUFDRjtTQUNGLENBQUE7SUFHUCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLDhEQUE4RDtJQUVsRSxDQUFDO0lBRUcsd0JBQXdCO0lBQ3JCLG1DQUFRLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUEzQlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLGdCQUFnQixDQTRCNUI7SUFBRCx1QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgcGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcclxuXHJcbi8vUmVnaXN0ZXIgQ29tcG9uZW50IE5hdGl2ZVNjcmlwdFxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xyXG4vLyByZWdpc3RlckVsZW1lbnQoXCJBY2NvcmRpb25cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hY2NvcmRpb25cIikuQWNjb3JkaW9uKTtcclxuXHJcbkBDb21wb25lbnQoeyBcclxuICAgIHNlbGVjdG9yOiBcIkNvbnRhY3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2NvbnRhY3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBpdGVtczphbnlcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcbiAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCIxXCIsIGZvb3RlcjogXCIxMFwiLCBoZWFkZXJUZXh0OiBcIkZpcnN0XCIsIGZvb3RlclRleHQ6IFwiNFwiLFxyXG4gICAgICAgICAgICAgIGl0ZW1zOiBbICBcclxuICAgICAgICAgICAgICAgIHsgaW1hZ2U6IFwifi9pbWFnZXMvYTlmZjE3ZGI4NWY4MTM2NjE5ZmViMGQ1YTIwMGMwZTQucG5nXCIsIHRleHQ6IFwiU3RvcFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6IFwiRHJvcFwiLCBpbWFnZTogXCJodHRwOi8vc3RhdGljLnNyY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvU3VwZXJtYW4tZmlnaHRpbmctR29rdS5qcGdcIiB9XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgICAgICAvLy8gRGlhbCBhIHBob25lIG51bWJlci5cclxuICAgIHB1YmxpYyBjYWxsSG9tZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxsYW1hbmRvXCIpO1xyXG4gICAgICAgIHBob25lLmRpYWwoJzgwOS03MjQtMDI3MicsIHRydWUpO1xyXG4gICAgfVxyXG59ICAiXX0=