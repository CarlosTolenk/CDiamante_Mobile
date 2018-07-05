import { Component, OnInit, AfterViewInit } from "@angular/core";
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
export class CanalComponent implements OnInit {


    constructor(private page: Page) {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view. 
        
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

    


    pageLoaded(args) {
        var page = args.object;
        page.bindingContext = { };
    }

  
  


}




