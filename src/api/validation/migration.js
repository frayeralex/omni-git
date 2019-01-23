const Joi = require('joi');

/**
 * @swagger
 *
 * parameters:
 *   PutMigrationGithubImportPayload:
 *     type: object
 *     required:
 *       - vcsUrl
 *       - vcs
 *       - vcsUsername
 *       - vcsPassword
 *       - accessToken
 *     properties:
 *       vcsUrl:
 *         type: string
 *         example: "https://alex@bitbucket.org/alex/repo.git"
 *       vcs:
 *         type: string
 *         example: "git"
 *       vcsUsername:
 *         type: string
 *         example: "alex"
 *       vcsPassword:
 *         type: string
 *         example: "password"
 *       accessToken:
 *         type: string
 *         example: "password"
 *
 *   PutMigrationGithubImportOwnerParam:
 *     in: query
 *     name: owner
 *     required: true
 *     type: string
 *     description: "github username"
 *
 *   PutMigrationGithubImportRepoParam:
 *     in: query
 *     name: repo
 *     required: true
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

module.exports = {
  githubImport
};
