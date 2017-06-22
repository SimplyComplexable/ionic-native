import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the GeolocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  private location: { lat: number, lng: number };
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {}

  getGeolocation() {
    this.geolocation.getCurrentPosition()
      .then(
        data => {
          this.location = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
          };
        }
      )
  }
}
