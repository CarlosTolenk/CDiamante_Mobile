"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings");
var firebase = require("nativescript-plugin-firebase/app");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var connectivityModule = require("tns-core-modules/connectivity");
var PlanesServices = /** @class */ (function () {
    function PlanesServices(ngZone) {
        this.ngZone = ngZone;
        this.allPlanes = [];
        this.captureInfo = [];
        this.likesPlan = [];
        this.allId = [];
        firebase.initializeApp({
            persist: false
        }).then(function () {
            console.log("Firebase initialized");
        });
        this.allId = new Array;
    }
    PlanesServices.prototype.getAllPlanes = function () {
        var _this = this;
        console.log("getAllPlanes");
        this.allPlanes = [];
        var planesCollection = firebase.firestore().collection("planes");
        this.ngZone.run(function () {
            planesCollection.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // console.dir(`${doc.id} => ${doc.data()}`);  
                    // console.log("De aqui sale la informacion");                 
                    _this.allPlanes.push(doc.data());
                    // console.log(this.allPlanes);
                    if (appSettings.getString("allLikes") != undefined) {
                        // console.log("Existe likes en LocalStorage");
                        var likes_recibidos = _this.getLike();
                        //  console.log(likes_recibidos);                  
                        for (var i = 0; i < likes_recibidos.length; i++) {
                            for (var j = 0; j < _this.allPlanes.length; j++) {
                                if (likes_recibidos[i].id == _this.allPlanes[j].id) {
                                    console.log("Existe un LIKE");
                                    if (likes_recibidos[i].class_likes) {
                                        _this.allPlanes[j].class_likes = "font-awesome ico-like";
                                        console.log("Esta activo el true");
                                    }
                                    else {
                                        _this.allPlanes[j].class_likes = "font-awesome ico-dislike";
                                        console.log("Esta activo el falsee");
                                        // this.allPlanes[i].id;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < _this.allPlanes.length; i++) {
                            _this.allPlanes[i].class_likes = "font-awesome ico-dislike";
                        }
                    }
                    appSettings.setString("allPlanes", JSON.stringify(_this.allPlanes));
                });
            });
        });
        return this.allPlanes;
    };
    PlanesServices.prototype.getConexion = function () {
        var _this = this;
        //  result is ConnectionType enumeration (none, wifi or mobile)
        var connectionType = connectivityModule.getConnectionType();
        this.ngZone.run(function () {
            switch (connectionType) {
                case connectivityModule.connectionType.none:
                    // Denotes no Internet connection.
                    console.log("No connection");
                    if (appSettings.getString("allPlanes") != undefined) {
                        _this.allPlanes = JSON.parse(appSettings.getString("allPlanes", ""));
                        // console.log("Leyendo appSetting")
                        // console.log(this.allPlanes);
                    }
                    else {
                        console.log("No hay planes en el Storage application");
                    }
                    break;
                case connectivityModule.connectionType.wifi:
                    // Denotes a WiFi connection.  
                    console.log("Wifi connection");
                    // console.log("Guadando en AppSetting");
                    _this.captureInfo = _this.getAllPlanes();
                    console.log(_this.captureInfo);
                    var info = JSON.stringify(_this.captureInfo);
                    // console.log(info);
                    appSettings.setString("allPlanes", info);
                    // appSettings.setString("allPlanes","Que estará pasando, porque lo estoy guardando");
                    _this.allPlanes = JSON.parse(appSettings.getString("allPlanes", ""));
                    // console.log("Leyendo appSetting")
                    // console.log(this.prueba);                      
                    break;
                case connectivityModule.connectionType.mobile:
                    // Denotes a mobile connection, i.e. cellular network or WAN.
                    console.log("Mobile connection");
                    // console.log("Guadando en AppSetting");
                    _this.captureInfo = _this.getAllPlanes();
                    console.dir(_this.captureInfo);
                    var data = JSON.stringify(_this.captureInfo);
                    console.log(data);
                    appSettings.setString("allPlanes", data);
                    // appSettings.setString("allPlanes","Que estará pasando, porque lo estoy guardando");
                    _this.allPlanes = JSON.parse(appSettings.getString("allPlanes", ""));
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
    };
    PlanesServices.prototype.getPlan = function (id) {
        console.log("GetPlanId");
        this.allPlanes = JSON.parse(appSettings.getString("allPlanes", ""));
        for (var i = 0; i < this.allPlanes.length; i++) {
            if (id == this.allPlanes[i].id) {
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
    };
    PlanesServices.prototype.putPlusLike = function (id, like) {
        var _this = this;
        like++;
        var LikePlan = firebase.firestore().collection("planes").doc(id);
        LikePlan.update({
            likes_recibidos: like,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
        }).then(function () {
            console.log("Like Activo");
            _this.addLike(id);
        });
    };
    PlanesServices.prototype.putMinusLike = function (id, like) {
        var _this = this;
        like--;
        var LikePlan = firebase.firestore().collection("planes").doc(id);
        LikePlan.update({
            likes_recibidos: like,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
        }).then(function () {
            console.log("Dislike Activo");
            _this.removeLike(id);
        });
    };
    PlanesServices.prototype.addLike = function (id) {
        if (appSettings.getString("allLikes") != undefined) {
            var confirmed = false;
            this.likesPlan = JSON.parse(appSettings.getString("allLikes", ""));
            for (var i = 0; i < this.likesPlan.length; i++) {
                if (this.likesPlan[i].id == id) {
                    this.likesPlan[i].class_likes = true;
                    appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
                    confirmed = true;
                }
            }
            if (!confirmed) {
                var opt = {
                    id: id,
                    class_likes: true
                };
                this.likesPlan.push(opt);
                appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
            }
        }
        else {
            var opt = {
                id: id,
                class_likes: true
            };
            this.likesPlan.push(opt);
            appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
        }
        // console.log(JSON.parse(appSettings.getString("allPlanes")));
    };
    PlanesServices.prototype.removeLike = function (id) {
        this.likesPlan = JSON.parse(appSettings.getString("allLikes", ""));
        for (var i = 0; i < this.likesPlan.length; i++) {
            if (this.likesPlan[i].id == id) {
                this.likesPlan[i].class_likes = false;
            }
        }
        console.log(this.likesPlan);
        appSettings.setString("allLikes", JSON.stringify(this.likesPlan));
    };
    PlanesServices.prototype.getLike = function () {
        if (appSettings.getString("allLikes") != undefined) {
            var cache = JSON.parse(appSettings.getString("allLikes", ""));
            return cache;
        }
        else {
            var cache = "No hay likes";
            return cache;
        }
    };
    PlanesServices.prototype.removeStorage = function () {
        appSettings.remove("allLikes");
    };
    PlanesServices = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], PlanesServices);
    return PlanesServices;
}());
exports.PlanesServices = PlanesServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbmVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELG1FQUFvRTtBQUNwRSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBY3BFO0lBU0Usd0JBQ2MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUbkIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBUWpDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUFBLGlCQThDRTtRQTdDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLGFBQWE7Z0JBQ3JD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LGdDQUFPLEdBQVA7UUFDSSxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFFLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDN0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUdMLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBN09RLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBV3NCLGFBQU07T0FWakIsY0FBYyxDQWdQMUI7SUFBRCxxQkFBQztDQUFBLEFBaFBELElBZ1BDO0FBaFBZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuY29uc3QgY29ubmVjdGl2aXR5TW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL01vZGVsb3NcclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uL21vZGVscy9wbGFuZXNcIjtcclxuaW1wb3J0IHsgTGlrZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2xpa2VzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhbmVzU2VydmljZXMge1xyXG4gICAgcHVibGljIGFsbFBsYW5lczogQXJyYXk8UGxhbmVzPiA9IFtdO1xyXG4gICAgcHVibGljIGNhcHR1cmVJbmZvOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgbGlrZXNQbGFuOiBBcnJheTxMaWtlcz4gPSBbXTtcclxuICAgIHB1YmxpYyBhbGxJZDogQXJyYXk8UGxhbmVzPiA9IFtdO1xyXG4gICAgcHVibGljIHBydWViYTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzVTpQbGFuZXM7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgcGVyc2lzdDogZmFsc2VcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBpbml0aWFsaXplZFwiKTtcclxuICAgIH0pOyAgICBcclxuICAgIHRoaXMuYWxsSWQgPSBuZXcgQXJyYXk7XHJcbiAgIH1cclxuXHJcbiAgIGdldEFsbFBsYW5lcygpeyAgICAgIFxyXG4gICAgICAgY29uc29sZS5sb2coXCJnZXRBbGxQbGFuZXNcIik7XHJcbiAgICAgICB0aGlzLmFsbFBsYW5lcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpOyBcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBsYW5lc0NvbGxlY3Rpb24uZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKGAke2RvYy5pZH0gPT4gJHtkb2MuZGF0YSgpfWApOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEZSBhcXVpIHNhbGUgbGEgaW5mb3JtYWNpb25cIik7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcy5wdXNoKGRvYy5kYXRhKCkpOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbGxQbGFuZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiKSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFeGlzdGUgbGlrZXMgZW4gTG9jYWxTdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpa2VzX3JlY2liaWRvcyA9IHRoaXMuZ2V0TGlrZSgpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGxpa2VzX3JlY2liaWRvcyk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8bGlrZXNfcmVjaWJpZG9zLmxlbmd0aDtpKyspeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajx0aGlzLmFsbFBsYW5lcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsaWtlc19yZWNpYmlkb3NbaV0uaWQgPT0gdGhpcy5hbGxQbGFuZXNbal0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4aXN0ZSB1biBMSUtFXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxpa2VzX3JlY2liaWRvc1tpXS5jbGFzc19saWtlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lc1tqXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVzdGEgYWN0aXZvIGVsIHRydWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXNbal0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFc3RhIGFjdGl2byBlbCBmYWxzZWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbFBsYW5lc1tpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbFBsYW5lcykpOyAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25leGlvbigpe1xyXG4gICAgICAgIC8vICByZXN1bHQgaXMgQ29ubmVjdGlvblR5cGUgZW51bWVyYXRpb24gKG5vbmUsIHdpZmkgb3IgbW9iaWxlKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gY29ubmVjdGl2aXR5TW9kdWxlLmdldENvbm5lY3Rpb25UeXBlKCk7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29ubmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBubyBJbnRlcm5ldCBjb25uZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY29ubmVjdGlvblwiKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFsbFBsYW5lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gaGF5IHBsYW5lcyBlbiBlbCBTdG9yYWdlIGFwcGxpY2F0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLndpZmk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBhIFdpRmkgY29ubmVjdGlvbi4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpZmkgY29ubmVjdGlvblwiKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJHdWFkYW5kbyBlbiBBcHBTZXR0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVJbmZvID0gdGhpcy5nZXRBbGxQbGFuZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIiwgaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiUXVlIGVzdGFyw6EgcGFzYW5kbywgcG9ycXVlIGxvIGVzdG95IGd1YXJkYW5kb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMZXllbmRvIGFwcFNldHRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcnVlYmEpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubW9iaWxlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIGEgbW9iaWxlIGNvbm5lY3Rpb24sIGkuZS4gY2VsbHVsYXIgbmV0d29yayBvciBXQU4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9iaWxlIGNvbm5lY3Rpb25cIik7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJHdWFkYW5kbyBlbiBBcHBTZXR0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVJbmZvID0gdGhpcy5nZXRBbGxQbGFuZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiUXVlIGVzdGFyw6EgcGFzYW5kbywgcG9ycXVlIGxvIGVzdG95IGd1YXJkYW5kb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMZXllbmRvIGFwcFNldHRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcnVlYmEpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVzdGUgbm8gdHJhZSBuYWRhXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxQbGFuZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbihpZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXRQbGFuSWRcIik7XHJcbiAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFsbFBsYW5lcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5hbGxQbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNVID0gdGhpcy5hbGxQbGFuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYW5lc1U7XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgaWQgPSAnTWh5VFNlYUlIM2xUZGdKc3JuSEsnO1xyXG4gICAgICAgIC8vIGNvbnN0IHNhbkZyYW5jaXNjb0RvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gc2FuRnJhbmNpc2NvRG9jdW1lbnQub25TbmFwc2hvdChkb2MgPT4ge1xyXG4gICAgICAgIC8vIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgZGF0YTpcIiwgSlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSkpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdXRQbHVzTGlrZShpZCwgbGlrZSl7XHJcbiAgICAgICAgbGlrZSsrO1xyXG4gICAgICAgIGNvbnN0IExpa2VQbGFuID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgIExpa2VQbGFuLnVwZGF0ZSh7XHJcbiAgICAgICAgbGlrZXNfcmVjaWJpZG9zOiBsaWtlLFxyXG4gICAgICAgIHVwZGF0ZVRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlKCkuRmllbGRWYWx1ZSgpLnNlcnZlclRpbWVzdGFtcCgpXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMaWtlIEFjdGl2b1wiKTtcclxuICAgICAgICB0aGlzLmFkZExpa2UoaWQpO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHV0TWludXNMaWtlKGlkLCBsaWtlKXtcclxuICAgICAgICBsaWtlLS07XHJcbiAgICAgICAgY29uc3QgTGlrZVBsYW4gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgTGlrZVBsYW4udXBkYXRlKHtcclxuICAgICAgICBsaWtlc19yZWNpYmlkb3M6IGxpa2UsXHJcbiAgICAgICAgdXBkYXRlVGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUoKS5GaWVsZFZhbHVlKCkuc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2xpa2UgQWN0aXZvXCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlrZShpZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlrZShpZCl7ICAgXHJcblxyXG4gICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGxldCBjb25maXJtZWQgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgdGhpcy5saWtlc1BsYW4gPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIsXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpa2VzUGxhbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubGlrZXNQbGFuW2ldLmlkID09IGlkKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWtlc1BsYW5baV0uY2xhc3NfbGlrZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbExpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXNQbGFuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29uZmlybWVkKXtcclxuICAgICAgICAgICAgICAgIGxldCBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzX2xpa2VzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5saWtlc1BsYW4ucHVzaChvcHQpO1xyXG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NfbGlrZXM6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxpa2VzUGxhbi5wdXNoKG9wdCk7XHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbExpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXNQbGFuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIpKSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaWtlKGlkKXtcclxuICAgICAgICB0aGlzLmxpa2VzUGxhbiA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIixcIlwiKSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5saWtlc1BsYW4ubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGlrZXNQbGFuW2ldLmlkID09IGlkKXtcclxuICAgICAgICAgICAgICAgdGhpcy5saWtlc1BsYW5baV0uY2xhc3NfbGlrZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpa2VzUGxhbik7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlKCl7XHJcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZSA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIixcIlwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNhY2hlID0gXCJObyBoYXkgbGlrZXNcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdG9yYWdlKCl7XHJcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwiYWxsTGlrZXNcIik7XHJcbiAgICB9XHJcblxyXG5cclxufSAiXX0=