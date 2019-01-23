const Joi = require('joi');

const githubCreateRepo = {
  body: {
    accessToken: Joi.string()
      .required(),
    name: Joi.string()
      .required(),
  },
};

module.exports = {
  githubCreateRepo
};
