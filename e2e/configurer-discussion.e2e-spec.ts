import { browser } from 'protractor';

describe("Configurer une discussion", () => {
  it("Défition du nom d'auteur", () => {
    // Pour pallier l'erreur de protractor qui identifie mal angular
    browser.ignoreSynchronization = true;
    browser.get('/');
    element(by.id('lienAjoutDiscussion')).click();
    element(by.css('page-creer-discussion form ion-input[name="nom"] input')).sendKeys("Discussion");
    element(by.css('page-creer-discussion form')).submit();
    browser.wait(
      protractor.ExpectedConditions.stalenessOf(element(by.css('page-creer-discussion'))), 
      5000,
      "Attente de la soumission du formulaire").then(function () {
        browser.get('/');
        element(by.id('tab-t0-1')).click();
        browser.wait(
          protractor.ExpectedConditions.presenceOf(element(by.css('page-lister-discussions ion-list button'))), 
          5000,
          "Attente du chargement des discussions").then(function () {
            browser.sleep(500);
            browser.wait(
              protractor.ExpectedConditions.elementToBeClickable(element(by.css('page-lister-discussions ion-list button:first-child'))),
              5000).then(function () {
                element(by.css('page-lister-discussions ion-list button:first-child')).click();
                expect(
                  element(by.css('page-discussion ion-footer')).getText())
                  .toContain('AUTEUR NON DÉFINI');
                browser.sleep(500);
                browser.wait(
                  protractor.ExpectedConditions.elementToBeClickable(element(by.css('page-discussion ion-footer button'))),
                  5000).then(function () {
                    element(by.css('page-discussion ion-footer button')).click();
                    browser.sleep(500);
                    browser.wait(
                      protractor.ExpectedConditions.presenceOf(element(by.css('page-configurer-discussion form ion-input[name="auteur"] input'))),
                      5000).then(function () {
                        element(by.css('page-configurer-discussion form ion-input[name="auteur"] input')).sendKeys("Raphaël");
                        element(by.css('page-configurer-discussion form')).submit();
                        expect(
                          element(by.css('page-discussion ion-footer')).getText())
                          .not.toContain('AUTEUR NON DÉFINI');
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});