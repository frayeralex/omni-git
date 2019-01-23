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
   *     put:
   *       consumes:
   *         - application/json
   *       tags:
   *         - Migration
   *         - Github
   *
   *       parameters:
   *         - $ref: "#/parameters/PutMigrationGithubImportOwnerParam"
   *         - $ref: "#/parameters/PutMigrationGithubImportRepoParam"
   *
   *       responses:
   *         200:
   *           description: Send empty object
   */
  .put(validate(schemas.githubImport), controllers.githubImport);

module.exports = router;
