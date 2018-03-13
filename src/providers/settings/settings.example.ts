import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {
  public URL_API: string;

  constructor() {
    this.URL_API = 'http://localhost:3000';
  }

}