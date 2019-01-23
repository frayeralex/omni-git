const requestClient = require('../utils/requestClient');
const githubApiService = require('../services/githubApi');

const githubImport = async (req, res, next) => {
  const { params, body: { accessToken, ...payload } } = req;
  const client = requestClient.createGithubClient({ accessToken });

  try {
    const { data } = await githubApiService.startImport(client, {
      ...params,
      ...payload
    });
    return res.json(data);
  } catch (error) {
    next(error);
  }
};

const githubImportStatus = async (req, res, next) => {
  const { query: { accessToken }, params } = req;
  const client = requestClient.createGithubClient({ accessToken });

  try {
    const { data } = await githubApiService.getImportProgress(client, {
      ...params
    });
    return res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  githubImport,
  githubImportStatus
};
