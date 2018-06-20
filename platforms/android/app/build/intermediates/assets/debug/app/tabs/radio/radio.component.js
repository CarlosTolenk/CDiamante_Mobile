"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var timer = require("tns-core-modules/timer");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("TNSSlider", function () { return require("nativescript-slider").Slider; });
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        // Use the constructor to inject services.
        var _this = this;
        this.accion = String.fromCharCode(0xf04b);
        this.data = '0';
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
            });
        });
    }
    RadioComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.currentVolume = 1;
        // this.data = 0.8;
    };
    RadioComponent.prototype.togglePlay = function () {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
            this.accion = String.fromCharCode(0xf04b);
        }
        else {
            this._player.play();
            this.accion = String.fromCharCode(0xf04c);
            this._startVolumeTracking();
            console.log("Inicio del timer");
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
    RadioComponent.prototype._startVolumeTracking = function () {
        var _this = this;
        if (this._player.isAudioPlaying()) {
            var timerId = timer.setInterval(function () {
                console.log(_this.volumen);
                _this.data = _this._player.volume;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHlEQUErQztBQUcvQyw4Q0FBZ0Q7QUFFaEQsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQVExRTtJQVNJO1FBQ0ksMENBQTBDO1FBRDlDLGlCQTJCQztRQWxDTSxXQUFNLEdBQVUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVUvQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLDJEQUEyRDtRQUN2RixJQUFJLENBQUMsT0FBTzthQUdYLFlBQVksQ0FBQztZQUNWLFNBQVMsRUFBRSwyQ0FBMkM7WUFDdEQsSUFBSSxFQUFFLEtBQUs7WUFDWCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ2xELDhCQUE4QjtnQkFDOUIsZ0RBQWdEO2dCQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUlQLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksOERBQThEO1FBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFtQjtJQUd2QixDQUFDO0lBSU0sbUNBQVUsR0FBakI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUk1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEMsQ0FBQztJQUNILENBQUM7SUFFTyx1Q0FBYyxHQUF0QixVQUF1QixJQUFTO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELHFEQUFxRDtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsSUFBUztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyw2Q0FBb0IsR0FBNUI7UUFBQSxpQkFPQztRQU5DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBckZNLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O09BQ1csY0FBYyxDQTJGMUI7SUFBRCxxQkFBQztDQUFBLEFBM0ZELElBMkZDO0FBM0ZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgKiBhcyB0aW1lciBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3RpbWVyJztcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJUTlNTbGlkZXJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zbGlkZXJcIikuU2xpZGVyKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUmFkaW9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JhZGlvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFROU1BsYXllcjtcclxuICAgIHB1YmxpYyBhY2Npb246c3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNGIpO1xyXG4gICAgcHJpdmF0ZSBfc2xpZGVyOiBTbGlkZXI7XHJcbiAgICBwdWJsaWMgZGF0YTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdm9sdW1lbjpudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFZvbHVtZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYWdlOlBhZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuZGF0YSA9ICcwJzsgICAgXHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllci5kZWJ1ZyA9IGZhbHNlOyAvLyBzZXQgdHJ1ZSB0byBlbmFibGUgVE5TUGxheWVyIGNvbnNvbGUgbG9ncyBmb3IgZGVidWdnaW5nLlxyXG4gICAgICAgIHRoaXMuX3BsYXllclxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLmluaXRGcm9tRmlsZSh7XHJcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogJ2h0dHA6Ly9yYWRpbzcuZG9taW50Lm5ldDo4MTk0LztzdHJlYW0ubXAzJywgLy8gfiA9IHJhZGlvXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrOiB0aGlzLl90cmFja0NvbXBsZXRlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2s6IHRoaXMuX3RyYWNrRXJyb3IuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuZ2V0QXVkaW9UcmFja0R1cmF0aW9uKCkudGhlbihkdXJhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlPUzogZHVyYXRpb24gaXMgaW4gc2Vjb25kc1xyXG4gICAgICAgICAgICAvLyBBbmRyb2lkOiBkdXJhdGlvbiBpcyBpbiBtaWxsaXNlY29uZHMgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNvbmcgZHVyYXRpb246YCwgZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRiKTtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWVuID0gdGhpcy5fcGxheWVyLnZvbHVtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gIFxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgICAgICB0aGlzLmN1cnJlbnRWb2x1bWUgPSAxOyAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5kYXRhID0gMC44O1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlUGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xyXG4gICAgICAgICAgdGhpcy5hY2Npb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA0Yik7ICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICB0aGlzLmFjY2lvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDRjKTtcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Vm9sdW1lVHJhY2tpbmcoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJJbmljaW8gZGVsIHRpbWVyXCIpO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwcml2YXRlIF90cmFja0NvbXBsZXRlKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWZlcmVuY2UgYmFjayB0byBwbGF5ZXI6JywgYXJncy5wbGF5ZXIpO1xyXG4gICAgICAgIC8vIGlPUyBvbmx5OiBmbGFnIGluZGljYXRpbmcgaWYgY29tcGxldGVkIHN1Y2Nlc2Z1bGx5XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3doZXRoZXIgc29uZyBwbGF5IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHk6JywgYXJncy5mbGFnKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHByaXZhdGUgX3RyYWNrRXJyb3IoYXJnczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBhcmdzLnBsYXllcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBlcnJvcjonLCBhcmdzLmVycm9yKTtcclxuICAgICAgICAvLyBBbmRyb2lkIG9ubHk6IGV4dHJhIGRldGFpbCBvbiBlcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdleHRyYSBpbmZvIG9uIHRoZSBlcnJvcjonLCBhcmdzLmV4dHJhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBfc3RhcnRWb2x1bWVUcmFja2luZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgICAgIGNvbnN0IHRpbWVySWQgPSB0aW1lci5zZXRJbnRlcnZhbCgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52b2x1bWVuKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9wbGF5ZXIudm9sdW1lOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG4iXX0=