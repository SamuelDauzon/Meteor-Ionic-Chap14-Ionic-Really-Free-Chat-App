import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';
import { InformationsPage } from '../informations/informations';
import { ListerDiscussionsPage } from '../lister-discussions/lister-discussions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = ListerDiscussionsPage;
  tab3Root = InformationsPage;

  constructor() {

  }
}
