import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VibrationPage} from "../pages/vibration/vibration";
import {Vibration} from "@ionic-native/vibration";
import {GeolocationPage} from "../pages/geolocation/geolocation";
import {Geolocation} from "@ionic-native/geolocation";
import {CameraPage} from "../pages/camera/camera";
import {Camera} from "@ionic-native/camera";
import {MotionPage} from "../pages/motion/motion";
import {NotificationsPage} from "../pages/notifications/notifications";
import {BarcodePage} from "../pages/barcode/barcode";
import {DeviceMotion} from "@ionic-native/device-motion";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {LocalNotifications} from "@ionic-native/local-notifications";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    MotionPage,
    NotificationsPage,
    BarcodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    MotionPage,
    NotificationsPage,
    BarcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    Geolocation,
    Camera,
    DeviceMotion,
    LocalNotifications,
    BarcodeScanner
  ]
})
export class AppModule {}
