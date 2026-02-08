

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Link } from "react-router-dom";


const allowedAdminEmails = [
  "24p31f00a8@acet.ac.in",
  "24p31f0003@acet.ac.in",
  "24p31f0011@acet.ac.in",
  "24p31f00h5@acet.ac.in",
];

const SignUp = () => {
  const [formData, setFormData] = useState({
    accountType: "student",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: "",
    department: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAccountTypeChange = (type) => {
    setFormData({
      ...formData,
      accountType: type,
      id: "",
      department: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.id ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.agreedToTerms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }

    // 🔐 Admin email restriction
    if (
      formData.accountType === "admin" &&
      !allowedAdminEmails.includes(formData.email)
    ) {
      toast.error("This email is not authorized for Admin signup");
      return;
    }

    try {
      const res = await fetch("https://campusfix-project.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountType: formData.accountType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          id: formData.id,
          department:
            formData.accountType === "student"
              ? formData.department
              : "",
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        return;
      }

      toast.success(data.message || "Account created successfully");

      setFormData({
        ...formData,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        id: "",
        department: "",
        password: "",
        confirmPassword: "",
        agreedToTerms: false,
      });
    } catch (error) {
      toast.error("Server error. Try again later");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
 px-4 py-4">

      <ToastContainer position="top-right" autoClose={2000} />

      <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl 
        rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            CampusFix Sign Up
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Create your account to manage complaints
          </p>
        </div>

        {/* Account Type Switch */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button
            type="button"
            onClick={() => handleAccountTypeChange("student")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
              formData.accountType === "student"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            🎓 Student
          </button>

          <button
            type="button"
            onClick={() => handleAccountTypeChange("admin")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
              formData.accountType === "admin"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            🛠 Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Official Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="id"
            placeholder={
              formData.accountType === "student"
                ? "Student ID"
                : "Admin ID"
            }
            value={formData.id}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          {formData.accountType === "student" && (
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="science">Science</option>
              <option value="business">Business</option>
            </select>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to Terms & Conditions
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
              font-semibold hover:bg-blue-700 transition"
          >
            Create {formData.accountType} Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
  Login
  </Link>
          
        </p>
      </div>
    </div>
  );
};

export default SignUp;
