const swaggerJSDoc = require('swagger-jsdoc');

const v1 = swaggerJSDoc({
  definition: {
    info: {
      title: 'WEB API',
      version: '1.0.0'
    },
    basePath: '/api/v1',
  },
  apis: ['src/api/routes/v1/**/*.js', 'src/api/validation/**/*.js']
});

module.exports = {
  v1
};
