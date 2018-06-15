import { Component, OnInit } from "@angular/core";
import * as utils from "utils/utils";

// import { registerElement } from "nativescript-angular";


@Component({
    selector: "Canal",
    moduleId: module.id,
    templateUrl: "./canal.component.html"
})
export class CanalComponent implements OnInit {


    constructor() {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view. 
        
    }

    openURL() {
        console.log("Canal");
        utils.openUrl("http://dominicanplayers.com/video-player/538");
    }

  
  


}




