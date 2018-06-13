import { Component, OnInit } from "@angular/core";

import { registerElement } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";
 
registerElement("pullToRefresh",() => require("nativescript-pulltorefresh").PullToRefresh);


@Component({
    selector: "Canal",
    moduleId: module.id,
    templateUrl: "./canal.component.html"
})
export class CanalComponent implements OnInit {


    constructor() {
        // Use the component constructor to inject providers.
   
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    refreshList(args) {
        var pullRefresh = args.object;
        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000);
   }

}




