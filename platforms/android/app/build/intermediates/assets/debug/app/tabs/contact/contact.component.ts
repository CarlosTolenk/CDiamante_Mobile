import { Component, OnInit } from "@angular/core";
import * as phone from 'nativescript-phone';

//Register Component NativeScript
import { registerElement } from 'nativescript-angular/element-registry';
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
        this.items = [
            {
              title: "1", footer: "10", headerText: "First", footerText: "4",
              items: [  
                { image: "~/images/a9ff17db85f8136619feb0d5a200c0e4.png", text: "Stop" },
                { text: "Drop", image: "http://static.srcdn.com/wp-content/uploads/Superman-fighting-Goku.jpg" }
              ]
            }
          ]

        
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    
    }

        /// Dial a phone number.
    public callHome() {
        console.log("Llamando");
        phone.dial('809-724-0272', true);
    }
}  