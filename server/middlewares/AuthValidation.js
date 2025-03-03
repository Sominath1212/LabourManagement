const Joi = require("joi");

const registerValidation = (req, res, next) => {
  const userValidationSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    username: Joi.string().min(4).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(30).required(),
    role: Joi.string().valid("seller", "buyer").required(),
    profession: Joi.string().allow("").optional(),
    hourlyRate: Joi.string().min(0).optional(),
    address: Joi.string().allow("").optional(),
    dob: Joi.string().optional(),
    mobileNo: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .message("Mobile number must be exactly 10 digits")
      .optional(),
    gender: Joi.string().valid("male", "female", "other").optional(),
    upi: Joi.string().allow("").optional(),
    description: Joi.string().optional(),
    socialmediaHandles: Joi.string().optional(),
    experience: Joi.string().min(0).optional(),
    image: Joi.string().optional(),
  });

  const { error } = userValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(32).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "bad request", error });
  }
  next();
};

module.exports = {
  registerValidation,
  loginValidation,
};
