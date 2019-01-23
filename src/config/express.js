const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routesV1 = require('../api/routes/v1');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const error = require('../api/middlewares/error');
const { logs } = require('./vars');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(logs));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/v1', routesV1);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec.v1, { explorer: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(error.converter);

app.use(error.notFound);

app.use(error.handler);

module.exports = app;
