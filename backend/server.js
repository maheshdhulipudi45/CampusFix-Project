import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();        // ✅ load env FIRST
connectDB();            // ✅ connect DB

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);          // ✅ ONLY ONCE
app.use("/api/complaints", complaintRoutes);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("CampusFix Backend API is running 🚀");
});
