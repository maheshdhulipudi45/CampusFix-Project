// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const [stats, setStats] = useState({
//     total: 0,
//     pending: 0,
//     resolved: 0,
//   });

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   useEffect(() => {
//     fetch("http://localhost:5000/api/complaints/stats")
//       .then((res) => res.json())
//       .then((data) => setStats(data))
//       .catch(() => console.log("Failed to load stats"));
//   }, []);

//   return (
//     <div className="min-h-screen bg-red-100">
//       {/* Navbar */}
//       <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
//         <h1 className="text-xl font-bold">CampusFix - Admin Panel</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold"
//         >
//           Logout
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="flex items-center justify-center h-[80vh]">
//         <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-4xl">
//           <h2 className="text-3xl font-bold mb-4">
//             👨‍💼 Welcome to Admin Dashboard
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Manage student complaints and system activities
//           </p>

//           {/* Admin Actions */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <button
//               onClick={() => navigate("/admin-complaints")}
//               className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
//             >
//               View All Complaints
//             </button>

//             <button
//               onClick={() => navigate("/admin-complaints")}
//               className="bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition"
//             >
//               Update Complaint Status
//             </button>

//             <button className="bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition">
//               Manage Students
//             </button>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//             <div className="bg-red-100 p-6 rounded-lg shadow">
//               <h3 className="text-lg font-bold text-red-600">
//                 Total Complaints
//               </h3>
//               <p className="text-2xl font-semibold mt-2">
//                 {stats.total}
//               </p>
//             </div>

//             <div className="bg-yellow-100 p-6 rounded-lg shadow">
//               <h3 className="text-lg font-bold text-yellow-600">
//                 Pending
//               </h3>
//               <p className="text-2xl font-semibold mt-2">
//                 {stats.pending}
//               </p>
//             </div>

//             <div className="bg-green-100 p-6 rounded-lg shadow">
//               <h3 className="text-lg font-bold text-green-600">
//                 Resolved
//               </h3>
//               <p className="text-2xl font-semibold mt-2">
//                 {stats.resolved}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const [stats, setStats] = useState({
//     total: 0,
//     pending: 0,
//     resolved: 0,
//   });

//   useEffect(() => {
//     fetch("http://localhost:5000/api/complaints/stats")
//       .then((res) => res.json())
//       .then((data) => setStats(data))
//       .catch(() => console.log("Failed to load stats"));
//   }, []);

//   return (
//     <div className="min-h-[calc(100vh-80px)] 
//       bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 py-10">

//       {/* Header */}
//       <div className="max-w-6xl mx-auto mb-10">
//         <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-2">
//           🛠 Admin Dashboard
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Manage complaints and monitor system activity
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
//         <StatCard title="Total Complaints" value={stats.total} />
//         <StatCard title="Pending" value={stats.pending} />
//         <StatCard title="Resolved" value={stats.resolved} />
//       </div>

//       {/* Actions */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         <ActionCard
//           title="View Complaints"
//           desc="Browse and review all submitted complaints"
//           icon="📄"
//           onClick={() => navigate("/admin-complaints")}
//         />

//         <ActionCard
//           title="Update Status"
//           desc="Assign and update complaint progress"
//           icon="⚙️"
//           onClick={() => navigate("/admin-complaints")}
//         />

//         <ActionCard
//           title="Manage Students"
//           desc="View and manage registered student accounts"
//           icon="🎓"
//           onClick={() => navigate("/admin-students")}
//         />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// /* ---------------- COMPONENTS ---------------- */

// const StatCard = ({ title, value }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6">
//       <p className="text-gray-500 text-sm">{title}</p>
//       <h2 className="text-4xl font-bold text-gray-800 mt-2">
//         {value}
//       </h2>
//     </div>
//   );
// };

// const ActionCard = ({ title, desc, icon, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="cursor-pointer bg-white rounded-xl p-8 
//         shadow-md hover:shadow-xl hover:scale-[1.04] 
//         transition-all"
//     >
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-500">{desc}</p>
//     </div>
//   );
// };



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChartBarIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
  });

  useEffect(() => {
    fetch("https://campusfix-project.onrender.com/api/complaints/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => console.log("Failed to load stats"));
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-10">

      {/* HEADER */}
   <div className="max-w-7xl mx-auto mb-10 text-center">
  <div className="flex items-center justify-center gap-3">
    <ChartBarIcon className="h-7 w-7 text-blue-600" />
    <h1 className="text-3xl font-bold text-gray-800">
      Admin Dashboard
    </h1>
  </div>

  <p className="text-gray-500 mt-2 max-w-xl mx-auto">
    Monitor electrical complaints and manage campus operations
  </p>
</div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <StatCard
          title="Total Complaints"
          value={stats.total}
          icon={<ClipboardDocumentListIcon className="h-6 w-6 text-blue-600" />}
          accent="border-blue-500"
        />
        <StatCard
          title="Pending Complaints"
          value={stats.pending}
          icon={<ClockIcon className="h-6 w-6 text-yellow-500" />}
          accent="border-yellow-400"
        />
        <StatCard
          title="Resolved Complaints"
          value={stats.resolved}
          icon={<CheckCircleIcon className="h-6 w-6 text-green-600" />}
          accent="border-green-500"
        />
      </div>

      {/* ACTIONS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <ActionCard
          title="View Complaints"
          desc="Review, filter, and manage all submitted complaints"
          icon={<ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />}
          onClick={() => navigate("/admin-complaints")}
        />

        <ActionCard
          title="Update Complaint Status"
          desc="Assign technicians and update progress status"
          icon={<Cog6ToothIcon className="h-8 w-8 text-indigo-600" />}
          onClick={() => navigate("/admin-complaints")}
        />

        <ActionCard
          title="Manage Students"
          desc="View and manage registered student accounts"
          icon={<UserGroupIcon className="h-8 w-8 text-green-600" />}
          onClick={() => navigate("/admin-complaints")}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
const StatCard = ({ title, value, icon, accent }) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-sm 
      border-l-4 ${accent}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        {icon}
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mt-3">
        {value}
      </h2>
    </div>
  );
};
const ActionCard = ({ title, desc, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl p-8 
      shadow-sm hover:shadow-lg hover:-translate-y-1 
      transition-all"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};
