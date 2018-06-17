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
    PlanesServices.prototype.putPlusShare = function (id, share) {
        share++;
        var SharePlan = firebase.firestore().collection("planes").doc(id);
        SharePlan.update({
            total_shared: share,
            updateTimestamp: firebase.firestore().FieldValue().serverTimestamp()
        }).then(function () {
            console.log("Compartir Activo");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbmVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELG1FQUFvRTtBQUNwRSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBY3BFO0lBU0Usd0JBQ2MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUbkIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBUWpDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUFBLGlCQThDRTtRQTdDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLGFBQWE7Z0JBQ3JD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bmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vTW9kZWxvc1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5pbXBvcnQgeyBMaWtlcyB9IGZyb20gXCIuLi9tb2RlbHMvbGlrZXNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNTZXJ2aWNlcyB7XHJcbiAgICBwdWJsaWMgYWxsUGxhbmVzOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgY2FwdHVyZUluZm86IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBsaWtlc1BsYW46IEFycmF5PExpa2VzPiA9IFtdO1xyXG4gICAgcHVibGljIGFsbElkOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXNVOlBsYW5lcztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBwZXJzaXN0OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgdGhpcy5hbGxJZCA9IG5ldyBBcnJheTtcclxuICAgfVxyXG5cclxuICAgZ2V0QWxsUGxhbmVzKCl7ICAgICAgXHJcbiAgICAgICBjb25zb2xlLmxvZyhcImdldEFsbFBsYW5lc1wiKTtcclxuICAgICAgIHRoaXMuYWxsUGxhbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgcGxhbmVzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIik7IFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgcGxhbmVzQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7ICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRlIGFxdWkgc2FsZSBsYSBpbmZvcm1hY2lvblwiKTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzLnB1c2goZG9jLmRhdGEoKSk7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFsbFBsYW5lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkV4aXN0ZSBsaWtlcyBlbiBMb2NhbFN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlrZXNfcmVjaWJpZG9zID0gdGhpcy5nZXRMaWtlKCk7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cobGlrZXNfcmVjaWJpZG9zKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxsaWtlc19yZWNpYmlkb3MubGVuZ3RoO2krKyl7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxpa2VzX3JlY2liaWRvc1tpXS5pZCA9PSB0aGlzLmFsbFBsYW5lc1tqXS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhpc3RlIHVuIExJS0VcIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGlrZXNfcmVjaWJpZG9zW2ldLmNsYXNzX2xpa2VzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzW2pdLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWxpa2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXN0YSBhY3Rpdm8gZWwgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lc1tqXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVzdGEgYWN0aXZvIGVsIGZhbHNlZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsUGxhbmVzW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5hbGxQbGFuZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1kaXNsaWtlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsUGxhbmVzKSk7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICBcclxuXHJcbiAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmV4aW9uKCl7XHJcbiAgICAgICAgLy8gIHJlc3VsdCBpcyBDb25uZWN0aW9uVHlwZSBlbnVtZXJhdGlvbiAobm9uZSwgd2lmaSBvciBtb2JpbGUpXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHlNb2R1bGUuZ2V0Q29ubmVjdGlvblR5cGUoKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgc3dpdGNoIChjb25uZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIG5vIEludGVybmV0IGNvbm5lY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBjb25uZWN0aW9uXCIpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGV5ZW5kbyBhcHBTZXR0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBoYXkgcGxhbmVzIGVuIGVsIFN0b3JhZ2UgYXBwbGljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUud2lmaTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIGEgV2lGaSBjb25uZWN0aW9uLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lmaSBjb25uZWN0aW9uXCIpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkd1YWRhbmRvIGVuIEFwcFNldHRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZUluZm8gPSB0aGlzLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJRdWUgZXN0YXLDoSBwYXNhbmRvLCBwb3JxdWUgbG8gZXN0b3kgZ3VhcmRhbmRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBydWViYSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgYSBtb2JpbGUgY29ubmVjdGlvbiwgaS5lLiBjZWxsdWxhciBuZXR3b3JrIG9yIFdBTi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb2JpbGUgY29ubmVjdGlvblwiKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkd1YWRhbmRvIGVuIEFwcFNldHRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZUluZm8gPSB0aGlzLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJRdWUgZXN0YXLDoSBwYXNhbmRvLCBwb3JxdWUgbG8gZXN0b3kgZ3VhcmRhbmRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBydWViYSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXN0ZSBubyB0cmFlIG5hZGFcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbGxQbGFuZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGFuKGlkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdldFBsYW5JZFwiKTtcclxuICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZihpZCA9PSB0aGlzLmFsbFBsYW5lc1tpXS5pZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1UgPSB0aGlzLmFsbFBsYW5lc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbmVzVTtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBpZCA9ICdNaHlUU2VhSUgzbFRkZ0pzcm5ISyc7XHJcbiAgICAgICAgLy8gY29uc3Qgc2FuRnJhbmNpc2NvRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBzYW5GcmFuY2lzY29Eb2N1bWVudC5vblNuYXBzaG90KGRvYyA9PiB7XHJcbiAgICAgICAgLy8gaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBkYXRhOlwiLCBKU09OLnN0cmluZ2lmeShkb2MuZGF0YSgpKSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1dFBsdXNMaWtlKGlkLCBsaWtlKXtcclxuICAgICAgICBsaWtlKys7XHJcbiAgICAgICAgY29uc3QgTGlrZVBsYW4gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgTGlrZVBsYW4udXBkYXRlKHtcclxuICAgICAgICBsaWtlc19yZWNpYmlkb3M6IGxpa2UsXHJcbiAgICAgICAgdXBkYXRlVGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUoKS5GaWVsZFZhbHVlKCkuc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxpa2UgQWN0aXZvXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlrZShpZCk7XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdXRNaW51c0xpa2UoaWQsIGxpa2Upe1xyXG4gICAgICAgIGxpa2UtLTtcclxuICAgICAgICBjb25zdCBMaWtlUGxhbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIikuZG9jKGlkKTtcclxuICAgICAgICBMaWtlUGxhbi51cGRhdGUoe1xyXG4gICAgICAgICAgICBsaWtlc19yZWNpYmlkb3M6IGxpa2UsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlKCkuRmllbGRWYWx1ZSgpLnNlcnZlclRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2xpa2UgQWN0aXZvXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpa2UoaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dFBsdXNTaGFyZShpZCwgc2hhcmUpe1xyXG4gICAgICAgIHNoYXJlKys7XHJcbiAgICAgICAgY29uc3QgU2hhcmVQbGFuID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihcInBsYW5lc1wiKS5kb2MoaWQpO1xyXG4gICAgICAgIFNoYXJlUGxhbi51cGRhdGUoe1xyXG4gICAgICAgICAgICB0b3RhbF9zaGFyZWQ6IHNoYXJlLFxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZSgpLkZpZWxkVmFsdWUoKS5zZXJ2ZXJUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wYXJ0aXIgQWN0aXZvXCIpOyAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZExpa2UoaWQpeyAgIFxyXG5cclxuICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiKSE9dW5kZWZpbmVkKXtcclxuICAgICAgICBsZXQgY29uZmlybWVkID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIHRoaXMubGlrZXNQbGFuID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiLFwiXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5saWtlc1BsYW4ubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxpa2VzUGxhbltpXS5pZCA9PSBpZCl7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlrZXNQbGFuW2ldLmNsYXNzX2xpa2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxMaWtlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpa2VzUGxhbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWNvbmZpcm1lZCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc19saWtlczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubGlrZXNQbGFuLnB1c2gob3B0KTtcclxuICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbExpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXNQbGFuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGNsYXNzX2xpa2VzOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5saWtlc1BsYW4ucHVzaChvcHQpO1xyXG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxMaWtlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpa2VzUGxhbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbFBsYW5lc1wiKSkpO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlrZShpZCl7XHJcbiAgICAgICAgdGhpcy5saWtlc1BsYW4gPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIsXCJcIikpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubGlrZXNQbGFuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmxpa2VzUGxhbltpXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgIHRoaXMubGlrZXNQbGFuW2ldLmNsYXNzX2xpa2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saWtlc1BsYW4pO1xyXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbExpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXNQbGFuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlrZSgpe1xyXG4gICAgICAgIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsZXQgY2FjaGUgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIsXCJcIikpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZSA9IFwiTm8gaGF5IGxpa2VzXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3RvcmFnZSgpe1xyXG4gICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcImFsbExpa2VzXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0gIl19