// // src/components/OurServices.jsx

// import React from 'react';
// import {
//   LightBulbIcon,
//   AcademicCapIcon,
//   VideoCameraIcon,
//   ExclamationCircleIcon,
//   ShieldCheckIcon,
//   ClockIcon
// } from '@heroicons/react/24/outline';
// import {
//   CheckCircleIcon,
//   CalendarIcon
// } from '@heroicons/react/24/solid';

// const OurServices = () => {
//   const serviceCards = [
//     {
//       title: 'Lighting Solutions',
//       priority: 'HIGH',
//       time: '30 minutes',
//       description: 'Complete lighting maintenance including bulb replacement, fixture repairs, and LED upgrades.',
//       services: ['Fluorescent tube replacement', 'Emergency lighting', 'LED conversion', 'Outdoor lighting'],
//       icon: <LightBulbIcon className="h-6 w-6 text-blue-500" />,
//     },
//     {
//       title: 'Ventilation Systems',
//       priority: 'MEDIUM',
//       time: '1 hour',
//       description: 'Fan maintenance, repair, and installation service for classrooms and common areas.',
//       services: ['Ceiling fan repair', 'Motor replacement', 'Exhaust fan maintenance', 'Speed control fixes'],
//       icon: <AcademicCapIcon className="h-6 w-6 text-blue-500" />,
//     },
//     {
//       title: 'Audio Visual Equipment',
//       priority: 'MEDIUM',
//       time: '45 minutes',
//       description: 'Projector, screen, and PA equipment electrical maintenance and setup.',
//       services: ['Projector power issues', 'Cable management', 'Screen motor repair', 'Control system fixes'],
//       icon: <VideoCameraIcon className="h-6 w-6 text-blue-500" />,
//     },
//     {
//       title: 'Power Outlets & Wiring',
//       priority: 'HIGH',
//       time: '1.5 hours',
//       description: 'Electrical outlet installation, repair, and wiring maintenance throughout campus.',
//       services: ['Outlet replacement', 'Network outlet wiring', 'USB charging points', 'Extension installations'],
//       icon: <ExclamationCircleIcon className="h-6 w-6 text-blue-500" />,
//     },
//     {
//       title: 'Safety & Security Systems',
//       priority: 'CRITICAL',
//       time: 'Duration varies',
//       description: 'Emergency lighting, fire alarm electrical components, and security system maintenance.',
//       services: ['Emergency exit lights', 'Security camera power', 'Fire alarm wiring', 'Access control systems'],
//       icon: <ShieldCheckIcon className="h-6 w-6 text-blue-500" />,
//     },
//     {
//       title: 'Preventive Maintenance',
//       priority: 'LOW',
//       time: 'Scheduled',
//       description: 'Regular electrical system inspections and preventative maintenance programs.',
//       services: ['Quarterly inspections', 'Thermal imaging', 'Load testing', 'Compliance checks'],
//       icon: <ClockIcon className="h-6 w-6 text-blue-500" />,
//     },
//   ];

//   const howItWorksSteps = [
//     { step: '1', title: 'Report Issue', description: 'Submit complaint through our portal with detailed information.' },
//     { step: '2', title: 'Assessment', description: 'Our team evaluates the issue and assigns priority levels.' },
//     { step: '3', title: 'Assignment', description: 'Qualified technician is assigned and dispatched to location.' },
//     { step: '4', title: 'Resolution', description: 'Issue resolved and status updated with completion details.' },
//   ];

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'HIGH':
//         return 'bg-red-500';
//       case 'CRITICAL':
//         return 'bg-red-700';
//       case 'MEDIUM':
//         return 'bg-yellow-500';
//       case 'LOW':
//         return 'bg-green-500';
//       default:
//         return 'bg-gray-500';
//     }
//   };

