// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginRole, setLoginRole] = useState("student");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           role: loginRole,
//         }),
//       });

//       const data = await res.json();

//       // ❌ login failed
//       if (!res.ok) {
//         toast.error(data.message || "Login failed");
//         return;
//       }

//       // ✅ SAFE userId extraction (ONLY ONCE)
//      // 🔥 UNIVERSAL userId extraction
// const userId =
//   data.user?._id ||
//   data._id ||
//   data.id ||
//   data.userId;

// if (!userId) {
//   console.error("Invalid login response:", data);
//   toast.error("Invalid login response");
//   return;
// }

// // SUCCESS
// toast.success("Login successful");

// localStorage.setItem("userId", userId);
// localStorage.setItem("token", data.token);
// localStorage.setItem("role", data.role);

//       setTimeout(() => {
//         if (data.role === "student") {
//           navigate("/student-dashboard");
//         } else {
//           navigate("/admin-dashboard");
//         }
//       }, 1000);

//       return; // stop execution
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Server error. Try again later");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <ToastContainer position="top-right" autoClose={2000} />

//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

//         {/* Role Toggle */}
//         <div className="flex gap-2 mb-4">
//           <button
//             type="button"
//             onClick={() => setLoginRole("student")}
//             className={`w-1/2 p-2 rounded ${
//               loginRole === "student"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             Student
//           </button>

//           <button
//             type="button"
//             onClick={() => setLoginRole("admin")}
//             className={`w-1/2 p-2 rounded ${
//               loginRole === "admin"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             Admin
//           </button>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 mb-3 border rounded"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 border rounded"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//           >
//             Login as {loginRole}
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginRole, setLoginRole] = useState("student");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           role: loginRole,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Login failed");
//         return;
//       }

//       const userId =
//         data.user?._id || data._id || data.id || data.userId;

//       if (!userId) {
//         toast.error("Invalid login response");
//         return;
//       }

//       toast.success("Login successful");

//       localStorage.setItem("userId", userId);
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);

//       setTimeout(() => {
//         if (data.role === "student") {
//           navigate("/student-dashboard");
//         } else {
//           navigate("/admin-dashboard");
//         }
//       }, 1000);
//     } catch (error) {
//       toast.error("Server error. Try again later");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center 
//       bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 px-4">

//       <ToastContainer position="top-right" autoClose={2000} />

//       <div className="w-full max-w-md bg-white/80 backdrop-blur-xl 
//         rounded-2xl shadow-xl p-8">

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800">
//             CampusFix Login
//           </h2>
//           <p className="text-sm text-gray-500 mt-1">
//             Electrical Complaint Management System
//           </p>
//         </div>

//         {/* Role Switch */}
//         <div className="flex bg-gray-100 rounded-full p-1 mb-6">
//           <button
//             type="button"
//             onClick={() => setLoginRole("student")}
//             className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
//               loginRole === "student"
//                 ? "bg-blue-600 text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             🎓 Student
//           </button>

//           <button
//             type="button"
//             onClick={() => setLoginRole("admin")}
//             className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
//               loginRole === "admin"
//                 ? "bg-blue-600 text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             🛠 Admin
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border border-gray-300 
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border border-gray-300 
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 
//               rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login as {loginRole}
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginRole, setLoginRole] = useState("student");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           role: loginRole,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Login failed");
//         return;
//       }

//       // ✅ Safe userId extraction
//       const userId =
//         data.user?._id || data._id || data.id || data.userId;

//       if (!userId) {
//         toast.error("Invalid login response");
//         return;
//       }

//       // ✅ Store auth data
//       localStorage.setItem("userId", userId);
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);

//       toast.success("Login successful");

//       // ✅ BOTH student & admin → HOME
//       setTimeout(() => {
//         navigate("/home");
//       }, 1000);

//     } catch (error) {
//       console.error(error);
//       toast.error("Server error. Try again later");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center 
//        px-4">

//       <ToastContainer position="top-right" autoClose={2000} />

//       <div className="w-full max-w-md bg-white/80 backdrop-blur-xl 
//         rounded-2xl shadow-xl p-8">

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800">
//             CampusFix Login
//           </h2>
//           <p className="text-sm text-gray-500 mt-1">
//             Electrical Complaint Management System
//           </p>
//         </div>

//         {/* Role Switch */}
//         <div className="flex bg-gray-100 rounded-full p-1 mb-6">
//           <button
//             type="button"
//             onClick={() => setLoginRole("student")}
//             className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
//               loginRole === "student"
//                 ? "bg-blue-600 text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             🎓 Student
//           </button>

//           <button
//             type="button"
//             onClick={() => setLoginRole("admin")}
//             className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
//               loginRole === "admin"
//                 ? "bg-blue-600 text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             🛠 Admin
//           </button>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border border-gray-300 
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg border border-gray-300 
//               focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 
//               rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login as {loginRole}
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginRole, setLoginRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: loginRole,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }

      const userId =
        data.user?._id || data._id || data.id || data.userId;

      localStorage.setItem("userId", userId);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      toast.success("Login successful");
      setTimeout(() => navigate("/home"), 800);
    } catch {
      toast.error("Server error");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center px-5 py-9">
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 sm:p-8">
        {/* HEADER */}
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            CampusFix Login
          </h2>
          <p className="text-sm text-gray-500">
            Electrical Complaint Management System
          </p>
        </div>

        {/* ROLE SWITCH */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-4">
          <button
            onClick={() => setLoginRole("student")}
            className={`w-1/2 py-2 text-sm rounded-full transition ${
              loginRole === "student"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setLoginRole("admin")}
            className={`w-1/2 py-2 text-sm rounded-full transition ${
              loginRole === "admin"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Admin
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login as {loginRole}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
