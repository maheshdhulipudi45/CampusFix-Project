
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   BoltIcon,
//   CheckCircleIcon,
//   ClockIcon,
//   FireIcon,
// } from "@heroicons/react/24/solid";
// import { UserGroupIcon } from "@heroicons/react/24/outline";

// /* -------------------- Stats Card -------------------- */
// const StatsCard = ({ icon, number, text }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="flex flex-col items-center text-center p-6 
//       bg-white/10 rounded-xl backdrop-blur-lg shadow-lg text-white 
//       hover:scale-105 transition"
//   >
//     <div className="h-16 w-16 p-4 rounded-full bg-blue-500/20 
//       flex items-center justify-center mb-4">
//       {icon}
//     </div>
//     <div className="text-2xl font-extrabold">{number}</div>
//     <div className="mt-1 text-sm text-gray-200">{text}</div>
//   </motion.div>
// );

// /* -------------------- Feature Item -------------------- */
// const FeatureItem = ({ icon, title, description }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 40 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="flex items-start gap-4 p-4 rounded-lg 
//       bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
//   >
//     <div className="h-10 w-10 p-2 rounded-full bg-blue-600 
//       text-white flex items-center justify-center">
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold text-white">{title}</h3>
//       <p className="text-sm text-gray-200">{description}</p>
//     </div>
//   </motion.div>
// );

// /* -------------------- HERO SECTION -------------------- */
// const HeroSection = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleReportIssue = () => {
//     if (token) {
//       navigate("/complaint");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div
//       className="relative min-h-screen flex flex-col justify-center 
//         items-center text-white overflow-hidden"
//       style={{
//         backgroundImage: `url('./hbg1.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 
//         flex flex-col md:flex-row items-center gap-14">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-1/2 text-center md:text-left"
//         >
//           <span className="inline-block bg-white/10 px-4 py-2 
//             rounded-full text-sm font-semibold mb-6">
//             Campus Electrical Management System
//           </span>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl 
//             font-extrabold leading-tight">
//             Fix Campus <br />
//             <span className="text-blue-500">Electrical</span> <br />
//             Issues Fast
//           </h1>

//           <p className="mt-5 max-w-lg text-lg text-gray-200">
//             Fast issue reporting, real-time tracking, and dedicated
//             support to keep your campus safe and powered.
//           </p>

//           {/* ACTION BUTTONS */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 
//             justify-center md:justify-start">

//             {/* Report Issue */}
//             <button
//               onClick={handleReportIssue}
//               className="px-7 py-3 bg-blue-600 
//                 hover:bg-blue-700 rounded-xl font-bold 
//                 transition transform hover:scale-105 shadow-lg"
//             >
//               ⚡ Report Issue
//             </button>

//             {/* Track */}
//             <button
//               onClick={() => navigate("/my-complaints")}
//               className="px-7 py-3 border border-white/70 
//                 hover:bg-white hover:text-blue-600 
//                 rounded-xl font-bold transition transform hover:scale-105"
//             >
//               📄 Track Complaint
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT */}
//         <div className="md:w-1/2">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6">
//             Why Choose Us?
//           </h2>
//           <div className="space-y-4">
//             <FeatureItem
//               icon={<BoltIcon className="h-6 w-6" />}
//               title="Instant Reporting"
//               description="Submit electrical complaints in seconds."
//             />
//             <FeatureItem
//               icon={<CheckCircleIcon className="h-6 w-6" />}
//               title="Real-Time Tracking"
//               description="Track complaint status live with updates."
//             />
//             <FeatureItem
//               icon={<UserGroupIcon className="h-6 w-6" />}
//               title="Dedicated Support"
//               description="Fast response and guaranteed resolution."
//             />
//           </div>
//         </div>
//       </div>

//       {/* STATS */}
//       <div className="relative z-20 mt-10 mb-8 max-w-6xl mx-auto w-full px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <StatsCard
//             icon={<ClockIcon className="h-8 w-8 text-blue-300" />}
//             number="24/7"
//             text="Support Available"
//           />
//           <StatsCard
//             icon={<FireIcon className="h-8 w-8 text-blue-300" />}
//             number="< 2h"
//             text="Average Response"
//           />
//           <StatsCard
//             icon={<UserGroupIcon className="h-8 w-8 text-blue-300" />}
//             number="100%"
//             text="Tracked Issues"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;














// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   BoltIcon,
//   CheckCircleIcon,
//   ClockIcon,
//   FireIcon,
// } from "@heroicons/react/24/solid";
// import { UserGroupIcon } from "@heroicons/react/24/outline";

// /* -------------------- Stats Card -------------------- */
// const StatsCard = ({ icon, number, text }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="flex flex-col items-center text-center p-6 
//       bg-white/10 rounded-xl backdrop-blur-lg shadow-lg text-white 
//       hover:scale-105 transition"
//   >
//     <div className="h-16 w-16 p-4 rounded-full bg-blue-500/20 
//       flex items-center justify-center mb-4">
//       {icon}
//     </div>
//     <div className="text-2xl font-extrabold">{number}</div>
//     <div className="mt-1 text-sm text-gray-200">{text}</div>
//   </motion.div>
// );

// /* -------------------- Feature Item -------------------- */
// const FeatureItem = ({ icon, title, description }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 40 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="flex items-start gap-4 p-4 rounded-lg 
//       bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
//   >
//     <div className="h-10 w-10 p-2 rounded-full bg-blue-600 
//       text-white flex items-center justify-center">
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold text-white">{title}</h3>
//       <p className="text-sm text-gray-200">{description}</p>
//     </div>
//   </motion.div>
// );

// /* -------------------- HERO SECTION -------------------- */
// const HeroSection = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleReportIssue = () => {
//     if (token) {
//       navigate("/complaint");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div
//       className="relative min-h-screen flex flex-col justify-center 
//         items-center text-white overflow-hidden"
//       style={{
//         backgroundImage: `url('./hbg1.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 
//         flex flex-col md:flex-row items-center gap-14">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-1/2 text-center md:text-left"
//         >
//           <span className="inline-block bg-white/10 px-4 py-2 
//             rounded-full text-sm font-semibold mb-6">
//             Smart Campus Electrical Management
//           </span>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl 
//             font-extrabold leading-tight">
//             Smarter Way to <br />
//             Manage <span className="text-blue-500">Electrical</span> <br />
//             Issues on Campus
//           </h1>

//           <p className="mt-5 max-w-lg text-lg text-gray-200">
//             CampusFix is a centralized digital platform that helps
//             campuses report, track, and resolve electrical issues
//             faster with full transparency.
//           </p>

//           {/* ACTION BUTTONS */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 
//             justify-center md:justify-start">

//             <button
//               onClick={handleReportIssue}
//               className="px-7 py-3 bg-blue-600 
//                 hover:bg-blue-700 rounded-xl font-bold 
//                 transition transform hover:scale-105 shadow-lg"
//             >
//               ⚡ Report an Issue
//             </button>

//             <button
//               onClick={() => navigate("/my-complaints")}
//               className="px-7 py-3 border border-white/70 
//                 hover:bg-white hover:text-blue-600 
//                 rounded-xl font-bold transition transform hover:scale-105"
//             >
//               📄 Track Complaint
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <div className="md:w-1/2">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//             Why CampusFix Works Better
//           </h2>
//           <p className="text-gray-300 mb-6 max-w-md">
//             Designed for modern institutions to reduce downtime,
//             improve safety, and bring accountability to maintenance.
//           </p>

//           <div className="space-y-4">
//             <FeatureItem
//               icon={<BoltIcon className="h-6 w-6" />}
//               title="Smart Issue Reporting"
//               description="Submit structured complaints with clear priority,
//               location, and details."
//             />

//             <FeatureItem
//               icon={<CheckCircleIcon className="h-6 w-6" />}
//               title="End-to-End Visibility"
//               description="Track each stage from issue creation to final
//               resolution in real time."
//             />

//             <FeatureItem
//               icon={<UserGroupIcon className="h-6 w-6" />}
//               title="Role-Based Workflow"
//               description="Optimized dashboards for students, technicians,
//               and administrators."
//             />
//           </div>
//         </div>
//       </div>

