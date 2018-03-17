import { browser } from 'protractor';

describe("Page d'accueil", () => {

  it("Test de l'URL et du titre de la page d'accueil", () => {
    browser.get('/');
    element(by.id('tab-t0-2')).click();
    expect(
      element(by.css('page-informations')).getText())
      .toContain('système de messagerie instantannée');
  });

});