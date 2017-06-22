import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  // private imgSrc: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {}

  takePicture() {
    let cameraOpts: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(cameraOpts)
      .then(
        imgUri => {
          alert(imgUri);
          // this.imgSrc = imgUri
        }
      )
      .catch(
        err => alert(err)
      );
  }
}
