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
        this.timeString = " --:-- ";
        this.second = -5;
        this.seconds = "--";
        this.minutes = "--";
        this.clockDisplay = this.minutes + ":" + this.seconds;
        this.data = this.second.toString();
        this.live = 'Sin Conexión';
        this._player = new nativescript_audio_1.TNSPlayer();
        var platform = require("tns-core-modules/platform");
        var maxwidth = platform.screen.mainScreen.widthDIPs;
        console.log('Densidad de pixeles' + maxwidth);
        this.menu_button = (maxwidth) / 2 - 55;
        console.log(this.menu_button);
        this.time_reproductor = maxwidth - 85;
        this.volume_reproductor = maxwidth - 175;
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
        this._player.pause();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHlEQUErQztBQUkvQywwQ0FBNEM7QUFHNUMsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVExRTtJQXNCSTtRQXBCTyxXQUFNLEdBQVUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBV2hCLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUUvQixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNwRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxx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WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQXZMUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOztPQUNXLGNBQWMsQ0FnTTFCO0lBQUQscUJBQUM7Q0FBQSxBQWhNRCxJQWdNQztBQWhNWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0ICogYXMgdGltZXIgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy90aW1lcic7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcbmltcG9ydCB7IFB1bGxUb1JlZnJlc2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LXB1bGx0b3JlZnJlc2hcIjtcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJUTlNTbGlkZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zbGlkZXJcIikuU2xpZGVyKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUmFkaW9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JhZGlvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFROU1BsYXllcjtcclxuICAgIHB1YmxpYyBhY2Npb246c3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgcHJpdmF0ZSBfc2xpZGVyOiBTbGlkZXI7XHJcbiAgICBwdWJsaWMgbWludXRlOm51bWJlcjtcclxuICAgIHB1YmxpYyBzZWNvbmQ6bnVtYmVyO1xyXG4gICAgcHVibGljIGRhdGE6c3RyaW5nO1xyXG4gICAgcHVibGljIHZvbHVtZW46bnVtYmVyO1xyXG4gICAgcHVibGljIGxpdmU6c3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRWb2x1bWU6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFnZTpQYWdlO1xyXG4gICAgcHVibGljIHRpbWVTdHJpbmcgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZHVyYXRpb24gPSA1O1xyXG4gICAgcHVibGljIHNlY29uZHM6c3RyaW5nO1xyXG4gICAgcHVibGljIG1pbnV0ZXM6c3RyaW5nO1xyXG4gICAgcHVibGljIGNsb2NrRGlzcGxheSA6IHN0cmluZzsgXHJcbiAgICBwdWJsaWMgaW50ZXJ2YWw6IGFueTtcclxuICAgIHB1YmxpYyBtZW51X2J1dHRvbjpudW1iZXI7XHJcbiAgICBwdWJsaWMgdGltZV9yZXByb2R1Y3RvcjpudW1iZXI7XHJcbiAgICBwdWJsaWMgdm9sdW1lX3JlcHJvZHVjdG9yOm51bWJlcjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lU3RyaW5nID0gXCIgLS06LS0gXCI7IFxyXG4gICAgICAgIHRoaXMuc2Vjb25kID0gLTU7ICAgXHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gXCItLVwiO1xyXG4gICAgICAgIHRoaXMubWludXRlcyA9IFwiLS1cIjsgIFxyXG4gICAgICAgIHRoaXMuY2xvY2tEaXNwbGF5ID0gdGhpcy5taW51dGVzICsgXCI6XCIgK3RoaXMuc2Vjb25kcztcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnNlY29uZC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubGl2ZSA9ICdTaW4gQ29uZXhpw7NuJztcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7IFxyXG5cclxuICAgICAgICB2YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcclxuICAgICAgICB2YXIgbWF4d2lkdGggPSBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RlbnNpZGFkIGRlIHBpeGVsZXMnK21heHdpZHRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51X2J1dHRvbiA9IChtYXh3aWR0aCkvMiAtIDU1O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVudV9idXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVfcmVwcm9kdWN0b3IgPSBtYXh3aWR0aC04NTtcclxuICAgICAgICB0aGlzLnZvbHVtZV9yZXByb2R1Y3RvciA9IG1heHdpZHRoLTE3NTtcclxuXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuZGVidWcgPSB0cnVlOyAvLyBzZXQgdHJ1ZSB0byBlbmFibGUgVE5TUGxheWVyIGNvbnNvbGUgbG9ncyBmb3IgZGVidWdnaW5nLlxyXG4gICAgICAgIHRoaXMuX3BsYXllclxyXG4gICAgICAgIC5pbml0RnJvbUZpbGUoe1xyXG4gICAgICAgICAgICBhdWRpb0ZpbGU6ICdodHRwOi8vcmFkaW83LmRvbWludC5uZXQ6ODE5NC87c3RyZWFtLm1wMycsIC8vIH4gPSByYWRpb1xyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5fdHJhY2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrOiB0aGlzLl90cmFja0Vycm9yLmJpbmQodGhpcylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oZHVyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcclxuICAgICAgICAgICAgLy8gQW5kcm9pZDogZHVyYXRpb24gaXMgaW4gbWlsbGlzZWNvbmRzICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTsgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc29uZyBkdXJhdGlvbjpgLCBkdXJhdGlvbik7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgaWYoZHVyYXRpb24gPT0gJy0xJyB8fCBkdXJhdGlvbiA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZSA9IFwiTGl2ZSBCcm9hZGNhc3RcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpOyBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUGxheSgpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5saXZlID09IFwiTGl2ZSBCcm9hZGNhc3RcIil7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hY2Npb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpY2soKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRjKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5fc3RhcnRWb2x1bWVUcmFja2luZygpOyAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaWNpbyBkZWwgdGltZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVN0cmluZyA9IFwiMDA6MDBcIjsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tUaWNrKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gQ29uZXhpw7NuXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIk5vIEhheSBDb25leGnDs25cIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBfdHJhY2tDb21wbGV0ZShhcmdzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVmZXJlbmNlIGJhY2sgdG8gcGxheWVyOicsIGFyZ3MucGxheWVyKTtcclxuICAgICAgICAvLyBpT1Mgb25seTogZmxhZyBpbmRpY2F0aW5nIGlmIGNvbXBsZXRlZCBzdWNjZXNmdWxseVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGV0aGVyIHNvbmcgcGxheSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5OicsIGFyZ3MuZmxhZyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIF90cmFja0Vycm9yKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZlcmVuY2UgYmFjayB0byBwbGF5ZXI6JywgYXJncy5wbGF5ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgZXJyb3I6JywgYXJncy5lcnJvcik7XHJcbiAgICAgICAgLy8gQW5kcm9pZCBvbmx5OiBleHRyYSBkZXRhaWwgb24gZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZygnZXh0cmEgaW5mbyBvbiB0aGUgZXJyb3I6JywgYXJncy5leHRyYSk7XHJcbiAgICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgcHJpdmF0ZSB0aWNrVGljaygpeyAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gaWYodGhpcy5kdXJhdGlvbiA+PSAwKXtcclxuICAgICAgICBsZXQgbXlWYXIgPSAgc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uICsgMTtcclxuICAgICAgICBpZih0aGlzLmR1cmF0aW9uIDw9MCApeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gbXlWYXI7XHJcbiAgICAgICAgICAgIHRoaXMudm9sdW1lbiA9IHRoaXMuX3BsYXllci52b2x1bWU7XHJcblxyXG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMuZHVyYXRpb24gJSA2MCkgPCAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IFwiMFwiK01hdGguYWJzKHRoaXMuZHVyYXRpb24lNjApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSBcIlwiK3BhcnNlSW50KChNYXRoLmFicyh0aGlzLmR1cmF0aW9uJTYwKSkudG9TdHJpbmcoKSwxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLmR1cmF0aW9uIC8gNjApIDwgMTAgKXtcclxuICAgICAgICAgICAgdGhpcy5taW51dGVzID0gXCIwXCIrcGFyc2VJbnQoXCJcIitNYXRoLmFicyh0aGlzLmR1cmF0aW9uLzYwKSwxMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubWludXRlcyA9IFwiXCIrcGFyc2VJbnQoTWF0aC5hYnMoKHRoaXMuZHVyYXRpb24gLyA2MCkpLnRvU3RyaW5nKCksMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbG9ja0Rpc3BsYXkgPSB0aGlzLm1pbnV0ZXMgKyBcIjpcIiArdGhpcy5zZWNvbmRzOyB9LDEwMDApOyBcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcFRpY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhcmFuZG9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coTWF0aC5hYnModGhpcy5kdXJhdGlvbikpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHRcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGlzdChhcmdzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHB1bGxSZWZyZXNoID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHB1bGxSZWZyZXNoLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuZGVidWcgPSB0cnVlOyAvLyBzZXQgdHJ1ZSB0byBlbmFibGUgVE5TUGxheWVyIGNvbnNvbGUgbG9ncyBmb3IgZGVidWdnaW5nLlxyXG4gICAgICAgIHRoaXMuX3BsYXllclxyXG4gICAgICAgIC5pbml0RnJvbUZpbGUoe1xyXG4gICAgICAgICAgICBhdWRpb0ZpbGU6ICdodHRwOi8vcmFkaW83LmRvbWludC5uZXQ6ODE5NC87c3RyZWFtLm1wMycsIC8vIH4gPSByYWRpb1xyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5fdHJhY2tDb21wbGV0ZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrOiB0aGlzLl90cmFja0Vycm9yLmJpbmQodGhpcylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oZHVyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAvLyBpT1M6IGR1cmF0aW9uIGlzIGluIHNlY29uZHNcclxuICAgICAgICAgICAgLy8gQW5kcm9pZDogZHVyYXRpb24gaXMgaW4gbWlsbGlzZWNvbmRzICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIucGF1c2UoKTsgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc29uZyBkdXJhdGlvbjpgLCBkdXJhdGlvbik7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWNjaW9uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZW4gPSB0aGlzLl9wbGF5ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgaWYoZHVyYXRpb24gPT0gJy0xJyB8fCBkdXJhdGlvbiA9PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZSA9IFwiTGl2ZSBCcm9hZGNhc3RcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgIFxyXG4gICAgXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcbiJdfQ==