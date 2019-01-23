const express = require('express');
const vars = require('../../../config/vars');
const migrations = require('./migrations/migrations');
const repositories = require('./repositories/repositories');

const router = express.Router();

/**
 * @swagger
 *
 * tags:
 *   - name: "v1"
 *   - name: "Migration"
 *   - name: "Repositories"
 *   - name: "Github"
 */
/**
 * @swagger
 *
 * paths:
 *   /status:
 *     get:
 *       consumes:
 *         - plain/text
 *       tags:
 *         - v1

 *       responses:
 *         200:
 *           description: "ACTUAL VERSION API | DEPRECATED VERSION API, ACTUAL VERSION: "
 */
router.get('/status', (req, res) => res.send(
  vars.apiVersion === 'v1'
    ? 'ACTUAL VERSION API'
    : `DEPRECATED VERSION API, ACTUAL VERSION: ${vars.apiVersion}`
));

router.use('/migrations', migrations);
router.use('/repositories', repositories);

module.exports = router;
