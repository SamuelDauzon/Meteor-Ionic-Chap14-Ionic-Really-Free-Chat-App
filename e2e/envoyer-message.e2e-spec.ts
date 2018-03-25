import { browser } from 'protractor';

describe("Envoi d'un message", () => {
  it("Envoi d'un message dans une discussion", () => {
    browser.ignoreSynchronization = true;
    browser.get('/');
    element(by.id('lienAjoutDiscussion')).click();
    element(by.css('page-creer-discussion form ion-input[name="nom"] input')).sendKeys("Messages");
    element(by.css('page-creer-discussion form')).submit();
    browser.wait(
      protractor.ExpectedConditions.stalenessOf(element(by.css('page-creer-discussion'))), 
      5000,
      "Attente de la soumission du formulaire").then(function () {
        browser.get('/');
        element(by.id('tab-t0-1')).click();
        browser.sleep(500);
        browser.wait(
          protractor.ExpectedConditions.elementToBeClickable(element(by.css('page-lister-discussions ion-list button:last-child'))),
          5000,
          "Attente du chargement des discussions").then(function () {
            element(by.css('page-lister-discussions ion-list button:last-child')).click();
            browser.sleep(500);
            browser.wait(
              protractor.ExpectedConditions.elementToBeClickable(element(by.css('page-discussion ion-footer button'))),
              5000,
              "Attente de la possibilité de cliquer sur le bouton de configuration").then(function () {
                element(by.css('page-discussion ion-footer button')).click();
                browser.sleep(500);
                browser.wait(
                  protractor.ExpectedConditions.presenceOf(element(by.css('page-configurer-discussion form ion-input[name="auteur"] input'))),
                  5000,
                  "Attente de la présence du champ texte du nom d'auteur").then(function () {
                    element(by.css('page-configurer-discussion form ion-input[name="auteur"] input')).sendKeys("Raphaël");
                    element(by.css('page-configurer-discussion form')).submit();
                    browser.wait(
                      protractor.ExpectedConditions.presenceOf(element(by.css('page-discussion form#envoiMessage ion-textarea[name="message"] textarea'))),
                      5000,
                      "Attente de la présence du textarea message").then(function () {
                        // La discussion est à présent créé et configurée
                        browser.sleep(1000);
                        expect(element(by.css('page-discussion form#envoiMessage ion-textarea[name="message"] textarea')).isPresent()).toBe(true);
                        element(by.css('page-discussion form#envoiMessage ion-textarea[name="message"] textarea')).sendKeys("Bonjour !");
                        element(by.css('page-discussion form#envoiMessage')).submit();
                        browser.sleep(500);
                        browser.wait(
                          protractor.ExpectedConditions.presenceOf(element(by.css('page-discussion message'))),
                          5000,
                          "Attente du chargement du message envoyé").then(function () {
                            expect(
                              element(by.css('page-discussion message')).getText())
                              .toContain('Bonjour !');
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
      }
    );
  });
});