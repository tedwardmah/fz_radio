const joi = require('joi');

const envVarsSchema = joi.object({
  MONGO_HOST: joi.string().default('127.0.0.1'),
  MONGO_PORT: joi.number().port().default(27017),
  MONGO_DB: joi.string().default('fzradio'),
}).unknown()
  .required();

const envVars = joi.attempt(process.env, envVarsSchema);

const config = {
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
    db: envVars.MONGO_DB,
  },
};

module.exports = config;
