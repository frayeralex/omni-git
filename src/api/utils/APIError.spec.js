const APIError = require('./APIError');
const expect = require('chai').expect;

describe('APIError', () => {
  it('should create APIError instance', function () {
    const options = {
      message: 'Some msg', errors: [], status: 404, isPublic: false, stack: [],
    };
    const instance = new APIError(options);
    expect(instance.name).to.equal('APIError');
    expect(instance.message).to.equal(options.message);
    expect(instance.status).to.equal(options.status);
    expect(instance.isPublic).to.equal(options.isPublic);
    expect(instance.isPublic).to.equal(options.isPublic);
    expect(instance.errors).to.equal(options.errors);
  });
});
