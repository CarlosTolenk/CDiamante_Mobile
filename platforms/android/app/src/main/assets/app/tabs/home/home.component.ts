//Component and Modules
import { Component, ElementRef, OnInit, ViewChild, NgZone, DoCheck} from "@angular/core";
import { Observable } from 'rxjs';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import * as appSettings from 'tns-core-modules/application-settings'
const connectivityModule = require("tns-core-modules/connectivity");
// import { firestore } from "nativescript-plugin-firebase";

//Services
import { PlanesServices } from "../../services/planes.services";

//Modelo
import { Planes } from "../../models/planes";

//Plugin
import * as SocialShare from "nativescript-social-share";
import * as ImageSource from "image-source";
// const firebase = require("nativescript-plugin-firebase/app");
// const firebaseWebApi = require("nativescript-plugin-firebase/app");
import { CardView } from 'nativescript-cardview';


@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [PlanesServices],
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    
})
export class HomeComponent implements OnInit, DoCheck {

    public items:any;
    public image:string;
    @ViewChild("likes") container: ElementRef;
    public toogleHeart:string;
    public toogleLike:boolean;
    public pressShared:string;
    public planes: Array<any> = [];
    public changePlanes: Array<any> = [];
    public prueba:string;

    constructor(
        private ngZone: NgZone,
        private router: RouterExtensions,
        private _planesService: PlanesServices
     ){
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";         

   
    }

    ngOnInit(): void { 
        this.ngZone.run(()=>{
            this.planes =  this._planesService.getAllPlanes();
            // this.planes =  this._planesService.getConexion();
            // console.dir(this.planes);            
        });    
      
    }

    ngDoCheck(): void{            
        this.ngZone.run(()=>{
            this.planes =  this._planesService.getConexion();
            // console.dir(this.planes);            
        });  
    }

   

    itemNext(){
        console.log("Ir a item");
        this.router.navigate(["radio"], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
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

    share(id){          
        this.pressShared = "font-awesome ico-share-press";       
        ImageSource.fromUrl(id).then((image) => {        
            SocialShare.shareImage(image);
            this.pressShared = "font-awesome ico-share";  
        });
       
    }
}
