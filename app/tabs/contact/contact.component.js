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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBNEM7QUFDNUMsbUNBQXFDO0FBQ3JDLDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsU0FBUyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7QUFFakYsaUNBQWlDO0FBQ2pDLDJFQUEyRTtBQUMzRSwrREFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsbUZBQW1GO0FBUW5GO0lBR087UUFDQyxxREFBcUQ7SUFJekQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSw4REFBOEQ7SUFFbEUsQ0FBQztJQUVHLHdCQUF3QjtJQUNyQixtQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0scUNBQVUsR0FBakIsVUFBa0IsR0FBRztRQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUF2QlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLGdCQUFnQixDQXdCNUI7SUFBRCx1QkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgcGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5yZWdpc3RlckVsZW1lbnQoJ0ltYWdlWm9vbScsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1pbWFnZS16b29tJykuSW1hZ2Vab29tKTtcclxuXHJcbi8vUmVnaXN0ZXIgQ29tcG9uZW50IE5hdGl2ZVNjcmlwdFxyXG4vLyBpbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xyXG4vLyByZWdpc3RlckVsZW1lbnQoXCJBY2NvcmRpb25cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hY2NvcmRpb25cIikuQWNjb3JkaW9uKTtcclxuXHJcbkBDb21wb25lbnQoeyBcclxuICAgIHNlbGVjdG9yOiBcIkNvbnRhY3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2NvbnRhY3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBpdGVtczphbnlcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcbiAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vLyBEaWFsIGEgcGhvbmUgbnVtYmVyLlxyXG4gICAgcHVibGljIGNhbGxIb21lKGNhbGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxsYW1hbmRvXCIpO1xyXG4gICAgICAgIHBob25lLmRpYWwoY2FsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5Tb2NpYWwodXJsKXtcclxuICAgICAgICB1dGlscy5vcGVuVXJsKHVybCk7XHJcbiAgICB9XHJcbn0gICJdfQ==