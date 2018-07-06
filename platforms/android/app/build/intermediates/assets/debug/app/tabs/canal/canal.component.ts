import { Component, OnInit , OnDestroy} from "@angular/core";
import * as utils from "utils/utils";
import { Page } from "ui/page";
import {setCurrentOrientation , orientationCleanup} from 'nativescript-screen-orientation';


import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);


@Component({
    selector: "Canal",
    moduleId: module.id,
    templateUrl: "./canal.component.html",
    styleUrls: ['./canal.component.css']
})
export class CanalComponent implements OnInit, OnDestroy{

        private page:Page;

    constructor() {

        // Use the component constructor to inject providers.
        console.log("Entrando al canal constructor");

    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view. 
        // this.page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //  this.page.on("navigatingFrom",function(){
        //      orientationCleanup();
        //     });
        console.log("Entrando al canal onInit");
      
    }

    // ngAfterViewInit(): void{
    //     let advanceWebview: AndroidAdvancedWebview = this.page.getViewById("webview");
 
    //     let optons: AndroidAdvanceWebviewOptions = {
    //         android: {
    //             setGeolocationEnabled: false,
    //             setCookiesEnabled: true,
    //         }
    //     }
     
    //     advanceWebview.setWebviewOptions(optons);
     
    //     advanceWebview.on("started", function (res) {
    //         console.log("started");
    //         console.dir(res);
    //     });
    //     advanceWebview.on("finished", function (res) {
    //         console.log("finished");
    //         console.dir(res);
    //     });
    // }

    openURL() {
        console.log("Canal");
        utils.openUrl("http://dominicanplayers.com/video-player/538");
    }

    ngOnDestroy(){
        console.log("Saliendo del canal TV");
    }
  


}




