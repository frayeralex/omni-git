/**
 * Trigger import repository into github
 * @see https://developer.github.com/v3/migrations/source_imports/#start-an-import
 * @param {RequestClient} client
 * @param {Object} params
 * @param {String} params.owner
 * @param {String} params.repo
 * @param {String} params.accessToken
 * @param {String} params.vcsUrl
 * @param {String} params.vcs
 * @param {String} params.vcsUsername
 * @param {String} params.vcsPassword
 * @returns {AxiosPromise<any>}
 */
const startImport = (client, params) => client.request({
  url: `/repos/${params.owner}/${params.repo}/import`,
  method: 'PUT',
  data: {
    vcs_url: params.vcsUrl,
    vcs: params.vcs,
    vcs_username: params.vcsUsername,
    vcs_password: params.vcsPassword
  }
});

/**
 * Get import progress
 * @see https://developer.github.com/v3/migrations/source_imports/#get-import-progress
 * @param {RequestClient} client
 * @param {Object} params
 * @param {String} params.owner
 * @param {String} params.repo
 * @returns {AxiosPromise<any>}
 */
const getImportProgress = (client, params) => client.request({
  url: `/repos/${params.owner}/${params.repo}/import`,
  method: 'GET'
});

/**
 * Handle
 * @see https://developer.github.com/v3/repos/#create
 * @param {RequestClient} client
 * @param {Object} params
 * @param {String} params.name
 * @returns {AxiosPromise<any>}
 */
const createRepo = (client, params) => client.request({
  url: '/user/repos',
  method: 'POST',
  data: {
    name: params.name
  }
});

module.exports = {
  startImport,
  createRepo,
  getImportProgress
};
