

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Complaint = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const initialState = {
    userId,
    fullName: "",
    email: "",
    phoneNumber: "",
    locationType: "",
    hostelType: "",
    block: "",
    floor: "",
    roomNo: "",
    collegeBuilding: "",
    issueType: "",
    problemDescription: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    toast.info("Submitting complaint...");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) =>
        data.append(key, formData[key])
      );
      if (image) data.append("image", image);

      const res = await fetch("https://campusfix-project.onrender.com/api/complaints", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        toast.success("Complaint submitted");
        setTimeout(() => navigate("/my-complaints"), 1000);
      } else {
        toast.error("Submission failed");
        setLoading(false);
      }
    } catch {
      toast.error("Server error");
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center my-2 px-5 py-3">
      <ToastContainer autoClose={1000} hideProgressBar />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6"
      >

          {/* WARNING MARQUEE */}
  <div className="mb-4 overflow-hidden rounded-lg bg-red-600">
    <div
      className="whitespace-nowrap text-white text-sm font-semibold px-4 py-2"
      style={{ animation: "marquee 14s linear infinite" }}
    >
      ⚠️ Please submit complaints responsibly. Unnecessary or false complaints
      may lead to disciplinary action as per Aditya Campus rules.
    </div>
  </div>
        {/* HEADER */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Electrical Complaint Form
          </h2>
          <p className="text-sm text-gray-500">
            Aditya Campus – Maintenance Request
          </p>
        </div>

        {/* BASIC DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className={inputClass}
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            className={inputClass}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <input
            className={inputClass}
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <select
            className={inputClass}
            name="issueType"
            onChange={handleChange}
            required
          >
            <option value="">Issue Type</option>
            <option value="fan">Fan</option>
            <option value="light">Light</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water</option>
          </select>
        </div>

        {/* LOCATION TYPE */}
        <div className="mt-4">
          <select
            className={inputClass}
            name="locationType"
            onChange={handleChange}
            required
          >
            <option value="">Select Location</option>
            <option value="hostel">Hostel</option>
            <option value="college">College Building</option>
          </select>
        </div>

        {/* HOSTEL SECTION */}
        {formData.locationType === "hostel" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select
              className={inputClass}
              name="hostelType"
              onChange={handleChange}
              required
            >
              <option value="">Hostel Type</option>
              <option value="boys">Boys Hostel</option>
              <option value="girls">Girls Hostel</option>
            </select>

            <select
              className={inputClass}
              name="block"
              onChange={handleChange}
              required
            >
              <option value="">Block</option>
              {["A","B","C","D","E","F","G","H"].map(b => (
                <option key={b}>{b}</option>
              ))}
            </select>

            <select
              className={inputClass}
              name="floor"
              onChange={handleChange}
              required
            >
              <option value="">Floor</option>
              {[1,2,3,4,5].map(f => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <input
              className={inputClass}
              name="roomNo"
              placeholder="Room Number"
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* COLLEGE SECTION */}
        {formData.locationType === "college" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select
              className={inputClass}
              name="collegeBuilding"
              onChange={handleChange}
              required
            >
              <option value="">Select Building</option>
              <option value="RTB">RTB</option>
              <option value="Visvesvaraya">Visvesvaraya Bhavan</option>
              <option value="Cotton">Cotton Bhavan</option>
              <option value="CV Raman">CV Raman</option>
            </select>

            <input
              className={inputClass}
              name="roomNo"
              placeholder="Room Number"
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <textarea
          className={`${inputClass} mt-4`}
          rows="3"
          name="problemDescription"
          placeholder="Describe the problem briefly"
          onChange={handleChange}
          required
        />

        {/* IMAGE */}
        <input
          type="file"
          className="mt-4 text-sm"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg 
          font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </div>
  );
};

export default Complaint;

