// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
// Init WebView
// import { init } from 'nativescript-advanced-webview';
// init();

platformNativeScriptDynamic().bootstrapModule(AppModule);
