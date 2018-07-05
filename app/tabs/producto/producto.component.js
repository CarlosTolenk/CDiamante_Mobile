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
        this.xColumnas = "10,50,90,*,auto,10";
        var platform = require("tns-core-modules/platform");
        var maxwidth = platform.screen.mainScreen.widthDIPs;
        console.log('Densidad de pixeles' + maxwidth);
        this.xColumnas =
            "\n            " + maxwidth * 0.03 + ",\n            " + maxwidth * 0.35 + ",\n            " + maxwidth * 0.15 + ",\n            " + maxwidth * 0.05 + ",\n            " + maxwidth * 0.35 + ",\n            " + maxwidth * 0.15 + "\n            \n        \n        ";
        console.log(this.xColumnas);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsVUFBVTtBQUNWLGtFQUFnRTtBQWFoRTtJQVFJLDJCQUNZLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUF3QixFQUN4QixjQUE4QjtRQUg5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFvQixDQUFDO1FBRXBDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTO1lBQ2QsbUJBQ00sUUFBUSxHQUFDLElBQUksdUJBQ2IsUUFBUSxHQUFDLElBQUksdUJBQ2IsUUFBUSxHQUFDLElBQUksdUJBQ2IsUUFBUSxHQUFDLElBQUksdUJBQ2IsUUFBUSxHQUFDLElBQUksdUJBQ2IsUUFBUSxHQUFDLElBQUksdUNBR2xCLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQTlDUSxpQkFBaUI7UUFSN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FFMUMsQ0FBQzt5Q0FVcUIsdUJBQWM7WUFDYixhQUFNO1lBQ04seUJBQWdCO1lBQ1IsZ0NBQWM7T0FaakMsaUJBQWlCLENBZ0Q3QjtJQUFELHdCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vL1NlcnZpY2VzXHJcbmltcG9ydCB7IFBsYW5lc1NlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYW5lcy5zZXJ2aWNlc1wiO1xyXG5cclxuLy9Nb2RlbG9cclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFuZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvZHVjdG9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtQbGFuZXNTZXJ2aWNlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2R1Y3RvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0by5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgcGxhbjpQbGFuZXM7XHJcbiAgICBwdWJsaWMgdG9vZ2xlSGVhcnQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHRvb2dsZUxpa2U6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVzc1NoYXJlZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgeENvbHVtbmFzOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgX3BsYW5lc1NlcnZpY2U6IFBsYW5lc1NlcnZpY2VzXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMudG9vZ2xlSGVhcnQgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgIHRoaXMudG9vZ2xlTGlrZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlc3NTaGFyZWQgPSBcImZvbnQtYXdlc29tZSBpY28tc2hhcmVcIjsgXHJcbiAgICAgICAgdGhpcy54Q29sdW1uYXM9XCIxMCw1MCw5MCwqLGF1dG8sMTBcIjtcclxuXHJcbiAgICAgICAgdmFyIHBsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XHJcbiAgICAgICAgdmFyIG1heHdpZHRoID0gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEZW5zaWRhZCBkZSBwaXhlbGVzJyttYXh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy54Q29sdW1uYXMgPSBcclxuICAgICAgICBgXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4wM30sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4zNX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4xNX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4wNX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4zNX0sXHJcbiAgICAgICAgICAgICR7bWF4d2lkdGgqMC4xNX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMueENvbHVtbmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7ICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZXNkZSBsb3MgcHJvZHVjdG9zXCIpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGFuID0gdGhpcy5fcGxhbmVzU2VydmljZS5nZXRQbGFuKGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiYWNrUGFnZSgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==