import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const {
      accountType,
      firstName,
      lastName,
      email,
      phoneNumber,
      id,
      department,
      password,
    } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      accountType,
      firstName,
      lastName,
      email,
      phoneNumber,
      userId: id,
      department: accountType === "student" ? department : "",
      password: hashedPassword,
    });

    res.status(201).json({
      message: `${accountType} registered successfully`,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
