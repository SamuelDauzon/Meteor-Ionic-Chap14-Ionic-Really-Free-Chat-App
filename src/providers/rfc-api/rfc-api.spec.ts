import { RfcApiProvider } from './rfc-api';

describe("Provider RfcApi", () => {
  let rfcApi;

  beforeEach(function() {
    rfcApi = new RfcApiProvider();
  });

  it("Instanciation", function () {
    expect(rfcApi instanceof RfcApiProvider).toBeTruthy();
  });

});