const path = require('path');

require('dotenv-safe').load({
  allowEmptyValues: true,
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  apiVersion: process.env.API_VERSION || 'v1',
  logs:
    process.env.NODE_ENV === 'production'
      ? 'combined'
      : ':method :url :status :res[content-length] - :response-time ms',
};
