import { browser } from 'protractor';

describe("Page de création de discussion", () => {

  it("Test du bouton d'accès à la page", () => {
    browser.get('/');
    element(by.id('lienAjoutDiscussion')).click();
    var myElement = element(by.css('.elementClass'));
    expect(element(by.css('page-creer-discussion form')).isPresent()).toBeTruthy();
  });

  it("Création puis affichage dans la liste", () => {
    browser.get('/');
    element(by.id('lienAjoutDiscussion')).click();
    element(by.css('page-creer-discussion form ion-input[name="nom"] input')).sendKeys("Equipe SSL");
    element(by.css('page-creer-discussion form')).submit();
    browser.wait(
    protractor.ExpectedConditions.stalenessOf(element(by.css('page-creer-discussion'))), 
    5000,
    "Attente du chargement de la page d'accueil").then(function () {
      browser.get('/');
      element(by.id('tab-t0-1')).click();
      browser.wait(
      protractor.ExpectedConditions.presenceOf(element(by.css('page-lister-discussions ion-list button'))), 
      5000,
      "Attente du chargement des discussions").then(function () {
        browser.sleep(500);
        expect(
          element(by.css('page-lister-discussions ion-list')).getText())
          .toContain('Equipe SSL');
      });
    });
  });

});