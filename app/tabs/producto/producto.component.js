"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
//Services
var planes_services_1 = require("../../services/planes.services");
var ProductoComponent = /** @class */ (function () {
    function ProductoComponent(route, ngZone, router, _planesService) {
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this._planesService = _planesService;
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";
    }
    ProductoComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        console.log("Desde los productos");
        this.plan = this._planesService.getPlan(id);
        console.log(this.plan);
    };
    ProductoComponent.prototype.backPage = function () {
        this.router.backToPreviousPage();
    };
    ProductoComponent = __decorate([
        core_1.Component({
            selector: "Producto",
            moduleId: module.id,
            providers: [planes_services_1.PlanesServices],
            templateUrl: "./producto.component.html",
            styleUrls: ['./producto.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_1.NgZone,
            router_2.RouterExtensions,
            planes_services_1.PlanesServices])
    ], ProductoComponent);
    return ProductoComponent;
}());
exports.ProductoComponent = ProductoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsVUFBVTtBQUNWLGtFQUFnRTtBQWFoRTtJQU9JLDJCQUNZLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUF3QixFQUN4QixjQUE4QjtRQUg5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQTNCUSxpQkFBaUI7UUFSN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FFMUMsQ0FBQzt5Q0FTcUIsdUJBQWM7WUFDYixhQUFNO1lBQ04seUJBQWdCO1lBQ1IsZ0NBQWM7T0FYakMsaUJBQWlCLENBNkI3QjtJQUFELHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vL1NlcnZpY2VzXHJcbmltcG9ydCB7IFBsYW5lc1NlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYW5lcy5zZXJ2aWNlc1wiO1xyXG5cclxuLy9Nb2RlbG9cclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFuZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvZHVjdG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtQbGFuZXNTZXJ2aWNlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3RvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0by5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgcGxhbjpQbGFuZXM7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIF9wbGFuZXNTZXJ2aWNlOiBQbGFuZXNTZXJ2aWNlc1xyXG4gICAgKXtcclxuICAgICAgICB0aGlzLnRvb2dsZUhlYXJ0ID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICB0aGlzLnRvb2dsZUxpa2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXNzU2hhcmVkID0gXCJmb250LWF3ZXNvbWUgaWNvLXNoYXJlXCI7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkOyAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVzZGUgbG9zIHByb2R1Y3Rvc1wiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxhbiA9IHRoaXMuX3BsYW5lc1NlcnZpY2UuZ2V0UGxhbihpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGFuKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrUGFnZSgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==