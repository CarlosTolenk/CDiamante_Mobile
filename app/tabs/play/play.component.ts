import { Component, OnDestroy} from "@angular/core";


// import * as utils from "utils/utils";
import { Page } from "ui/page";

// import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);


@Component({
    
    selector: "Play",  
    moduleId: module.id,
    templateUrl: "./play.component.html"
  
    
})
export class PlayComponent implements OnDestroy{

    public frameworks: Array<string>;

    public constructor() 
    
    {
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("landscape");  
        
    }

    // public close(response: string){
    //     this.params.closeCallback(response);
    // }  

    ngOnDestroy(){
        var orientation = require('nativescript-orientation');
        orientation.setOrientation("portrait");  
    }


}