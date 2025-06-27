// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//     return (
//         <header className="bg-gray-900 text-white p-4 shadow-md flex items-center justify-between">
//             <div className="text-2xl font-bold tracking-wider">
//                 <span className="text-white">ARAN</span><span className="text-yellow-400">GRANT</span>
//             </div>

//             <nav className="space-x-6 text-sm md:text-base">
//                 <Link to="/" className="text-white hover:text-yellow-400 hover:underline">Flights</Link>
//                 <Link to="/bookings" className="text-white hover:text-yellow-400 hover:underline">My Bookings</Link>
//                 <Link to="/deals" className="text-white hover:text-yellow-400 hover:underline">Top Deals</Link>
//                 <Link to="/group" className="text-white hover:text-yellow-400 hover:underline">Group Travel</Link>
//                 <Link to="/blog" className="text-white hover:text-yellow-400 hover:underline">Blog</Link>
//                 <Link to="/help" className="text-white hover:text-yellow-400 hover:underline">Help</Link>
//             </nav>

//             <div className="hidden md:flex items-center space-x-2 text-sm">
//                 <span>📞</span>
//                 <span className="font-semibold">Phone-Only Deals</span>
//                 <span className="text-yellow-400">Call: (833) 619-0908</span>
//             </div>

//         </header>
//     );
// }
//--------------------------------------------------------------------




//----------------------------------------------------------------------

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install via `npm install lucide-react`

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white p-4 shadow-md flex items-center justify-between relative z-50">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wider">
                <span className="text-white">ARAN</span>
                <span className="text-yellow-400">GRANT</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-sm md:text-base">
                <Link to="/" className="hover:text-yellow-400">Flights</Link>
                <Link to="/bookings" className="hover:text-yellow-400">My Bookings</Link>
                <Link to="/deals" className="hover:text-yellow-400">Top Deals</Link>
                <Link to="/group" className="hover:text-yellow-400">Group Travel</Link>
                <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
                <Link to="/help" className="hover:text-yellow-400">Help</Link>
            </nav>

            {/* Call Info (Desktop) */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
                <span>📞</span>
                <span className="font-semibold">Phone-Only Deals</span>
                {/* <span className="text-yellow-400">Call: (833) 619-0908</span> */}
                {/* <span className="text-yellow-400">Call: +91 98765 43210</span> */}
                <a href="tel:+919876543210" className="text-yellow-400 cursor-pointer">Call: +91 98765 43210</a>


            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden focus:outline-none"
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 text-lg z-40 transition-all duration-300">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6"
                    >
                        <X size={28} />
                    </button>


                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
                        Flights
                    </Link>
                    <Link to="/bookings" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
                        My Bookings
                    </Link>
                    <Link to="/deals" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
                        Top Deals
                    </Link>
                    <Link to="/group" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
                        Group Travel
                    </Link>
                    <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
                        Blog
                    </Link>
                    <Link to="/help" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
                        Help
                    </Link>
                    <Link
                        to="/bookings"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 border border-yellow-400 px-4 py-2 rounded text-yellow-400"
                    >
                        My Trips
                    </Link>



                </div>
            )}
        </header>
    );
}
