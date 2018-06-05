"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_base_1 = require("tns-core-modules/ui/core/view-base");
var properties_1 = require("tns-core-modules/ui/core/properties");
var mlkit_cameraview_1 = require("../mlkit-cameraview");
exports.preferFrontCameraProperty = new properties_1.Property({
    name: "preferFrontCamera",
    defaultValue: false,
    valueConverter: view_base_1.booleanConverter
});
var MLKitFaceDetection = /** @class */ (function (_super) {
    __extends(MLKitFaceDetection, _super);
    function MLKitFaceDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitFaceDetection.prototype[exports.preferFrontCameraProperty.setNative] = function (value) {
        this.preferFrontCamera = value;
    };
    MLKitFaceDetection.scanResultEvent = "scanResult";
    return MLKitFaceDetection;
}(mlkit_cameraview_1.MLKitCameraView));
exports.MLKitFaceDetection = MLKitFaceDetection;
exports.preferFrontCameraProperty.register(MLKitFaceDetection);
