// src/components/HeroSection2.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1600&auto=format&fit=crop",
    title: "Professional Campus Electrical Management",
    description: "Certified technicians maintaining safe campus infrastructure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop",
    title: "Real-Time Monitoring & Tracking",
    description: "Live complaint tracking and system visibility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1600&auto=format&fit=crop",
    title: "Planned & Preventive Maintenance",
    description: "Reducing downtime with scheduled inspections",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605809715103-62584177d8a6?q=80&w=1600&auto=format&fit=crop",
    title: "Emergency Electrical Response",
    description: "Fast action for critical campus safety issues",
  },
];

const HeroSection2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔄 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <section className="font-sans py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      {/* ---------- Header ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-blue-600">Campus Services</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Reliable electrical solutions for a safe and efficient campus
        </p>
      </motion.div>

      {/* ---------- Slider ---------- */}
      <div className="relative mt-16 max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-10 left-8 right-8 text-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold"
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-2 text-lg text-gray-200"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ---------- Controls ---------- */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
            bg-white/70 hover:bg-white text-gray-800 
            p-3 rounded-full shadow transition"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
            bg-white/70 hover:bg-white text-gray-800 
            p-3 rounded-full shadow transition"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* ---------- Dots ---------- */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === currentSlide ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
