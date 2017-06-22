import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotionPage } from './motion';

@NgModule({
  declarations: [
    MotionPage,
  ],
  imports: [
    IonicPageModule.forChild(MotionPage),
  ],
  exports: [
    MotionPage
  ]
})
export class MotionPageModule {}
