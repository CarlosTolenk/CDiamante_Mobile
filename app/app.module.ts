// Modulos de Nativos
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";



//Plugin
// import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import firebase = require("nativescript-plugin-firebase");
firebase.init({            
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  }).then(
    instance => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
    }
  );    

// Rutas
import { AppRoutingModule } from "./app-routing.module";

//Componentes
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
       
        //, AccordionModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
