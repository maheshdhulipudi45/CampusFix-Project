

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");
//   const isLoggedIn = !!token;

//   const handleLogout = () => {
//     localStorage.clear();
//     setIsMenuOpen(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//         {/* LOGO */}
//        <Link to="/" className="flex items-center space-x-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8 text-blue-600"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//           </svg>
//           <div>
//             <h1 className="text-xl font-bold text-gray-900">CampusFix</h1>
//             <p className="text-xs text-gray-500">Electrical Management</p>
//           </div>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//           {!isLoggedIn && (
//             <>
//               <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
//               <Link to="/aboutsection" className="text-gray-700 hover:text-blue-600">About</Link>
//               <Link to="/ourservices" className="text-gray-700 hover:text-blue-600">Services</Link>
//               <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
//             </>
//           )}

//           {isLoggedIn && role === "student" && (
//             <>
//               <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
//               <Link to="/complaint" className="text-gray-700 hover:text-blue-600">Complaint</Link>
//               <Link to="/my-complaints" className="text-gray-700 hover:text-blue-600">My Complaints</Link>
//             </>
//           )}

//           {isLoggedIn && role === "admin" && (
//             <>
//               <Link to="/admin-dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
//               <Link to="/admin-complaints" className="text-gray-700 hover:text-blue-600">Complaints</Link>
//               <Link to="/admin-students" className="text-gray-700 hover:text-blue-600">Students</Link>
//             </>
//           )}
//         </div>

//         {/* DESKTOP AUTH */}
//         <div className="hidden md:flex items-center gap-3">
//           {!isLoggedIn ? (
//             <Link
//               to="/login"
//               className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
//             >
//               Login
//             </Link>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 border border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setIsMenuOpen(true)}
//           className="md:hidden text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE DRAWER (NO BLUR – FIXED) */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
//           <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col">

//             {/* HEADER */}
//             <div className="flex items-center justify-between mb-6">
//               <span className="font-bold text-lg">CampusFix</span>
//               <button onClick={() => setIsMenuOpen(false)} className="text-xl">
//                 ✖
//               </button>
//             </div>

//             {/* LINKS */}
//             <div className="flex flex-col gap-4 text-sm font-medium">
//               {!isLoggedIn && (
//                 <>
//                   <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
//                   <Link to="/aboutsection" onClick={() => setIsMenuOpen(false)}>About</Link>
//                   <Link to="/ourservices" onClick={() => setIsMenuOpen(false)}>Services</Link>
//                   <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
//                 </>
//               )}

//               {isLoggedIn && role === "student" && (
//                 <>
//                   <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
//                   <Link to="/complaint" onClick={() => setIsMenuOpen(false)}>Complaint</Link>
//                   <Link to="/my-complaints" onClick={() => setIsMenuOpen(false)}>My Complaints</Link>
//                   <Link to="/student-dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
//                 </>
//               )}

//               {isLoggedIn && role === "admin" && (
//                 <>
//                   <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
//                   <Link to="/admin-dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
//                   <Link to="/admin-complaints" onClick={() => setIsMenuOpen(false)}>Complaints</Link>
//                   <Link to="/admin-students" onClick={() => setIsMenuOpen(false)}>Students</Link>
//                 </>
//               )}
//             </div>

//             {/* FOOTER */}
//             <div className="mt-auto pt-6 border-t">
//               {!isLoggedIn ? (
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold"
//                 >
//                   Login
//                 </Link>
//               ) : (
//                 <button
//                   onClick={handleLogout}
//                   className="w-full border border-red-500 text-red-500 py-2 rounded-lg font-semibold"
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.clear();
    setIsMenuOpen(false);
    navigate("/login");
  };

  const linkClass =
    "text-sm font-medium text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            CF
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-900">CampusFix</h1>
            <p className="text-xs text-gray-500">Electrical Management</p>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {!isLoggedIn && (
            <>
              <Link to="/home" className={linkClass}>Home</Link>
              <Link to="/aboutsection" className={linkClass}>About</Link>
              <Link to="/ourservices" className={linkClass}>Services</Link>
              <Link to="/contact" className={linkClass}>Contact</Link>
            </>
          )}

          {isLoggedIn && role === "student" && (
            <>
              <Link to="/home" className={linkClass}>Home</Link>
              <Link to="/complaint" className={linkClass}>Complaint</Link>
              <Link to="/my-complaints" className={linkClass}>My Complaints</Link>
            </>
          )}

          {isLoggedIn && role === "admin" && (
            <>
              <Link to="/admin-dashboard" className={linkClass}>Dashboard</Link>
              <Link to="/admin-complaints" className={linkClass}>Complaints</Link>
              <Link to="/admin-complaints" className={linkClass}>Students</Link>
            </>
          )}
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-semibold rounded-lg 
              bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold rounded-lg 
              border border-red-500 text-red-500 hover:bg-red-50 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg">CampusFix</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              {!isLoggedIn && (
                <>
                  <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/aboutsection" onClick={() => setIsMenuOpen(false)}>About</Link>
                  <Link to="/ourservices" onClick={() => setIsMenuOpen(false)}>Services</Link>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </>
              )}

              {isLoggedIn && role === "student" && (
                <>
                  <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/complaint" onClick={() => setIsMenuOpen(false)}>Complaint</Link>
                  <Link to="/my-complaints" onClick={() => setIsMenuOpen(false)}>My Complaints</Link>
                </>
              )}

              {isLoggedIn && role === "admin" && (
                <>
                  <Link to="/admin-dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                  <Link to="/admin-complaints" onClick={() => setIsMenuOpen(false)}>Complaints</Link>
                  <Link to="/admin-complaints" onClick={() => setIsMenuOpen(false)}>Students</Link>
                </>
              )}
            </div>

            {/* FOOTER */}
            <div className="mt-auto pt-6 border-t">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 
                  text-white py-2 rounded-lg font-semibold"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full border border-red-500 
                  text-red-500 py-2 rounded-lg font-semibold"
                >
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
