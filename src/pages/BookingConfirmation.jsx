// import React from "react";
// import { useLocation, Link } from "react-router-dom";

// const BookingConfirmation = () => {
//   const { state } = useLocation();
//   const booking = state?.booking;

//   if (!booking) return <div>No booking found.</div>;

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
//       <h2 className="text-2xl font-bold text-green-600 mb-4">
//         ✅ Booking Confirmed!
//       </h2>

//       <p><strong>Passenger:</strong> {booking.passengerName}</p>
//       <p><strong>Email:</strong> {booking.email}</p>
//       <p><strong>Phone:</strong> {booking.phone}</p>
//       <p><strong>Seat Class:</strong> {booking.seatClass}</p>
//       <p><strong>Booking ID:</strong> {booking._id}</p>
//       <p><strong>Total Price:</strong> ₹{booking.price}</p>

//       <div className="mt-6">
//         <Link to="/bookings" className="text-blue-600 underline">
//           ➡️ Go to My Bookings
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;

//--------------------------------------------------------


// import React from "react";
// import { useLocation } from "react-router-dom";

// const BookingConfirmation = () => {
//   const { state } = useLocation();
//   const booking = state?.booking;

//   if (!booking) return <div className="text-center text-red-500">No booking found.</div>;

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white text-black rounded shadow print:text-black print:bg-white">
//       <h2 className="text-2xl font-bold text-green-600 mb-4">
//         ✅ Booking Confirmed!
//       </h2>

//       <p><strong>Passenger:</strong> {booking.firstName} {booking.lastName}</p>
//       <p><strong>Email:</strong> {booking.email}</p>
//       <p><strong>Phone:</strong> {booking.phone}</p>
//       <p><strong>Seat Class:</strong> {booking.seatClass}</p>
//       <p><strong>Booking ID:</strong> {booking._id}</p>
//       <p><strong>Total Price:</strong> ₹{booking.price}</p>
//       <p><strong>Travelers:</strong> 👨 {booking.travelers.adults}, 🧒 {booking.travelers.children}, 👶 {booking.travelers.lapInfants}</p>

//       <button
//         onClick={() => window.print()}
//         className="mt-6 bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-300 text-black font-semibold"
//       >
//         🖨️ Print Booking
//       </button>
//     </div>
//   );
// };

// export default BookingConfirmation;


// -----------------------------------------------


// import React from "react";
// import { useLocation } from "react-router-dom";

// const BookingConfirmation = () => {
//   const { state } = useLocation();
//   const booking = state?.booking;

//   if (!booking)
//     return (
//       <div className="text-center text-red-500 mt-20 text-lg">
//         ❌ No booking found.
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-4 py-10 print:bg-white print:text-black">
//       <div className="max-w-3xl mx-auto bg-gray-800 print:bg-white print:text-black rounded-xl shadow-2xl p-8 transform transition hover:scale-[1.01] duration-300">
//         <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
//           ✅ Booking Confirmed!
//         </h2>

//         <div className="space-y-4 text-lg">
//           <p>
//             <strong className="text-gray-300">Passenger:</strong>{" "}
//             {booking.firstName} {booking.lastName}
//           </p>
//           <p>
//             <strong className="text-gray-300">Email:</strong> {booking.email}
//           </p>
//           <p>
//             <strong className="text-gray-300">Phone:</strong> {booking.phone}
//           </p>
//           <p>
//             <strong className="text-gray-300">Seat Class:</strong>{" "}
//             {booking.seatClass}
//           </p>
//           <p>
//             <strong className="text-gray-300">Booking ID:</strong>{" "}
//             {booking._id}
//           </p>
//           <p>
//             <strong className="text-gray-300">Total Price:</strong> ₹
//             {booking.price}
//           </p>
//           <p>
//             <strong className="text-gray-300">Travelers:</strong> 👨{" "}
//             {booking.travelers.adults}, 🧒 {booking.travelers.children}, 👶{" "}
//             {booking.travelers.lapInfants}
//           </p>
//         </div>

//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={() => window.print()}
//             className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition print:hidden"
//           >
//             🖨️ Print Booking
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;

//------------------------------------------------


import React from "react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const booking = state?.booking;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600 text-lg">
        ❌ No booking found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black p-4 print:bg-white print:text-black">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md border print:shadow-none print:border-none">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          ✅ Booking Confirmed!
        </h2>

        <div className="space-y-3 text-base">
          <p><strong>👤 Passenger:</strong> {booking.firstName} {booking.lastName}</p>
          <p><strong>📧 Email:</strong> {booking.email}</p>
          <p><strong>📞 Phone:</strong> {booking.phone}</p>
          <p><strong>💺 Seat Class:</strong> {booking.seatClass}</p>
          <p><strong>🆔 Booking ID:</strong> {booking._id}</p>
          <p><strong>💰 Total Price:</strong> ₹{booking.price}</p>
          <p>
            <strong>👥 Travelers:</strong> 👨 {booking.travelers.adults}, 🧒 {booking.travelers.children}, 👶 {booking.travelers.lapInfants}
          </p>
        </div>

        <div className="text-center mt-6 print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded font-medium transition"
          >
            🖨️ Print Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
