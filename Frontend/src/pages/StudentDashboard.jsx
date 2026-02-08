// import { useNavigate } from "react-router-dom";

// const StudentDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/");
//   };

//   const handleSubmitComplaint = () => {
//     navigate("/complaint"); // ✅ ROUTE PATH ONLY
//   };

//   const handleViewComplaints = () => {
//     navigate("/my-complaints");
//   };

//   return (
//     <div className="min-h-screen bg-green-100">
//       <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
//         <h1 className="text-xl font-bold">CampusFix - Student</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold"
//         >
//           Logout
//         </button>
//       </nav>

//       <div className="flex items-center justify-center h-[80vh]">
//         <div className="bg-white p-10 rounded-lg shadow-lg text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             🎓 Welcome to Student Dashboard
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <button
//               onClick={handleSubmitComplaint}
//               className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
//             >
//               Submit Complaint
//             </button>

//             <button
//               onClick={handleViewComplaints}
//               className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
//             >
//               View Complaints
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 
      bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl px-10 py-12">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            🎓 Student Dashboard
          </h1>
          <p className="text-gray-500 mt-3">
            Welcome to CampusFix – Electrical Complaint System
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Submit Complaint */}
          <div
            onClick={() => navigate("/complaint")}
            className="group cursor-pointer rounded-xl p-8 
              bg-gradient-to-r from-blue-600 to-blue-500 text-white 
              shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-semibold mb-2">
              Submit Complaint
            </h2>
            <p className="text-sm opacity-90">
              Report electrical issues quickly and easily inside campus.
            </p>
          </div>

          {/* My Complaints */}
          <div
            onClick={() => navigate("/my-complaints")}
            className="group cursor-pointer rounded-xl p-8 
              bg-gradient-to-r from-purple-600 to-pink-500 text-white 
              shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all"
          >
            <div className="text-4xl mb-4">📄</div>
            <h2 className="text-2xl font-semibold mb-2">
              My Complaints
            </h2>
            <p className="text-sm opacity-90">
              View status and history of complaints you submitted.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-12">
          © {new Date().getFullYear()} CampusFix · Student Panel
        </p>
      </div>
    </div>
  );
};

export default StudentDashboard;
