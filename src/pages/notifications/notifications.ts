import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LocalNotifications} from "@ionic-native/local-notifications";

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  private results: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private notifications: LocalNotifications) {
    this.notifications.on('click', notification => {
      let data = JSON.parse(notification.data);
      this.results = data.name;
      alert(`Notification received! (${data.name}`);
    });
  }

  scheduleNotifications() {
    this.notifications.schedule({
      id: 1,
      title: 'Cool Notification',
      text: 'This is my cool notification!',
      data: {
        id: 21,
        name: 'Cool Notification #21'
      }
    });
  }
}
