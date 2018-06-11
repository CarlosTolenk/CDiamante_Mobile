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
    }
    ProductoComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        console.log("Desde los productos");
        this.plan = this._planesService.getPlan(id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsVUFBVTtBQUNWLGtFQUFnRTtBQWFoRTtJQUlJLDJCQUNZLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxNQUF3QixFQUN4QixjQUE4QjtRQUg5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3hDLENBQUM7SUFFSCxvQ0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZlEsaUJBQWlCO1FBUjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBRTFDLENBQUM7eUNBTXFCLHVCQUFjO1lBQ2IsYUFBTTtZQUNOLHlCQUFnQjtZQUNSLGdDQUFjO09BUmpDLGlCQUFpQixDQWlCN0I7SUFBRCx3QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBQbGFuZXNTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFuZXMuc2VydmljZXNcIjtcclxuXHJcbi8vTW9kZWxvXHJcbmltcG9ydCB7IFBsYW5lcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhbmVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlByb2R1Y3RvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgcHJvdmlkZXJzOiBbUGxhbmVzU2VydmljZXNdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0by5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdG8uY29tcG9uZW50LmNzcyddLFxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHBsYW46UGxhbmVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGxhbmVzU2VydmljZTogUGxhbmVzU2VydmljZXNcclxuICAgICl7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDsgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2RlIGxvcyBwcm9kdWN0b3NcIik7ICAgICAgICBcclxuICAgICAgICB0aGlzLnBsYW4gPSB0aGlzLl9wbGFuZXNTZXJ2aWNlLmdldFBsYW4oaWQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==