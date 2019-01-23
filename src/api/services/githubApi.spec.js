const githubApi = require('./githubApi');
const sinon = require('sinon');



describe('src/api/services/githubApi.js', () => {
  const client = {
    request: () => {}
  };
  const sandbox = sinon.sandbox.create();

  beforeEach(() => {
    sandbox.stub(client, 'request').resolves()
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('startImport', () => {
    it('should send request with correct params', async () => {
      const params = {
        owner: 'owner',
        repo: 'repo',
        vcsUrl: 'vcsUrl',
        vcs: 'vcs',
        vcsUsername: 'vcsUsername',
        vcsPassword: 'vcsPassword'
      };

      await githubApi.startImport(client, params);
      sinon.assert.calledWith(client.request, {
        method: 'PUT',
        url: '/repos/owner/repo/import',
        data: {
          vcs: 'vcs',
          vcs_url: 'vcsUrl',
          vcs_password: 'vcsPassword',
          vcs_username: 'vcsUsername'
        }
      });
    });
  });

  describe('createRepo', () => {
    it('should send request with correct params', async () => {
      const params = {
        name: 'repo_name',
      };

      await githubApi.createRepo(client, params);
      sinon.assert.calledWith(client.request, {
        method: 'POST',
        url: '/user/repos',
        data: {
          name: 'repo_name',
        }
      });
    });
  });

  describe('getImportProgress', () => {
    it('should send request with correct params', async () => {
      const params = {
        repo: 'repo',
        owner: 'owner'
      };

      await githubApi.getImportProgress(client, params);
      sinon.assert.calledWith(client.request, {
        method: 'GET',
        url: '/repos/owner/repo/import',
      });
    });
  });
});
