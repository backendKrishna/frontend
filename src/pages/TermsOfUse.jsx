import React from "react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-6">Terms of Use</h1>

        <p className="mb-4">
          These terms of use govern your access to and use of the Arangrant website and services.
          By using our platform, you agree to these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Website</h2>
        <p className="text-sm mb-4">
          You agree to use the site for lawful purposes only. You must not use the platform to
          transmit harmful or fraudulent content.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Booking & Payments</h2>
        <p className="text-sm mb-4">
          All bookings are subject to availability and confirmation. Payment must be completed to
          confirm your travel reservation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
        <p className="text-sm mb-4">
          All content including text, graphics, and logos are the property of Arangrant and protected
          by intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
        <p className="text-sm mb-4">
          Arangrant reserves the right to update these terms at any time. Continued use of the
          platform constitutes acceptance of the new terms.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
}
