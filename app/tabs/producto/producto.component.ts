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

    constructor(
        private route: ActivatedRoute,
        private ngZone: NgZone,
        private router: RouterExtensions,
        private _planesService: PlanesServices
    ){
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";   
    }

    ngOnInit(){
        const id = this.route.snapshot.params.id;   
        console.log("Desde los productos");        
        this.plan = this._planesService.getPlan(id);
        console.log(this.plan);
    }

}