import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About <span className="text-orange-500">Arangrant</span>
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Premium flight booking experience – dedicated to business and first-class travelers.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Arangrant is a specialized team of travel consultants focused on finding unbeatable deals
            on business and first-class flights. With exclusive partnerships across major airlines, we provide
            travelers with access to premium experiences at the best possible prices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Book With Us?</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>💰 Save up to <strong>70%</strong> on luxury flights through exclusive deals.</li>
            <li>🧑‍💼 Personalized service from expert travel agents – no bots.</li>
            <li>📞 24/7 assistance for booking, rescheduling, and itinerary planning.</li>
            <li>✈️ Access to global routes and flexible multi-stop journeys.</li>
            <li>🔒 Transparent pricing with no hidden charges.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe premium travel should be stress-free and affordable. Our mission is to provide a seamless
            experience from consultation to landing – ensuring every journey is comfortable, cost-effective,
            and personally tailored to your needs.
          </p>
        </section>

        <div className="text-center mt-10">
          <p className="text-gray-600">Start your next journey with confidence.</p>
          <a
            href="/flights"
            className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Browse Flights
          </a>
        </div>
      </div>
    </div>
  );
}
