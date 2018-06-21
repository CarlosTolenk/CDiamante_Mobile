"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var Toast = require("nativescript-toast");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("TNSSlider", function () { return require("nativescript-slider").Slider; });
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.accion = String.fromCharCode(0xf04b);
        this.duration = 5;
        // Use the constructor to inject services.
        this.duration = 0;
        this.timeString = "--:--";
        this.second = -5;
        this.seconds = "--";
        this.minutes = "--";
        this.clockDisplay = this.minutes + ":" + this.seconds;
        this.data = this.second.toString();
        this.live = 'Sin Conexión';
        this._player = new nativescript_audio_1.TNSPlayer();
    }
    RadioComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
        var _this = this;
        console.log("Init RADIO");
        this._player.debug = false; // set true to enable TNSPlayer console logs for debugging.
        this._player
            .initFromFile({
            audioFile: 'http://radio7.domint.net:8194/;stream.mp3',
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        })
            .then(function () {
            _this._player.getAudioTrackDuration().then(function (duration) {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds    
                _this._player.pause();
                console.log("song duration:", duration);
                _this.accion = String.fromCharCode(0xf04b);
                _this.volumen = _this._player.volume;
                if (duration == '-1' || duration == '0') {
                    _this.live = "Live Broadcast";
                }
            });
        });
    };
    RadioComponent.prototype.togglePlay = function () {
        if (this.live == "Live Broadcast") {
            if (this._player.isAudioPlaying()) {
                this._player.pause();
                this.accion = String.fromCharCode(0xf04b);
                this.stopTick();
            }
            else {
                this._player.play();
                this.accion = String.fromCharCode(0xf04c);
                //   this._startVolumeTracking();         
                console.log("Inicio del timer");
                this.timeString = "00:00";
                this.tickTick();
            }
        }
        else {
            console.log("No Conexión");
            Toast.makeText("No Hay Conexión", "long").show();
        }
    };
    RadioComponent.prototype._trackComplete = function (args) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
    };
    RadioComponent.prototype._trackError = function (args) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
    };
    RadioComponent.prototype.tickTick = function () {
        var _this = this;
        // if(this.duration >= 0){
        var myVar = setInterval(function () {
            _this.duration = _this.duration + 1;
            if (_this.duration <= 0) {
                clearInterval(_this.interval);
            }
            _this.interval = myVar;
            _this.volumen = _this._player.volume;
            if (Math.abs(_this.duration % 60) < 10) {
                _this.seconds = "0" + Math.abs(_this.duration % 60);
            }
            else {
                _this.seconds = "" + parseInt((Math.abs(_this.duration % 60)).toString(), 10);
            }
            if (Math.abs(_this.duration / 60) < 10) {
                _this.minutes = "0" + parseInt("" + Math.abs(_this.duration / 60), 10);
            }
            else {
                _this.minutes = "" + parseInt(Math.abs((_this.duration / 60)).toString(), 10);
            }
            _this.clockDisplay = _this.minutes + ":" + _this.seconds;
        }, 1000);
        // }
    };
    RadioComponent.prototype.stopTick = function () {
        console.log("Parando");
        console.log(Math.abs(this.duration));
        clearInterval(this.interval);
    };
    RadioComponent = __decorate([
        core_1.Component({
            selector: "Radio",
            moduleId: module.id,
            templateUrl: "./radio.component.html",
            styleUrls: ['./radio.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());
exports.RadioComponent = RadioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHlEQUErQztBQUkvQywwQ0FBNEM7QUFFNUMsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVExRTtJQWtCSTtRQWhCTyxXQUFNLEdBQVUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztJQU9uQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLDhEQUE4RDtRQURsRSxpQkEwQkM7UUF2QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENB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LENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFFRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFFLEtBQUksQ0FBQyxPQUFPLENBQUM7UUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSTtJQUdSLENBQUM7SUFFTyxpQ0FBUSxHQUFoQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTVJUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOztPQUNXLGNBQWMsQ0FvSjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBKRCxJQW9KQztBQXBKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0ICogYXMgdGltZXIgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy90aW1lcic7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiVE5TU2xpZGVyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc2xpZGVyXCIpLlNsaWRlcik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJhZGlvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yYWRpby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBUTlNQbGF5ZXI7XHJcbiAgICBwdWJsaWMgYWNjaW9uOnN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTtcclxuICAgIHByaXZhdGUgX3NsaWRlcjogU2xpZGVyO1xyXG4gICAgcHVibGljIG1pbnV0ZTpudW1iZXI7XHJcbiAgICBwdWJsaWMgc2Vjb25kOm51bWJlcjtcclxuICAgIHB1YmxpYyBkYXRhOnN0cmluZztcclxuICAgIHB1YmxpYyB2b2x1bWVuOm51bWJlcjtcclxuICAgIHB1YmxpYyBsaXZlOnN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50Vm9sdW1lOm51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhZ2U6UGFnZTtcclxuICAgIHB1YmxpYyB0aW1lU3RyaW5nIDogc3RyaW5nO1xyXG4gICAgcHVibGljIGR1cmF0aW9uID0gNTtcclxuICAgIHB1YmxpYyBzZWNvbmRzOnN0cmluZztcclxuICAgIHB1YmxpYyBtaW51dGVzOnN0cmluZztcclxuICAgIHB1YmxpYyBjbG9ja0Rpc3BsYXkgOiBzdHJpbmc7IFxyXG4gICAgcHVibGljIGludGVydmFsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lU3RyaW5nID0gXCItLTotLVwiOyBcclxuICAgICAgICB0aGlzLnNlY29uZCA9IC01OyAgIFxyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiLS1cIjtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIi0tXCI7ICBcclxuICAgICAgICB0aGlzLmNsb2NrRGlzcGxheSA9IHRoaXMubWludXRlcyArIFwiOlwiICt0aGlzLnNlY29uZHM7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZWNvbmQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmxpdmUgPSAnU2luIENvbmV4acOzbic7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xyXG4gICAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdCBSQURJT1wiKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuZGVidWcgPSBmYWxzZTsgLy8gc2V0IHRydWUgdG8gZW5hYmxlIFROU1BsYXllciBjb25zb2xlIGxvZ3MgZm9yIGRlYnVnZ2luZy5cclxuICAgICAgICB0aGlzLl9wbGF5ZXJcclxuICAgICAgICAuaW5pdEZyb21GaWxlKHtcclxuICAgICAgICAgICAgYXVkaW9GaWxlOiAnaHR0cDovL3JhZGlvNy5kb21pbnQubmV0OjgxOTQvO3N0cmVhbS5tcDMnLCAvLyB+ID0gcmFkaW9cclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2s6IHRoaXMuX3RyYWNrQ29tcGxldGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogdGhpcy5fdHJhY2tFcnJvci5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKGR1cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgLy8gaU9TOiBkdXJhdGlvbiBpcyBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgIC8vIEFuZHJvaWQ6IGR1cmF0aW9uIGlzIGluIG1pbGxpc2Vjb25kcyAgICBcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7ICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNvbmcgZHVyYXRpb246YCwgZHVyYXRpb24pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWVuID0gdGhpcy5fcGxheWVyLnZvbHVtZTtcclxuICAgICAgICAgICAgICAgIGlmKGR1cmF0aW9uID09ICctMScgfHwgZHVyYXRpb24gPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmUgPSBcIkxpdmUgQnJvYWRjYXN0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVQbGF5KCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmxpdmUgPT0gXCJMaXZlIEJyb2FkY2FzdFwiKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllci5pc0F1ZGlvUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTsgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zdG9wVGljaygpOyAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGMpOyAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICB0aGlzLl9zdGFydFZvbHVtZVRyYWNraW5nKCk7ICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pY2lvIGRlbCB0aW1lclwiKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lU3RyaW5nID0gXCIwMDowMFwiOyBcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja1RpY2soKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBDb25leGnDs25cIik7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiTm8gSGF5IENvbmV4acOzblwiLCBcImxvbmdcIikuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIF90cmFja0NvbXBsZXRlKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZlcmVuY2UgYmFjayB0byBwbGF5ZXI6JywgYXJncy5wbGF5ZXIpO1xyXG4gICAgICAgIC8vIGlPUyBvbmx5OiBmbGFnIGluZGljYXRpbmcgaWYgY29tcGxldGVkIHN1Y2Nlc2Z1bGx5XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3doZXRoZXIgc29uZyBwbGF5IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHk6JywgYXJncy5mbGFnKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHByaXZhdGUgX3RyYWNrRXJyb3IoYXJnczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBhcmdzLnBsYXllcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBlcnJvcjonLCBhcmdzLmVycm9yKTtcclxuICAgICAgICAvLyBBbmRyb2lkIG9ubHk6IGV4dHJhIGRldGFpbCBvbiBlcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdleHRyYSBpbmZvIG9uIHRoZSBlcnJvcjonLCBhcmdzLmV4dHJhKTtcclxuICAgICAgfVxyXG5cclxuICBcclxuXHJcbiAgICAgXHJcblxyXG4gICAgICBwcml2YXRlIHRpY2tUaWNrKCl7ICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyBpZih0aGlzLmR1cmF0aW9uID49IDApe1xyXG4gICAgICAgIGxldCBteVZhciA9ICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5kdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24gKyAxO1xyXG4gICAgICAgIGlmKHRoaXMuZHVyYXRpb24gPD0wICl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBteVZhcjtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWVuID0gdGhpcy5fcGxheWVyLnZvbHVtZTtcclxuXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5kdXJhdGlvbiAlIDYwKSA8IDEwKXtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRzID0gXCIwXCIrTWF0aC5hYnModGhpcy5kdXJhdGlvbiU2MCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiXCIrcGFyc2VJbnQoKE1hdGguYWJzKHRoaXMuZHVyYXRpb24lNjApKS50b1N0cmluZygpLDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMuZHVyYXRpb24gLyA2MCkgPCAxMCApe1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIjBcIitwYXJzZUludChcIlwiK01hdGguYWJzKHRoaXMuZHVyYXRpb24vNjApLDEwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5taW51dGVzID0gXCJcIitwYXJzZUludChNYXRoLmFicygodGhpcy5kdXJhdGlvbiAvIDYwKSkudG9TdHJpbmcoKSwxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsb2NrRGlzcGxheSA9IHRoaXMubWludXRlcyArIFwiOlwiICt0aGlzLnNlY29uZHM7IH0sMTAwMCk7IFxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wVGljaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGFyYW5kb1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmFicyh0aGlzLmR1cmF0aW9uKSk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcdFxyXG4gICAgfVxyXG5cclxuICAgICBcclxuICAgIFxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG4iXX0=