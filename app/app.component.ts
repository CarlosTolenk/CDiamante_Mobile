import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { SelectedIndexChangedEventData, TabView, TabViewItem } from "tns-core-modules/ui/tab-view";



//Plugin
import firebase = require("nativescript-plugin-firebase");
firebase.init({            
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    instance => {
      console.log("firebase.init done app.module.ts");
    },
    error => {
      console.log(`firebase.init error app.module.ts: ${error}`);
    }
  );  

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit { 
    constructor() {
      // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
      // Init your component properties here.
  }

  getIconSource(icon: string): string {
      const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

      return iconPrefix + icon;
  }
}
