import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Producto",
    moduleId: module.id,
    templateUrl: "./producto.component.html",
    styleUrls: ['./producto.component.css'],
    
})
export class ProductoComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        const id = +this.route.snapshot.params.id;
    }

}