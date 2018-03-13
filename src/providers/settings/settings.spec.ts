import { SettingsProvider } from './settings';

describe("Provider Settings", () => {
  let settings;

  beforeEach(function() {
    settings = new SettingsProvider();
  });

  it("Instanciation", function () {
    expect(settings instanceof SettingsProvider).toBeTruthy();
  });

  it("Récupération de l'URL d'API", () => {
    expect(
      settings.URL_API
    )
    .toContain('http');
  });

});