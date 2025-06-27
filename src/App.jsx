// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Bookings from "./pages/Bookings";
import Deals from "./pages/Deals";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import GroupTravel from './pages/GroupTravel';
import PaymentPage from './pages/PaymentPage';
import BookingConfirmation from './pages/BookingConfirmation';


import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";


import './App.css'

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<Help />} />
        <Route path="/group" element={<GroupTravel />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/print-booking" element={<BookingConfirmation />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </Router>

  );
}
