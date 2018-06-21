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
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
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
    RadioComponent.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHlEQUErQztBQUkvQywwQ0FBNEM7QUFHNUMsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVExRTtJQWtCSTtRQWhCTyxXQUFNLEdBQVUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztJQUVuQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLDhEQUE4RDtRQURsRSxpQkEwQkM7UUF0QkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsMkRBQTJEO1FBQ3RGLElBQUksQ0FBQyxPQUFPO2FBQ1gs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V0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDN0MsQ0FBQzthQUNELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNsRCw4QkFBOEI7Z0JBQzlCLDJDQUEyQztnQkFDM0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMvQixFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO2dCQUNqQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUF0S1EsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxjQUFjLENBK0sxQjtJQUFELHFCQUFDO0NBQUEsQUEvS0QsSUErS0M7QUEvS1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCAqIGFzIHRpbWVyIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdGltZXInO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiVE5TU2xpZGVyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc2xpZGVyXCIpLlNsaWRlcik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJhZGlvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yYWRpby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBUTlNQbGF5ZXI7XHJcbiAgICBwdWJsaWMgYWNjaW9uOnN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTtcclxuICAgIHByaXZhdGUgX3NsaWRlcjogU2xpZGVyO1xyXG4gICAgcHVibGljIG1pbnV0ZTpudW1iZXI7XHJcbiAgICBwdWJsaWMgc2Vjb25kOm51bWJlcjtcclxuICAgIHB1YmxpYyBkYXRhOnN0cmluZztcclxuICAgIHB1YmxpYyB2b2x1bWVuOm51bWJlcjtcclxuICAgIHB1YmxpYyBsaXZlOnN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50Vm9sdW1lOm51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhZ2U6UGFnZTtcclxuICAgIHB1YmxpYyB0aW1lU3RyaW5nIDogc3RyaW5nO1xyXG4gICAgcHVibGljIGR1cmF0aW9uID0gNTtcclxuICAgIHB1YmxpYyBzZWNvbmRzOnN0cmluZztcclxuICAgIHB1YmxpYyBtaW51dGVzOnN0cmluZztcclxuICAgIHB1YmxpYyBjbG9ja0Rpc3BsYXkgOiBzdHJpbmc7IFxyXG4gICAgcHVibGljIGludGVydmFsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lU3RyaW5nID0gXCItLTotLVwiOyBcclxuICAgICAgICB0aGlzLnNlY29uZCA9IC01OyAgIFxyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiLS1cIjtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIi0tXCI7ICBcclxuICAgICAgICB0aGlzLmNsb2NrRGlzcGxheSA9IHRoaXMubWludXRlcyArIFwiOlwiICt0aGlzLnNlY29uZHM7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZWNvbmQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmxpdmUgPSAnU2luIENvbmV4acOzbic7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpOyBcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuX3BsYXllci5kZWJ1ZyA9IHRydWU7IC8vIHNldCB0cnVlIHRvIGVuYWJsZSBUTlNQbGF5ZXIgY29uc29sZSBsb2dzIGZvciBkZWJ1Z2dpbmcuXHJcbiAgICAgICAgdGhpcy5fcGxheWVyXHJcbiAgICAgICAgLmluaXRGcm9tRmlsZSh7XHJcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogJ2h0dHA6Ly9yYWRpbzcuZG9taW50Lm5ldDo4MTk0LztzdHJlYW0ubXAzJywgLy8gfiA9IHJhZGlvXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrOiB0aGlzLl90cmFja0NvbXBsZXRlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2s6IHRoaXMuX3RyYWNrRXJyb3IuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuZ2V0QXVkaW9UcmFja0R1cmF0aW9uKCkudGhlbihkdXJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlPUzogZHVyYXRpb24gaXMgaW4gc2Vjb25kc1xyXG4gICAgICAgICAgICAvLyBBbmRyb2lkOiBkdXJhdGlvbiBpcyBpbiBtaWxsaXNlY29uZHMgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpOyAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzb25nIGR1cmF0aW9uOmAsIGR1cmF0aW9uKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5hY2Npb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7XHJcbiAgICAgICAgICAgIHRoaXMudm9sdW1lbiA9IHRoaXMuX3BsYXllci52b2x1bWU7XHJcbiAgICAgICAgICAgICAgICBpZihkdXJhdGlvbiA9PSAnLTEnIHx8IGR1cmF0aW9uID09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlID0gXCJMaXZlIEJyb2FkY2FzdFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUGxheSgpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5saXZlID09IFwiTGl2ZSBCcm9hZGNhc3RcIil7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hY2Npb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpY2soKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRjKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5fc3RhcnRWb2x1bWVUcmFja2luZygpOyAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaWNpbyBkZWwgdGltZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVN0cmluZyA9IFwiMDA6MDBcIjsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tUaWNrKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gQ29uZXhpw7NuXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIk5vIEhheSBDb25leGnDs25cIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBfdHJhY2tDb21wbGV0ZShhcmdzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcclxuICAgICAgICAvLyBpT1Mgb25seTogZmxhZyBpbmRpY2F0aW5nIGlmIGNvbXBsZXRlZCBzdWNjZXNmdWxseVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGV0aGVyIHNvbmcgcGxheSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5OicsIGFyZ3MuZmxhZyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIF90cmFja0Vycm9yKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZlcmVuY2UgYmFjayB0byBwbGF5ZXI6JywgYXJncy5wbGF5ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgZXJyb3I6JywgYXJncy5lcnJvcik7XHJcbiAgICAgICAgLy8gQW5kcm9pZCBvbmx5OiBleHRyYSBkZXRhaWwgb24gZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZygnZXh0cmEgaW5mbyBvbiB0aGUgZXJyb3I6JywgYXJncy5leHRyYSk7XHJcbiAgICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgcHJpdmF0ZSB0aWNrVGljaygpeyAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gaWYodGhpcy5kdXJhdGlvbiA+PSAwKXtcclxuICAgICAgICBsZXQgbXlWYXIgPSAgc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uICsgMTtcclxuICAgICAgICBpZih0aGlzLmR1cmF0aW9uIDw9MCApeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gbXlWYXI7XHJcbiAgICAgICAgICAgIHRoaXMudm9sdW1lbiA9IHRoaXMuX3BsYXllci52b2x1bWU7XHJcblxyXG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMuZHVyYXRpb24gJSA2MCkgPCAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiMFwiK01hdGguYWJzKHRoaXMuZHVyYXRpb24lNjApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSBcIlwiK3BhcnNlSW50KChNYXRoLmFicyh0aGlzLmR1cmF0aW9uJTYwKSkudG9TdHJpbmcoKSwxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLmR1cmF0aW9uIC8gNjApIDwgMTAgKXtcclxuICAgICAgICAgICAgdGhpcy5taW51dGVzID0gXCIwXCIrcGFyc2VJbnQoXCJcIitNYXRoLmFicyh0aGlzLmR1cmF0aW9uLzYwKSwxMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubWludXRlcyA9IFwiXCIrcGFyc2VJbnQoTWF0aC5hYnMoKHRoaXMuZHVyYXRpb24gLyA2MCkpLnRvU3RyaW5nKCksMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbG9ja0Rpc3BsYXkgPSB0aGlzLm1pbnV0ZXMgKyBcIjpcIiArdGhpcy5zZWNvbmRzOyB9LDEwMDApOyBcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFRpY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhcmFuZG9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coTWF0aC5hYnModGhpcy5kdXJhdGlvbikpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHRcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuZGVidWcgPSB0cnVlOyAvLyBzZXQgdHJ1ZSB0byBlbmFibGUgVE5TUGxheWVyIGNvbnNvbGUgbG9ncyBmb3IgZGVidWdnaW5nLlxyXG4gICAgICAgIHRoaXMuX3BsYXllclxyXG4gICAgICAgIC5pbml0RnJvbUZpbGUoe1xyXG4gICAgICAgICAgICBhdWRpb0ZpbGU6ICdodHRwOi8vcmFkaW83LmRvbWludC5uZXQ6ODE5NC87c3RyZWFtLm1wMycsIC8vIH4gPSByYWRpb1xyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5fdHJhY2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrOiB0aGlzLl90cmFja0Vycm9yLmJpbmQodGhpcylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oZHVyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcclxuICAgICAgICAgICAgLy8gQW5kcm9pZDogZHVyYXRpb24gaXMgaW4gbWlsbGlzZWNvbmRzICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTsgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc29uZyBkdXJhdGlvbjpgLCBkdXJhdGlvbik7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgaWYoZHVyYXRpb24gPT0gJy0xJyB8fCBkdXJhdGlvbiA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZSA9IFwiTGl2ZSBCcm9hZGNhc3RcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcbiJdfQ==