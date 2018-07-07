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

@Injectable({
  providedIn: 'root',
})
export class ActividadServices {

  constructor( private ngZone: NgZone) { }

}