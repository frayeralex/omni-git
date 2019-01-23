const requestClient = require('./requestClient');
const expect = require('chai').expect;

describe('src/api/utils/requestClient.js', () => {
  describe('createGithubClient', () => {
    it('should create instance with request method', () => {
      const accessToken = 'accessToken';
      const instance = requestClient.createGithubClient({ accessToken });
      expect(instance).to.have.property('request');
    });
  });
});