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

}
