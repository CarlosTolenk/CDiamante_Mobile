//Component and Modules
import { Component, ElementRef, OnInit, ViewChild, NgZone, DoCheck} from "@angular/core";
import { Observable } from 'rxjs';
import { RouterExtensions } from "nativescript-angular/router";


import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { Planes } from "../../models/planes";
import { firestore } from "nativescript-plugin-firebase";

//Plugin
import * as SocialShare from "nativescript-social-share";
import * as ImageSource from "image-source";

const firebase = require("nativescript-plugin-firebase/app");
const firebaseWebApi = require("nativescript-plugin-firebase/app");


// import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
// registerElement('CardView', () => CardView);





@Component({
    selector: "Home",
    moduleId: module.id,
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


    constructor(
        private ngZone: NgZone,
        private router: RouterExtensions
     ){
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";         

   
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        firebase.initializeApp({
            persist: false
          }).then(() => {
            console.log("Firebase initialized");
        });    

         
        const planesCollection = firebase.firestore().collection("planes"); 
        this.ngZone.run(() => {
            this.planes = [];
            planesCollection.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // console.log(`${doc.id} => ${doc.data()}`);
                    this.planes.push(doc.data());  
                    // console.dir(this.planes);             
                });
            });
        }); 
        
        // this.firestoreDocumentObservable(); 
    }

        ngDoCheck(): void{            
            // this.firestoreDocumentObservable();         
        }

    firestoreDocumentObservable(): void {    
        const changePlanesCollection = firebase.firestore().collection("planes");
        this.ngZone.run(()=>{
            const unsubscribe = changePlanesCollection.onSnapshot((snapshot: firestore.QuerySnapshot) => {
                this.changePlanes = [];
                this.planes = [];
                snapshot.forEach(change => {
                  // console.log(change.data());
                  this.changePlanes.push(change.data());
                
                });           
      
                  for ( var i = 0; i<this.changePlanes.length;i++){ 
                      console.log(i);        
                      this.planes[i] = this.changePlanes[i];
                      console.log(this.planes[i]);
                  }
              
              });
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

    share(){          
        this.pressShared = "font-awesome ico-share-press";       
        ImageSource.fromUrl("https://controldiamante.com/wp-content/uploads/2018/05/2018-05-14.jpg").then((image) => {        
            SocialShare.shareImage(image);
            this.pressShared = "font-awesome ico-share";  
        });
       
    }
}
