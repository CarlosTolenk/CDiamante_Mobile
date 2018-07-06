"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phone = require("nativescript-phone");
var utils = require("utils/utils");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement('ImageZoom', function () { return require('nativescript-image-zoom').ImageZoom; });
//Register Component NativeScript
// import { registerElement } from 'nativescript-angular/element-registry';
var nativescript_cardview_1 = require("nativescript-cardview");
element_registry_1.registerElement('CardView', function () { return nativescript_cardview_1.CardView; });
// registerElement("Accordion", () => require("nativescript-accordion").Accordion);
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        // Use the component constructor to inject providers.       
        var platform = require("tns-core-modules/platform");
        var maxwidth = platform.screen.mainScreen.widthDIPs;
        console.log('Densidad de pixeles' + maxwidth);
        this.xColumnas =
            "            \n            " + maxwidth * 0.45 + ",   \n            \n            " + maxwidth * 0.45 + ",\n            " + maxwidth * 0.10 + "\n            \n        \n        ";
    }
    ContactComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    /// Dial a phone number.
    ContactComponent.prototype.callHome = function (call) {
        console.log("Llamando");
        phone.dial(call, true);
    };
    ContactComponent.prototype.openSocial = function (url) {
        utils.openUrl(url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBNEM7QUFDNUMsbUNBQXFDO0FBR3JDLDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsU0FBUyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7QUFFakYsaUNBQWlDO0FBQ2pDLDJFQUEyRTtBQUMzRSwrREFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsbUZBQW1GO0FBUW5GO0lBSU87UUFDQyw0REFBNEQ7UUFFNUQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDcEQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVM7WUFDZCwrQkFDTSxRQUFRLEdBQUMsSUFBSSx3Q0FFYixRQUFRLEdBQUMsSUFBSSx1QkFDYixRQUFRLEdBQUMsSUFBSSx1Q0FHbEIsQ0FBQTtJQUdMLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksOERBQThEO0lBRWxFLENBQUM7SUFFRyx3QkFBd0I7SUFDckIsbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLHFDQUFVLEdBQWpCLFVBQWtCLEdBQUc7UUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBcENRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FxQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHBob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtzZXRDdXJyZW50T3JpZW50YXRpb24gLCBvcmllbnRhdGlvbkNsZWFudXB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW4tb3JpZW50YXRpb24nO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxucmVnaXN0ZXJFbGVtZW50KCdJbWFnZVpvb20nLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtaW1hZ2Utem9vbScpLkltYWdlWm9vbSk7XHJcblxyXG4vL1JlZ2lzdGVyIENvbXBvbmVudCBOYXRpdmVTY3JpcHRcclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcmR2aWV3JztcclxucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcclxuLy8gcmVnaXN0ZXJFbGVtZW50KFwiQWNjb3JkaW9uXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYWNjb3JkaW9uXCIpLkFjY29yZGlvbik7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgICBzZWxlY3RvcjogXCJDb250YWN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250YWN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb250YWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaXRlbXM6YW55XHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nO1xyXG4gICAgcHVibGljIHhDb2x1bW5hczpzdHJpbmc7XHJcbiAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLiAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIHBsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XHJcbiAgICAgICAgdmFyIG1heHdpZHRoID0gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEZW5zaWRhZCBkZSBwaXhlbGVzJyttYXh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy54Q29sdW1uYXMgPSBcclxuICAgICAgICBgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC40NX0sICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAke21heHdpZHRoKjAuNDV9LFxyXG4gICAgICAgICAgICAke21heHdpZHRoKjAuMTB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vLyBEaWFsIGEgcGhvbmUgbnVtYmVyLlxyXG4gICAgcHVibGljIGNhbGxIb21lKGNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxsYW1hbmRvXCIpO1xyXG4gICAgICAgIHBob25lLmRpYWwoY2FsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5Tb2NpYWwodXJsKXtcclxuICAgICAgICB1dGlscy5vcGVuVXJsKHVybCk7XHJcbiAgICB9XHJcbn0gICJdfQ==