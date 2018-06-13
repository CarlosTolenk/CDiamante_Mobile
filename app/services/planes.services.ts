import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { firestore } from "nativescript-plugin-firebase";
import * as appSettings from 'tns-core-modules/application-settings'
const firebase = require("nativescript-plugin-firebase/app");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const connectivityModule = require("tns-core-modules/connectivity");






//Modelos
import { Planes } from "../models/planes";

@Injectable({
  providedIn: 'root',
})
export class PlanesServices {
    public allPlanes: Array<Planes> = [];
    public captureInfo: Array<Planes> = [];
    public allId: Array<Planes> = [];
    public prueba:string;
    public planesU:Planes;


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
       console.log("getAllPlanes");
       this.allPlanes = [];
        const planesCollection = firebase.firestore().collection("planes"); 
        this.ngZone.run(() => {           
            planesCollection.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // console.dir(`${doc.id} => ${doc.data()}`); 
                    this.allId.push(doc.data());
                    this.allPlanes.push(doc.data());                 
                    // console.log(this.allPlanes)     
                    appSettings.setString("allPlanes", JSON.stringify(this.allPlanes));       
                });
            });           
           
        });  
               
        return this.allPlanes;

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
                        this.captureInfo = this.getAllPlanes();
                        console.log(this.captureInfo);
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
                        this.captureInfo = this.getAllPlanes();
                        console.dir(this.captureInfo);
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
        console.log("Este no trae nada");
        console.log(this.allPlanes);
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
} 