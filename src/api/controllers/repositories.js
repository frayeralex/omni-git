const requestClient = require('../utils/requestClient');
const githubApiService = require('../services/githubApi');

const githubCreateRepository = async (req, res, next) => {
  const { body: { accessToken, name } } = req;
  const client = requestClient.createGithubClient({ accessToken });

  try {
    const { data } = await githubApiService.createRepo(client,{ name });
    res.json(data);
  } catch (error) {
    console.dir(error);
    next(error);
  }
};

module.exports = {
  githubCreateRepository
};