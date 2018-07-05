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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbmVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELG1FQUFvRTtBQUNwRSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDL0QsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDbEUsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNsRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUM3RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBY3BFO0lBU0Usd0JBQ2MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUbkIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBUWpDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUFBLGlCQTJDRTtRQTFDRCxzQ0FBc0M7UUFDbkMsSUFB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Q0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1Isd0JBQXdCO1lBQ3hCLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLGdFQUFnRTtZQUNoRSxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2dCQUNSLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO29CQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtvQkFDaEYsQ0FBQztnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELG1DQUFtQztRQUNuQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsdUJBQXVCO0lBRzNCLENBQUM7SUF2VVEsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FXc0IsYUFBTTtPQVZqQixjQUFjLENBNlUxQjtJQUFELHFCQUFDO0NBQUEsQUE3VUQsSUE2VUM7QUE3VVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgQ2FjaGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZVwiKS5DYWNoZTtcclxuY29uc3QgZnJvbU5hdGl2ZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIikuZnJvbU5hdGl2ZVNvdXJjZTtcclxuY29uc3QgZnJvbUZpbGUgPSByZXF1aXJlKFwiaW1hZ2Utc291cmNlXCIpLmZyb21GaWxlO1xyXG5jb25zdCBpbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiKTtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vTW9kZWxvc1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5pbXBvcnQgeyBMaWtlcyB9IGZyb20gXCIuLi9tb2RlbHMvbGlrZXNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNTZXJ2aWNlcyB7XHJcbiAgICBwdWJsaWMgYWxsUGxhbmVzOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgY2FwdHVyZUluZm86IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBsaWtlc1BsYW46IEFycmF5PExpa2VzPiA9IFtdO1xyXG4gICAgcHVibGljIGFsbElkOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXNVOlBsYW5lcztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBwZXJzaXN0OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgdGhpcy5hbGxJZCA9IG5ldyBBcnJheTtcclxuICAgfVxyXG5cclxuICAgZ2V0QWxsUGxhbmVzKCl7ICAgICAgXHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImdldEFsbFBsYW5lc1wiKTsgICAgXHJcbiAgICAgICB0aGlzLmFsbFBsYW5lcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lc0NvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpOyBcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBsYW5lc0NvbGxlY3Rpb24uZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKGAke2RvYy5pZH0gPT4gJHtkb2MuZGF0YSgpfWApOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEZSBhcXVpIHNhbGUgbGEgaW5mb3JtYWNpb25cIik7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcy5wdXNoKGRvYy5kYXRhKCkpOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbGxQbGFuZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiKSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFeGlzdGUgbGlrZXMgZW4gTG9jYWxTdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpa2VzX3JlY2liaWRvcyA9IHRoaXMuZ2V0TGlrZSgpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGxpa2VzX3JlY2liaWRvcyk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8bGlrZXNfcmVjaWJpZG9zLmxlbmd0aDtpKyspeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajx0aGlzLmFsbFBsYW5lcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsaWtlc19yZWNpYmlkb3NbaV0uaWQgPT0gdGhpcy5hbGxQbGFuZXNbal0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkV4aXN0ZSB1biBMSUtFXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxpa2VzX3JlY2liaWRvc1tpXS5jbGFzc19saWtlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lc1tqXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVzdGEgYWN0aXZvIGVsIHRydWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXNbal0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFc3RhIGFjdGl2byBlbCBmYWxzZWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbFBsYW5lc1tpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbFBsYW5lcykpOyAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25leGlvbigpe1xyXG4gICAgICAgIC8vICByZXN1bHQgaXMgQ29ubmVjdGlvblR5cGUgZW51bWVyYXRpb24gKG5vbmUsIHdpZmkgb3IgbW9iaWxlKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gY29ubmVjdGl2aXR5TW9kdWxlLmdldENvbm5lY3Rpb25UeXBlKCk7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpPT57XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29ubmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBubyBJbnRlcm5ldCBjb25uZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY29ubmVjdGlvblwiKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFsbFBsYW5lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gaGF5IHBsYW5lcyBlbiBlbCBTdG9yYWdlIGFwcGxpY2F0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLndpZmk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBhIFdpRmkgY29ubmVjdGlvbi4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpZmkgY29ubmVjdGlvblwiKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJHdWFkYW5kbyBlbiBBcHBTZXR0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVJbmZvID0gdGhpcy5nZXRBbGxQbGFuZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIiwgaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiUXVlIGVzdGFyw6EgcGFzYW5kbywgcG9ycXVlIGxvIGVzdG95IGd1YXJkYW5kb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMZXllbmRvIGFwcFNldHRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcnVlYmEpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubW9iaWxlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIGEgbW9iaWxlIGNvbm5lY3Rpb24sIGkuZS4gY2VsbHVsYXIgbmV0d29yayBvciBXQU4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9iaWxlIGNvbm5lY3Rpb25cIik7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJHdWFkYW5kbyBlbiBBcHBTZXR0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVJbmZvID0gdGhpcy5nZXRBbGxQbGFuZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYXB0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiUXVlIGVzdGFyw6EgcGFzYW5kbywgcG9ycXVlIGxvIGVzdG95IGd1YXJkYW5kb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMZXllbmRvIGFwcFNldHRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcnVlYmEpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVzdGUgbm8gdHJhZSBuYWRhXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxQbGFuZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbihpZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXRQbGFuSWRcIik7XHJcbiAgICAgICAgdGhpcy5hbGxQbGFuZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiLFwiXCIpKTsgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFsbFBsYW5lcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoaWQgPT0gdGhpcy5hbGxQbGFuZXNbaV0uaWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFuZXNVID0gdGhpcy5hbGxQbGFuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYW5lc1U7XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgaWQgPSAnTWh5VFNlYUlIM2xUZGdKc3JuSEsnO1xyXG4gICAgICAgIC8vIGNvbnN0IHNhbkZyYW5jaXNjb0RvY3VtZW50ID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gc2FuRnJhbmNpc2NvRG9jdW1lbnQub25TbmFwc2hvdChkb2MgPT4ge1xyXG4gICAgICAgIC8vIGlmIChkb2MuZXhpc3RzKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgZGF0YTpcIiwgSlNPTi5zdHJpbmdpZnkoZG9jLmRhdGEoKSkpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdXRQbHVzTGlrZShpZCwgbGlrZSl7XHJcbiAgICAgICAgbGlrZSsrO1xyXG4gICAgICAgIGNvbnN0IExpa2VQbGFuID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgIExpa2VQbGFuLnVwZGF0ZSh7XHJcbiAgICAgICAgbGlrZXNfcmVjaWJpZG9zOiBsaWtlLFxyXG4gICAgICAgIHVwZGF0ZVRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlKCkuRmllbGRWYWx1ZSgpLnNlcnZlclRpbWVzdGFtcCgpXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMaWtlIEFjdGl2b1wiKTtcclxuICAgICAgICB0aGlzLmFkZExpa2UoaWQpO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHV0TWludXNMaWtlKGlkLCBsaWtlKXtcclxuICAgICAgICBsaWtlLS07XHJcbiAgICAgICAgY29uc3QgTGlrZVBsYW4gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgTGlrZVBsYW4udXBkYXRlKHtcclxuICAgICAgICAgICAgbGlrZXNfcmVjaWJpZG9zOiBsaWtlLFxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZSgpLkZpZWxkVmFsdWUoKS5zZXJ2ZXJUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEaXNsaWtlIEFjdGl2b1wiKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaWtlKGlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXRQbHVzU2hhcmUoaWQsIHNoYXJlKXtcclxuICAgICAgICBzaGFyZSsrO1xyXG4gICAgICAgIGNvbnN0IFNoYXJlUGxhbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIikuZG9jKGlkKTtcclxuICAgICAgICBTaGFyZVBsYW4udXBkYXRlKHtcclxuICAgICAgICAgICAgdG90YWxfc2hhcmVkOiBzaGFyZSxcclxuICAgICAgICAgICAgdXBkYXRlVGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUoKS5GaWVsZFZhbHVlKCkuc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcGFydGlyIEFjdGl2b1wiKTsgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWtlKGlkKXsgICBcclxuXHJcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1lZCA9IGZhbHNlOyAgICBcclxuICAgICAgICB0aGlzLmxpa2VzUGxhbiA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIixcIlwiKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubGlrZXNQbGFuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5saWtlc1BsYW5baV0uaWQgPT0gaWQpeyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpa2VzUGxhbltpXS5jbGFzc19saWtlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtZWQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfbGlrZXM6IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpa2VzUGxhbi5wdXNoKG9wdCk7XHJcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxMaWtlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpa2VzUGxhbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBjbGFzc19saWtlczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlrZXNQbGFuLnB1c2gob3B0KTtcclxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIikpKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpa2UoaWQpe1xyXG4gICAgICAgIHRoaXMubGlrZXNQbGFuID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiLFwiXCIpKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpa2VzUGxhbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5saWtlc1BsYW5baV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICB0aGlzLmxpa2VzUGxhbltpXS5jbGFzc19saWtlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlrZXNQbGFuKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxMaWtlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpa2VzUGxhbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2UoKXtcclxuICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiKSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IGNhY2hlID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiLFwiXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY2FjaGUgPSBcIk5vIGhheSBsaWtlc1wiO1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGU7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3RvcmFnZSgpe1xyXG4gICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcImFsbExpa2VzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmVjdGlvbigpe1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICAvLyAgcmVzdWx0IGlzIENvbm5lY3Rpb25UeXBlIGVudW1lcmF0aW9uIChub25lLCB3aWZpIG9yIG1vYmlsZSlcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uVHlwZSA9IGNvbm5lY3Rpdml0eU1vZHVsZS5nZXRDb25uZWN0aW9uVHlwZSgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29ubmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBubyBJbnRlcm5ldCBjb25uZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY29ubmVjdGlvblwiKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJObyBjb25uZWN0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUud2lmaTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIGEgV2lGaSBjb25uZWN0aW9uLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lmaSBjb25uZWN0aW9uXCIpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiV2lmaSBjb25uZWN0aW9uXCI7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgYSBtb2JpbGUgY29ubmVjdGlvbiwgaS5lLiBjZWxsdWxhciBuZXR3b3JrIG9yIFdBTi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb2JpbGUgY29ubmVjdGlvblwiKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIk1vYmlsZSBjb25uZWN0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBpbWFnZUNhY2hlKGlkX2ltYWdlbiwgdmlld01vZGVsLCB1cmxfaW1hZ2VuKXtcclxuICAgICAgICAgLy8gPj4gaW1hZ2UtY2FjaGUtY29kZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gbmV3IENhY2hlKCk7XHJcbiAgICAgICAgLy8gbGV0IGhvbGRlciA9IFwifi9pbWFnZXMvXCIgKyBpZF9pbWFnZW4gKyBcIi5qcGdcIjtcclxuICAgICAgICBsZXQgaG9sZGVyID0gXCJ+L2ltYWdlcy9jYXJsb3MuanBnXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coaG9sZGVyKTtcclxuICAgICAgICBjYWNoZS5wbGFjZWhvbGRlciA9IGZyb21GaWxlKGhvbGRlcik7XHJcbiAgICAgICAgY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG5cclxuICAgICAgICAgLy8gc2V0IHRoZSBwbGFjZWhvbGRlciB3aGlsZSB0aGUgZGVzaXJlZCBpbWFnZSBpcyBkb253bG9hZGVkXHJcbiAgICAgICAgdmlld01vZGVsLnNldChcImltYWdlU291cmNlXCIsIGNhY2hlLnBsYWNlaG9sZGVyKTtcclxuXHJcbiAgICAgICAgLy8gRW5hYmxlIGRvd25sb2FkIHdoaWxlIG5vdCBzY3JvbGxpbmdcclxuICAgICAgICBjYWNoZS5lbmFibGVEb3dubG9hZCgpO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGVkSW1hZ2VTb3VyY2U7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdXJsX2ltYWdlbjtcclxuICAgICAgICAvLyBUcnkgdG8gcmVhZCB0aGUgaW1hZ2UgZnJvbSB0aGUgY2FjaGVcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGNhY2hlLmdldCh1cmwpO1xyXG5cclxuICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgLy8gSWYgcHJlc2VudCAtLSB1c2UgaXQuXHJcbiAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gaW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zZXQoXCJpbWFnZVNvdXJjZVwiLCBjYWNoZWRJbWFnZVNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgbm90IHByZXNlbnQgLS0gcmVxdWVzdCBpdHMgZG93bmxvYWQgKyBwdXQgaXQgaW4gdGhlIGNhY2hlLlxyXG4gICAgICAgICAgICBjYWNoZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGtleTogdXJsLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IChpbWFnZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZEltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zZXQoXCJpbWFnZVNvdXJjZVwiLCBjYWNoZWRJbWFnZVNvdXJjZSk7IC8vIHNldCB0aGUgZG93bmxvYWRlZCBpYW1nZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNhYmxlIGRvd25sb2FkIHdoaWxlIHNjcm9sbGluZ1xyXG4gICAgICAgIGNhY2hlLmRpc2FibGVEb3dubG9hZCgpO1xyXG4gICAgICAgIC8vIDw8IGltYWdlLWNhY2hlLWNvZGVzXHJcblxyXG5cclxuICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICBcclxuXHJcblxyXG59IFxyXG5cclxuIl19