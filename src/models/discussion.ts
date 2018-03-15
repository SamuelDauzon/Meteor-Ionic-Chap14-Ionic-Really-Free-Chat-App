export class Discussion {
  hashId: string;
  nom: string;
  auteur: string;
  messages: any;
  chiffree: any;
  
  constructor(
    hashId: string="", 
    nom: string="", 
    auteur: string='',
    messages: any=[],
    chiffree: boolean=false
    ) {
    this.hashId = hashId;
    this.nom = nom;
    this.auteur = auteur;
    this.messages = messages;
    this.chiffree = chiffree;
  }

}