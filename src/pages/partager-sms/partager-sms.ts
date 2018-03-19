import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { Contacts, Contact } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-partager-sms',
  templateUrl: 'partager-sms.html',
})
export class PartagerSmsPage {
hashId: string;
  recherche: string;
  contactListe: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contacts: Contacts,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    ) {
    this.hashId = navParams.get('hashId');
    this.recherche = "";
  }

  chercher() {
    if (this.recherche.length >= 2) {
      this.contacts.find(
        ['displayName', 'name', 'phoneNumbers'], 
        {filter: this.recherche, multiple: true, hasPhoneNumber: true})
      .then(data => {
        this.contactListe = data;
      });
    }
  }

  choixNumero(contact: Contact) {
    let alert = this.alertCtrl.create();
    alert.setTitle("Sur quel numéro ?");
    for (let numero of contact.phoneNumbers) {
      if (numero.value) {
        alert.addInput(
          {type: "radio", label: numero.value, value: numero.value}
        );  
      }
    }
    alert.addButton('Annuler');
    alert.addButton({
      text: "Envoyer",
      handler: data => {
        this.viewCtrl.dismiss({'numero' :data});
      }
    });
    alert.present();
  }
  
}
