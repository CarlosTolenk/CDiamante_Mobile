"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var timer = require("tns-core-modules/timer");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("TNSSlider", function () { return require("nativescript-slider").Slider; });
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        var _this = this;
        this.accion = String.fromCharCode(0xf04b);
        this.duration = 5;
        // Use the constructor to inject services.
        this.duration = 1;
        this.second = -5;
        this.seconds = "--";
        this.minutes = "--";
        this.clockDisplay = this.minutes + " : " + this.seconds;
        this.data = this.second.toString();
        this.live = 'Sin Conexión';
        this._player = new nativescript_audio_1.TNSPlayer();
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
                console.log("song duration:", duration);
                _this.accion = String.fromCharCode(0xf04b);
                _this.volumen = _this._player.volume;
                if (duration == '-1') {
                    _this.live = "Live Broadcast";
                }
            });
        });
    }
    RadioComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
        console.log("Init RADIO");
        // this.data = 0.8;
    };
    RadioComponent.prototype.togglePlay = function () {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
            this.accion = String.fromCharCode(0xf04b);
            this._stopTrackingTime();
        }
        else {
            this._player.play();
            this.accion = String.fromCharCode(0xf04c);
            //   this._startVolumeTracking();         
            console.log("Inicio del timer");
            this.tickTick();
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
    RadioComponent.prototype._stopTrackingTime = function () {
        console.log("Parando");
        timer.clearInterval(0);
    };
    RadioComponent.prototype.tickTick = function () {
        var _this = this;
        if (this.duration > 0) {
            setInterval(function () {
                _this.duration = _this.duration - 1;
                if (_this.duration <= 0) {
                    clearInterval(_this.interval);
                }
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
                _this.clockDisplay = _this.minutes + " : " + _this.seconds;
            }, 1000);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHlEQUErQztBQUcvQyw4Q0FBZ0Q7QUFFaEQsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVExRTtJQWtCSTtRQUFBLGlCQW1DQztRQW5ETSxXQUFNLEdBQVUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQywyREFBMkQ7UUFDdkYsSUFBSSxDQUFDLE9BQU87YUFHWCxZQUFZLENBQUM7WUFDVixTQUFTLEVBQUUsMkNBQTJDO1lBQ3RELElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSSxD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RUFBRSxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBRUQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRSxLQUFJLENBQUMsT0FBTyxDQUFDO1lBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDTCxDQUFDO0lBbElRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O09BQ1csY0FBYyxDQTBJMUI7SUFBRCxxQkFBQztDQUFBLEFBMUlELElBMElDO0FBMUlZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgKiBhcyB0aW1lciBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3RpbWVyJztcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJUTlNTbGlkZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zbGlkZXJcIikuU2xpZGVyKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUmFkaW9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JhZGlvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFROU1BsYXllcjtcclxuICAgIHB1YmxpYyBhY2Npb246c3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgcHJpdmF0ZSBfc2xpZGVyOiBTbGlkZXI7XHJcbiAgICBwdWJsaWMgbWludXRlOm51bWJlcjtcclxuICAgIHB1YmxpYyBzZWNvbmQ6bnVtYmVyO1xyXG4gICAgcHVibGljIGRhdGE6c3RyaW5nO1xyXG4gICAgcHVibGljIHZvbHVtZW46bnVtYmVyO1xyXG4gICAgcHVibGljIGxpdmU6c3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRWb2x1bWU6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFnZTpQYWdlO1xyXG4gICAgcHVibGljIHRpbWVTdHJpbmcgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZHVyYXRpb24gPSA1O1xyXG4gICAgcHVibGljIHNlY29uZHM6c3RyaW5nO1xyXG4gICAgcHVibGljIG1pbnV0ZXM6c3RyaW5nO1xyXG4gICAgcHVibGljIGNsb2NrRGlzcGxheSA6IHN0cmluZzsgXHJcbiAgICBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMTtcclxuICAgICAgICB0aGlzLnNlY29uZCA9IC01OyAgIFxyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiLS1cIjtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIi0tXCI7ICBcclxuICAgICAgICB0aGlzLmNsb2NrRGlzcGxheSA9IHRoaXMubWludXRlcyArIFwiIDogXCIgK3RoaXMuc2Vjb25kcztcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnNlY29uZC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGl2ZSA9ICdTaW4gQ29uZXhpw7NuJztcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyLmRlYnVnID0gZmFsc2U7IC8vIHNldCB0cnVlIHRvIGVuYWJsZSBUTlNQbGF5ZXIgY29uc29sZSBsb2dzIGZvciBkZWJ1Z2dpbmcuXHJcbiAgICAgICAgdGhpcy5fcGxheWVyXHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICAuaW5pdEZyb21GaWxlKHtcclxuICAgICAgICAgICAgYXVkaW9GaWxlOiAnaHR0cDovL3JhZGlvNy5kb21pbnQubmV0OjgxOTQvO3N0cmVhbS5tcDMnLCAvLyB+ID0gcmFkaW9cclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2s6IHRoaXMuX3RyYWNrQ29tcGxldGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogdGhpcy5fdHJhY2tFcnJvci5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKGR1cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgLy8gaU9TOiBkdXJhdGlvbiBpcyBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgIC8vIEFuZHJvaWQ6IGR1cmF0aW9uIGlzIGluIG1pbGxpc2Vjb25kcyAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc29uZyBkdXJhdGlvbjpgLCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgaWYoZHVyYXRpb24gPT0gJy0xJyApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZSA9IFwiTGl2ZSBCcm9hZGNhc3RcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gIFxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXQgUkFESU9cIik7XHJcbiAgICAgICAgLy8gdGhpcy5kYXRhID0gMC44O1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gICAgICAgICAgdGhpcy5hY2Npb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7ICAgXHJcbiAgICAgICAgICB0aGlzLl9zdG9wVHJhY2tpbmdUaW1lKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRjKTsgICAgICAgICAgXHJcbiAgICAgICAgLy8gICB0aGlzLl9zdGFydFZvbHVtZVRyYWNraW5nKCk7ICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaWNpbyBkZWwgdGltZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMudGlja1RpY2soKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBfdHJhY2tDb21wbGV0ZShhcmdzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcclxuICAgICAgICAvLyBpT1Mgb25seTogZmxhZyBpbmRpY2F0aW5nIGlmIGNvbXBsZXRlZCBzdWNjZXNmdWxseVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGV0aGVyIHNvbmcgcGxheSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5OicsIGFyZ3MuZmxhZyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIF90cmFja0Vycm9yKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZlcmVuY2UgYmFjayB0byBwbGF5ZXI6JywgYXJncy5wbGF5ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgZXJyb3I6JywgYXJncy5lcnJvcik7XHJcbiAgICAgICAgLy8gQW5kcm9pZCBvbmx5OiBleHRyYSBkZXRhaWwgb24gZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZygnZXh0cmEgaW5mbyBvbiB0aGUgZXJyb3I6JywgYXJncy5leHRyYSk7XHJcbiAgICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgICBwcml2YXRlIF9zdG9wVHJhY2tpbmdUaW1lKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcmFuZG9cIik7XHJcbiAgICAgICAgICB0aW1lci5jbGVhckludGVydmFsKDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIHRpY2tUaWNrKCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kdXJhdGlvbiA+IDApe1xyXG4gICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4ge3RoaXMuZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uIC0gMTtcclxuICAgICAgICBpZih0aGlzLmR1cmF0aW9uIDw9MCApe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG5cclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLmR1cmF0aW9uICUgNjApIDwgMTApe1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSBcIjBcIitNYXRoLmFicyh0aGlzLmR1cmF0aW9uJTYwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRzID0gXCJcIitwYXJzZUludCgoTWF0aC5hYnModGhpcy5kdXJhdGlvbiU2MCkpLnRvU3RyaW5nKCksMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5kdXJhdGlvbiAvIDYwKSA8IDEwICl7XHJcbiAgICAgICAgICAgIHRoaXMubWludXRlcyA9IFwiMFwiK3BhcnNlSW50KFwiXCIrTWF0aC5hYnModGhpcy5kdXJhdGlvbi82MCksMTApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIlwiK3BhcnNlSW50KE1hdGguYWJzKCh0aGlzLmR1cmF0aW9uIC8gNjApKS50b1N0cmluZygpLDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xvY2tEaXNwbGF5ID0gdGhpcy5taW51dGVzICsgXCIgOiBcIiArdGhpcy5zZWNvbmRzOyB9LDEwMDApOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIFxyXG4gICAgXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcbiJdfQ==