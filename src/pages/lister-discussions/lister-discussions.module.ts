import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListerDiscussionsPage } from './lister-discussions';

@NgModule({
  declarations: [
    ListerDiscussionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListerDiscussionsPage),
  ],
})
export class ListerDiscussionsPageModule {}
