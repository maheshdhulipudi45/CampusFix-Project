

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {  Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginRole, setLoginRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password required");
      return;
    }

    try {
      const res = await fetch("https://campusfix-project.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: loginRole,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }

      const userId =
        data.user?._id || data._id || data.id || data.userId;

      localStorage.setItem("userId", userId);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      toast.success("Login successful");
      setTimeout(() => navigate("/home"), 800);
    } catch {
      toast.error("Server error");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center px-5 py-9">
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 sm:p-8">
        {/* HEADER */}
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            CampusFix Login
          </h2>
          <p className="text-sm text-gray-500">
            Electrical Complaint Management System
          </p>
        </div>

        {/* ROLE SWITCH */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-4">
          <button
            onClick={() => setLoginRole("student")}
            className={`w-1/2 py-2 text-sm rounded-full transition ${
              loginRole === "student"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setLoginRole("admin")}
            className={`w-1/2 py-2 text-sm rounded-full transition ${
              loginRole === "admin"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Admin
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login as {loginRole}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
    Sign Up
  </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
