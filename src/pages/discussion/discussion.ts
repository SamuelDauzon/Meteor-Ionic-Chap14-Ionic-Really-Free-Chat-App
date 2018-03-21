import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, AlertController, ActionSheetController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

import { RfcApiProvider } from '../../providers/rfc-api/rfc-api';
import { MemoryProvider } from '../../providers/memory/memory';
import { Discussion } from '../../models/discussion';
import { SettingsProvider } from '../../providers/settings/settings';
import { PartagerSmsPage } from '../partager-sms/partager-sms';
import { ConfigurerDiscussionPage } from '../configurer-discussion/configurer-discussion';

@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {
  hashId: string;
  discussion: Discussion;
  autorefresh: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rfcApiProvider: RfcApiProvider,
    public memoryProvider: MemoryProvider,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public sms: SMS,
    public settings: SettingsProvider,
    ) {
    this.discussion = new Discussion();
    this.hashId = navParams.get('hashId');
    this.load(this.hashId);
  }

  load(hashId: string) {
    this.rfcApiProvider.recupererDiscussion(hashId)
      .then((data:any) => {
        this.memoryProvider.recupererDiscussions().then((discussions:Discussion[]) => {
          for (let discussion of discussions) {
            if (discussion.hashId === hashId) {
              this.discussion = new Discussion(
                data.hashId,
                data.nom, 
                discussion.auteur,
                data.messages,
                discussion.chiffree
              );
            }
          }
      });
    });
  }

  ionViewDidEnter() {
    this.autorefresh = setInterval(
      () => {
        this.load(this.hashId);
      }, 
      5000
    );
  }

  ngOnDestroy() {
    clearInterval(this.autorefresh);
  }

  choixPartage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Que faire ?",
      buttons: [
        {
          text: 'Aller voir la page WEB',
          handler: () => {
            this.ouvrirPageNavigateur()
          }
        },{
          text: 'Partager par SMS',
          handler: () => {
            let myModal = this.modalCtrl.create(
              PartagerSmsPage,
              {
                'hashId': this.discussion.hashId
              }
              );
            myModal.onDidDismiss(data => {
              if ('numero' in data) {
                this.sms.send(data, 'Lien de conversation : '+this.settings.URL_API+'/conversation/'+this.discussion.hashId);
              }
              this.navCtrl.pop();
            });
            myModal.present();
          }
        },{
          text: 'Annuler',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  ouvrirPageNavigateur() {
    window.open(
      this.settings.URL_API+'/conversation/'+this.discussion.hashId,
      '_system'
    );
  }

  configurer() {
    let myModal = this.modalCtrl.create(
      ConfigurerDiscussionPage,
      {
        'discussion': this.discussion
      }
      );
    myModal.onDidDismiss(data => {
      if ("action" in data && data.action == "back") {
        this.navCtrl.pop();
      }
      else {
        this.load(this.discussion.hashId);  
      }
    });
    myModal.present();
  }

}
