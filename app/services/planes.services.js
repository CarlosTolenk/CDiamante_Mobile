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
                    _this.allPlanes.push(doc.data());
                    // console.log(this.allPlanes)     
                    appSettings.setString("allPlanes", JSON.stringify(_this.allPlanes));
                });
            });
        });
        // if(appSettings.getString("allLikes")!=undefined){
        //     let likes_recibidos =  this.getLike();
        //     for(let i=0;i<this.allPlanes.length;i++){
        //         if(likes_recibidos.id == this.allPlanes[i].id){
        //             this.allPlanes[i].class_likes = "font-awesome ico-like";
        //         }
        //         else{
        //             this.allPlanes[i].class_likes = "font-awesome ico-dislike";
        //         }
        //     }
        // }else{
        //     for(let i=0;i<this.allPlanes.length;i++){
        //         this.allPlanes[i].class_likes = "font-awesome ico-dislike";
        //     }
        // }
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
        var cache = JSON.parse(appSettings.getString("allLikes", ""));
        return cache;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbmVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELG1FQUFvRTtBQUNwRSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBY3BFO0lBU0Usd0JBQ2MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUbkIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBUWpDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDbkIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUFBLGlCQW1DRTtRQWxDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNaLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLGFBQWE7Z0JBQ3JD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Q0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUEzTlEsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FXc0IsYUFBTTtPQVZqQixjQUFjLENBOE4xQjtJQUFELHFCQUFDO0NBQUEsQUE5TkQsSUE4TkM7QUE5Tlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncydcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5jb25zdCBjb25uZWN0aXZpdHlNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vTW9kZWxvc1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5pbXBvcnQgeyBMaWtlcyB9IGZyb20gXCIuLi9tb2RlbHMvbGlrZXNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNTZXJ2aWNlcyB7XHJcbiAgICBwdWJsaWMgYWxsUGxhbmVzOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgY2FwdHVyZUluZm86IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBsaWtlc1BsYW46IEFycmF5PExpa2VzPiA9IFtdO1xyXG4gICAgcHVibGljIGFsbElkOiBBcnJheTxQbGFuZXM+ID0gW107XHJcbiAgICBwdWJsaWMgcHJ1ZWJhOnN0cmluZztcclxuICAgIHB1YmxpYyBwbGFuZXNVOlBsYW5lcztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBwZXJzaXN0OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgdGhpcy5hbGxJZCA9IG5ldyBBcnJheTtcclxuICAgfVxyXG5cclxuICAgZ2V0QWxsUGxhbmVzKCl7ICAgICAgXHJcbiAgICAgICBjb25zb2xlLmxvZyhcImdldEFsbFBsYW5lc1wiKTtcclxuICAgICAgIHRoaXMuYWxsUGxhbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgcGxhbmVzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIik7IFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgcGxhbmVzQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzLnB1c2goZG9jLmRhdGEoKSk7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFsbFBsYW5lcykgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbFBsYW5lcykpOyAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgIC8vIGlmKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIpIT11bmRlZmluZWQpe1xyXG4gICAgICAgIC8vICAgICBsZXQgbGlrZXNfcmVjaWJpZG9zID0gIHRoaXMuZ2V0TGlrZSgpO1xyXG4gICAgICAgIC8vICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICAgICAgaWYobGlrZXNfcmVjaWJpZG9zLmlkID09IHRoaXMuYWxsUGxhbmVzW2ldLmlkKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lc1tpXS5jbGFzc19saWtlcyA9IFwiZm9udC1hd2Vzb21lIGljby1saWtlXCI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBlbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzW2ldLmNsYXNzX2xpa2VzID0gXCJmb250LWF3ZXNvbWUgaWNvLWRpc2xpa2VcIjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxQbGFuZXNbaV0uY2xhc3NfbGlrZXMgPSBcImZvbnQtYXdlc29tZSBpY28tZGlzbGlrZVwiO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxQbGFuZXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmV4aW9uKCl7XHJcbiAgICAgICAgLy8gIHJlc3VsdCBpcyBDb25uZWN0aW9uVHlwZSBlbnVtZXJhdGlvbiAobm9uZSwgd2lmaSBvciBtb2JpbGUpXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHlNb2R1bGUuZ2V0Q29ubmVjdGlvblR5cGUoKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgc3dpdGNoIChjb25uZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIG5vIEludGVybmV0IGNvbm5lY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBjb25uZWN0aW9uXCIpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGV5ZW5kbyBhcHBTZXR0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBoYXkgcGxhbmVzIGVuIGVsIFN0b3JhZ2UgYXBwbGljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUud2lmaTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIGEgV2lGaSBjb25uZWN0aW9uLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2lmaSBjb25uZWN0aW9uXCIpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkd1YWRhbmRvIGVuIEFwcFNldHRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZUluZm8gPSB0aGlzLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJRdWUgZXN0YXLDoSBwYXNhbmRvLCBwb3JxdWUgbG8gZXN0b3kgZ3VhcmRhbmRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBydWViYSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eU1vZHVsZS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgYSBtb2JpbGUgY29ubmVjdGlvbiwgaS5lLiBjZWxsdWxhciBuZXR3b3JrIG9yIFdBTi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb2JpbGUgY29ubmVjdGlvblwiKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkd1YWRhbmRvIGVuIEFwcFNldHRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZUluZm8gPSB0aGlzLmdldEFsbFBsYW5lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcih0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcHR1cmVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJRdWUgZXN0YXLDoSBwYXNhbmRvLCBwb3JxdWUgbG8gZXN0b3kgZ3VhcmRhbmRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBydWViYSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRXN0ZSBubyB0cmFlIG5hZGFcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbGxQbGFuZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGFuKGlkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdldFBsYW5JZFwiKTtcclxuICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpOyAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuYWxsUGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZihpZCA9PSB0aGlzLmFsbFBsYW5lc1tpXS5pZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW5lc1UgPSB0aGlzLmFsbFBsYW5lc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbmVzVTtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBpZCA9ICdNaHlUU2VhSUgzbFRkZ0pzcm5ISyc7XHJcbiAgICAgICAgLy8gY29uc3Qgc2FuRnJhbmNpc2NvRG9jdW1lbnQgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgLy8gY29uc3QgdW5zdWJzY3JpYmUgPSBzYW5GcmFuY2lzY29Eb2N1bWVudC5vblNuYXBzaG90KGRvYyA9PiB7XHJcbiAgICAgICAgLy8gaWYgKGRvYy5leGlzdHMpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBkYXRhOlwiLCBKU09OLnN0cmluZ2lmeShkb2MuZGF0YSgpKSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1dFBsdXNMaWtlKGlkLCBsaWtlKXtcclxuICAgICAgICBsaWtlKys7XHJcbiAgICAgICAgY29uc3QgTGlrZVBsYW4gPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwicGxhbmVzXCIpLmRvYyhpZCk7XHJcbiAgICAgICAgTGlrZVBsYW4udXBkYXRlKHtcclxuICAgICAgICBsaWtlc19yZWNpYmlkb3M6IGxpa2UsXHJcbiAgICAgICAgdXBkYXRlVGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUoKS5GaWVsZFZhbHVlKCkuc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxpa2UgQWN0aXZvXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlrZShpZCk7XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdXRNaW51c0xpa2UoaWQsIGxpa2Upe1xyXG4gICAgICAgIGxpa2UtLTtcclxuICAgICAgICBjb25zdCBMaWtlUGxhbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIikuZG9jKGlkKTtcclxuICAgICAgICBMaWtlUGxhbi51cGRhdGUoe1xyXG4gICAgICAgIGxpa2VzX3JlY2liaWRvczogbGlrZSxcclxuICAgICAgICB1cGRhdGVUaW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZSgpLkZpZWxkVmFsdWUoKS5zZXJ2ZXJUaW1lc3RhbXAoKVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlzbGlrZSBBY3Rpdm9cIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaWtlKGlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWtlKGlkKXsgICBcclxuXHJcbiAgICAgICAgaWYoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1lZCA9IGZhbHNlOyAgICBcclxuICAgICAgICB0aGlzLmxpa2VzUGxhbiA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsTGlrZXNcIixcIlwiKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubGlrZXNQbGFuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5saWtlc1BsYW5baV0uaWQgPT0gaWQpeyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpa2VzUGxhbltpXS5jbGFzc19saWtlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtZWQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfbGlrZXM6IHRydWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpa2VzUGxhbi5wdXNoKG9wdCk7XHJcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxMaWtlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpa2VzUGxhbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBjbGFzc19saWtlczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMubGlrZXNQbGFuLnB1c2gob3B0KTtcclxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsTGlrZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saWtlc1BsYW4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIikpKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpa2UoaWQpe1xyXG4gICAgICAgIHRoaXMubGlrZXNQbGFuID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxMaWtlc1wiLFwiXCIpKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpa2VzUGxhbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5saWtlc1BsYW5baV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICB0aGlzLmxpa2VzUGxhbltpXS5jbGFzc19saWtlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlrZXNQbGFuKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxMaWtlc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpa2VzUGxhbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2UoKXtcclxuICAgICAgICBsZXQgY2FjaGUgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsbExpa2VzXCIsXCJcIikpO1xyXG4gICAgICAgIHJldHVybiBjYWNoZTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTdG9yYWdlKCl7XHJcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKFwiYWxsTGlrZXNcIik7XHJcbiAgICB9XHJcblxyXG5cclxufSAiXX0=