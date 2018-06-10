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
    public allPlanes: Array<any> = [];
    public allId: Array<any> = [];
    public prueba:string;

  constructor(
        private ngZone: NgZone,
  ) {
    firebase.initializeApp({
        persist: false
      }).then(() => {
        console.log("Firebase initialized");
    });    

   }

   getAllPlanes(){      
        const planesCollection = firebase.firestore().collection("planes"); 
        this.ngZone.run(() => {           
            planesCollection.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // console.dir(`${doc.id} => ${doc.data()}`); 
                    this.allId.push(doc.id);
                    this.allPlanes.push(doc.data());                 
                    console.log(this.allPlanes)          
                });
            });
        }); 
            // appSettings.setString("allPlanes", JSON.stringify(this.allPlanes));
            // return this.allPlanes;          
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
                        console.log("Leyendo appSetting")
                        console.log(this.allPlanes);
                    }else{
                        console.log("No hay planes en el Storage application");
                    }        
                    break;
    
                case connectivityModule.connectionType.wifi:
                    // Denotes a WiFi connection.  
                        console.log("Wifi connection");               
                        console.log("Guadando en AppSetting");
                        let info = JSON.stringify(this.allPlanes);
                        console.log(info);
                        appSettings.setString("allPlanes", info);
                        // appSettings.setString("allPlanes","Que estará pasando, porque lo estoy guardando");
                        this.allPlanes = JSON.parse(appSettings.getString("allPlanes",""));
                        // console.log("Leyendo appSetting")
                        // console.log(this.prueba);
                      
    
                    break;
                case connectivityModule.connectionType.mobile:
                    // Denotes a mobile connection, i.e. cellular network or WAN.
                        console.log("Mobile connection");  
                        console.log("Guadando en AppSetting");
                        let data = JSON.stringify(this.allPlanes);
                        console.log(data);
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
       
    }
}