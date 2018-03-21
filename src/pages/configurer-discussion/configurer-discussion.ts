import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { RfcApiProvider } from '../../providers/rfc-api/rfc-api';
import { Discussion } from '../../models/discussion';
import { MemoryProvider } from '../../providers/memory/memory';

@IonicPage()
@Component({
  selector: 'page-configurer-discussion',
  templateUrl: 'configurer-discussion.html',
})
export class ConfigurerDiscussionPage {
  discussion: Discussion;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rfcAPI: RfcApiProvider,
    public viewCtrl: ViewController,
    public memoryProvider: MemoryProvider
    ) {
    this.rfcAPI = rfcAPI;
    this.discussion = navParams.get('discussion');
  }

  valider() {
    this.memoryProvider.recupererDiscussions().then((discussions:Discussion[]) => {
      for (let discussion of discussions) {
        if (discussion.hashId === this.discussion.hashId) {
          discussion.auteur = this.discussion.auteur;
        }
      }
      this.memoryProvider.remplacerDiscussions(discussions);
    });
    this.viewCtrl.dismiss({'action' :'remove'});
  }

  vider() {
    this.rfcAPI.supprimerMessages(this.discussion.hashId).then(() => {});
    this.viewCtrl.dismiss({'action' :'empty'});
  }

  supprimer() {
    this.rfcAPI.supprimerDiscussion(this.discussion.hashId).then(() => {
      this.memoryProvider.recupererDiscussions().then((discussions:Discussion[]) => {
        let newDiscussions = [];
        for (let discussion of discussions) {
          if (discussion.hashId !== this.discussion.hashId) {
            newDiscussions.push(discussion);
          }
        }
        this.memoryProvider.remplacerDiscussions(newDiscussions);
        this.viewCtrl.dismiss({'action' :'back'});
      });
    });
  }

}
