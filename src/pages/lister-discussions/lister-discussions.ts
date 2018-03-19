import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoryProvider } from '../../providers/memory/memory';
import { Discussion } from '../../models/discussion';
import { DiscussionPage } from '../discussion/discussion';

@IonicPage()
@Component({
  selector: 'page-lister-discussions',
  templateUrl: 'lister-discussions.html',
})
export class ListerDiscussionsPage {
  discussions:Discussion[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public memoryProvider: MemoryProvider,
    ) {
  }

  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.memoryProvider.recupererDiscussions().then((discussions) => {
      this.discussions = discussions;
    });
  }

  accederDiscussion(discussion) {
    this.navCtrl.push(DiscussionPage, {
      hashId: discussion.hashId
    });
  }

}
