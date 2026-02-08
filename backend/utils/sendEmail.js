import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ADMIN EMAIL
        pass: process.env.EMAIL_PASS, // APP PASSWORD
      },
    });

    await transporter.sendMail({
      from: `"CampusFix" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("📧 Mail sent to:", to);
  } catch (err) {
    console.log("❌ Mail error:", err.message);
  }
};
