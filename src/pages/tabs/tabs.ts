import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';
import { InformationsPage } from '../informations/informations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = InformationsPage;

  constructor() {

  }
}
