import { useEffect, useState } from "react";

const statusStyle = {
  Pending: { bg: "#FEF3C7", color: "#92400E" },
  "In Progress": { bg: "#DBEAFE", color: "#1E40AF" },
  Fixed: { bg: "#DCFCE7", color: "#166534" },
};

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchComplaints = async () => {
    const res = await fetch(
      `http://localhost:5000/api/complaints/user/${userId}`
    );
    const data = await res.json();
    setComplaints(data);
  };

  useEffect(() => {
    if (!userId) return;

    fetchComplaints();
    const interval = setInterval(fetchComplaints, 3000);
    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🧾 My Complaints</h2>

      {complaints.length === 0 && (
        <p style={{ color: "#6b7280" }}>No complaints found</p>
      )}

      {complaints.map((c) => (
        <div key={c._id} style={styles.card}>
          {/* TOP ROW */}
          <div style={styles.topRow}>
            <h3 style={styles.issue}>{c.issueType.toUpperCase()} Issue</h3>

            <span
              style={{
                ...styles.status,
                background: statusStyle[c.status].bg,
                color: statusStyle[c.status].color,
              }}
            >
              {c.status}
            </span>
          </div>

          {/* LOCATION */}
          <p style={styles.location}>
            {c.locationType === "hostel"
              ? `🏠 ${c.hostelType} Hostel • Block ${c.block} • Floor ${c.floor} • Room ${c.roomNo}`
              : `🏫 ${c.collegeBuilding} • Floor ${c.floor} • Room ${c.roomNo}`}
          </p>

          {/* DESCRIPTION */}
          <p style={styles.desc}>{c.problemDescription}</p>

          {/* DATES */}
          <div style={styles.dates}>
            <span>
              📅 <b>Submitted:</b>{" "}
              {new Date(c.createdAt).toLocaleString()}
            </span>
            <span>
              🔄 <b>Last Updated:</b>{" "}
              {new Date(c.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComplaints;

/* ===== STYLES ===== */
const styles = {
  page: {
    padding: "24px",
    background: "#f9fafb",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  issue: {
    fontSize: "16px",
    fontWeight: "600",
  },
  status: {
    padding: "4px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  location: {
    marginTop: "6px",
    color: "#374151",
    fontSize: "14px",
  },
  desc: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#4b5563",
  },
  dates: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#6b7280",
    display: "flex",
    justifyContent: "space-between",
  },
};





// import { useEffect, useState } from "react";

// const MyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const userId = localStorage.getItem("userId");

//   const fetchComplaints = async () => {
//     const res = await fetch(
//       `http://localhost:5000/api/complaints/user/${userId}`
//     );
//     const data = await res.json();
//     setComplaints(data);
//   };

//   useEffect(() => {
//     if (!userId) return;

//     fetchComplaints();

//     // 🔥 auto refresh every 3 sec
//     const interval = setInterval(fetchComplaints, 3000);
//     return () => clearInterval(interval);
//   }, [userId]);

//   const renderLocation = (c) => {
//     if (c.locationType === "hostel") {
//       return (
//         <>
//           <p>
//             <b>Hostel:</b> {c.hostelType} hostel
//           </p>
//           <p>
//             <b>Block:</b> {c.block} | <b>Floor:</b> {c.floor} |{" "}
//             <b>Room:</b> {c.roomNo}
//           </p>
//         </>
//       );
//     }

//     if (c.locationType === "college") {
//       return (
//         <p>
//           <b>Building:</b> {c.collegeBuilding} |{" "}
//           <b>Floor:</b> {c.floor}
//         </p>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-xl font-bold mb-4">My Complaints</h2>

//       {complaints.length === 0 && (
//         <p className="text-gray-500">No complaints found</p>
//       )}

//       {complaints.map((c) => (
//         <div
//           key={c._id}
//           className="bg-white p-4 mb-4 rounded shadow"
//         >
//           <p className="font-semibold text-lg">
//             {c.issueType.toUpperCase()} Issue
//           </p>

//           {renderLocation(c)}

//           <p>
//             <b>Priority:</b> {c.priorityLevel}
//           </p>

//           <p>
//             <b>Status:</b>{" "}
//             <span
//               className={
//                 c.status === "Fixed"
//                   ? "text-green-600 font-semibold"
//                   : "text-red-600 font-semibold"
//               }
//             >
//               {c.status}
//             </span>
//           </p>

//           <p className="text-sm text-gray-500 mt-1">
//             Submitted on:{" "}
//             {new Date(c.createdAt).toLocaleString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComplaints;
