//Component and Modules
import { Component, ElementRef, OnInit, ViewChild, NgZone} from "@angular/core";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

//Plugin
import * as SocialShare from "nativescript-social-share";
import * as ImageSource from "image-source";
import firebase = require("nativescript-plugin-firebase");
// import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
// registerElement('CardView', () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    
})
export class HomeComponent implements OnInit {

    public items:any;
    public image:string;
    @ViewChild("likes") container: ElementRef;
    public toogleHeart:string;
    public toogleLike:boolean;
    public pressShared:string;   

    constructor() {
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";      

    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        
    }

    like(){
        if(!this.toogleLike){
            this.toogleLike = true;
            this.toogleHeart = "font-awesome ico-like"
        }else{
            this.toogleLike = false;
            this.toogleHeart = "font-awesome ico-dislike"
        }  

        


        //Example Animation
        // let likes = <View>this.container.nativeElement;
        // likes.animate({
        //     backgroundColor: new Color('yellow'),
        //     duration: 200
        // });
       
    }

    share(){          
        this.pressShared = "font-awesome ico-share-press";       
        ImageSource.fromUrl("https://controldiamante.com/wp-content/uploads/2018/05/2018-05-14.jpg").then((image) => {        
            SocialShare.shareImage(image);
            this.pressShared = "font-awesome ico-share";  
        });
       
    }
}
