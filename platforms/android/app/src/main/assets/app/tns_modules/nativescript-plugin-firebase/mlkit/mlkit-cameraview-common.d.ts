import { ContentView } from "tns-core-modules/ui/content-view";
export declare const processEveryNthFrameProperty: any;
export declare abstract class MLKitCameraView extends ContentView {
    static scanResultEvent: string;
    protected lastVisionImage: any;
    protected processEveryNthFrame: number;
}
