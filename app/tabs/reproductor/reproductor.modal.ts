import { Component, OnDestroy} from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ActivityIndicator } from "ui/activity-indicator";

// import * as utils from "utils/utils";
import { Page } from "ui/page";
import {setCurrentOrientation , orientationCleanup} from 'nativescript-screen-orientation';


// import { registerElement } from "nativescript-angular/element-registry";
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);

import {registerElement} from "nativescript-angular/element-registry";
registerElement("exoplayer", () => require("nativescript-exoplayer").Video);


@Component({
    
    selector: "Reproductor",  
    moduleId: module.id,
    templateUrl: "./reproductor.modal.html",
    styleUrls: ['./reproductor.modal.css'],
    
})
export class ReproductorComponent implements OnDestroy{

    public frameworks: Array<string>;
    public isBusy:boolean;

    public constructor(
        page: Page,
        private params: ModalDialogParams
    ) {
        this.isBusy = false;
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("landscape");  
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

    onBusyChanged(args) {
        let indicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }

    // public close(response: string){
    //     this.params.closeCallback(response);
    // }  

    ngOnDestroy(){
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("portrait");  
    }



}




