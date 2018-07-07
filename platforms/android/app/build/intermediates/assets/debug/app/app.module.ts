// Modulos de Nativos
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ModalDialogService } from "nativescript-angular/modal-dialog";


//Plugin
// import { TNSFontIconModule } from 'nativescript-ng2-fonticon'; 
import { NgShadowModule } from 'nativescript-ng-shadow'; 

// Rutas
import { AppRoutingModule } from "./app-routing.module";
// import { TabsRoutingModule } from "./tabs/tabs-routing.module";

//Componentes
import { AppComponent } from "./app.component";
import { CanalComponent } from "./tabs/canal/canal.component";
import { HomeComponent } from "./tabs/home/home.component";
import { RadioComponent } from "./tabs/radio/radio.component";
import { ContactComponent } from "./tabs/contact/contact.component";
import { ProductoComponent } from "./tabs/producto/producto.component";
import { ActividadComponent } from "./tabs/actividad/actividad.component";
import { PlayComponent } from "./tabs/play/play.component";
import { ReproductorComponent } from "./tabs/reproductor/reproductor.modal";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,        
        NgShadowModule,
        AppRoutingModule, 
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CanalComponent,
        RadioComponent,
        ContactComponent,
        ProductoComponent,
        ActividadComponent,
        ReproductorComponent,
        PlayComponent
    ],
    entryComponents: [
        CanalComponent,
        ReproductorComponent
    ],
    providers:[
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        
    ]
})
export class AppModule { }
