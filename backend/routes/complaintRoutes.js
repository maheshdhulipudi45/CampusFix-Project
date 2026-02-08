import express from "express";
import multer from "multer";
import {
  createComplaint,
  getAllComplaints,
  getUserComplaints,
  updateComplaintStatus,
  getComplaintStats,
} from "../controllers/complaintcontroller.js";

const router = express.Router();

/* MULTER SETUP */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ROUTES */
router.post("/", upload.single("image"), createComplaint); // 🔥 IMPORTANT
router.get("/", getAllComplaints);
router.get("/user/:userId", getUserComplaints);
router.put("/:id", updateComplaintStatus);
router.get("/stats", getComplaintStats);

export default router;


// import express from "express";
// import multer from "multer";
// import {
//   createComplaint,
//   getAllComplaints,
//   getUserComplaints,
//   updateComplaintStatus,
//   getComplaintStats,
// } from "../controllers/complaintcontroller.js";

// const router = express.Router();

// /* FILE UPLOAD CONFIG */
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// /* ROUTES */
// router.post("/", upload.single("image"), createComplaint);   // student
// router.get("/", getAllComplaints);                            // admin
// router.get("/user/:userId", getUserComplaints);               // student
// router.put("/:id", updateComplaintStatus);                    // admin
// router.get("/stats", getComplaintStats);                      // optional

// export default router;
