import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  private results: BarcodeScanResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode: BarcodeScanner) {}

  scan() {
    let options: BarcodeScannerOptions = {
      formats: 'PDF_417',
      orientation: 'landscape'
    };
    this.barcode.scan(options)
      .then(
        (data: BarcodeScanResult) => {
          alert(JSON.stringify(data));
          this.results = data;
        }
      )
      .catch(
        err => alert(err)
      );
  }

  reset() {
    this.results = null;
  }

  lookup() {

  }
}