//       {/* STATS SECTION */}
//       <div className="relative z-20 mt-10 mb-8 max-w-6xl mx-auto w-full px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <StatsCard
//             icon={<ClockIcon className="h-8 w-8 text-blue-300" />}
//             number="24/7"
//             text="Support Availability"
//           />
//           <StatsCard
//             icon={<FireIcon className="h-8 w-8 text-blue-300" />}
//             number="< 2h"
//             text="Average Response Time"
//           />
//           <StatsCard
//             icon={<UserGroupIcon className="h-8 w-8 text-blue-300" />}
//             number="100%"
//             text="Issues Fully Tracked"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   BoltIcon,
//   CheckCircleIcon,
//   ClockIcon,
// } from "@heroicons/react/24/solid";
// import { UserGroupIcon } from "@heroicons/react/24/outline";

// /* -------------------- ANIMATION -------------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// /* -------------------- STATS CARD -------------------- */
// const StatsCard = ({ icon, number, text }) => (
//   <motion.div
//     variants={fadeUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     className="flex flex-col items-center text-center p-7 
//       bg-white/15 border border-white/10 rounded-2xl 
//       backdrop-blur-lg shadow-xl text-white
//       hover:-translate-y-2 transition-all duration-300"
//   >
//     <div className="h-14 w-14 flex items-center justify-center 
//       rounded-full bg-white/10 ring-1 ring-white/20 mb-4">
//       {icon}
//     </div>
//     <p className="text-3xl font-extrabold tracking-tight">
//       {number}
//     </p>
//     <p className="mt-1 text-sm text-gray-300">
//       {text}
//     </p>
//   </motion.div>
// );

// /* -------------------- FEATURE ITEM -------------------- */
// const FeatureItem = ({ icon, title, description }) => (
//   <motion.div
//     variants={fadeUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     className="flex items-start gap-4 p-5 rounded-xl 
//       bg-white/10 backdrop-blur-md
//       hover:bg-white/20 hover:-translate-y-1
//       transition-all duration-300"
//   >
//     <div className="h-11 w-11 flex items-center justify-center 
//       rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 
//       shadow-md text-white">
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold text-white">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-300 leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </motion.div>
// );

// /* -------------------- HERO SECTION -------------------- */
// const HeroSection = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleReportIssue = () => {
//     token ? navigate("/complaint") : navigate("/login");
//   };

//   return (
//     <section
//       className="relative w-full text-white font-sans overflow-hidden"
//       style={{
//         backgroundImage: `url('./hbg1.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* HERO CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//           >
//             <span className="inline-block bg-white/10 px-4 py-2 
//               rounded-full text-sm font-semibold mb-6">
//               Smart Campus Electrical Platform
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl 
//               font-extrabold leading-tight tracking-tight">
//               One Platform to <br />
//               <span className="text-blue-400">
//                 Report, Track & Resolve
//               </span>{" "}
//               <br />
//               Campus Electrical Issues
//             </h1>

//             <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed">
//               CampusFix helps institutions manage electrical complaints
//               efficiently with real-time tracking, accountability,
//               and faster resolutions.
//             </p>

//             {/* BUTTONS */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <button
//                 onClick={handleReportIssue}
//                 className="px-8 py-3 rounded-xl font-semibold
//                   bg-gradient-to-r from-blue-500 to-indigo-600
//                   shadow-lg shadow-blue-500/30
//                   hover:shadow-xl hover:scale-[1.03]
//                   transition-all duration-300"
//               >
//                 ⚡ Report an Issue
//               </button>

//               <button
//                 onClick={() => navigate("/my-complaints")}
//                 className="px-8 py-3 rounded-xl font-semibold
//                   border border-white/30 bg-white/5
//                   hover:bg-white hover:text-blue-600
//                   hover:scale-[1.03]
//                   transition-all duration-300"
//               >
//                 📄 Track Complaint
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//               Why CampusFix Works Better
//             </h2>

//             <p className="text-gray-300 mb-6 max-w-md">
//               Built for modern campuses to reduce downtime,
//               improve safety, and bring transparency to maintenance.
//             </p>

