// src/components/WhyUse.jsx

import React from 'react';
import {
  ChatBubbleBottomCenterTextIcon,
  MagnifyingGlassCircleIcon,
  ShieldCheckIcon,
  BellAlertIcon,
} from '@heroicons/react/24/solid';

const WhyUse = () => {
  const features = [
    {
      title: 'Fast & Easy Reporting',
      description: 'Report any electrical problem in a few simple steps. Our user-friendly form ensures you can submit a detailed complaint in minutes, from any device.',
      icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-white" />,
    },
    {
      title: 'Real-time Tracking',
      description: 'Never wonder about the status of your complaint again. Track the progress of your ticket from submission to completion with real-time updates.',
      icon: <MagnifyingGlassCircleIcon className="h-10 w-10 text-white" />,
    },
    {
      title: 'Improved Safety & Security',
      description: 'Critical issues are prioritized, ensuring that potential hazards are addressed immediately. Our platform helps maintain a safe environment for everyone on campus.',
      icon: <ShieldCheckIcon className="h-10 w-10 text-white" />,
    },
    {
      title: 'Centralized Communication',
      description: 'CampusFix acts as a central hub for all stakeholders, streamlining communication and ensuring that the right people are notified at the right time.',
      icon: <BellAlertIcon className="h-10 w-10 text-white" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Why Choose CampusFix?
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Streamlining electrical maintenance on campus has never been easier. CampusFix is an all-in-one platform designed for efficiency, safety, and transparency.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUse;