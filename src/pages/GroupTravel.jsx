import React, { useState } from 'react';

export default function GroupTravel() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "",
    destination: "",
    details: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, travelers, destination } = formData;

    // Client-side validation
    if (!fullName || !email || !phone || !travelers || !destination) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Form submitted successfully!");
        setError("");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          travelers: "",
          destination: "",
          details: "",
        });
      } else {
        setError(result.message || "Something went wrong.");
        setSuccess("");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
      setSuccess("");
    }
  };

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Group Travel Made Easy</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Planning travel for 10 or more people? Get access to special group rates, flexible booking options, and expert support from our group travel specialists.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Special Group Discounts',
            icon: '💸',
            desc: 'Save more when you book flights, hotels, and services for your entire group.',
          },
          {
            title: 'Dedicated Travel Expert',
            icon: '👩‍💼',
            desc: 'Get personalized assistance from a travel specialist who understands your group’s needs.',
          },
          {
            title: 'Flexible Payment Options',
            icon: '💳',
            desc: 'Enjoy flexible payment plans and booking adjustments for peace of mind.',
          },
          {
            title: 'Custom Itineraries',
            icon: '🗺️',
            desc: 'Plan your route, layovers, and timing based on your group’s preferences.',
          },
          {
            title: 'Corporate & Student Travel',
            icon: '🏢',
            desc: 'We organize business trips, educational tours, and employee getaways.',
          },
          {
            title: '24/7 Support',
            icon: '📞',
            desc: 'We’re here day or night to help you with your journey.',
          },
        ].map((feature, idx) => (
          <div key={idx} className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Form Section */}
      <section className="mt-16 bg-white p-8 rounded-lg shadow max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Request a Free Group Quote</h2>
        <p className="text-gray-600 mb-6">
          Fill out the form below and our team will get back to you with the best deals and plans tailored for your group.
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4 font-semibold">{success}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded"
          />
          <input
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            type="number"
            placeholder="Number of Travelers"
            className="border p-3 rounded"
          />
          <input
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            type="text"
            placeholder="Destination"
            className="border p-3 rounded md:col-span-2"
          />
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Additional Details"
            className="border p-3 rounded md:col-span-2"
            rows="4"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded md:col-span-2"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}
