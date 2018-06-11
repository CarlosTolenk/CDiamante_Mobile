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
        var planesCollection = firebase.firestore().collection("planes");
        this.ngZone.run(function () {
            planesCollection.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // console.dir(`${doc.id} => ${doc.data()}`); 
                    _this.allId.push(doc.data());
                    _this.allPlanes.push(doc.data());
                    // console.log(this.allPlanes)          
                });
            });
        });
        // appSettings.setString("allPlanes", JSON.stringify(this.allPlanes));
        // return this.allPlanes;          
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
                    // console.log("No connection");    
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
                    // console.log("Wifi connection");               
                    // console.log("Guadando en AppSetting");
                    var info = JSON.stringify(_this.allPlanes);
                    // console.log(info);
                    appSettings.setString("allPlanes", info);
                    // appSettings.setString("allPlanes","Que estará pasando, porque lo estoy guardando");
                    _this.allPlanes = JSON.parse(appSettings.getString("allPlanes", ""));
                    // console.log("Leyendo appSetting")
                    // console.log(this.prueba);
                    break;
                case connectivityModule.connectionType.mobile:
                    // Denotes a mobile connection, i.e. cellular network or WAN.
                    // console.log("Mobile connection");  
                    // console.log("Guadando en AppSetting");
                    var data = JSON.stringify(_this.allPlanes);
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
        return this.allPlanes;
    };
    PlanesServices.prototype.getPlan = function (id) {
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
    PlanesServices = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], PlanesServices);
    return PlanesServices;
}());
exports.PlanesServices = PlanesServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbmVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELG1FQUFvRTtBQUNwRSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBV3BFO0lBTUUsd0JBQ2MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFObkIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFPakMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQUEsaUJBZ0JFO1FBZkcsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsYUFBYTtnQkFDckMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQ3JCLDhDQUE4QztvQkFDOUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxTQUFT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ckMsRUFBRSxDQUFBLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFHcEIsbUNBQW1DO1FBQ25DLGtGQUFrRjtRQUNsRiwrREFBK0Q7UUFDL0Qsb0JBQW9CO1FBQ3BCLGlFQUFpRTtRQUNqRSxXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLElBQUk7UUFDSixNQUFNO0lBRVYsQ0FBQztJQTlHUSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQVFzQixhQUFNO09BUGpCLGNBQWMsQ0ErRzFCO0lBQUQscUJBQUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJ1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmNvbnN0IGNvbm5lY3Rpdml0eU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiKTtcclxuXHJcblxyXG5cclxuXHJcbi8vTW9kZWxvc1xyXG5pbXBvcnQgeyBQbGFuZXMgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYW5lc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYW5lc1NlcnZpY2VzIHtcclxuICAgIHB1YmxpYyBhbGxQbGFuZXM6IEFycmF5PFBsYW5lcz4gPSBbXTtcclxuICAgIHB1YmxpYyBhbGxJZDogQXJyYXk8UGxhbmVzPiA9IFtdO1xyXG4gICAgcHVibGljIHBydWViYTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxhbmVzVTpQbGFuZXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBwZXJzaXN0OiBmYWxzZVxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGluaXRpYWxpemVkXCIpO1xyXG4gICAgfSk7ICAgIFxyXG4gICAgdGhpcy5hbGxJZCA9IG5ldyBBcnJheTtcclxuICAgfVxyXG5cclxuICAgZ2V0QWxsUGxhbmVzKCl7ICAgICAgXHJcbiAgICAgICAgY29uc3QgcGxhbmVzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIik7IFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgcGxhbmVzQ29sbGVjdGlvbi5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsSWQucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcy5wdXNoKGRvYy5kYXRhKCkpOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hbGxQbGFuZXMpICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICAgICAgLy8gYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsUGxhbmVzKSk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLmFsbFBsYW5lczsgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbFBsYW5lcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZXhpb24oKXtcclxuXHJcbiAgICAgICAgLy8gIHJlc3VsdCBpcyBDb25uZWN0aW9uVHlwZSBlbnVtZXJhdGlvbiAobm9uZSwgd2lmaSBvciBtb2JpbGUpXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHlNb2R1bGUuZ2V0Q29ubmVjdGlvblR5cGUoKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgc3dpdGNoIChjb25uZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZW5vdGVzIG5vIEludGVybmV0IGNvbm5lY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJObyBjb25uZWN0aW9uXCIpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIikhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGV5ZW5kbyBhcHBTZXR0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBoYXkgcGxhbmVzIGVuIGVsIFN0b3JhZ2UgYXBwbGljYXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5TW9kdWxlLmNvbm5lY3Rpb25UeXBlLndpZmk6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVub3RlcyBhIFdpRmkgY29ubmVjdGlvbi4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIldpZmkgY29ubmVjdGlvblwiKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJHdWFkYW5kbyBlbiBBcHBTZXR0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuYWxsUGxhbmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFsbFBsYW5lc1wiLCBpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJRdWUgZXN0YXLDoSBwYXNhbmRvLCBwb3JxdWUgbG8gZXN0b3kgZ3VhcmRhbmRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBsYW5lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxleWVuZG8gYXBwU2V0dGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBydWViYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHlNb2R1bGUuY29ubmVjdGlvblR5cGUubW9iaWxlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbm90ZXMgYSBtb2JpbGUgY29ubmVjdGlvbiwgaS5lLiBjZWxsdWxhciBuZXR3b3JrIG9yIFdBTi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJNb2JpbGUgY29ubmVjdGlvblwiKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkd1YWRhbmRvIGVuIEFwcFNldHRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxQbGFuZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWxsUGxhbmVzXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlF1ZSBlc3RhcsOhIHBhc2FuZG8sIHBvcnF1ZSBsbyBlc3RveSBndWFyZGFuZG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGV5ZW5kbyBhcHBTZXR0aW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJ1ZWJhKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGxhbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYW4oaWQpe1xyXG4gICAgICAgIHRoaXMuYWxsUGxhbmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbGxQbGFuZXNcIixcIlwiKSk7ICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5hbGxQbGFuZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKGlkID09IHRoaXMuYWxsUGxhbmVzW2ldLmlkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbmVzVSA9IHRoaXMuYWxsUGxhbmVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wbGFuZXNVO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGlkID0gJ01oeVRTZWFJSDNsVGRnSnNybkhLJztcclxuICAgICAgICAvLyBjb25zdCBzYW5GcmFuY2lzY29Eb2N1bWVudCA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oXCJwbGFuZXNcIikuZG9jKGlkKTtcclxuICAgICAgICAvLyBjb25zdCB1bnN1YnNjcmliZSA9IHNhbkZyYW5jaXNjb0RvY3VtZW50Lm9uU25hcHNob3QoZG9jID0+IHtcclxuICAgICAgICAvLyBpZiAoZG9jLmV4aXN0cykge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IGRhdGE6XCIsIEpTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCkpKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgXHJcbiAgICB9XHJcbn0gIl19