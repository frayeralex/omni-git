const express = require('express');
const validate = require('express-validation');
const controllers = require('../../../controllers/migration');
const schemas = require('../../../validation/migration');

const router = express.Router();
const githubRouter = express.Router();

router.use('/github', githubRouter);


githubRouter
  .route('/:owner/:repo/import')
  /**
   * @swagger
   *
   * paths:
   *   /migrations/github/{owner}/{repo}/import:
   *     get:
   *       consumes:
   *         - application/json
   *       tags:
   *         - Migration
   *         - Github
   *       parameters:
   *         - $ref: "#/parameters/MigrationGithubOwnerParam"
   *         - $ref: "#/parameters/MigrationGithubRepoParam"
   *         - in: query
   *           name: accessToken
   *           type: string
   *       responses:
   *         200:
   *           description: Send empty object
   */
  .get(validate(schemas.githubImportStatus), controllers.githubImportStatus)
  /**
   * @swagger
   *
   * paths:
   *   /migrations/github/{owner}/{repo}/import:
   *     put:
   *       consumes:
   *         - application/json
   *       tags:
   *         - Migration
   *         - Github
   *       parameters:
   *         - $ref: "#/parameters/MigrationGithubOwnerParam"
   *         - $ref: "#/parameters/MigrationGithubRepoParam"
   *         - in: body
   *           name: payload
   *           schema:
   *             type: object
   *             required:
   *               - vcsUrl
   *               - vcs
   *               - accessToken
   *               - vcsPassword
   *               - vcsUsername
   *             properties:
   *               accessToken:
   *                 type: string
   *                 description: "Github access token"
   *                 example: "accessToken"
   *               vcsUrl:
   *                 type: string
   *                 description: "Old repository"
   *                 example: "http://"
   *               vcs:
   *                 schema:
   *                   type: string
   *                   enum: [subversion, git, mercurial, tfvc]
   *                 description: "Version control system"
   *                 example: "git"
   *               vcsUsername:
   *                 type: string
   *                 description: "Username"
   *                 example: "username"
   *               vcsPassword:
   *                 type: string
   *                 description: "Password"
   *                 example: "asdfasdf"
   *       responses:
   *         200:
   *           description: Send empty object
   */
  .put(validate(schemas.githubImport), controllers.githubImport);

module.exports = router;
