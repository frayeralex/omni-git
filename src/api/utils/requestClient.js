const axios = require('axios');

/**
 * @typedef {Object} RequestClient
 * @method request
 */

/**
 * @param {Object} params
 * @param {String} params.accessToken
 * @returns {RequestClient}
 */
const createGithubClient = params => axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    'Authorization': `token ${params.accessToken}`
  },
});

module.exports = {
  createGithubClient
};
