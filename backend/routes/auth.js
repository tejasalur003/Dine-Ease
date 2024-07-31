import express from "express";
import bcrypt from "bcrypt";
import { User } from "../controller/user.js";
import Joi from "joi";
import ErrorHandler from "../error/error.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) return next(new ErrorHandler(error.details[0].message, 400));

    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(new ErrorHandler("Email not registered!", 401));

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return next(new ErrorHandler("Incorrect password!", 401));

    const token = user.generateAuthToken();
    res.status(200).json({ token, user, message: "Logged in successfully" });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
});

// Validation function for login
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

export default router;
