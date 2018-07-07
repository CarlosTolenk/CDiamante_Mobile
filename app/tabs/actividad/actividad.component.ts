import { Component, OnInit, NgZone, OnDestroy} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {setCurrentOrientation , orientationCleanup} from 'nativescript-screen-orientation';
import { Page } from "ui/page";

import * as phone from 'nativescript-phone';

//Services
import { PlanesServices } from "../../services/planes.services";

//Modelo
import { Actividad } from "../../models/actividad";


@Component({
    selector: "Actividad",
    moduleId: module.id,
    providers: [PlanesServices],
    templateUrl: "./actividad.component.html",
    styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit, OnDestroy{

    public actividad: Actividad; 
    public xColumnas:string;
     

    constructor(
        private route: ActivatedRoute,
        private ngZone: NgZone,
        private router: RouterExtensions,
        private _planesService: PlanesServices,
        public page:Page
    ) {

        // Use the component constructor to inject providers.

        // page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //  page.on("navigatingFrom",function(){
        //         orientationCleanup();
        // });
       

        var platform = require("tns-core-modules/platform");
        var maxwidth = platform.screen.mainScreen.widthDIPs;
        console.log('Densidad de pixeles'+maxwidth);
        this.xColumnas = 
        `          
            ${maxwidth*0.35},
            ${maxwidth*0.15},
            ${maxwidth*0.01},
            ${maxwidth*0.19},
            ${maxwidth*0.30},
           
            
        
        `
        console.log(this.xColumnas);

    }

    ngOnInit(){
        const id = this.route.snapshot.params.id;   
        console.log("Desde los Actividad: " + id);
        this.ngZone.run(()=>{          
            this.actividad = this._planesService.getActividadId(id);
            console.log(this.actividad); 
        });                   

    }

    backPage(){
        this.router.backToPreviousPage();
    }

    public callHome(call) {
        console.log("Llamando");
        phone.dial(call, true);
    }

    ngOnDestroy(){
        console.log("Mierda para el Destroy");
    }




}




