import Joi from "joi";

const UserModel = Joi.object({
  address: Joi.string().alphanum().pattern(/0x[a-zA-Z0-9]{40}/).required(),
  gemBalance: Joi.number().min(0).default(0).required(),
  status: Joi.string().valid("good", "bad", "risk", "sus").default("good")
})