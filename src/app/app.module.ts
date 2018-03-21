import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';
import { Contacts } from '@ionic-native/contacts';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { InformationsPage } from '../pages/informations/informations';
import { CreerDiscussionPage } from '../pages/creer-discussion/creer-discussion';
import { ListerDiscussionsPage } from '../pages/lister-discussions/lister-discussions';
import { DiscussionPage } from '../pages/discussion/discussion';
import { PartagerSmsPage } from '../pages/partager-sms/partager-sms';
import { MessageComponent } from '../components/message/message';
import { ConfigurerDiscussionPage } from '../pages/configurer-discussion/configurer-discussion';
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
    ListerDiscussionsPage,
    DiscussionPage,
    PartagerSmsPage,
    MessageComponent,
    ConfigurerDiscussionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['localstorage', 'indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    InformationsPage,
    CreerDiscussionPage,
    ListerDiscussionsPage,
    DiscussionPage,
    PartagerSmsPage,
    MessageComponent,
    ConfigurerDiscussionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    RfcApiProvider,
    MemoryProvider,
    SMS,
    Contacts
  ]
})
export class AppModule {}
