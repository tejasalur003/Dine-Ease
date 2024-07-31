import express from "express";
import bcrypt from "bcrypt";
import { User, validateUser } from "../controller/user.js";
import ErrorHandler from "../error/error.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return next(new ErrorHandler(error.details[0].message, 400));

    const user = await User.findOne({ email: req.body.email });
    if (user) return next(new ErrorHandler("User with given email already exists!", 409));

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
});

export default router;
