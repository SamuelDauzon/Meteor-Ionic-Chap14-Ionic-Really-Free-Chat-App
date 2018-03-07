import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;

  constructor() {

  }
}
