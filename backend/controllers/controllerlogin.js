import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.accountType !== role) {
      return res.status(403).json({ message: "Invalid role selected" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.accountType },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ 🔥 THIS IS THE MAIN FIX
    res.status(200).json({
      message: "Login successful",
      token,
      role: user.accountType,
      user: {
        _id: user._id,        // 👈 VERY IMPORTANT
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password, role } = req.body;

//     if (!email || !password || !role) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (user.accountType !== role) {
//       return res.status(403).json({ message: "Invalid role selected" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.accountType },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       role: user.accountType,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
