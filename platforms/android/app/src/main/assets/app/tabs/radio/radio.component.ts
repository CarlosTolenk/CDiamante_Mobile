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
    public minute:number;
    public second:number;
    public data:string;
    public volumen:number;
    public live:string;
    public currentVolume:number;
    private _page:Page;
    public timeString : string;
    public duration = 5;
    public seconds:string;
    public minutes:string;
    public clockDisplay : string; 
    public interval: any;

    constructor() {
        // Use the constructor to inject services.
        this.duration = 0;
        this.timeString = "--:--"; 
        this.second = -5;   
        this.seconds = "--";
        this.minutes = "--";  
        this.clockDisplay = this.minutes + ":" +this.seconds;
        this.data = this.second.toString();
        this.live = 'Sin Conexión';
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
                if(duration == '-1' || duration == '0'){
                    this.live = "Live Broadcast";
                }
            });
        });

  
     
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        
        console.log("Init RADIO");
        // this.data = 0.8;
        this._player.pause();
      
    }

   

    public togglePlay() {
        if (this._player.isAudioPlaying()) {
          this._player.pause();
          this.accion = String.fromCharCode(0xf04b);         
          this.stopTick();          
          
        } else {
          this._player.play();
          this.accion = String.fromCharCode(0xf04c);          
        //   this._startVolumeTracking();         
          console.log("Inicio del timer");
          this.timeString = "00:00"; 
            this.tickTick();
         
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

  

     

      private tickTick(){      
          
        // if(this.duration >= 0){
        let myVar =  setInterval(() => {this.duration = this.duration + 1;
        if(this.duration <=0 ){            
            clearInterval(this.interval)	
            }
            this.interval = myVar;
            this.volumen = this._player.volume;

        if(Math.abs(this.duration % 60) < 10){
            this.seconds = "0"+Math.abs(this.duration%60);
        }else{
           
            this.seconds = ""+parseInt((Math.abs(this.duration%60)).toString(),10);
        }

        if(Math.abs(this.duration / 60) < 10 ){
            this.minutes = "0"+parseInt(""+Math.abs(this.duration/60),10);
        }else{
            this.minutes = ""+parseInt(Math.abs((this.duration / 60)).toString(),10);
        }

        this.clockDisplay = this.minutes + ":" +this.seconds; },1000); 
        // }

        
    }

    private stopTick(){
        console.log("Parando");
        console.log(Math.abs(this.duration));
        clearInterval(this.interval);	
    }

     
    

      


}
