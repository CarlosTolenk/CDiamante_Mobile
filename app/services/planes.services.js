"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings");
var Cache = require("tns-core-modules/ui/image-cache").Cache;
var fromNativeSource = require("image-source").fromNativeSource;
var fromFile = require("image-source").fromFile;
var imageSource = require("tns-core-modules/image-source");
var firebase = require("nativescript-plugin-firebase/app");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var connectivityModule = require("tns-core-modules/connectivity");
var PlanesServices = /** @class */ (function () {
    function PlanesServices(ngZone) {
        this.ngZone = ngZone;
        this.allPlanes = [];
        this.allActividad = [];
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
        //    console.log("getAllPlanes");    
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
                                    // console.log("Existe un LIKE");                                
                                    if (likes_recibidos[i].class_likes) {
                                        _this.allPlanes[j].class_likes = "font-awesome ico-like";
                                        // console.log("Esta activo el true");
                                    }
                                    else {
                                        _this.allPlanes[j].class_likes = "font-awesome ico-dislike";
                                        // console.log("Esta activo el falsee");
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
    PlanesServices.prototype.getAllActividad = function () {
        var _this = this;
        this.allActividad = [];
        var actividadCollection = firebase.firestore().collection("actividades");
        this.ngZone.run(function () {
            actividadCollection.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    _this.allActividad.push(doc.data());
                    console.log("Servicio");
                    console.log(_this.allActividad);
                });
                appSettings.setString("allEventos", JSON.stringify(_this.allActividad));
            });
        });
        return this.allActividad;
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
                    // this.getAllActividad();
                    _this.captureInfo = _this.getAllPlanes();
                    // console.log(this.captureInfo);
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
                    // this.getAllActividad();
                    _this.captureInfo = _this.getAllPlanes();
                    // console.dir(this.captureInfo);
                    var data = JSON.stringify(_this.captureInfo);
                    // console.log(data);
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
    PlanesServices.prototype.getActividadId = function (id) {
        console.log("GetActividadId");
        this.allActividad = JSON.parse(appSettings.getString("allEventos", ""));
        console.log(this.allActividad);
        for (var i = 0; i < this.allActividad.length; i++) {
            if (id == this.allActividad[i].id) {
                this.ActividadU = this.allActividad[i];
            }
        }
        console.log(this.ActividadU);
        return this.ActividadU;
    };
    PlanesServices.prototype.putPlusLike = function (id, like) {
        var _this = this;
        like++;
        var LikePlan = firebase.firestore().collection("planes").doc(id);
        LikePlan.update({
            likes_recibidos: like,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
        }).then(function () {
            // console.log("Like Activo");
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
            // console.log("Dislike Activo");
            _this.removeLike(id);
        });
    };
    PlanesServices.prototype.putPlusShare = function (id, share) {
        share++;
        var SharePlan = firebase.firestore().collection("planes").doc(id);
        SharePlan.update({
            total_shared: share,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
        }).then(function () {
            // console.log("Compartir Activo");       
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
    PlanesServices.prototype.getConection = function () {
        var result = '';
        //  result is ConnectionType enumeration (none, wifi or mobile)
        var connectionType = connectivityModule.getConnectionType();
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
    };
    PlanesServices.prototype.imageCache = function (id_imagen, viewModel, url_imagen) {
        // >> image-cache-code
        var cache = new Cache();
        // let holder = "~/images/" + id_imagen + ".jpg";
        var holder = "~/images/carlos.jpg";
        console.log(holder);
        cache.placeholder = fromFile(holder);
        cache.maxRequests = 5;
        // set the placeholder while the desired image is donwloaded
        viewModel.set("imageSource", cache.placeholder);
        // Enable download while not scrolling
        cache.enableDownload();
        var cachedImageSource;
        var url = url_imagen;
        // Try to read the image from the cache
        var image = cache.get(url);
        if (image) {
            // If present -- use it.
            cachedImageSource = imageSource.fromNativeSource(image);
            viewModel.set("imageSource", cachedImageSource);
        }
        else {
            // If not present -- request its download + put it in the cache.
            cache.push({
                key: url,
                url: url,
                completed: function (image, key) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbmVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELG1FQUFvRTtBQUNwRSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0QsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbEUsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNsRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUM3RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBV3BFO0lBV0Usd0JBQ2MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYbkIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsaUJBQVksR0FBcUIsRUFBRSxDQUFDO1FBQ3BDLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUM3QixVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQVNqQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFBQSxp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LEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4Qix1QkFBdUI7SUFHM0IsQ0FBQztJQXhXUSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQWFzQixhQUFNO09BWmpCLGNBQWMsQ0E4VzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlXRCxJQThXQztBQTlXWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xyXG5jb25zdCBDYWNoZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlLWNhY2hlXCIpLkNhY2hlO1xyXG5jb25zdCBmcm9tTmF0aXZlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKS5mcm9tTmF0aXZlU291cmNlO1xyXG5jb25zdCBmcm9tRmlsZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIikuZnJvbUZpbGU7XHJcbmNvbnN0IGltYWdlU291cmNlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmNvbnN0IGNvbm5lY3Rpdml0eU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiKTtcclxuXHJcblxyXG4vL01vZGVsb3NcclxuaW1wb3J0IHsgUGxhbmVzIH0gZnJvbSBcIi4uL21vZGVscy9wbGFuZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZpZGFkIH0gZnJvbSBcIi4uL21vZGVscy9hY3RpdmlkYWRcIjtcclxuaW1wb3J0IHsgTGlrZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2xpa2VzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhbmVzU2VydmljZXMge1xyXG4gICAgcHVibGljIGFsbFBsYW5lczogQXJyYXk8UGxhbmVzPiA9IFtdO1xyXG4gICAgcHVibGljIGFsbEFjdGl2aWRhZDogQXJyYXk8QWN0aXZpZGFkPiA9IFtdO1xyXG4gICAgcHVibGljIGNhcHR1cmVJbmZvOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgbGlrZXNQbGFuOiBBcnJheTxMaWtlcz4gPSBbXTtcclxuICAgIHB1YmxpYyBhbGxJZDogQXJyYXk8UGxhbmVzPiA9IFtdO1xyXG4gICAgcHVibGljIHBydWViYTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzVTpQbGFuZXM7XHJcbiAgICBwdWJsaWMgQWN0aXZpZGFkVTpBY3RpdmlkYWQ7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgcGVyc2lzdDogZmFsc2VcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBpbml0aWFsaXplZFwiKTtcclxuICAgIH0pOyAgICBcclxuICAgIHRoaXMuYWxsSWQgPSBuZXcgQXJyYXk7XHJcbiAgIH1cclxuXHJcbiAgIGdldEFsbFBsYW5lcygpeyAgICAgIFxyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJnZXRBbGxQbGFuZXNcIik7ICAgIFxyXG4gICAgICAgdGhpcy5hbGxQbGFuZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBwbGFuZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKTsgXHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwbGFuZXNDb2xsZWN0aW9uLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihgJHtkb2MuaWR9ID0+ICR7ZG9jLmRhdGEoKX1gKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGUgYXF1aSBzYWxlIGxhIGluZm9ybWFjaW9uXCIpOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXMucHVzaChkb2MuZGF0YSgpKTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXhpc3RlIGxpa2VzIGVuIExvY2FsU3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaWtlc19yZWNpYmlkb3MgPSB0aGlzLmdldExpa2UoKTsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhsaWtlc19yZWNpYmlkb3MpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPGxpa2VzX3JlY2liaWRvcy5sZW5ndGg7aSsrKXsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8dGhpcy5hbGxQbGFuZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGlrZXNfcmVjaWJpZG9zW2ldLmlkID09IHRoaXMuYWxsUGxhbmVzW2pdLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFeGlzdGUgdW4gTElLRVwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsaWtlc19yZWNpYmlkb3NbaV0uY2xhc3NfbGlrZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXNbal0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFc3RhIGFjdGl2byBlbCB0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzW2pdLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXN0YSBhY3Rpdm8gZWwgZmFsc2VlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hbGxQbGFuZXNbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFsbFBsYW5lcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzW2ldLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbFBsYW5lcykpOyAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBY3RpdmlkYWQoKXtcclxuICAgICAgICB0aGlzLmFsbEFjdGl2aWRhZCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2aWRhZENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwiYWN0aXZpZGFkZXNcIik7IFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgYWN0aXZpZGFkQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxBY3RpdmlkYWQucHVzaChkb2MuZGF0YSgpKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFsbEFjdGl2aWRhZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbEV2ZW50b3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxBY3RpdmlkYWQpKTtcclxuICAgICAgICAgICAgfSk7ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxBY3RpdmlkYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZXhpb24oKXtcclxuICAgICAgICAvLyAgcmVzdWx0IGlzIENvbm5lY3Rpb25UeXBlIGVudW1lcmF0aW9uIChub25lLCB3aWZpIG9yIG1vYmlsZSlcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uVHlwZSA9IGNvbm5lY3Rpdml0eU1vZHVsZS5nZXRDb25uZWN0aW9uVHlwZSgpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbm5lY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5ub25lOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgbm8gSW50ZXJuZXQgY29ubmVjdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNvbm5lY3Rpb25cIik7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiKSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMZXllbmRvIGFwcFNldHRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbGxQbGFuZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGhheSBwbGFuZXMgZW4gZWwgU3RvcmFnZSBhcHBsaWNhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS53aWZpOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgYSBXaUZpIGNvbm5lY3Rpb24uICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaWZpIGNvbm5lY3Rpb25cIik7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR3VhZGFuZG8gZW4gQXBwU2V0dGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRBbGxBY3RpdmlkYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlSW5mbyA9IHRoaXMuZ2V0QWxsUGxhbmVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FwdHVyZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2FwdHVyZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsIGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlF1ZSBlc3RhcsOhIHBhc2FuZG8sIHBvcnF1ZSBsbyBlc3RveSBndWFyZGFuZG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGV5ZW5kbyBhcHBTZXR0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJ1ZWJhKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBhIG1vYmlsZSBjb25uZWN0aW9uLCBpLmUuIGNlbGx1bGFyIG5ldHdvcmsgb3IgV0FOLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vYmlsZSBjb25uZWN0aW9uXCIpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR3VhZGFuZG8gZW4gQXBwU2V0dGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRBbGxBY3RpdmlkYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlSW5mbyA9IHRoaXMuZ2V0QWxsUGxhbmVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuY2FwdHVyZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY2FwdHVyZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlF1ZSBlc3RhcsOhIHBhc2FuZG8sIHBvcnF1ZSBsbyBlc3RveSBndWFyZGFuZG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGV5ZW5kbyBhcHBTZXR0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJ1ZWJhKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFc3RlIG5vIHRyYWUgbmFkYVwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFsbFBsYW5lcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYW4oaWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0UGxhbklkXCIpO1xyXG4gICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5hbGxQbGFuZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKGlkID09IHRoaXMuYWxsUGxhbmVzW2ldLmlkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzVSA9IHRoaXMuYWxsUGxhbmVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wbGFuZXNVO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGlkID0gJ01oeVRTZWFJSDNsVGRnSnNybkhLJztcclxuICAgICAgICAvLyBjb25zdCBzYW5GcmFuY2lzY29Eb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIikuZG9jKGlkKTtcclxuICAgICAgICAvLyBjb25zdCB1bnN1YnNjcmliZSA9IHNhbkZyYW5jaXNjb0RvY3VtZW50Lm9uU25hcHNob3QoZG9jID0+IHtcclxuICAgICAgICAvLyBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IGRhdGE6XCIsIEpTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCkpKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpZGFkSWQoaWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0QWN0aXZpZGFkSWRcIik7XHJcbiAgICAgICAgdGhpcy5hbGxBY3RpdmlkYWQgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbEV2ZW50b3NcIiwgXCJcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWxsQWN0aXZpZGFkKTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsQWN0aXZpZGFkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZihpZCA9PSB0aGlzLmFsbEFjdGl2aWRhZFtpXS5pZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFjdGl2aWRhZFUgPSB0aGlzLmFsbEFjdGl2aWRhZFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkFjdGl2aWRhZFUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLkFjdGl2aWRhZFU7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0UGx1c0xpa2UoaWQsIGxpa2Upe1xyXG4gICAgICAgIGxpa2UrKztcclxuICAgICAgICBjb25zdCBMaWtlUGxhbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIikuZG9jKGlkKTtcclxuICAgICAgICBMaWtlUGxhbi51cGRhdGUoe1xyXG4gICAgICAgIGxpa2VzX3JlY2liaWRvczogbGlrZSxcclxuICAgICAgICB1cGRhdGVUaW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZSgpLkZpZWxkVmFsdWUoKS5zZXJ2ZXJUaW1lc3RhbXAoKVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGlrZSBBY3Rpdm9cIik7XHJcbiAgICAgICAgdGhpcy5hZGRMaWtlKGlkKTtcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1dE1pbnVzTGlrZShpZCwgbGlrZSl7XHJcbiAgICAgICAgbGlrZS0tO1xyXG4gICAgICAgIGNvbnN0IExpa2VQbGFuID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgIExpa2VQbGFuLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGxpa2VzX3JlY2liaWRvczogbGlrZSxcclxuICAgICAgICAgICAgdXBkYXRlVGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUoKS5GaWVsZFZhbHVlKCkuc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGlzbGlrZSBBY3Rpdm9cIik7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlrZShpZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0UGx1c1NoYXJlKGlkLCBzaGFyZSl7XHJcbiAgICAgICAgc2hhcmUrKztcclxuICAgICAgICBjb25zdCBTaGFyZVBsYW4gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgU2hhcmVQbGFuLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRvdGFsX3NoYXJlZDogc2hhcmUsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlKCkuRmllbGRWYWx1ZSgpLnNlcnZlclRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbXBhcnRpciBBY3Rpdm9cIik7ICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlrZShpZCl7ICAgXHJcblxyXG4gICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgIGxldCBjb25maXJtZWQgPSBmYWxzZTsgICAgXHJcbiAgICAgICAgdGhpcy5saWtlc1BsYW4gPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIsXCJcIikpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpa2VzUGxhbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubGlrZXNQbGFuW2ldLmlkID09IGlkKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWtlc1BsYW5baV0uY2xhc3NfbGlrZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbExpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXNQbGFuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29uZmlybWVkKXtcclxuICAgICAgICAgICAgICAgIGxldCBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzX2xpa2VzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5saWtlc1BsYW4ucHVzaChvcHQpO1xyXG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NfbGlrZXM6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxpa2VzUGxhbi5wdXNoKG9wdCk7XHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbExpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXNQbGFuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIpKSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaWtlKGlkKXtcclxuICAgICAgICB0aGlzLmxpa2VzUGxhbiA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIixcIlwiKSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5saWtlc1BsYW4ubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGlrZXNQbGFuW2ldLmlkID09IGlkKXtcclxuICAgICAgICAgICAgICAgdGhpcy5saWtlc1BsYW5baV0uY2xhc3NfbGlrZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpa2VzUGxhbik7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlKCl7XHJcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZSA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIixcIlwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNhY2hlID0gXCJObyBoYXkgbGlrZXNcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVN0b3JhZ2UoKXtcclxuICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoXCJhbGxMaWtlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25lY3Rpb24oKXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgLy8gIHJlc3VsdCBpcyBDb25uZWN0aW9uVHlwZSBlbnVtZXJhdGlvbiAobm9uZSwgd2lmaSBvciBtb2JpbGUpXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHlNb2R1bGUuZ2V0Q29ubmVjdGlvblR5cGUoKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbm5lY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5ub25lOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgbm8gSW50ZXJuZXQgY29ubmVjdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNvbm5lY3Rpb25cIik7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiTm8gY29ubmVjdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLndpZmk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBhIFdpRmkgY29ubmVjdGlvbi4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpZmkgY29ubmVjdGlvblwiKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIldpZmkgY29ubmVjdGlvblwiOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubW9iaWxlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIGEgbW9iaWxlIGNvbm5lY3Rpb24sIGkuZS4gY2VsbHVsYXIgbmV0d29yayBvciBXQU4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9iaWxlIGNvbm5lY3Rpb25cIik7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJNb2JpbGUgY29ubmVjdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgaW1hZ2VDYWNoZShpZF9pbWFnZW4sIHZpZXdNb2RlbCwgdXJsX2ltYWdlbil7XHJcbiAgICAgICAgIC8vID4+IGltYWdlLWNhY2hlLWNvZGVcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG4gICAgICAgIC8vIGxldCBob2xkZXIgPSBcIn4vaW1hZ2VzL1wiICsgaWRfaW1hZ2VuICsgXCIuanBnXCI7XHJcbiAgICAgICAgbGV0IGhvbGRlciA9IFwifi9pbWFnZXMvY2FybG9zLmpwZ1wiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvbGRlcik7XHJcbiAgICAgICAgY2FjaGUucGxhY2Vob2xkZXIgPSBmcm9tRmlsZShob2xkZXIpO1xyXG4gICAgICAgIGNhY2hlLm1heFJlcXVlc3RzID0gNTtcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgcGxhY2Vob2xkZXIgd2hpbGUgdGhlIGRlc2lyZWQgaW1hZ2UgaXMgZG9ud2xvYWRlZFxyXG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJpbWFnZVNvdXJjZVwiLCBjYWNoZS5wbGFjZWhvbGRlcik7XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZSBkb3dubG9hZCB3aGlsZSBub3Qgc2Nyb2xsaW5nXHJcbiAgICAgICAgY2FjaGUuZW5hYmxlRG93bmxvYWQoKTtcclxuXHJcbiAgICAgICAgbGV0IGNhY2hlZEltYWdlU291cmNlO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHVybF9pbWFnZW47XHJcbiAgICAgICAgLy8gVHJ5IHRvIHJlYWQgdGhlIGltYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjYWNoZS5nZXQodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHByZXNlbnQgLS0gdXNlIGl0LlxyXG4gICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGltYWdlU291cmNlLmZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc2V0KFwiaW1hZ2VTb3VyY2VcIiwgY2FjaGVkSW1hZ2VTb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIElmIG5vdCBwcmVzZW50IC0tIHJlcXVlc3QgaXRzIGRvd25sb2FkICsgcHV0IGl0IGluIHRoZSBjYWNoZS5cclxuICAgICAgICAgICAgY2FjaGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IHVybCxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiAoaW1hZ2UsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZWRJbWFnZVNvdXJjZSA9IGZyb21OYXRpdmVTb3VyY2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3TW9kZWwuc2V0KFwiaW1hZ2VTb3VyY2VcIiwgY2FjaGVkSW1hZ2VTb3VyY2UpOyAvLyBzZXQgdGhlIGRvd25sb2FkZWQgaWFtZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSBkb3dubG9hZCB3aGlsZSBzY3JvbGxpbmdcclxuICAgICAgICBjYWNoZS5kaXNhYmxlRG93bmxvYWQoKTtcclxuICAgICAgICAvLyA8PCBpbWFnZS1jYWNoZS1jb2Rlc1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcblxyXG5cclxufSBcclxuXHJcbiJdfQ==