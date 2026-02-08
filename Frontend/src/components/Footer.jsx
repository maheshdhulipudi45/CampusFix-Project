// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-700 py-10 border-t border-gray-200">
//   <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-7">
//     {/* About Section */}
//     <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
//       <div className="flex items-center space-x-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-blue-500"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//         </svg>
//         <div className="flex flex-col">
//           <span className="text-xl font-bold">CampusFix</span>
//           <span className="text-xs text-gray-500">
//             Electrical Management System
//           </span>
//         </div>
//       </div>
//       <p className="text-sm text-gray-600">
//         Streamlining campus electrical maintenance with efficient complaint
//         management, real-time tracking, and expert technical support for
//         educational institutions.
//       </p>
//       {/* Social Icons */}
//       <div className="flex space-x-4 mt-4">
//         {/* ...social links */}
//       </div>
//     </div>

//     {/* Quick Links */}
//     <div>
//       <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
//       <ul className="space-y-2">
//         <li>
//           <a href="#" className="hover:text-blue-500 transition-colors duration-200">Dashboard</a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500 transition-colors duration-200">Report Issue</a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500 transition-colors duration-200">Track Complaint</a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500 transition-colors duration-200">Help & Support</a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500 transition-colors duration-200">User Guide</a>
//         </li>
//       </ul>
//     </div>

//     {/* Contact Info */}
//     <div>
//       <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
//       <ul className="space-y-4">
//        <li className="flex items-center space-x-2"> <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.293a1 1 0 01.707.293l1.832 1.832a1 1 0 01.293.707v1.832a2 2 0 00.586 1.414l1.832 1.832a1 1 0 01.293.707v1.832a2 2 0 001.414.586l1.832 1.832a1 1 0 01.707.293L19 19m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4z" /> </svg> <div> <p className="text-sm">Emergency</p> <p className="text-sm font-semibold">+1 (555) 911-ELEC</p> </div> </li> <li className="flex items-center space-x-2"> <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 13H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4z" /> </svg> <div> <p className="text-sm">Email Support</p> <p className="text-sm font-semibold">canpusfix1@gmail.com</p> </div> </li> <li className="flex items-center space-x-2">
//          <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> <div> <p className="text-sm">Office Hours</p> <p className="text-sm font-semibold">Mon-Fri: 8AM-6PM</p>
//               <p className="text-xs text-gray-500">Emergency: 24/7</p> </div> </li>
//       </ul>
//     </div>

//     {/* Openings */}
//     {/* <div>
//       <h4 className="font-semibold text-lg mb-4">Openings</h4>
//       <ul className="space-y-2">
//         <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Maintenance Technician</a></li>
//         <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">IT Support Specialist</a></li>
//         <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Customer Service Representative</a></li>
//         <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Electrician Apprentice</a></li>
//       </ul>
//     </div> */}
//   </div>
// </footer>

//   );
// };

// export default Footer;




import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-12 
        grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* BRAND */}
        <div className="text-left space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center 
              rounded-lg bg-blue-600 text-white font-bold">
              CF
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                CampusFix
              </h3>
              <p className="text-xs text-gray-500">
                Aditya Campus Electrical System
              </p>
            </div>
          </div>

       <p
  className="text-sm text-gray-600 leading-relaxed text-justify max-w-md"
  style={{ hyphens: "auto" }}
>
  CampusFix is an internal electrical complaint and maintenance
  management system designed exclusively for Aditya Educational
  Institutions to ensure safe, reliable, and uninterrupted campus
  operations.
</p>


        </div>

        {/* QUICK LINKS */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-left"
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Quick Access
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="/home" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/" className="hover:text-blue-600 transition">Raise Complaint</a></li>
            <li><a href="/" className="hover:text-blue-600 transition">Track Status</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Support Desk</a></li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="text-left"
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Electrical Support
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="text-gray-500">Campus Helpdesk</p>
              <p className="font-medium text-gray-800">
                +91 7658956116
              </p>
            </li>
            <li>
              <p className="text-gray-500">Official Email</p>
              <p className="font-medium text-gray-800">
                campusfix@aditya.ac.in
              </p>
            </li>
            <li>
              <p className="text-gray-500">Working Hours</p>
              <p className="font-medium text-gray-800">
                Monday – Saturday (8:00 AM – 6:00 PM)
              </p>
              <p className="text-xs text-gray-500">
                Emergency Electrical Support – 24/7
              </p>
            </li>
          </ul>
        </motion.div>

        {/* CAMPUS COVERAGE */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="text-left"
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            Campus Coverage
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>Academic Buildings</li>
            <li>Student Hostels</li>
            <li>Laboratories & Workshops</li>
            <li>Administrative Blocks</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 py-4"
      >
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Aditya Educational Institutions.
          CampusFix – Internal Electrical Management System.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
