import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RfcApiProvider } from '../../providers/rfc-api/rfc-api';
import { MemoryProvider } from '../../providers/memory/memory';
import { Discussion } from '../../models/discussion';

@IonicPage()
@Component({
  selector: 'page-creer-discussion',
  templateUrl: 'creer-discussion.html',
})
export class CreerDiscussionPage {
  discussion: Discussion;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rfcApiProvider: RfcApiProvider,
    public memoryProvider: MemoryProvider,
    ) {
    this.discussion = new Discussion();
  }

  creer() {
    this.memoryProvider.recupererDiscussions().then((data: any) => {
        console.log(data);
    });
    this.rfcApiProvider.creerDiscussion(this.discussion.nom)
    .then((data: any) => {
      this.memoryProvider.ajouterDiscussion(
        data.hashId, 
        this.discussion.nom
      );
      this.navCtrl.pop();
    });
  }

}
