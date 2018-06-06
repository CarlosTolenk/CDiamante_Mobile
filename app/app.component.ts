import { Component } from "@angular/core";

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
export class AppComponent { }
