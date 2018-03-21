exports.config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--disable-web-security', '--window-size=360,640']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:8100',
  
  framework: 'jasmine',
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: true,
};