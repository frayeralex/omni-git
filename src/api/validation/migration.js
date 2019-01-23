const Joi = require('joi');

/**
 * @swagger
 *
 * parameters:
 *   MigrationGithubOwnerParam:
 *     in: path
 *     name: owner
 *     type: string
 *     description: "github username"
 *
 *   MigrationGithubRepoParam:
 *     in: path
 *     name: repo
 *     type: string
 *     description: "target repository name"
 */
const githubImport = {
  params: {
    owner: Joi.string()
      .required(),
    repo: Joi.string()
      .required(),
  },
  body: {
    accessToken: Joi.string()
      .required(),
    vcsUrl: Joi.string()
      .required(),
    vcs: Joi.string()
      .valid(['subversion', 'git', 'mercurial', 'tfvc']),
    vcsUsername: Joi.string()
      .required(),
    vcsPassword: Joi.string()
      .required(),
  },
};

const githubImportStatus = {
  query: {
    accessToken: Joi.string()
      .required(),
  }
};

module.exports = {
  githubImport,
  githubImportStatus
};
