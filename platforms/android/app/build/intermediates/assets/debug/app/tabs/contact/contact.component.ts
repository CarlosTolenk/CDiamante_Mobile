import { Component, OnInit } from "@angular/core";
import * as phone from 'nativescript-phone';
import * as utils from "utils/utils";
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);

//Register Component NativeScript
// import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);
// registerElement("Accordion", () => require("nativescript-accordion").Accordion);

@Component({ 
    selector: "Contact",
    moduleId: module.id,
    templateUrl: "./contact.component.html",
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public items:any
    public image:string;
       constructor() {
        // Use the component constructor to inject providers.
   

        
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    
    }

        /// Dial a phone number.
    public callHome(call) {
        console.log("Llamando");
        phone.dial(call, true);
    }

    public openSocial(url){
        utils.openUrl(url);
    }
}  