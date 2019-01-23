const express = require('express');
const validate = require('express-validation');
const controllers = require('../../../controllers/repositories');
const schemas = require('../../../validation/repositories');

const router = express.Router();
const githubRouter = express.Router();

router.use('/github', githubRouter);


githubRouter
  .route('/')
  /**
   * @swagger
   *
   * paths:
   *   /repositories/github:
   *     post:
   *       consumes:
   *         - application/json
   *       tags:
   *         - Repositories
   *         - Github
   *
   *       parameters:
   *         - in: body
   *           name: payload
   *           schema:
   *             type: object
   *             required:
   *               - accessToken
   *               - name
   *             properties:
   *               accessToken:
   *                 type: string
   *                 description: "Github access token"
   *                 example: "accessToken"
   *               name:
   *                 type: string
   *                 description: "Repository name"
   *                 example: "new_repo"
   *
   *       responses:
   *         200:
   *           description: "New creates repo data"
   */
  .post(validate(schemas.githubCreateRepo), controllers.githubCreateRepository);

module.exports = router;
