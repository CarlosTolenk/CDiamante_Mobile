import { Component, OnInit } from "@angular/core";
import { NgModule } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { Slider } from 'tns-core-modules/ui/slider';
import { Page } from 'tns-core-modules/ui/page';
import * as timer from 'tns-core-modules/timer';

import {registerElement} from "nativescript-angular/element-registry";
registerElement("TNSSlider", () => require("nativescript-slider").Slider);

@Component({
    selector: "Radio",
    moduleId: module.id,
    templateUrl: "./radio.component.html",
    styleUrls: ['./radio.component.css'],
})
export class RadioComponent implements OnInit {
    private _player: TNSPlayer;
    public accion:string = String.fromCharCode(0xf04b);
    private _slider: Slider;
    public data:string;
    public volumen:number;
    public currentVolume:number;
    private _page:Page;

    constructor() {
        // Use the constructor to inject services.
      
        this.data = '0';    
        this._player = new TNSPlayer();
        this._player.debug = false; // set true to enable TNSPlayer console logs for debugging.
        this._player
    
        
        .initFromFile({
            audioFile: 'http://radio7.domint.net:8194/;stream.mp3', // ~ = radio
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        })
        .then(() => {
            this._player.getAudioTrackDuration().then(duration => {
            // iOS: duration is in seconds
            // Android: duration is in milliseconds         
            console.log(`song duration:`, duration);
            this.accion = String.fromCharCode(0xf04b);
            this.volumen = this._player.volume;
            });
        });

  
     
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.currentVolume = 1;     
        // this.data = 0.8;

      
    }

   

    public togglePlay() {
        if (this._player.isAudioPlaying()) {
          this._player.pause();
          this.accion = String.fromCharCode(0xf04b);   
          
          
          
        } else {
          this._player.play();
          this.accion = String.fromCharCode(0xf04c);
          this._startVolumeTracking();
          
          console.log("Inicio del timer");
         
        }
      }
    
      private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
      }
    
      private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
      }

      private _startVolumeTracking() {
        if (this._player.isAudioPlaying()) {
          const timerId = timer.setInterval(() => { 
             console.log(this.volumen);
              this.data = this._player.volume;              
          }, 1000);
        }
      }
    

      


}