//   return (
//     <div className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//           Regular Maintenance Services
//         </h2>
//         <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
//           Comprehensive electrical services to keep your campus running smoothly
//         </p>
//       </div>
//       <div className="mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serviceCards.map((card, index) => (
//           <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 flex flex-col justify-between">
//             <div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
//                   {card.icon}
//                 </div>
//                 <div className="flex flex-col">
//                   <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
//                   <div className="flex items-center space-x-2 mt-1">
//                     <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded text-white ${getPriorityColor(card.priority)}`}>
//                       {card.priority}
//                     </span>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       {card.time}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <p className="mt-4 text-sm text-gray-600">{card.description}</p>
//               <div className="mt-4">
//                 <h4 className="font-bold text-gray-900 mb-2">Included Services:</h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-600">
//                   {card.services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="flex items-center space-x-2">
//                       <CheckCircleIcon className="h-4 w-4 text-blue-500" />
//                       <span>{service}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//               <button className="flex-1 py-2 px-2 sm:px-3 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-1 sm:space-x-2 text-sm">
//                 <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//                 <span>Schedule Service</span>
//               </button>
//               <button className="flex-1 py-2 px-2 sm:px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm">
//                 Report Issue
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16 sm:mt-20 md:mt-24 max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//           How Our Service Works
//         </h2>
//         <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
//           Simple, efficient process from complaint to resolution
//         </p>
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {howItWorksSteps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-500 font-bold text-xl">
//                 {step.step}
//               </div>
//               <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
//               <p className="mt-2 text-sm text-gray-600">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurServices;


// src/components/OurServices.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

/* ---------------- Animations ---------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ---------------- Services Data ---------------- */
const serviceCards = [
  {
    title: "Lighting Solutions",
    priority: "HIGH",
    time: "30 min",
    desc: "Complete lighting maintenance including repairs and LED upgrades.",
    services: ["Bulb replacement", "Emergency lights", "LED conversion", "Outdoor lighting"],
    icon: LightBulbIcon,
  },
  {
    title: "Ventilation Systems",
    priority: "MEDIUM",
    time: "1 hour",
    desc: "Fan installation, repair, and speed control maintenance.",
    services: ["Ceiling fans", "Motor repair", "Exhaust fans", "Regulator fixes"],
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Audio Visual Systems",
    priority: "MEDIUM",
    time: "45 min",
    desc: "Projector, PA system, and classroom AV electrical support.",
    services: ["Projector power", "Cable fixing", "Screen motors", "Control panels"],
    icon: VideoCameraIcon,
  },
  {
    title: "Power & Wiring",
    priority: "HIGH",
    time: "1.5 hrs",
    desc: "Outlet installation and campus wiring maintenance.",
    services: ["Socket repair", "Network wiring", "USB points", "Extensions"],
    icon: BoltIcon,
  },
  {
    title: "Safety Systems",
    priority: "CRITICAL",
    time: "Varies",
    desc: "Fire alarms, emergency exits, and security power systems.",
    services: ["Exit lights", "Fire alarms", "CCTV power", "Access control"],
    icon: ShieldCheckIcon,
  },
  {
    title: "Preventive Maintenance",
    priority: "LOW",
    time: "Scheduled",
    desc: "Routine inspections and preventive electrical checks.",
    services: ["Quarterly checks", "Load testing", "Thermal scan", "Compliance"],
    icon: ClockIcon,
  },
];

/* ---------------- Priority Color ---------------- */
const priorityColor = {
  HIGH: "bg-red-500",
  CRITICAL: "bg-red-700",
  MEDIUM: "bg-yellow-500",
  LOW: "bg-green-500",
};

const OurServices = () => {
  return (
    <section className="font-sans bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
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
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Reliable electrical services designed for modern campus needs
          </p>
        </motion.div>

        {/* ---------- Service Cards ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-2xl p-6 shadow-md border 
                hover:shadow-xl hover:-translate-y-2 transition"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 
                  flex items-center justify-center">
                  <card.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded text-white font-semibold ${priorityColor[card.priority]}`}
                    >
                      {card.priority}
                    </span>
                    <span className="text-sm text-gray-500">
                      ⏱ {card.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {card.desc}
              </p>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                {card.services.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                    {s}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 border border-blue-500 text-blue-600 
                  py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition 
                  flex items-center justify-center gap-2">
                  <CalendarDaysIcon className="h-4 w-4" />
                  Schedule
                </button>
                <button className="flex-1 bg-blue-600 text-white 
                  py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                  Report Issue
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- How it Works ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            Simple and transparent process from complaint to resolution
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {["Report", "Assess", "Assign", "Resolve"].map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex flex-col items-center"
              >
                <div className="h-14 w-14 rounded-full bg-blue-600 text-white 
                  flex items-center justify-center text-xl font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {step}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {step === "Report" && "Submit complaint online"}
                  {step === "Assess" && "Issue priority evaluated"}
                  {step === "Assign" && "Technician assigned"}
                  {step === "Resolve" && "Problem resolved quickly"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
