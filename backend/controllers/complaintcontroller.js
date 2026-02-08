
import Complaint from "../models/complaint.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);

    // 📧 ADMIN MAIL WITH FULL USER DETAILS
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "📢 New Complaint Submitted",
      html: `
        <h2>New Complaint Received</h2>
        <hr/>

        <p><b>Name:</b> ${complaint.fullName}</p>
        <p><b>Email:</b> ${complaint.email}</p>
        <p><b>Phone:</b> ${complaint.phoneNumber}</p>

        <p><b>Location Type:</b> ${complaint.locationType}</p>
        ${
          complaint.locationType === "hostel"
            ? `
              <p><b>Hostel:</b> ${complaint.hostelType}</p>
              <p><b>Block:</b> ${complaint.block}</p>
              <p><b>Floor:</b> ${complaint.floor}</p>
              <p><b>Room No:</b> ${complaint.roomNo}</p>
            `
            : `
              <p><b>College Building:</b> ${complaint.collegeBuilding}</p>
              <p><b>Floor:</b> ${complaint.floor}</p>
              <p><b>Room No:</b> ${complaint.roomNo}</p>
            `
        }

        <p><b>Issue Type:</b> ${complaint.issueType}</p>
        <p><b>Description:</b> ${complaint.problemDescription}</p>

        <p><b>Status:</b> ${complaint.status}</p>
      `,
    });

    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// import Complaint from "../models/complaint.js";
// import { sendEmail } from "../utils/sendEmail.js";

export const updateComplaintStatus = async (req, res) => {
  try {
    // 🔥 ONLY status frontend nundi vastundi
    const { status } = req.body;

    // 🔥 DB nundi FULL complaint fetch
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    // 📧 USER MAIL — ALL DETAILS FROM BACKEND (DB)
    await sendEmail({
      to: complaint.email, // ✅ DB email
      subject: "🔄 Complaint Status Updated – CampusFix",
      html: `
        <h3>Hello ${complaint.fullName},</h3>

        <p>Your complaint has been updated. Details below:</p>

        <ul>
          <li><b>Issue:</b> ${complaint.issueType}</li>
          <li><b>Location:</b> ${complaint.location}</li>
          <li><b>Priority:</b> ${complaint.priorityLevel}</li>
          <li><b>Status:</b> <b>${complaint.status}</b></li>
          <li><b>Description:</b> ${complaint.problemDescription}</li>
        </ul>

        <p>Thank you,<br/>CampusFix Team</p>
      `,
    });

    res.json({
      message: "Status updated & mail sent",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





/* =========================
   GET ALL COMPLAINTS (ADMIN)
   ========================= */
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   GET USER COMPLAINTS
   ========================= */
export const getUserComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   COMPLAINT STATS (ADMIN)
   ========================= */
export const getComplaintStats = async (req, res) => {
  try {
    const total = await Complaint.countDocuments();
    const pending = await Complaint.countDocuments({ status: "Pending" });
    const resolved = await Complaint.countDocuments({ status: "Fixed" });

    res.json({ total, pending, resolved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
