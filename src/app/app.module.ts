import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { InformationsPage } from '../pages/informations/informations';
import { CreerDiscussionPage } from '../pages/creer-discussion/creer-discussion';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';
import { RfcApiProvider } from '../providers/rfc-api/rfc-api';
import { MemoryProvider } from '../providers/memory/memory';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    InformationsPage,
    CreerDiscussionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    InformationsPage,
    CreerDiscussionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    RfcApiProvider,
    MemoryProvider
  ]
})
export class AppModule {}
