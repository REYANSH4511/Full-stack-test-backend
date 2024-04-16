const Joi = require("joi");
const { errorHandler } = require("../utils/responseHandler");

const Validators = {
  saveValidBrowserDetails: Joi.object({
    userAgent: Joi.string().required(),
    deviceType: Joi.string().required(),
    browserName: Joi.string().required(),
    ipAddress: Joi.string(),
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
