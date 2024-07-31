import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import ErrorHandler from "../error/error.js";

// Define user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
};

// Create User model
const User = mongoose.model("User", userSchema);

// Function to validate user data
export const validateUser = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

// Function to create a new user
export const createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Validate user input
    const { error } = validateUser(req.body);
    if (error) return next(new ErrorHandler(error.details[0].message, 400));

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return next(new ErrorHandler("User with given email already exists!", 409));

    // Hash password and save user
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ firstName, lastName, email, password: hashPassword });

    await newUser.save();

    // Send response
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    next(new ErrorHandler("Internal Server Error", 500));
  }
};

// Export User model
export { User };
