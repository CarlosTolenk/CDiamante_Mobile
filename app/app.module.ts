// Modulos de Nativos
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

//Plugin
// import { TNSFontIconModule } from 'nativescript-ng2-fonticon';  

// Rutas
import { AppRoutingModule } from "./app-routing.module";

//Componentes
import { AppComponent } from "./app.component";
import { CanalComponent } from "./tabs/canal/canal.component";
import { HomeComponent } from "./tabs/home/home.component";
import { RadioComponent } from "./tabs/radio/radio.component";
import { ContactComponent } from "./tabs/contact/contact.component";
import { ProductoComponent } from "./tabs/producto/producto.component"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
       
  
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CanalComponent,
        RadioComponent,
        ContactComponent,
        ProductoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
