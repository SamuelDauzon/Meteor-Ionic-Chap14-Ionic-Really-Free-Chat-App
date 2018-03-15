import { browser } from 'protractor';

describe("Page de création de discussion", () => {

  it("Test du bouton d'accès à la page", () => {
    browser.get('/');
    element(by.id('lienAjoutDiscussion')).click();
    var myElement = element(by.css('.elementClass'));
    expect(element(by.css('page-creer-discussion form')).isPresent()).toBeTruthy();
  });

});