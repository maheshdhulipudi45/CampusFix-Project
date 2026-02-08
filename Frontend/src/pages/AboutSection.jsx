import React from "react";
import { motion } from "framer-motion";
import {
  BoltIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  UserIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

/* ---------------- Animations ---------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- Feature Data ---------------- */
const features = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Expert Technicians",
    desc: "Certified professionals handle every issue with safety and accuracy.",
  },
  {
    icon: ArrowPathIcon,
    title: "Live Tracking",
    desc: "Monitor complaint progress from submission to resolution.",
  },
  {
    icon: BoltIcon,
    title: "Fast Resolution",
    desc: "Reduced downtime with quick assignment and response.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure System",
    desc: "All complaints and user data are securely managed.",
  },
];

const users = [
  {
    icon: UserIcon,
    title: "Students",
    desc: "Report hostel, classroom, and lab electrical issues easily.",
  },
  {
    icon: AcademicCapIcon,
    title: "Faculty & Staff",
    desc: "Ensure uninterrupted teaching and working environments.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Administration",
    desc: "Monitor complaints, performance, and technician efficiency.",
  },
];

const AboutSection = () => {
  return (
    <section className="font-sans py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* -------- Mission -------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28"
        >
          <motion.div variants={item}>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              CampusFix modernizes campus electrical maintenance by providing
              a centralized digital platform that connects users with skilled
              technicians.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our mission is to ensure safety, transparency, and faster
              resolution of electrical issues across educational institutions.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white rounded-2xl shadow-xl p-8 border"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Why Choose CampusFix?
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "Simple and quick complaint submission",
                "Real-time complaint tracking",
                "Improved campus safety",
                "Centralized communication platform",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* -------- Core Features -------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white rounded-2xl p-7 text-center shadow-md 
                hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center 
                justify-center rounded-full bg-gradient-to-br 
                from-blue-500 to-indigo-500">
                <f.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* -------- Who Can Use -------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-extrabold text-gray-900"
          >
            Who Can Use CampusFix?
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            CampusFix is designed to serve everyone involved in campus
            maintenance and operations.
          </motion.p>

          <motion.div
            variants={container}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {users.map((u, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-white rounded-2xl p-8 shadow-md 
                  hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center 
                  justify-center rounded-full bg-blue-100">
                  <u.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {u.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {u.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