//             <div className="space-y-4">
//               <FeatureItem
//                 icon={<BoltIcon className="h-6 w-6" />}
//                 title="Smart Issue Reporting"
//                 description="Submit structured complaints with clear priority,
//                 location, and issue context."
//               />
//               <FeatureItem
//                 icon={<CheckCircleIcon className="h-6 w-6" />}
//                 title="End-to-End Visibility"
//                 description="Track issues from creation to resolution
//                 with real-time updates."
//               />
//               <FeatureItem
//                 icon={<UserGroupIcon className="h-6 w-6" />}
//                 title="Role-Based Workflow"
//                 description="Optimized dashboards for students,
//                 technicians, and administrators."
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* STATS SECTION (SEPARATE BLOCK) */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <StatsCard
//             icon={<ClockIcon className="h-7 w-7 text-emerald-400" />}
//             number="24/7"
//             text="Always-On Support"
//           />
//           <StatsCard
//             icon={<BoltIcon className="h-7 w-7 text-yellow-400" />}
//             number="< 2h"
//             text="Fast Response Time"
//           />
//           <StatsCard
//             icon={<CheckCircleIcon className="h-7 w-7 text-sky-400" />}
//             number="100%"
//             text="End-to-End Tracking"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   BoltIcon,
//   CheckBadgeIcon,
//   ClockIcon,
//   ShieldCheckIcon,
// } from "@heroicons/react/24/outline";

