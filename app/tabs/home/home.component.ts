//Component and Modules
import { Component, ElementRef, OnInit, ViewChild, NgZone} from "@angular/core";
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

import { registerElement } from "nativescript-angular/element-registry";
import { PullToRefresh } from "nativescript-pulltorefresh";
 
registerElement("pullToRefresh",() => require("nativescript-pulltorefresh").PullToRefresh);


@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [PlanesServices],
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
    public planes: Array<Planes> = [];
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
        let getInfo:Array<any> = [];
        this.ngZone.run(()=>{
            // this.planes =  this._planesService.getAllPlanes();
            // getInfo = this._planesService.getConexion();
            this.planes =  this._planesService.getConexion();    

        });    
       
    } 

   

    // itemNext(){
    //     console.log("Ir a item");
    //     this.router.navigate(["radio"], {
    //         transition: {
    //             name: "flip",
    //             duration: 2000,
    //             curve: "linear"
    //         }
    //     });
    // }
  

    like(id, like, status){
        console.log("id:" +  id + "Total Like:"+ like + "class" + status);     
      
        if(status == 'font-awesome ico-dislike'){
            // this.toogleLike = true;
            // this.toogleHeart = "font-awesome ico-like"
            this._planesService.putPlusLike(id, like); 
            // this.planes = JSON.parse(appSettings.getString("allPlanes",""));       
            for(let i=0;i<=this.planes.length;i++){
                if(id == this.planes[i].id){
                    console.log(i);
                    this.planes[i].likes_recibidos++;
                    this.planes[i].class_likes = "font-awesome ico-like";
                    // console.log(this.planes[id].id);
                }
            }                                 
          
        }else{ 
            // this.toogleLike = false;
            // this.toogleHeart = "font-awesome ico-dislike"
            this._planesService.putMinusLike(id, like);
            // this.planes = JSON.parse(appSettings.getString("allPlanes",""));       
            for(let i=0;i<=this.planes.length;i++){                
                if(id == this.planes[i].id){    
                    console.log(i);
                        if(like == this.planes[i].likes_recibidos){
                            this.planes[i].likes_recibidos--;
                            this.planes[i].class_likes = "font-awesome ico-dislike";
                        } else{
                            this.planes[i].likes_recibidos;
                            this.planes[i].class_likes = "font-awesome ico-dislike";
                        }           
                        
                    }
                    
                }
            
            }  

    }

    share(image,id,t_shared){          
        console.log("ID:" + id + "Total:"+ t_shared);
        this.pressShared = "font-awesome ico-share-press";       
        ImageSource.fromUrl(image).then((image) => {        
            SocialShare.shareImage(image);
            this.pressShared = "font-awesome ico-share";                   
        });

        this._planesService.putPlusShare(id,t_shared);
    }

    refreshList(args) {
        
        var pullRefresh = args.object;
        setTimeout(function () {             
           pullRefresh.refreshing = false;
        }, 1000);
        console.log("Entrando");
        this.ngZone.run(()=>{
            this.planes = [];
            this.planes =  this._planesService.getConexion();   
            let cache = this._planesService.getLike();
            console.log(cache);
                                
        });  
       
   }
}
