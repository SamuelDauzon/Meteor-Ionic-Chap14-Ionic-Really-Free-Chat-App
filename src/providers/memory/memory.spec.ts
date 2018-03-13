import { MemoryProvider } from './memory';

describe("Provider Memory", () => {
  let memory;

  beforeEach(function() {
    memory = new MemoryProvider();
  });

  it("Instanciation", function () {
    expect(memory instanceof MemoryProvider).toBeTruthy();
  });

});