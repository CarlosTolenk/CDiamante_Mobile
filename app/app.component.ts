import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { Page } from "ui/page";
import { SelectedIndexChangedEventData, TabView, TabViewItem } from "tns-core-modules/ui/tab-view";
import {setCurrentOrientation , orientationCleanup} from 'nativescript-screen-orientation';



//Plugin
import firebase = require("nativescript-plugin-firebase");
firebase.init({            
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    instance => {
      console.log("firebase.init done app.component.ts");
    },
    error => {
      console.log(`firebase.init error app.component.ts: ${error}`);
    }
  );  

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit { 

  public tabSelectedIndex: number;
  public page:Page;

    constructor() {
      // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
      // Init your component properties here.
      console.log(this.tabSelectedIndex);
  }

  getIconSource(icon: string): string {
      const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

      return iconPrefix + icon;
  }

    onSelectedIndexChanged(event, page:Page){
      // if(event.newIndex != 1){
      //   this.page.on("navigatedTo",function(){
      //     setCurrentOrientation("portrait",function(){
      //     console.log("portrait orientation");
      //     });
      //  });
      //   this.page.on("navigatingFrom",function(){
      //     orientationCleanup();
      //   });
      // }
      // else{
      //   this.page.on("navigatedTo",function(){
      //     setCurrentOrientation("landscape",function(){
      //     console.log("portrait orientation");
      //     });
      //  });
      //   this.page.on("navigatingFrom",function(){
      //     orientationCleanup();
      //   });
      // }
    }
}
