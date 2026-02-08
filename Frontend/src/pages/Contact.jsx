// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     emailAddress: '',
//     department: '',
//     priority: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (!formData.fullName || !formData.emailAddress || !formData.subject || !formData.message) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }
//     // Simulate API call
//     console.log('Form Submitted:', formData);
//     toast.success('Your message has been sent successfully!');
//     // Reset form after submission
//     setFormData({
//       fullName: '',
//       emailAddress: '',
//       department: '',
//       priority: '',
//       subject: '',
//       message: ''
//     });
//   };

//   const contactInfo = [
//   {
//     title: 'Phone Support',
//     icon: (
//       <svg className="h-10 w-10 text-blue-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M6.5 19.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5h11c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H6.5z" />
//       </svg>
//     ),
//     details: [
//       { text: '+91 98765-43210' },
//       { text: '+91 88765-43211' },
//       { text: '24/7 emergency hotline available', className: 'text-xs text-gray-400 mt-2' },
//     ],
//   },
//   {
//     title: 'Email Support',
//     icon: (
//       <svg className="h-10 w-10 text-blue-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M22 6h-20c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 2l-10 6-10-6v-2l10 6 10-6v2z" />
//       </svg>
//     ),
//     details: [
//       { text: 'support@campusfix.edu' },
//       { text: 'Response within 2-4 hours', className: 'text-xs text-gray-400 mt-2' },
//     ],
//   },
//   {
//     title: 'Campus Location',
//     icon: (
//       <svg className="h-10 w-10 text-blue-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2c-4.41 0-8 3.59-8 8 0 4.41 8 14 8 14s8-9.59 8-14c0-4.41-3.59-8-8-8zM12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
//       </svg>
//     ),
//     details: [
//       { text: 'Maintenance Office' },
//       { text: 'Ground Floor, Admin Block' },
//       { text: 'Open Mon-Sat: 8:00 AM - 6:00 PM', className: 'text-xs text-gray-400 mt-2' },
//     ],
//   },
//   {
//     title: 'Emergency Hours',
//     icon: (
//       <svg className="h-10 w-10 text-blue-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-10h2v5h-2v-5zm0 6h2v2h-2v-2z" />
//       </svg>
//     ),
//     details: [
//       { text: '24/7 Critical Issues' },
//       { text: 'Same-day Standard Issues' },
//       { text: 'Priority response for urgent matters.', className: 'text-xs text-gray-400 mt-2' },
//     ],
//   },
// ];


//   return (
//     <div className="bg-gray-50 py-12">
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      
//       <div className="container mx-auto px-4">
//         {/* Header */}
      

//          <div className="bg-gray-50 py-12">
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-800">Contact CampusFix</h2>
//           <p className="text-gray-600 mt-2">
//             Get in touch with our support team for electrical assistance, questions, or feedback.
//           </p>
//         </div>

//         {/* Info Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//           {contactInfo.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               {card.icon}
//               <h3 className="font-semibold text-gray-800">{card.title}</h3>
//               {card.details.map((detail, i) => (
//                 <p key={i} className={`text-sm text-gray-500 ${detail.className || ''}`}>
//                   {detail.text}
//                 </p>
//               ))}
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
        
//         {/* Main Content: Form and Sidebar */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Form Section */}
//           <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md border border-gray-200">
//             <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Form fields (Full Name, Email, etc.) */}
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//               {/* Add other form fields here using the same pattern... */}
              
//               {/* Subject */}
//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 text-sm font-medium mb-1">Subject *</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                   placeholder="Brief description of the issue"
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 text-sm font-medium mb-1">Message *</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                   placeholder="Describe your issue or question in detail..."
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 transform hover:-translate-y-1"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Sidebar Panels */}
//           <div className="lg:col-span-1 flex flex-col space-y-6">
//             {/* Emergency Panel */}
//             <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
//               <h4 className="flex items-center space-x-2 text-lg font-semibold text-red-700 mb-2">
//                 <span className="text-2xl">⚠️</span>
//                 <span>Emergency Situations</span>
//               </h4>
//               <p className="text-sm text-red-600 mb-4">
//                 For immediate electrical emergencies like power outages, exposed wires, or safety hazards, please call our emergency hotline directly.
//               </p>
//               <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200">
//                 Call Emergency Line
//               </button>
//             </div>

//             {/* Response Time and Office Hours Panel */}
//             <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
//               <h4 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-4">
//                 <span className="text-2xl text-green-500">✅</span>
//                 <span>Expected Response Times</span>
//               </h4>
//               {/* List of response times */}
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li><span className="font-semibold">Emergency Issue:</span> Within 30 minutes</li>
//                 {/* Add other response times... */}
//               </ul>

//               <div className="border-t border-gray-200 mt-4 pt-4">
//                 <h4 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-2">
//                   <span className="text-2xl text-blue-500">⏰</span>
//                   <span>Office Hours</span>
//                 </h4>
//                 {/* List of office hours */}
//                 <ul className="text-sm text-gray-600">
//                   <li><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</li>
//                   {/* Add other hours... */}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;  


import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import "react-toastify/dist/ReactToastify.css";

/* ---------------- Animations ---------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailAddress || !formData.subject || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Your message has been sent successfully!");
    setFormData({ fullName: "", emailAddress: "", subject: "", message: "" });
  };

  const contactCards = [
    {
      title: "Phone Support",
      icon: PhoneIcon,
      info: ["+91 7658956116", "+91 9030445369", "24/7 emergency hotline"],
    },
    {
      title: "Email Support",
      icon: EnvelopeIcon,
      info: ["support@campusfix.edu", "Reply within 2–4 hours"],
    },
    {
      title: "Campus Location",
      icon: MapPinIcon,
      info: ["Maintenance Office", "Admin Block – Ground Floor"],
    },
    {
      title: "Emergency Hours",
      icon: ExclamationTriangleIcon,
      info: ["24/7 Critical Issues", "Priority response"],
    },
  ];

  return (
    <section className="font-sans bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto">

        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Contact CampusFix
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Reach out to our support team for assistance, emergencies, or queries
          </p>
        </motion.div>

        {/* ---------- Contact Info Cards ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-2xl p-6 shadow-md border 
                hover:shadow-xl hover:-translate-y-2 transition text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center 
                justify-center rounded-full bg-blue-100">
                <card.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              {card.info.map((text, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  {text}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- Main Content ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ---------- Contact Form ---------- */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address *"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Your message *"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg 
                  font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* ---------- Sidebar ---------- */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Emergency */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <h4 className="flex items-center gap-2 text-red-700 font-semibold mb-3">
                <ExclamationTriangleIcon className="h-6 w-6" />
                Emergency Support
              </h4>
              <p className="text-sm text-red-600 mb-4">
                For immediate hazards or power failures, call our emergency line.
              </p>
              <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                Call Emergency
              </button>
            </div>

            {/* Response Time */}
            <div className="bg-white border rounded-2xl p-6 shadow-md">
              <h4 className="flex items-center gap-2 font-semibold mb-4">
                <ClockIcon className="h-6 w-6 text-blue-600" />
                Response Time
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Emergency: within 30 minutes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-500" />
                  Standard: same day
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
