import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

//Componentes
import { AppComponent } from "./app.component";
import { CanalComponent } from "./tabs/canal/canal.component";
import { HomeComponent } from "./tabs/home/home.component";
import { RadioComponent } from "./tabs/radio/radio.component";
import { ContactComponent } from "./tabs/contact/contact.component";
import { ProductoComponent } from "./tabs/producto/producto.component"
import { ActividadComponent } from "./tabs/actividad/actividad.component";

const routes: Routes = [
    // { path: "", redirectTo: "/tabs", pathMatch: "full" },
    // { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }

    { path: "", redirectTo: "/(homeTab:home//canalTab:canal//radioTab:radio//contactTab:contact)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "canal", component: CanalComponent, outlet: "canalTab" },
    { path: "radio", component: RadioComponent, outlet: "radioTab" },
    { path: "contact", component: ContactComponent, outlet: "contactTab" },

    { path: "item/:id", component: ProductoComponent, outlet: "homeTab" },
    { path: "activi/:id", component: ActividadComponent, outlet: "homeTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
