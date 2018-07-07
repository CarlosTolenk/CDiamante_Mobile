import { Component, OnInit , OnDestroy} from "@angular/core";
import * as utils from "utils/utils";
import { Page } from "ui/page";



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

       

    constructor(page:Page) {
        // Use the component constructor to inject providers.
        // page.on("navigatedTo",function(){
        //     setCurrentOrientation("landscape",function(){
        //     console.log("portrait orientation");
        //     });
        //  });
        //  page.on("navigatingFrom",function(){
        //      orientationCleanup();
        //  });       

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




