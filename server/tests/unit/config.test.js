
describe('environmental variables', () => {
    const OLD_ENV = process.env;
  
    beforeEach(() => {
      jest.resetModules() // this is important
      process.env = { ...OLD_ENV };
      delete process.env.NODE_ENV;
    });
  
    afterEach(() => {
      process.env = OLD_ENV;
    });
  
    test('will receive process.env variables', () => {
      // set the variables
      process.env.NODE_ENV = 'local';
      process.env.APP_PORT = '3000';
  
      const testedModule = require('../../config').default
  
      // ... actual testing
    });
  });
