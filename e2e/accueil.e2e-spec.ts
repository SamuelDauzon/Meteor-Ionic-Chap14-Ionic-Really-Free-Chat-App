import { browser } from 'protractor';

describe("Page d'accueil", () => {

  it("Test de l'URL et du titre de la page d'accueil", () => {
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });

  it("Test du contenu de la page d'accueil", () => {
    browser.get('/');
    expect(
      element(by.css('page-accueil')).getText())
      .toContain('Really-Free-Chat');
  });

});