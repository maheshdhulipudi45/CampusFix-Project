import { useEffect, useState } from "react";

const statusColors = {
  Pending: "#facc15",
  "In Progress": "#38bdf8",
  Fixed: "#22c55e",
};

const AdminComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const res = await fetch("http://localhost:5000/api/complaints");
    const data = await res.json();
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
 await fetch(`http://localhost:5000/api/complaints/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ status }),
});

    fetchComplaints();
  };

  const renderLocation = (c) => {
    if (c.locationType === "hostel") {
      return `🏠 ${c.hostelType} Hostel | Block ${c.block} | Floor ${c.floor} | Room ${c.roomNo}`;
    }
    return `🏫 ${c.collegeBuilding} | Floor ${c.floor} | Room ${c.roomNo}`;
  };

  return (
    <div style={{ padding: "20px", background: "#f9fafb" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        📋 Admin Complaint Panel
      </h2>

      {complaints.map((c, index) => (
        <div
          key={c._id}
          style={{
            background: "#fff",
            borderLeft: `6px solid ${statusColors[c.status]}`,
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {/* TOP BAR */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontWeight: "bold", color: "#2563eb" }}>
                CFX-{index + 1}
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  background: statusColors[c.status],
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {c.status}
              </span>
            </div>

            <select
              value={c.status}
              onChange={(e) => updateStatus(c._id, e.target.value)}
              style={{ padding: "6px" }}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Fixed</option>
            </select>
          </div>

          {/* TITLE */}
          <h3 style={{ marginTop: "10px", fontSize: "18px" }}>
            {c.issueType.toUpperCase()} Issue
          </h3>

          {/* LOCATION */}
          <p style={{ color: "#374151", marginTop: "4px" }}>
            {renderLocation(c)}
          </p>

          {/* DESCRIPTION */}
          <div style={{ marginTop: "12px" }}>
            <b>Problem Description:</b>
            <p style={{ color: "#4b5563" }}>
              {c.problemDescription}
            </p>
          </div>

          {/* IMAGE */}
          {c.image && (
            <img
              src={`http://localhost:5000/uploads/${c.image}`}
              alt="complaint"
              style={{
                width: "200px",
                marginTop: "10px",
                borderRadius: "6px",
              }}
            />
          )}

          {/* TIMELINE */}
          <div
            style={{
              marginTop: "12px",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            <p>
              <b>Reported:</b>{" "}
              {new Date(c.createdAt).toLocaleString()}
            </p>
            <p>
              <b>Last Update:</b>{" "}
              {new Date(c.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      {complaints.length === 0 && (
        <p>No complaints available</p>
      )}
    </div>
  );
};

export default AdminComplaintList;



// import { useEffect, useState } from "react";

// const statusColors = {
//   Pending: "bg-yellow-100 text-yellow-700",
//   "In Progress": "bg-blue-100 text-blue-700",
//   Fixed: "bg-green-100 text-green-700",
// };

// const priorityColors = {
//   low: "bg-gray-200 text-gray-700",
//   medium: "bg-yellow-200 text-yellow-800",
//   high: "bg-red-200 text-red-800",
// };

// const AdminComplaintList = () => {
//   const [complaints, setComplaints] = useState([]);

//   const fetchComplaints = async () => {
//     const res = await fetch("http://localhost:5000/api/complaints");
//     const data = await res.json();
//     setComplaints(data);
//   };

//   useEffect(() => {
//     fetchComplaints();
//   }, []);

//   const updateStatus = async (id, status) => {
//     await fetch(`http://localhost:5000/api/complaints/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status }),
//     });

//     fetchComplaints(); // refresh
//   };

//   const renderLocation = (c) => {
//     if (c.locationType === "hostel") {
//       return (
//         <p className="text-sm text-gray-600">
//           🏠 {c.hostelType} hostel | Block {c.block} | Floor {c.floor} | Room{" "}
//           {c.roomNo}
//         </p>
//       );
//     }

//     if (c.locationType === "college") {
//       return (
//         <p className="text-sm text-gray-600">
//           🏫 {c.collegeBuilding} | Floor {c.floor}
//         </p>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-6">
//         📋 All Complaints
//       </h1>

//       <div className="space-y-6">
//         {complaints.map((c, index) => (
//           <div
//             key={c._id}
//             className="bg-white border rounded-lg shadow-sm p-6"
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center">
//               <div className="flex gap-3 items-center">
//                 <span className="font-semibold text-blue-600">
//                   CFX-{index + 1}
//                 </span>

//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                     priorityColors[c.priorityLevel]
//                   }`}
//                 >
//                   {c.priorityLevel.toUpperCase()}
//                 </span>

//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                     statusColors[c.status]
//                   }`}
//                 >
//                   {c.status}
//                 </span>
//               </div>
//             </div>

//             {/* Issue */}
//             <h2 className="text-lg font-semibold mt-2">
//               {c.issueType} issue
//             </h2>

//             {/* Location */}
//             {renderLocation(c)}

//             {/* Description */}
//             <p className="text-sm text-gray-700 mt-2">
//               {c.problemDescription}
//             </p>

//             {/* Status update */}
//             <div className="mt-4">
//               <label className="font-semibold block mb-1">
//                 Update Status
//               </label>
//               <select
//                 value={c.status}
//                 onChange={(e) =>
//                   updateStatus(c._id, e.target.value)
//                 }
//                 className="border p-2 rounded"
//               >
//                 <option>Pending</option>
//                 <option>In Progress</option>
//                 <option>Fixed</option>
//               </select>
//             </div>
//           </div>
//         ))}

//         {complaints.length === 0 && (
//           <p className="text-gray-500">No complaints found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminComplaintList;
