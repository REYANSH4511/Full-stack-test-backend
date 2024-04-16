const Joi = require("joi");
const { errorHandler } = require("../utils/responseHandler");

const Validators = {
  saveValidPersonalDetails: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    day: Joi.number().integer().min(1).max(31).required(),
    month: Joi.number().integer().min(1).max(12).required(),
    year: Joi.number().integer().min(1900).max(2100).required(),
  }),

  saveValidAddressDetails: Joi.object({
    userDetailsId: Joi.string().required(),
    address: Joi.array()
      .items(
        Joi.object({
          address1: Joi.string().required(),
          address2: Joi.string().required(),
          address3: Joi.string().required(),
        })
      )
      .required(),
  }),
};

function Validator(func) {
  return async function Validator(req, res, next) {
    try {
      const validated = await Validators[func].validateAsync(req.body, {
        abortEarly: false,
      });
      req.body = validated;
      next();
    } catch (err) {
      let _er = {};
      if (err.isJoi) {
        err.details.forEach((d) => {
          let _key = d.context.key;
          _er[_key] = d.message;
        });
      }
      await next(
        errorHandler({
          res,
          statusCode: 400,
          message: _er,
        })
      );
    }
  };
}

module.exports = Validator;
