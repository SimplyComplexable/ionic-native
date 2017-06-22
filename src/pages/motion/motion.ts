import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  DeviceMotion, DeviceMotionAccelerationData,
  DeviceMotionAccelerometerOptions
} from "@ionic-native/device-motion";

/**
 * Generated class for the MotionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-motion',
  templateUrl: 'motion.html',
})
export class MotionPage {
  private data: any;
  private subscription: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private motion: DeviceMotion) {}

  startWatching() {
    let options: DeviceMotionAccelerometerOptions = {
      frequency: 500
    };
    this.subscription = this.motion.watchAcceleration(options)
      .subscribe(
        (data: DeviceMotionAccelerationData) => this.data = data
      );
  }

  stopWatching() {
    this.subscription.unsubscribe();
  }
}
