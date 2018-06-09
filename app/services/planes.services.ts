import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { firestore } from "nativescript-plugin-firebase";
const firebase = require("nativescript-plugin-firebase/app");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const connectivityModule = require("tns-core-modules/connectivity");


//Modelos
import { Planes } from "../models/planes";

@Injectable({
  providedIn: 'root',
})
export class PlanesServices {
    public allPlanes: Array<Planes> = [];;

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
       console.log("Desde el servicio");
        const planesCollection = firebase.firestore().collection("planes"); 
        this.ngZone.run(() => {           
            planesCollection.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // console.dir(`${doc.id} => ${doc.data()}`); 
                    this.allPlanes.push(doc.data());                 
                    console.dir(this.allPlanes);             
                });
            });
        }); 

        return this.allPlanes;
    }

    getConexion(){
            // result is ConnectionType enumeration (none, wifi or mobile)
            const connectionType = connectivityModule.getConnectionType();

            switch (connectionType) {
                case connectivityModule.connectionType.none:
                    // Denotes no Internet connection.
                    console.log("No connection");
                    break;
                case connectivityModule.connectionType.wifi:
                    // Denotes a WiFi connection.
                    console.log("WiFi connection");
                    break;
                case connectivityModule.connectionType.mobile:
                    // Denotes a mobile connection, i.e. cellular network or WAN.
                    console.log("Mobile connection");
                    break;
                default:
                    break;
            }
        }


}