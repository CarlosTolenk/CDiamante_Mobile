"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("tns-core-modules/ui/content-view");
var properties_1 = require("tns-core-modules/ui/core/properties");
exports.processEveryNthFrameProperty = new properties_1.Property({
    name: "processEveryNthFrame",
    defaultValue: 10,
});
var MLKitCameraView = /** @class */ (function (_super) {
    __extends(MLKitCameraView, _super);
    function MLKitCameraView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitCameraView.prototype[exports.processEveryNthFrameProperty.setNative] = function (value) {
        this.processEveryNthFrame = value;
    };
    MLKitCameraView.scanResultEvent = "scanResult";
    return MLKitCameraView;
}(content_view_1.ContentView));
exports.MLKitCameraView = MLKitCameraView;
exports.processEveryNthFrameProperty.register(MLKitCameraView);
