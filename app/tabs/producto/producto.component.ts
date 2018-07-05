import { Component, OnInit, NgZone} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

//Services
import { PlanesServices } from "../../services/planes.services";

//Modelo
import { Planes } from "../../models/planes";

@Component({
    selector: "Producto",
    moduleId: module.id,
    providers: [PlanesServices],
    templateUrl: "./producto.component.html",
    styleUrls: ['./producto.component.css'],
    
})
export class ProductoComponent implements OnInit {

    public plan:Planes;
    public toogleHeart:string;
    public toogleLike:boolean;
    public pressShared:string;
    public xColumnas:string;

    constructor(
        private route: ActivatedRoute,
        private ngZone: NgZone,
        private router: RouterExtensions,
        private _planesService: PlanesServices
    ){
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share"; 
        this.xColumnas="10,50,90,*,auto,10";

        var platform = require("tns-core-modules/platform");
        var maxwidth = platform.screen.mainScreen.widthDIPs;
        console.log('Densidad de pixeles'+maxwidth);
        this.xColumnas = 
        `
            ${maxwidth*0.03},
            ${maxwidth*0.35},
            ${maxwidth*0.15},
            ${maxwidth*0.05},
            ${maxwidth*0.35},
            ${maxwidth*0.15}
            
        
        `
        console.log(this.xColumnas);
    }

    ngOnInit(){
        const id = this.route.snapshot.params.id;   
        console.log("Desde los productos");        
        this.plan = this._planesService.getPlan(id);
        console.log(this.plan);

    }

    backPage(){
        this.router.backToPreviousPage();
    }

}