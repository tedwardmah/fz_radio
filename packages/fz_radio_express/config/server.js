const joi = require('joi');

const envVarsSchema = joi.object({
  PORT: joi.number().port().default(8989),
}).unknown()
  .required();

const envVars = joi.attempt(process.env, envVarsSchema);

const config = {
  port: envVars.PORT,
};

module.exports = config;
