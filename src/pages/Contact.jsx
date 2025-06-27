import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields.");
      return;
    }

    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus("✅ Thank you for reaching out. We will contact you shortly.");
        setFormData({ name: "", email: "", message: "" });
        setError("");
      })
      .catch(() => {
        setError("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 font-sans text-gray-800">
      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded h-32"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-600 text-center">{status}</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}
