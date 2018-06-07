//Component and Modules
import { Component, ElementRef, OnInit, ViewChild, NgZone, DoCheck} from "@angular/core";
import { Observable } from 'rxjs';

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

import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);



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
    public planes: Array<Planes> = [];
    public myPlanes$: Observable<Array<any>>;

    constructor(private ngZone: NgZone) {
        // Use the constructor to inject services.
        this.toogleHeart = "font-awesome ico-dislike";
        this.toogleLike = false;
        this.pressShared = "font-awesome ico-share";  
        // this.planes = new Array();    

   
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
                });
            });
        });       
            
        
        
        
      
       
       
        
    }

    firestoreDocumentObservable(): void {
        this.myPlanes$ = Observable.create(subscriber => {
            const colRef: firestore.CollectionReference = firebase.firestore().collection("planes");
            colRef.onSnapshot((snapshot: firestore.QuerySnapshot) => {
              this.ngZone.run(() => {
                this.planes = [];
                console.log("Mierda");
                snapshot.forEach(docSnap => this.planes.push(<Planes>docSnap.data()));
                subscriber.next(this.planes);
              });
            });
          });
    }

    ngDoCheck() {
        
        
    }


    refreshList(args) {
        var pullRefresh = args.object;
        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000);
   }

    like(){
        if(!this.toogleLike){
            this.toogleLike = true;
            this.toogleHeart = "font-awesome ico-like"
            this.firestoreDocumentObservable();
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
