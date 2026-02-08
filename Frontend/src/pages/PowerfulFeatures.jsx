import React from "react";
import { motion } from "framer-motion";
import {
  BoltIcon,
  ClockIcon,
  BellAlertIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  CameraIcon,
  CheckCircleIcon,
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

/* ---------------- Feature Data ---------------- */
const features = [
  {
    title: "Instant Reporting",
    description:
      "Report electrical issues instantly with photos and clear descriptions.",
    sub: ["One-click reporting", "Photo attachments", "Location mapping"],
    icon: BoltIcon,
  },
  {
    title: "Real-time Tracking",
    description:
      "Track your complaint from assignment to resolution in real time.",
    sub: ["Live status", "Progress updates", "ETA visibility"],
    icon: ClockIcon,
  },
  {
    title: "Smart Notifications",
    description:
      "Stay informed with instant alerts and updates on every change.",
    sub: ["Email alerts", "SMS notifications", "Custom preferences"],
    icon: BellAlertIcon,
  },
  {
    title: "Role-based Access",
    description:
      "Different dashboards for students, faculty, and administrators.",
    sub: ["Student dashboard", "Faculty tools", "Admin controls"],
    icon: UserGroupIcon,
  },
  {
    title: "Priority Management",
    description:
      "Safety-critical issues are handled first with smart escalation.",
    sub: ["Priority levels", "Auto-escalation", "Safety first"],
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Powerful insights to improve maintenance efficiency and planning.",
    sub: ["Response metrics", "Trend analysis", "Resource planning"],
    icon: ChartBarIcon,
  },
  {
    title: "Mobile Optimized",
    description:
      "Use CampusFix seamlessly across mobile, tablet, and desktop.",
    sub: ["Responsive UI", "Touch friendly", "Anywhere access"],
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Location Services",
    description:
      "Technicians reach the exact issue location faster with maps.",
    sub: ["GPS navigation", "Campus maps", "Quick routing"],
    icon: MapPinIcon,
  },
  {
    title: "Visual Documentation",
    description:
      "Upload photos and videos to clearly document every issue.",
    sub: ["Image uploads", "Video support", "Before/after proof"],
    icon: CameraIcon,
  },
];

const PowerfulFeatures = () => {
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
            Powerful Features for Everyone
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to manage campus electrical maintenance —
            designed for students, faculty, staff, and administrators.
          </p>
        </motion.div>

        {/* ---------- Features Grid ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-7 border shadow-sm 
                hover:shadow-xl hover:-translate-y-2 transition"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="h-12 w-12 rounded-xl bg-gradient-to-br 
                  from-blue-500 to-indigo-600 flex items-center justify-center"
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {feature.description}
              </p>

              {/* Sub features */}
              <ul className="space-y-2 text-sm text-gray-600">
                {feature.sub.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