// /* ---------------- Animations ---------------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// /* ---------------- Stat Card ---------------- */
// const StatCard = ({ icon, value, label }) => (
//   <motion.div
//     variants={fadeUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     className="flex items-center gap-4 rounded-xl 
//       border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
//   >
//     <div className="flex h-10 w-10 items-center justify-center 
//       rounded-lg bg-indigo-500/20 text-indigo-400">
//       {icon}
//     </div>
//     <div>
//       <p className="text-lg font-semibold text-white">{value}</p>
//       <p className="text-xs text-zinc-400">{label}</p>
//     </div>
//   </motion.div>
// );

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   return (
//     <section
//       className="relative min-h-screen w-full text-white font-sans"
//       style={{
  
//           backgroundImage: `url('./hbg1.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

//       {/* CONTENT */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//           >
//             <p className="mb-5 inline-block rounded-full 
//               border border-white/10 bg-white/10 
//               px-4 py-1.5 text-xs tracking-wide text-zinc-300">
//               Campus Electrical Management Platform
//             </p>

//             <h1 className="text-4xl sm:text-5xl xl:text-6xl 
//               font-extrabold tracking-tight leading-tight">
//              Smart Electrical Maintenance <br />
//              <span className="text-indigo-400">for College Campuses</span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base text-zinc-300 leading-relaxed">
//               CampusFix provides a centralized system for reporting,
//               monitoring, and resolving electrical issues across
//               educational institutions with transparency and control.
//             </p>

//             {/* ACTION BUTTONS */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <button
//                 onClick={() =>
//                   token ? navigate("/complaint") : navigate("/login")
//                 }
//                 className="rounded-lg bg-indigo-600 px-6 py-3 
//                   text-sm font-semibold text-white
//                   hover:bg-indigo-500 transition"
//               >
//                 Submit Electrical Issue
//               </button>

//               <button
//                 onClick={() => navigate("/my-complaints")}
//                 className="rounded-lg border border-white/20 
//                   bg-white/5 px-6 py-3 text-sm font-semibold
//                   text-zinc-200 hover:bg-white/10 transition"
//               >
//                 Track Complaint Status
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT CONTENT */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//               <h3 className="mb-2 text-lg font-semibold">
//                 Why CampusFix
//               </h3>
//               <p className="text-sm text-zinc-400">
//                 Designed for administrators, technicians,
//                 and students to collaborate efficiently.
//               </p>

//               <ul className="mt-5 space-y-4 text-sm text-zinc-300">
//                 <li className="flex gap-3">
//                   <CheckBadgeIcon className="h-5 w-5 text-indigo-400" />
//                   Structured complaint lifecycle management
//                 </li>
//                 <li className="flex gap-3">
//                   <ClockIcon className="h-5 w-5 text-indigo-400" />
//                   Real-time updates with accountability
//                 </li>
//                 <li className="flex gap-3">
//                   <ShieldCheckIcon className="h-5 w-5 text-indigo-400" />
//                   Secure role-based access control
//                 </li>
//               </ul>
//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <StatCard
//                 icon={<ClockIcon className="h-5 w-5" />}
//                 value="24/7"
//                 label="Operational Support"
//               />
//               <StatCard
//                 icon={<BoltIcon className="h-5 w-5" />}
//                 value="< 2 hrs"
//                 label="Average Response"
//               />
//               <StatCard
//                 icon={<CheckBadgeIcon className="h-5 w-5" />}
//                 value="100%"
//                 label="Issue Traceability"
//               />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
  import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BoltIcon,
  CheckBadgeIcon,
  ClockIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

/* ---------------- Animations ---------------- */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const hoverCard = {
  hover: { y: -6, scale: 1.02 },
};

/* ---------------- Stat Card ---------------- */
const StatCard = ({ icon, value, label }) => (
  <motion.div
    variants={fadeUp}
    whileHover="hover"
    className="flex items-center gap-4 rounded-2xl 
      border border-white/10 bg-white/5 px-5 py-4 
      backdrop-blur transition"
  >
    <div className="flex h-11 w-11 items-center justify-center 
      rounded-xl bg-indigo-500/20 text-indigo-400">
      {icon}
    </div>
    <div>
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-zinc-400">{label}</p>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <section
      className="relative min-h-screen w-full text-white"
      style={{
        backgroundImage: `url('./hbg1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full 
              border border-white/10 bg-white/10 px-4 py-1.5 
              text-xs tracking-wide text-zinc-300">
              <BuildingOffice2Icon className="h-4 w-4 text-indigo-400" />
              Aditya Campus Electrical System
            </span>

<h1
  className="mt-6 
    text-center lg:text-left
    text-3xl sm:text-4xl xl:text-5xl
    font-extrabold uppercase
    tracking-[0.14em] leading-snug
    font-['Inter']"
>
  ELECTRICAL ISSUE <br />
  MANAGEMENT SYSTEM <br />
  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 
    bg-clip-text text-transparent">
    ADITYA CAMPUS
  </span>
</h1>





            <p className="mt-6 max-w-xl text-base text-zinc-300 leading-relaxed">
              A smart platform built for Aditya campuses to report,
              monitor, and resolve electrical issues efficiently with
              real-time tracking, accountability, and transparency.
            </p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  token ? navigate("/complaint") : navigate("/login")
                }
                className="rounded-xl bg-indigo-600 px-7 py-3.5 
                  text-sm font-semibold text-white shadow-lg 
                  shadow-indigo-600/30 hover:bg-indigo-500"
              >
                Report Electrical Issue
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate("/my-complaints")}
                className="rounded-xl border border-white/20 
                  bg-white/5 px-7 py-3.5 text-sm font-semibold
                  text-zinc-200 hover:bg-white/10"
              >
                Track Complaint
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 
              bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-2 text-lg font-semibold">
                Why This System Exists
              </h3>
              <p className="text-sm text-zinc-400">
                Designed specifically for Aditya campus administrators,
                technicians, and students.
              </p>

              <ul className="mt-5 space-y-4 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-indigo-400" />
                  Clear complaint lifecycle & audit trail
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="h-5 w-5 text-indigo-400" />
                  Faster resolution with live status updates
                </li>
                <li className="flex gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-indigo-400" />
                  Role-based access for security & control
                </li>
              </ul>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                icon={<ClockIcon className="h-5 w-5" />}
                value="24 × 7"
                label="Campus Monitoring"
              />
              <StatCard
                icon={<BoltIcon className="h-5 w-5" />}
                value="< 2 hrs"
                label="Avg Response Time"
              />
              <StatCard
                icon={<CheckBadgeIcon className="h-5 w-5" />}
                value="100%"
                label="Issue Traceability"
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
