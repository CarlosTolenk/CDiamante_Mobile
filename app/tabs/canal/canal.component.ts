import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

import { ReproductorComponent } from "../reproductor/reproductor.modal";



// import { registerElement } from "nativescript-angular/element-registry";
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);

// import * as utils from "utils/utils";


@Component({
    selector: "Canal",    
    moduleId: module.id,
    templateUrl: "./canal.component.html",
    styleUrls: ['./canal.component.css']
})
export class CanalComponent {       

    public constructor(    
        private modal: ModalDialogService, private vcRef: ViewContainerRef
 
    ) {
        // Use the component constructor to inject providers.
    
    }  

    public openReproductor() {    

        console.log("Abriendo el MOdal");
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ReproductorComponent, options).then(res => {
            console.log(res);
        });
        
    }

    
  


}




