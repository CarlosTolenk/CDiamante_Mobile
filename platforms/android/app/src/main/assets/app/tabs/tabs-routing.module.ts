import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TabsComponent } from "./tabs.component";
import { HomeComponent } from "./home/home.component";
import { CanalComponent } from "./canal/canal.component";
import { RadioComponent } from "./radio/radio.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductoComponent } from "./producto/producto.component";
 
const routes: Routes = [
    { path: "", component: TabsComponent },
   

//   { path: "", redirectTo: "/(homeTab:home//canalTab:canal//radioTab:radio//contactTab:contact)", pathMatch: "full" },  // 

    { path: "home", component: HomeComponent, outlet: 'homeTab'}, 
    { path: "canal", component: CanalComponent, outlet: 'canalTab'},
    { path: "radio", component: RadioComponent, outlet: 'radioTab'},
    { path: "contact", component: ContactComponent, outlet: 'contactTab'},

    { path: "item", component: ProductoComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
