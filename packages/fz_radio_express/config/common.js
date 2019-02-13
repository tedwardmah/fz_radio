const joi = require('joi');

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'test', 'production'])
    .required(),
}).unknown()
  .required();

const envVars = joi.attempt(process.env, envVarsSchema);

const config = {
  env: envVars.NODE_ENV,
};

module.exports = config;
