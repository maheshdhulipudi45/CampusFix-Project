import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    fullName: String,

    email: {
      type: String,
      required: true,   // ✅ IMPORTANT
    },

    phoneNumber: String,

    locationType: String,
    hostelType: String,
    block: String,
    floor: String,
    roomNo: String,
    collegeBuilding: String,

    issueType: String,
    problemDescription: String,

    image: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);

// import mongoose from "mongoose";

// const complaintSchema = new mongoose.Schema(
//   {
//     userId: { type: String, required: true },

//     fullName: String,
//     phoneNumber: String,

//     locationType: String, // hostel / college
//     hostelType: String,
//     block: String,
//     floor: String,
//     roomNo: String,
//     collegeBuilding: String,
//     email:String,
//     issueType: String,
//     problemDescription: String,

//     image: String,

//     status: {
//       type: String,
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Complaint", complaintSchema);
