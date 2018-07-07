"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// registerElement("VideoPlayer", () => Video);
var PlayComponent = /** @class */ (function () {
    function PlayComponent() {
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("landscape");
    }
    // public close(response: string){
    //     this.params.closeCallback(response);
    // }  
    PlayComponent.prototype.ngOnDestroy = function () {
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("portrait");
    };
    PlayComponent = __decorate([
        core_1.Component({
            selector: "Play",
            moduleId: module.id,
            templateUrl: "./play.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQVFwRCwrQ0FBK0M7QUFXL0M7SUFJSTtRQUdJLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFNUMsQ0FBQztJQUVELGtDQUFrQztJQUNsQywyQ0FBMkM7SUFDM0MsTUFBTTtJQUVOLG1DQUFXLEdBQVg7UUFDSSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFuQlEsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBRVAsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FHdkMsQ0FBQzs7T0FDVyxhQUFhLENBc0J6QjtJQUFELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG4vLyBpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWRlb3BsYXllcic7XHJcbi8vIHJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IFZpZGVvKTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIFxyXG4gICAgc2VsZWN0b3I6IFwiUGxheVwiLCAgXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wbGF5LmNvbXBvbmVudC5odG1sXCJcclxuICBcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcclxuXHJcbiAgICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSBcclxuICAgIFxyXG4gICAge1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbicpO1xyXG4gICAgICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwibGFuZHNjYXBlXCIpOyAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIGNsb3NlKHJlc3BvbnNlOiBzdHJpbmcpe1xyXG4gICAgLy8gICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgLy8gfSAgXHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKXtcclxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtb3JpZW50YXRpb24nKTtcclxuICAgICAgICBvcmllbnRhdGlvbi5zZXRPcmllbnRhdGlvbihcInBvcnRyYWl0XCIpOyAgXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==