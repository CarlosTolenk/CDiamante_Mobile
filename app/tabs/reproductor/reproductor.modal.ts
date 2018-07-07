import { Component} from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

// import * as utils from "utils/utils";
import { Page } from "ui/page";
import {setCurrentOrientation , orientationCleanup} from 'nativescript-screen-orientation';


import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);


@Component({
    
    selector: "Reproductor",  
    moduleId: module.id,
    templateUrl: "./reproductor.modal.html",
    styleUrls: ['./reproductor.modal.css'],
    
})
export class ReproductorComponent{

    public frameworks: Array<string>;

    public constructor(
        page: Page,
        private params: ModalDialogParams
    ) {
        // Use the component constructor to inject providers.
        page.on("navigatedTo",function(){
            setCurrentOrientation("landscape",function(){
            console.log("portrait landscape");
            });
         });
         page.on("navigatingFrom",function(){
             orientationCleanup();
         });       

        //  this.frameworks = [
        //      "M",
        //      "I",
        //      "E",
        //      "R",
        //      "D",
        //      "A"
        //  ];

         console.log("Desde el reproductor");
    }

    // public close(response: string){
    //     this.params.closeCallback(response);
    // }  


}




