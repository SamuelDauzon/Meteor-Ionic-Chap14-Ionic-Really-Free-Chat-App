import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsProvider } from '../settings/settings'

@Injectable()
export class RfcApiProvider {

  constructor(public http: HttpClient, public settings: SettingsProvider) {
  }

  creerDiscussion(nom: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    let body = new HttpParams()
      .set('nom', nom)
      .set('chiffree', 'false')
    ;
    return new Promise(resolve => {
      this.http.post(
        this.settings.URL_API+'/api/conversation', 
        body,
        {'headers': headers}
      )
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        return err;
      });
    });
  }

  recupererDiscussion(hashId: string) {
    return new Promise(resolve => {
      this.http.get(this.settings.URL_API+'/api/conversation/'+hashId)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  supprimerMessages(hashId: string) {
    return new Promise(resolve => {
      this.http.get(this.settings.URL_API+'/api/conversation/'+hashId+'/supprimerMessages')
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  supprimerDiscussion(hashId: string) {
    return new Promise(resolve => {
      this.http.get(this.settings.URL_API+'/api/conversation/'+hashId+'/supprimer')
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  ajouterMessage(hashId: string, message: string, auteur: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    const body = new HttpParams()
      .set('auteur', auteur)
      .set('message', message)
    ;
    return new Promise(resolve => {
      this.http.post(
        this.settings.URL_API+'/api/conversation/'+hashId+'/ajoutMessage', 
        body,
        {'headers': headers}
      )
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        return err;
      });
    });
  }

}
