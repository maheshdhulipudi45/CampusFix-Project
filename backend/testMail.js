import dotenv from "dotenv";
import { sendEmail } from "./utils/sendEmail.js";
dotenv.config();

sendEmail({
  to: process.env.ADMIN_EMAIL,
  subject: "CampusFix Test",
  html: "<h3>Mail working ✅</h3>",
});
