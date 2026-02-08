import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    accountType: {
      type: String,
      enum: ["student", "admin"],
      required: true,
    },
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    userId: String,
    department: String,
    password: String,
    email: { type: String, required: true },
  password: String,
  accountType: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
