import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class MemoryProvider {

  constructor(private storage: Storage) {
    this.storage = storage;
  }

  public ajouterDiscussion(hashId: string, nom: string, chiffree: boolean=false) {
    this._recupererDiscussions().then((discussions) => {
      discussions.push({
        'hashId': hashId,
        'nom': nom,
        'chiffree': chiffree
      });
      this.storage.set('discussions', discussions);
    });
  }

  private _recupererDiscussions() {
    this.storage.get('discussions').then((discussions) => {
      if (!discussions) {
        discussions = [];
      }
      this.storage.set('discussions', discussions);
    });
    return this.storage.get('discussions');
  }

}
