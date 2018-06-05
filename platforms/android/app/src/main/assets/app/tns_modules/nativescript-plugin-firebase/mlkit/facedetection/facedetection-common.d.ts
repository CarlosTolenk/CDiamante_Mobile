import { MLKitCameraView } from "../mlkit-cameraview";
export declare const preferFrontCameraProperty: any;
export declare abstract class MLKitFaceDetection extends MLKitCameraView {
    static scanResultEvent: string;
    protected formats: string;
    protected preferFrontCamera: boolean;
}
