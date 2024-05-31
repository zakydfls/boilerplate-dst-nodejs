const Joi = require("joi");

const RegisterValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
});

const LoginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {RegisterValidation, LoginValidation}