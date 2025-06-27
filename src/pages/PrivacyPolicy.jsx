import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At Arangrant, your privacy is important to us. This privacy policy outlines how we collect,
          use, and protect your information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 text-sm">
          <li>Personal information (name, email, phone number, etc.)</li>
          <li>Booking and travel information</li>
          <li>IP address and device information</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-sm">
          <li>To process bookings and payments</li>
          <li>To improve our services and customer experience</li>
          <li>To send promotional offers and updates (if subscribed)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="text-sm mb-4">
          We implement advanced security measures to protect your personal information. All data is
          encrypted and securely stored.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Choices</h2>
        <p className="text-sm mb-4">
          You can opt out of receiving marketing emails at any time. You may also request to delete
          or update your personal data.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
}
