// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation(); // coming from previous page

//   const {
//     departureFlightId,
//     returnFlightId,
//     passengerName,
//     email,
//     phone,
//     seatClass,
//     travelers,
//     totalPrice
//   } = state || {};

//   const handlePayment = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.post(
//         "http://localhost:5000/api/bookings",
//         {
//           departureFlightId,
//           returnFlightId,
//           passengerName,
//           email,
//           phone,
//           seatClass,
//           travelers
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // 👇 Redirect to confirmation page with booking data
//       navigate("/booking-confirmation", { state: { booking: res.data.data } });
//     } catch (err) {
//       alert("Payment or Booking Failed!");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Confirm Payment</h2>

//       <div className="mb-4">
//         <p><strong>Passenger:</strong> {passengerName}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Seat Class:</strong> {seatClass}</p>
//         <p><strong>Total Price:</strong> ₹{totalPrice}</p>
//       </div>

//       <button
//         onClick={handlePayment}
//         className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//       >
//         Pay & Book
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;



import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // incoming booking info

  const {
    departureFlightId,
    returnFlightId,
    firstName,
    lastName,
    age,
    gender,
    email,
    phone,
    seatClass,
    travelers,
    totalPrice
  } = state || {};

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    setMessage("Processing Payment...");

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          departureFlightId,
          returnFlightId,
          firstName,
          lastName,
          age,
          gender,
          email,
          phone,
          seatClass,
          travelers,
          price: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("✅ Payment Successful! Booking Confirmed.");
      setTimeout(() => {
        navigate("/print-booking", { state: { booking: res.data.data } });
      }, 1500);
    } catch (err) {
      setMessage("❌ Payment Failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
        💳 Payment Page
      </h2>

      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <p><strong>👤 Passenger:</strong> {firstName} {lastName}</p>
        <p><strong>📧 Email:</strong> {email}</p>
        <p><strong>📞 Phone:</strong> {phone}</p>
        <p><strong>🪑 Seat Class:</strong> {seatClass}</p>
        <p><strong>💰 Total Price:</strong> ₹{totalPrice}</p>

        <hr className="my-2 border-gray-600" />

        <div className="space-y-2">
          <input
            disabled
            value="4111 1111 1111 1111"
            className="w-full p-3 rounded bg-gray-600 text-white"
          />
          <input
            disabled
            value="12/26"
            className="w-full p-3 rounded bg-gray-600 text-white"
          />
          <input
            disabled
            value="123"
            className="w-full p-3 rounded bg-gray-600 text-white"
          />
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded mt-4 disabled:opacity-50"
        >
          {loading ? "Processing..." : "💰 Pay & Book"}
        </button>

        {message && (
          <p className={`text-center mt-4 ${message.includes("✅") ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
