
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("❌ Please enter a valid email.");
      return;
    }

    // fetch("http://localhost:5000/api/subscriber", {
    // fetch("http://backend-l374.onrender.com/api/subscriber", {

fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscriber`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then(() => {
        setStatus("✅ Subscribed successfully!");
        setEmail("");
      })
      .catch(() => {
        setStatus("❌ Subscription failed. Please try again.");
      });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 font-sans text-sm">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
        {/* Company Info */}
        {/* <div>
          <h3 className="text-white font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">My Trips</a></li>
            <li><a href="#">Help / FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div> */}


        <div>
          <h3 className="text-white font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/bookings">My Trips</Link></li>
            <li><Link to="/help">Help / FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
          </ul>
        </div>


        {/* Top Countries */}
        <div>
          <h3 className="text-white font-bold mb-3">TOP COUNTRIES</h3>
          <ul className="space-y-2">
            <li>UK</li>
            <li>France</li>
            <li>Germany</li>
            <li>Israel</li>
            <li>UAE</li>
            <li>Japan</li>
            <li>Spain</li>
            <li>Italy</li>
          </ul>
        </div>

        {/* Top Cities */}
        <div>
          <h3 className="text-white font-bold mb-3">TOP CITIES</h3>
          <ul className="space-y-2">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>New York City</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>San Francisco</li>
            <li>Sydney</li>
            <li>Melbourne</li>
          </ul>
        </div>

        {/* Top Airlines */}
        <div>
          <h3 className="text-white font-bold mb-3">TOP AIRLINES</h3>
          <ul className="space-y-2">
            <li>Qatar Airways</li>
            <li>Singapore Airlines</li>
            <li>Delta</li>
            <li>Emirates</li>
            <li>United Airlines</li>
            <li>Swiss Air</li>
            <li>Air India</li>
            <li>Indigo</li>
          </ul>
        </div>

        {/* Top Regions */}
        <div>
          <h3 className="text-white font-bold mb-3">TOP REGIONS</h3>
          <ul className="space-y-2">
            <li>South Asia</li>
            <li>North America</li>
            <li>Oceania</li>
            <li>Australasia</li>
            <li>Asia-Pacific</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Subscribe Box */}
        <form
          onSubmit={handleSubscribe}
          className="flex items-center bg-white text-black rounded-md overflow-hidden w-full max-w-md mx-auto md:mx-0"
        >
          <MdEmail className="text-2xl ml-3" />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
          >
            Subscribe
          </button>
        </form>

        {/* Social Media */}
        <div className="flex justify-center gap-4 text-white text-xl">
          <span className="text-sm mr-2 self-center">Follow us:</span>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-white text-3xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
        </div>
      </div>

      {/* Status Message */}
      {status && (
        <div className="text-center mt-3 text-yellow-400 text-sm">
          {status}
        </div>
      )}

      {/* Bottom Copy */}
      <div className="text-center text-gray-500 text-xs mt-10 px-4">
        <p>© 2025 YourCompany Inc. | All rights reserved.</p>
        <p className="mt-1">
          *All fares are in USD and include applicable taxes & fees. Subject to availability and changes.
        </p>
      </div>
    </footer>
  );
}
