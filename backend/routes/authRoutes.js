import express from "express";
import { signup} from "../controllers/authcontroller.js";
import { login } from "../controllers/controllerlogin.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login); // ✅ ADD THIS

export default router;
