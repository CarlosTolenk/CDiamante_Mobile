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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHlEQUErQztBQUkvQywwQ0FBNEM7QUFHNUMsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVExRTtJQWtCSTtRQWhCTyxXQUFNLEdBQVUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBT2hCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztJQU9uQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLDhEQUE4RDtRQURsRSxpQkEwQkM7UUF0QkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsMkRBQTJEO1FBQ3RGLElBQUksQ0FBQyxPQUFPO2FBQ1gsWUFBWSxDQUFDO1lBQ1YsU0FBUyxFQUFFLDJDQUEyQztZQUN0RCxJQUFJLEVBQUUsS0FBSztZQUNYLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzdDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDbEQsOEJBQThCO2dCQUM5QiwyQ0FBMkM7Z0JBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDakMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBSU0sbUNBQVUsR0FBakI7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsMENBQTBDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFcEIsQ0FBQztRQUNMLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVTLHVDQUFjLEdBQXRCLFVBQXVCLElBQVM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQscURBQXFEO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyxvQ0FBVyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQU1PLGlDQUFRLEdBQWhCO1FBQUEsaUJBMkJEO1FBekJHLDBCQUEwQjtRQUMxQixJQUFJLEtBQUssR0FBSSxXQUFXLENBQUM7WUFBTyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUcsQ0FBRSxDQUFDLENBQUEsQ0FBQztnQkFDbkIsYUFBYSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM1QixDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUV2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFFRixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUMzRSxDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUM3RSxDQUFDO1lBRUQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRSxLQUFJLENBQUMsT0FBTyxDQUFDO1FBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUk7SUFHUixDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUFoQixpQkE2QkM7UUEzQkcsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixVQUFVLENBQUM7WUFDUixXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQywyREFBMkQ7UUFDdEYsSUFBSSxDQUFDLE9BQU87YUFDWCxZQUFZLENBQUM7WUFDVixTQUFTLEVBQUUsMkNBQTJDO1lBQ3RELElBQUksRUFBRSxLQUFLO1lBQ1gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDN0MsQ0FBQzthQUNELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNsRCw4QkFBOEI7Z0JBQzlCLDJDQUEyQztnQkFDM0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMvQixFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUNwQyxLQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO2dCQUNqQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUEzS1EsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxjQUFjLENBb0wxQjtJQUFELHFCQUFDO0NBQUEsQUFwTEQsSUFvTEM7QUFwTFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCAqIGFzIHRpbWVyIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdGltZXInO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiVE5TU2xpZGVyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc2xpZGVyXCIpLlNsaWRlcik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJhZGlvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yYWRpby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBUTlNQbGF5ZXI7XHJcbiAgICBwdWJsaWMgYWNjaW9uOnN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTtcclxuICAgIHByaXZhdGUgX3NsaWRlcjogU2xpZGVyO1xyXG4gICAgcHVibGljIG1pbnV0ZTpudW1iZXI7XHJcbiAgICBwdWJsaWMgc2Vjb25kOm51bWJlcjtcclxuICAgIHB1YmxpYyBkYXRhOnN0cmluZztcclxuICAgIHB1YmxpYyB2b2x1bWVuOm51bWJlcjtcclxuICAgIHB1YmxpYyBsaXZlOnN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50Vm9sdW1lOm51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhZ2U6UGFnZTtcclxuICAgIHB1YmxpYyB0aW1lU3RyaW5nIDogc3RyaW5nO1xyXG4gICAgcHVibGljIGR1cmF0aW9uID0gNTtcclxuICAgIHB1YmxpYyBzZWNvbmRzOnN0cmluZztcclxuICAgIHB1YmxpYyBtaW51dGVzOnN0cmluZztcclxuICAgIHB1YmxpYyBjbG9ja0Rpc3BsYXkgOiBzdHJpbmc7IFxyXG4gICAgcHVibGljIGludGVydmFsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lU3RyaW5nID0gXCItLTotLVwiOyBcclxuICAgICAgICB0aGlzLnNlY29uZCA9IC01OyAgIFxyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiLS1cIjtcclxuICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIi0tXCI7ICBcclxuICAgICAgICB0aGlzLmNsb2NrRGlzcGxheSA9IHRoaXMubWludXRlcyArIFwiOlwiICt0aGlzLnNlY29uZHM7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZWNvbmQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmxpdmUgPSAnU2luIENvbmV4acOzbic7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xyXG4gICAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuZGVidWcgPSB0cnVlOyAvLyBzZXQgdHJ1ZSB0byBlbmFibGUgVE5TUGxheWVyIGNvbnNvbGUgbG9ncyBmb3IgZGVidWdnaW5nLlxyXG4gICAgICAgIHRoaXMuX3BsYXllclxyXG4gICAgICAgIC5pbml0RnJvbUZpbGUoe1xyXG4gICAgICAgICAgICBhdWRpb0ZpbGU6ICdodHRwOi8vcmFkaW83LmRvbWludC5uZXQ6ODE5NC87c3RyZWFtLm1wMycsIC8vIH4gPSByYWRpb1xyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5fdHJhY2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrOiB0aGlzLl90cmFja0Vycm9yLmJpbmQodGhpcylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oZHVyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcclxuICAgICAgICAgICAgLy8gQW5kcm9pZDogZHVyYXRpb24gaXMgaW4gbWlsbGlzZWNvbmRzICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTsgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc29uZyBkdXJhdGlvbjpgLCBkdXJhdGlvbik7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgaWYoZHVyYXRpb24gPT0gJy0xJyB8fCBkdXJhdGlvbiA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZSA9IFwiTGl2ZSBCcm9hZGNhc3RcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVBsYXkoKSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGl2ZSA9PSBcIkxpdmUgQnJvYWRjYXN0XCIpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpOyAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN0b3BUaWNrKCk7ICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5hY2Npb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgIHRoaXMuX3N0YXJ0Vm9sdW1lVHJhY2tpbmcoKTsgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmljaW8gZGVsIHRpbWVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVTdHJpbmcgPSBcIjAwOjAwXCI7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWNrVGljaygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIENvbmV4acOzblwiKTtcclxuICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJObyBIYXkgQ29uZXhpw7NuXCIsIFwibG9uZ1wiKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIHByaXZhdGUgX3RyYWNrQ29tcGxldGUoYXJnczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBhcmdzLnBsYXllcik7XHJcbiAgICAgICAgLy8gaU9TIG9ubHk6IGZsYWcgaW5kaWNhdGluZyBpZiBjb21wbGV0ZWQgc3VjY2VzZnVsbHlcclxuICAgICAgICBjb25zb2xlLmxvZygnd2hldGhlciBzb25nIHBsYXkgY29tcGxldGVkIHN1Y2Nlc3NmdWxseTonLCBhcmdzLmZsYWcpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBfdHJhY2tFcnJvcihhcmdzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhlIGVycm9yOicsIGFyZ3MuZXJyb3IpO1xyXG4gICAgICAgIC8vIEFuZHJvaWQgb25seTogZXh0cmEgZGV0YWlsIG9uIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V4dHJhIGluZm8gb24gdGhlIGVycm9yOicsIGFyZ3MuZXh0cmEpO1xyXG4gICAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgICBcclxuXHJcbiAgICAgIHByaXZhdGUgdGlja1RpY2soKXsgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIC8vIGlmKHRoaXMuZHVyYXRpb24gPj0gMCl7XHJcbiAgICAgICAgbGV0IG15VmFyID0gIHNldEludGVydmFsKCgpID0+IHt0aGlzLmR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbiArIDE7XHJcbiAgICAgICAgaWYodGhpcy5kdXJhdGlvbiA8PTAgKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IG15VmFyO1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG5cclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLmR1cmF0aW9uICUgNjApIDwgMTApe1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSBcIjBcIitNYXRoLmFicyh0aGlzLmR1cmF0aW9uJTYwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRzID0gXCJcIitwYXJzZUludCgoTWF0aC5hYnModGhpcy5kdXJhdGlvbiU2MCkpLnRvU3RyaW5nKCksMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5kdXJhdGlvbiAvIDYwKSA8IDEwICl7XHJcbiAgICAgICAgICAgIHRoaXMubWludXRlcyA9IFwiMFwiK3BhcnNlSW50KFwiXCIrTWF0aC5hYnModGhpcy5kdXJhdGlvbi82MCksMTApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMgPSBcIlwiK3BhcnNlSW50KE1hdGguYWJzKCh0aGlzLmR1cmF0aW9uIC8gNjApKS50b1N0cmluZygpLDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xvY2tEaXNwbGF5ID0gdGhpcy5taW51dGVzICsgXCI6XCIgK3RoaXMuc2Vjb25kczsgfSwxMDAwKTsgXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BUaWNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXJhbmRvXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKE1hdGguYWJzKHRoaXMuZHVyYXRpb24pKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1x0XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExpc3QoYXJncykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBwdWxsUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcGxheWVyLmRlYnVnID0gdHJ1ZTsgLy8gc2V0IHRydWUgdG8gZW5hYmxlIFROU1BsYXllciBjb25zb2xlIGxvZ3MgZm9yIGRlYnVnZ2luZy5cclxuICAgICAgICB0aGlzLl9wbGF5ZXJcclxuICAgICAgICAuaW5pdEZyb21GaWxlKHtcclxuICAgICAgICAgICAgYXVkaW9GaWxlOiAnaHR0cDovL3JhZGlvNy5kb21pbnQubmV0OjgxOTQvO3N0cmVhbS5tcDMnLCAvLyB+ID0gcmFkaW9cclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2s6IHRoaXMuX3RyYWNrQ29tcGxldGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogdGhpcy5fdHJhY2tFcnJvci5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKGR1cmF0aW9uID0+IHtcclxuICAgICAgICAgICAgLy8gaU9TOiBkdXJhdGlvbiBpcyBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgIC8vIEFuZHJvaWQ6IGR1cmF0aW9uIGlzIGluIG1pbGxpc2Vjb25kcyAgICBcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7ICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNvbmcgZHVyYXRpb246YCwgZHVyYXRpb24pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWVuID0gdGhpcy5fcGxheWVyLnZvbHVtZTtcclxuICAgICAgICAgICAgICAgIGlmKGR1cmF0aW9uID09ICctMScgfHwgZHVyYXRpb24gPT0gJzAnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmUgPSBcIkxpdmUgQnJvYWRjYXN0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgICBcclxuICAgIFxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG4iXX0=