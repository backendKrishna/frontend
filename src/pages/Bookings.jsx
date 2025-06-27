
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";


export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

   const navigate = useNavigate();
  const page = parseInt(searchParams.get("page")) || 1;

 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bookings?page=${page}&perPage=5`)
      .then((res) => {
        setBookings(res.data.data || []);
        setTotalPages(res.data.totalPages || 1);
      })
      .catch((err) => console.error("❌ Error fetching bookings:", err));
  }, [page]);

  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };


const handlePrintRedirect = (booking) => {
  const confirm = window.confirm("Are you sure you want to confirm and print this booking?");
  if (confirm) {
    navigate("/print-booking", { state: { booking } });
  }
};

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <hr />
      <h1 className="text-2xl font-bold mb-4 text-yellow-400 text-center">
        🧾✈️ Your Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-400">No bookings found.</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b._id}
            // className="bg-gray-800 p-4 mb-4 rounded-xl shadow-md"
             onClick={() => handlePrintRedirect(b)}
            // className="bg-gray-800 p-4 mb-4 rounded-xl shadow-md cursor-pointer hover:bg-gray-700 transition"
          
          className="bg-gray-700 p-4 mb-4 rounded-xl shadow-xl transform transition duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-yellow-500/90"

          >
            {/* Passenger Info */}

            <p className="text-lg font-semibold text-white">
              👤 {
                b.firstName || b.lastName
                  ? `${b.firstName || ""} ${b.lastName || ""}`.trim()
                  : b.passengerName || "Unnamed"
              }

              <span className="text-sm text-gray-400">
                ({b.email || "N/A"}, {b.phone || "N/A"})
              </span>
            </p>


            {/* Departure Flight Info */}
            {b.departureFlight ? (
              <p className="mt-2 text-gray-300">
                🛫 <strong>Departure:</strong> {b.departureFlight.airline} (
                {b.departureFlight.flightNumber}) |{" "} {b.departureFlight.from} →
                {b.departureFlight.to}
              </p>
            ) : (
              <p className="text-red-500 mt-2">
                ⚠️ Departure flight info not available.
              </p>
            )}

            {/* Return Flight Info */}
            {b.returnFlight && (
              <p className="mt-1 text-gray-300">
                🛬 <strong>Return:</strong> {b.returnFlight.airline} (
                {b.returnFlight.flightNumber}) |{" "} {b.returnFlight.from} →
                {b.returnFlight.to}
              </p>
            )}

            {/* Seat & Price */}
            <p className="mt-2 text-gray-300">
              🪑 Seat Class: {b.seatClass || "N/A"} | 💰 Price: ₹
              {b.price || "N/A"}
            </p>

            {/* Travelers */}
            {b.travelers && (
              <p className="mt-1 text-sm text-gray-400">
                👨 Adults: {b.travelers.adults || 0}, 🧒 Children:{" "}
                {b.travelers.children || 0}, 👶 Lap Infants:{" "}
                {b.travelers.lapInfants || 0}
              </p>
            )}
          </div>
        ))
      )}



      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          ⬅️ Prev
        </button>
        <span className="text-white self-center">Page {page} of {totalPages}</span>
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Next ➡️
        </button>
      </div>
      <br />
      <hr />
    </div>
  );
}
