import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { firestore } from "nativescript-plugin-firebase";
import * as appSettings from 'tns-core-modules/application-settings'
const Cache = require("tns-core-modules/ui/image-cache").Cache;
const fromNativeSource = require("image-source").fromNativeSource;
const fromFile = require("image-source").fromFile;
const imageSource = require("tns-core-modules/image-source");
const firebase = require("nativescript-plugin-firebase/app");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const connectivityModule = require("tns-core-modules/connectivity");


//Modelos
import { Planes } from "../models/planes";
import { Actividad } from "../models/actividad";
import { Likes } from "../models/likes";

@Injectable({
  providedIn: 'root',
})
export class PlanesServices {
    public allPlanes: Array<Planes> = [];
    public allActividad: Array<Actividad> = [];
    public captureInfo: Array<Planes> = [];
    public likesPlan: Array<Likes> = [];
    public allId: Array<Planes> = [];
    public prueba:string;
    public planesU:Planes;
    public ActividadU:Actividad;


  constructor(
        private ngZone: NgZone,
  ) {
    firebase.initializeApp({
        persist: false
      }).then(() => {
        console.log("Firebase initialized");
    });    
    this.allId = new Array;
   }

   getAllPlanes(){      
    //    console.log("getAllPlanes");    
       this.allPlanes = [];
        const planesCollection = firebase.firestore().collection("planes"); 
        this.ngZone.run(() => {           
            planesCollection.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // console.dir(`${doc.id} => ${doc.data()}`);  
                    // console.log("De aqui sale la informacion");                 
                    this.allPlanes.push(doc.data());                 
                    // console.log(this.allPlanes);
                     if(appSettings.getString("allLikes")!=undefined){
                        // console.log("Existe likes en LocalStorage");
                         let likes_recibidos = this.getLike();       
                        //  console.log(likes_recibidos);                  
                        for(let i=0;i<likes_recibidos.length;i++){   
                            for(let j=0;j<this.allPlanes.length;j++){
                                if(likes_recibidos[i].id == this.allPlanes[j].id){
                                    // console.log("Existe un LIKE");                                
                                    if(likes_recibidos[i].class_likes){
                                        this.allPlanes[j].class_likes = "font-awesome ico-like";
                                        // console.log("Esta activo el true");
                                    }else{                                    
                                        this.allPlanes[j].class_likes = "font-awesome ico-dislike";
                                        // console.log("Esta activo el falsee");
                                        // this.allPlanes[i].id;
                                    }                               
                                }  
                            }                     
                        }
                    }else{
                        for(let i=0;i<this.allPlanes.length;i++){
                            this.allPlanes[i].class_likes = "font-awesome ico-dislike";                           
                        }
                    }     
                    appSettings.setString("allPlanes", JSON.stringify(this.allPlanes));       
                });
            });           
           
        });        
               
        return this.allPlanes;
    }

    getAllActividad(){
        this.allActividad = [];
        let array = [];
        const actividadCollection = firebase.firestore().collection("actividades"); 
        this.ngZone.run(() => {           
            actividadCollection.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.allActividad.push(doc.data()); 
                    // console.log("Servicio");
                    // console.log(this.allActividad);
                });
                appSettings.setString("allEventos", JSON.stringify(this.allActividad));
            });          
        });

        return this.allActividad; 
        // return array;
        
    }

    getConexion(){
        //  result is ConnectionType enumeration (none, wifi or mobile)
        const connectionType = connectivityModule.getConnectionType();
        this.ngZone.run(()=>{
            switch (connectionType) {
                case connectivityModule.connectionType.none:
                    // Denotes no Internet connection.
                    console.log("No connection");    
                    if(appSettings.getString("allPlanes")!=undefined){
                        this.allPlanes = JSON.parse(appSettings.getString("allPlanes",""));
                        // console.log("Leyendo appSetting")
                        // console.log(this.allPlanes);
                    }else{
                        console.log("No hay planes en el Storage application");
                    }        
                break;
    
                case connectivityModule.connectionType.wifi:
                    // Denotes a WiFi connection.  
                        console.log("Wifi connection");               
                        // console.log("Guadando en AppSetting");
                        // this.getAllActividad();
                        this.captureInfo = this.getAllPlanes();
                        // console.log(this.captureInfo);
                        let info = JSON.stringify(this.captureInfo);
                        // console.log(info);
                        appSettings.setString("allPlanes", info);
                        // appSettings.setString("allPlanes","Que estará pasando, porque lo estoy guardando");
                        this.allPlanes = JSON.parse(appSettings.getString("allPlanes",""));   
                        // console.log("Leyendo appSetting")
                        // console.log(this.prueba);                      
    
                break;

                case connectivityModule.connectionType.mobile:
                        // Denotes a mobile connection, i.e. cellular network or WAN.
                        console.log("Mobile connection");  
                        // console.log("Guadando en AppSetting");
                        // this.getAllActividad();
                        this.captureInfo = this.getAllPlanes();
                        // console.dir(this.captureInfo);
                        let data = JSON.stringify(this.captureInfo);
                        // console.log(data);
                        appSettings.setString("allPlanes", data);
                        // appSettings.setString("allPlanes","Que estará pasando, porque lo estoy guardando");
                        this.allPlanes = JSON.parse(appSettings.getString("allPlanes",""));   
                        // console.log("Leyendo appSetting")
                        // console.log(this.prueba);                      
                break;
                
                default:
                    break;
               
            }          
           
        });      
        // console.log("Este no trae nada");
        // console.log(this.allPlanes);
        return this.allPlanes;
    }

    getPlan(id){
        console.log("GetPlanId");
        this.allPlanes = JSON.parse(appSettings.getString("allPlanes",""));       
        for(let i=0;i<this.allPlanes.length;i++){
            if(id == this.allPlanes[i].id){
                this.planesU = this.allPlanes[i];
            }
        }

        return this.planesU;


        // let id = 'MhyTSeaIH3lTdgJsrnHK';
        // const sanFranciscoDocument = firebase.firestore().collection("planes").doc(id);
        // const unsubscribe = sanFranciscoDocument.onSnapshot(doc => {
        // if (doc.exists) {
        //     console.log("Document data:", JSON.stringify(doc.data()));
        // } else {
        //     console.log("No such document!");
        // }
        // });
      
    }

    getActividadId(id){
        console.log("GetActividadId");
        this.allActividad = JSON.parse(appSettings.getString("allEventos", ""));
        console.log(this.allActividad);
        for(let i=0;i<this.allActividad.length;i++){
            if(id == this.allActividad[i].id){
                this.ActividadU = this.allActividad[i];
            }
        }
        console.log(this.ActividadU);
        return this.ActividadU;
    }

    putPlusLike(id, like){
        like++;
        const LikePlan = firebase.firestore().collection("planes").doc(id);
        LikePlan.update({
        likes_recibidos: like,
        updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
        }).then(() => {
        // console.log("Like Activo");
        this.addLike(id);
        });        
    }

    putMinusLike(id, like){
        like--;
        const LikePlan = firebase.firestore().collection("planes").doc(id);
        LikePlan.update({
            likes_recibidos: like,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
            }).then(() => {
            // console.log("Dislike Activo");
            this.removeLike(id);
        });
    }

    putPlusShare(id, share){
        share++;
        const SharePlan = firebase.firestore().collection("planes").doc(id);
        SharePlan.update({
            total_shared: share,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
            }).then(() => {
            // console.log("Compartir Activo");       
            });

    }

    addLike(id){   

        if(appSettings.getString("allLikes")!=undefined){
        let confirmed = false;    
        this.likesPlan = JSON.parse(appSettings.getString("allLikes",""));

            for(let i=0;i<this.likesPlan.length;i++){
                if(this.likesPlan[i].id == id){ 
                    this.likesPlan[i].class_likes = true;
                    appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
                    confirmed = true;
                }
            }
            if(!confirmed){
                let opt = {
                    id: id,
                    class_likes: true
                };
        
                this.likesPlan.push(opt);
                appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
            }
        }else{
            let opt = {
                id: id,
                class_likes: true
            };
    
            this.likesPlan.push(opt);
            appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
        }
        
        // console.log(JSON.parse(appSettings.getString("allPlanes")));
       
    }

    removeLike(id){
        this.likesPlan = JSON.parse(appSettings.getString("allLikes",""));

        for(let i=0;i<this.likesPlan.length;i++){
            if(this.likesPlan[i].id == id){
               this.likesPlan[i].class_likes = false;
            }
        }
        console.log(this.likesPlan);
        appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
    }

    getLike(){
        if(appSettings.getString("allLikes")!=undefined){
            let cache = JSON.parse(appSettings.getString("allLikes",""));
            return cache;
        }else{
            let cache = "No hay likes";
            return cache;
        }        
        
    }

    removeStorage(){
        appSettings.remove("allLikes");
    }

    getConection(){
        let result = '';
        //  result is ConnectionType enumeration (none, wifi or mobile)
        const connectionType = connectivityModule.getConnectionType();
       
            switch (connectionType) {
                case connectivityModule.connectionType.none:
                    // Denotes no Internet connection.
                    console.log("No connection");    
                    result = "No connection";
                       
                break;
    
                case connectivityModule.connectionType.wifi:
                    // Denotes a WiFi connection.  
                        console.log("Wifi connection");  
                        result = "Wifi connection";             
                                      
    
                break;

                case connectivityModule.connectionType.mobile:
                        // Denotes a mobile connection, i.e. cellular network or WAN.
                        console.log("Mobile connection");  
                        result = "Mobile connection";
                                   
                break;
                
                default:
                    break;               
            
            }

            return result;
    } 
    
    imageCache(id_imagen, viewModel, url_imagen){
         // >> image-cache-code
        
        const cache = new Cache();
        // let holder = "~/images/" + id_imagen + ".jpg";
        let holder = "~/images/carlos.jpg";
        console.log(holder);
        cache.placeholder = fromFile(holder);
        cache.maxRequests = 5;

         // set the placeholder while the desired image is donwloaded
        viewModel.set("imageSource", cache.placeholder);

        // Enable download while not scrolling
        cache.enableDownload();

        let cachedImageSource;
        const url = url_imagen;
        // Try to read the image from the cache
        const image = cache.get(url);

        if (image) {
            // If present -- use it.
            cachedImageSource = imageSource.fromNativeSource(image);
            viewModel.set("imageSource", cachedImageSource);
        } else {
            // If not present -- request its download + put it in the cache.
            cache.push({
                key: url,
                url: url,
                completed: (image, key) => {
                    if (url === key) {
                        cachedImageSource = fromNativeSource(image);
                        viewModel.set("imageSource", cachedImageSource); // set the downloaded iamge
                    }
                }
            });
        }

        // Disable download while scrolling
        cache.disableDownload();
        // << image-cache-codes


    }
        
            
    


} 

