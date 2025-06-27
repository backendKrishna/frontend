// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation(); // Get form data from Home page
//   const [flights, setFlights] = useState([]);

//   const [passenger, setPassenger] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     seatClass: "Economy",
//   });

//   const [travelers, setTravelers] = useState({
//     adults: 1,
//     children: 0,
//     lapInfants: 0,
//   });

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => setFlights(res.data))
//         .catch((err) => console.error(err));
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const updateTraveler = (type, delta) => {
//     setTravelers((prev) => {
//       const updated = { ...prev, [type]: Math.max(0, prev[type] + delta) };
//       if (type === "adults" && updated.adults === 0) updated.adults = 1; // At least 1 adult
//       return updated;
//     });
//   };

//   const handleBooking = async (flightId) => {
//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         flightId,
//         passengerName: passenger.name,
//         email: passenger.email,
//         phone: passenger.phone,
//         seatClass: passenger.seatClass,
//         travelers,
//       });
//       alert("✅ Booking Successful!");
//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Available Flights</h2>

//       {flights.length === 0 ? (
//         <p className="text-center text-gray-400">No flights found. Please go back and search again.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto space-y-8">
//           {flights.map((f) => (
//             <div key={f._id} className="bg-gray-800 p-6 rounded-xl shadow">
//               <p className="text-xl text-yellow-300 font-bold">
//                 {f.airline} ({f.flightNumber})
//               </p>
//               <p className="mb-2">
//                 {f.from} → {f.to} | {f.departureTime} - {f.arrivalTime}
//               </p>
//               <p className="mb-2">
//                 Price:{" "}
//                 <span className="text-green-400 font-bold">₹{f.discountedPrice}</span>{" "}
//                 <span className="line-through text-white-500 ml-2">₹{f.basePrice}</span>
//               </p>

//               <div className="space-y-2 mt-4">
//                 {/* Passenger Info */}
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Passenger Name"
//                   onChange={handlePassengerChange}
//                   className="w-full p-2 rounded bg-gray-700"
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Passenger Email"
//                   onChange={handlePassengerChange}
//                   className="w-full p-2 rounded bg-gray-700"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Passenger Phone"
//                   onChange={handlePassengerChange}
//                   className="w-full p-2 rounded bg-gray-700"
//                   required
//                 />

//                 <select
//                   name="seatClass"
//                   onChange={handlePassengerChange}
//                   className="w-full p-2 rounded bg-gray-700"
//                 >
//                   <option value="Economy">Economy</option>
//                   <option value="Business">Business</option>
//                 </select>

//                 {/* Travelers Selection */}
//                 <div className="bg-gray-700 p-3 rounded mt-3">
//                   <p className="text-sm font-semibold mb-2 text-yellow-300">Travelers</p>

//                   <p className="text-sm text-green-400 mb-2">
//                     👥 Total Travelers:{" "}
//                     {travelers.adults + travelers.children + travelers.lapInfants}
//                   </p>

//                   {["adults", "children", "lapInfants"].map((type) => (
//                     <div key={type} className="flex items-center justify-between py-1">
//                       <span className="capitalize">
//                         {type === "adults"
//                           ? "👨 Adults (12+)"
//                           : type === "children"
//                           ? "🧒 Children (2-11)"
//                           : "👶 Lap Infants (<2)"}
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => updateTraveler(type, -1)}
//                           className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-gray-500"
//                         >
//                           –
//                         </button>
//                         <span>{travelers[type]}</span>
//                         <button
//                           onClick={() => updateTraveler(type, 1)}
//                           className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-gray-500"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => handleBooking(f._id)}
//                 //   className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-500 transition mt-4"
//                    className="bg-blue-600 text-green-500 w-full py-2 rounded hover:bg-blue-500 transition mt-4"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



//===============================round trip==================



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation(); // Get form data from Home page
//   const [flights, setFlights] = useState([]);

//   const [passenger, setPassenger] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     seatClass: "Economy",
//   });

//   const [travelers, setTravelers] = useState({
//     adults: 1,
//     children: 0,
//     lapInfants: 0,
//   });

//   const isRoundTrip = form?.tripType === "roundtrip";

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => setFlights(res.data))
//         .catch((err) => console.error(err));
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const updateTraveler = (type, delta) => {
//     setTravelers((prev) => {
//       const updated = { ...prev, [type]: Math.max(0, prev[type] + delta) };
//       if (type === "adults" && updated.adults === 0) updated.adults = 1; // At least 1 adult
//       return updated;
//     });
//   };

//   const handleBooking = async (flightId) => {
//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         flightId,
//         passengerName: passenger.name,
//         email: passenger.email,
//         phone: passenger.phone,
//         seatClass: passenger.seatClass,
//         travelers,
//         tripType: form.tripType, // Send trip type
//         travelDate: form.travelDate,
//         returnDate: form.returnDate || null,
//       });
//       alert("✅ Booking Successful!");
//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
//         {isRoundTrip ? "Available Round Trip Flights" : "Available One Way Flights"}
//       </h2>

//       {flights.length === 0 ? (
//         <p className="text-center text-gray-400">
//           No flights found. Please go back and search again.
//         </p>
//       ) : (
//         <div className="max-w-4xl mx-auto space-y-8">
//           {flights.map((f) => {
//             const finalBase = isRoundTrip ? f.basePrice * 2 : f.basePrice;
//             const finalDiscounted = isRoundTrip ? f.discountedPrice * 2 : f.discountedPrice;

//             return (
//               <div key={f._id} className="bg-gray-800 p-6 rounded-xl shadow">
//                 <p className="text-xl text-yellow-300 font-bold">
//                   {f.airline} ({f.flightNumber})
//                 </p>
//                 <p className="mb-2">
//                   {f.from} → {f.to} | {f.departureTime} - {f.arrivalTime}
//                 </p>
//                 <p className="mb-2">
//                   Price:{" "}
//                   <span className="text-green-400 font-bold">₹{finalDiscounted}</span>{" "}
//                   <span className="line-through text-white-500 ml-2">₹{finalBase}</span>
//                 </p>

//                 <div className="space-y-2 mt-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Passenger Name"
//                     onChange={handlePassengerChange}
//                     className="w-full p-2 rounded bg-gray-700"
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Passenger Email"
//                     onChange={handlePassengerChange}
//                     className="w-full p-2 rounded bg-gray-700"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Passenger Phone"
//                     onChange={handlePassengerChange}
//                     className="w-full p-2 rounded bg-gray-700"
//                     required
//                   />

//                   <select
//                     name="seatClass"
//                     onChange={handlePassengerChange}
//                     className="w-full p-2 rounded bg-gray-700"
//                   >
//                     <option value="Economy">Economy</option>
//                     <option value="Business">Business</option>
//                   </select>

//                   {/* Travelers */}
//                   <div className="bg-gray-700 p-3 rounded mt-3">
//                     <p className="text-sm font-semibold mb-2 text-yellow-300">Travelers</p>
//                     <p className="text-sm text-green-400 mb-2">
//                       👥 Total Travelers:{" "}
//                       {travelers.adults + travelers.children + travelers.lapInfants}
//                     </p>

//                     {["adults", "children", "lapInfants"].map((type) => (
//                       <div
//                         key={type}
//                         className="flex items-center justify-between py-1"
//                       >
//                         <span className="capitalize">
//                           {type === "adults"
//                             ? "👨 Adults (12+)"
//                             : type === "children"
//                             ? "🧒 Children (2-11)"
//                             : "👶 Lap Infants (<2)"}
//                         </span>
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => updateTraveler(type, -1)}
//                             className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-gray-500"
//                           >
//                             –
//                           </button>
//                           <span>{travelers[type]}</span>
//                           <button
//                             onClick={() => updateTraveler(type, 1)}
//                             className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-gray-500"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     onClick={() => handleBooking(f._id)}
//                     className="bg-blue-600 text-green-500 w-full py-2 rounded hover:bg-blue-500 transition mt-4"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


//-------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation();
//   const [departureFlights, setDepartureFlights] = useState([]);
//   const [returnFlights, setReturnFlights] = useState([]);
//   const [selectedDeparture, setSelectedDeparture] = useState(null);
//   const [selectedReturn, setSelectedReturn] = useState(null);

//   const [passenger, setPassenger] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     seatClass: "Economy",
//   });

//   const [travelers, setTravelers] = useState({
//     adults: 1,
//     children: 0,
//     lapInfants: 0,
//   });

//   const isRoundTrip = form?.tripType === "roundtrip";

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       // Load departure flights
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => setDepartureFlights(res.data))
//         .catch((err) => console.error(err));

//       // Load return flights (if round trip)
//       if (isRoundTrip && form.returnDate) {
//         axios
//           .get(`http://localhost:5000/api/flights?from=${form.to}&to=${form.from}`)
//           .then((res) => setReturnFlights(res.data))
//           .catch((err) => console.error(err));
//       }
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const updateTraveler = (type, delta) => {
//     setTravelers((prev) => {
//       const updated = { ...prev, [type]: Math.max(0, prev[type] + delta) };
//       if (type === "adults" && updated.adults === 0) updated.adults = 1;
//       return updated;
//     });
//   };

//   const handleBooking = async () => {
//     if (!selectedDeparture) {
//       alert("Please select a departure flight.");
//       return;
//     }
//     if (isRoundTrip && !selectedReturn) {
//       alert("Please select a return flight.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         departureFlightId: selectedDeparture,
//         returnFlightId: isRoundTrip ? selectedReturn : null,
//         passengerName: passenger.name,
//         email: passenger.email,
//         phone: passenger.phone,
//         seatClass: passenger.seatClass,
//         travelers,
//         tripType: form.tripType,
//         travelDate: form.travelDate,
//         returnDate: form.returnDate || null,
//       });
//       alert("✅ Booking Successful!");
//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   const renderFlightCard = (f, onSelect, selectedId) => {
//     const finalBase = f.basePrice;
//     const finalDiscounted = f.basePrice * (1 - f.discountPercent / 100);

//     return (
//       <div
//         key={f._id}
//         className={`bg-gray-800 p-6 rounded-xl shadow cursor-pointer border-2 ${
//           selectedId === f._id ? "border-green-400" : "border-transparent"
//         }`}
//         onClick={() => onSelect(f._id)}
//       >
//         <p className="text-xl text-yellow-300 font-bold">
//           {f.airline} ({f.flightNumber})
//         </p>
//         <p className="mb-2">
//           {f.from} → {f.to} | {f.departureTime} - {f.arrivalTime}
//         </p>
//         <p className="mb-2">
//           Price:{" "}
//           <span className="text-green-400 font-bold">₹{Math.round(finalDiscounted)}</span>{" "}
//           <span className="line-through text-white-500 ml-2">₹{finalBase}</span>
//         </p>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
//         {isRoundTrip ? "Select Round Trip Flights" : "Select a One-Way Flight"}
//       </h2>

//       <div className="max-w-4xl mx-auto space-y-8">
//         <h3 className="text-xl text-blue-300 font-semibold">Departure Flights</h3>
//         {departureFlights.length === 0 ? (
//           <p>No departure flights found.</p>
//         ) : (
//           departureFlights.map((f) =>
//             renderFlightCard(f, setSelectedDeparture, selectedDeparture)
//           )
//         )}

//         {isRoundTrip && (
//           <>
//             <h3 className="text-xl text-pink-300 font-semibold">Return Flights</h3>
//             {returnFlights.length === 0 ? (
//               <p>No return flights found.</p>
//             ) : (
//               returnFlights.map((f) =>
//                 renderFlightCard(f, setSelectedReturn, selectedReturn)
//               )
//             )}
//           </>
//         )}

//         {/* Passenger Details */}
//         <div className="bg-gray-700 p-6 rounded-lg mt-6 space-y-4">
//           <h3 className="text-lg font-bold text-yellow-300">Passenger Info</h3>

//           <input
//             type="text"
//             name="name"
//             placeholder="Passenger Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Passenger Email"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Passenger Phone"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600"
//             required
//           />

//           <select
//             name="seatClass"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600"
//           >
//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//           </select>

//           {/* Travelers Count */}
//           <div className="bg-gray-800 p-4 rounded mt-4">
//             <p className="text-sm text-yellow-300 font-semibold mb-2">Travelers</p>
//             {["adults", "children", "lapInfants"].map((type) => (
//               <div
//                 key={type}
//                 className="flex items-center justify-between py-1"
//               >
//                 <span className="capitalize">
//                   {type === "adults"
//                     ? "👨 Adults (12+)"
//                     : type === "children"
//                     ? "🧒 Children (2-11)"
//                     : "👶 Lap Infants (<2)"}
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => updateTraveler(type, -1)}
//                     className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-gray-500"
//                   >
//                     –
//                   </button>
//                   <span>{travelers[type]}</span>
//                   <button
//                     onClick={() => updateTraveler(type, 1)}
//                     className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-gray-500"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={handleBooking}
//             className="bg-blue-600 text-green-500 w-full py-2 rounded hover:bg-blue-500 transition mt-4"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


//===============================

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation();

//   const [departureFlights, setDepartureFlights] = useState([]);
//   const [returnFlights, setReturnFlights] = useState([]);
//   const [selectedDeparture, setSelectedDeparture] = useState(null);
//   const [selectedReturn, setSelectedReturn] = useState(null);

//   const [passenger, setPassenger] = useState({
//     // name: "",
//     // email: "",
//     // phone: "",
//     // seatClass: "Economy",
//     firstName: "",
//     lastName: "",
//     age: "",
//     gender: "",
//     email: "",
//     phone: "",
//     seatClass: "Economy",
//   });

//   const [travelers, setTravelers] = useState({
//     adults: 1,
//     children: 0,
//     lapInfants: 0,
//   });

//   const isRoundTrip = form?.tripType === "roundtrip";

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => {
//           const data = res.data?.data || res.data;
//           if (Array.isArray(data)) setDepartureFlights(data);
//         })
//         .catch((err) => console.error("Departure flights error:", err));

//       if (isRoundTrip && form.returnDate) {
//         axios
//           .get(`http://localhost:5000/api/flights?from=${form.to}&to=${form.from}`)
//           .then((res) => {
//             const data = res.data?.data || res.data;
//             if (Array.isArray(data)) setReturnFlights(data);
//           })
//           .catch((err) => console.error("Return flights error:", err));
//       }
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const updateTraveler = (type, delta) => {
//     setTravelers((prev) => {
//       const updated = { ...prev, [type]: Math.max(0, prev[type] + delta) };
//       if (type === "adults" && updated.adults === 0) updated.adults = 1;
//       return updated;
//     });
//   };


//   // Inside your component
//   const handleContinueToPayment = () => {
//     // if (!departureFlight || !passenger.firstName || !passenger.email) {
//     if (!selectedDeparture || !passenger.firstName || !passenger.email) {
//       alert("Please fill all required fields and select a flight");
//       return;
//     }

//     navigate("/payment", {
//       state: {
//         // departureFlightId: departureFlight._id,
//         // returnFlightId: returnFlight?._id || null,
//         departureFlightId: selectedDeparture._id,
//         returnFlightId: selectedReturn?._id || null,
//         firstName: passenger.firstName,
//         lastName: passenger.lastName,
//         age: passenger.age,
//         gender: passenger.gender,
//         email: passenger.email,
//         phone: passenger.phone,
//         seatClass: passenger.seatClass,
//         travelers: travelers,
//         totalPrice:
//           // departureFlight.price + (returnFlight?.price || 0),
//           // selectedDeparture.price + (selectedReturn?.price || 0),
//           (selectedDeparture?.price || 0) + (selectedReturn?.price || 0)
//       },
//     });
//   };
//   console.log("Selected Departure: ", selectedDeparture);


//   const handleBooking = async () => {
//     if (!selectedDeparture) {
//       alert("Please select a departure flight.");
//       return;
//     }
//     if (isRoundTrip && !selectedReturn) {
//       alert("Please select a return flight.");
//       return;
//     }


//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         departureFlightId: selectedDeparture,
//         returnFlightId: isRoundTrip ? selectedReturn : null,
//         // passengerName: passenger.name,


//         firstName: passenger.firstName,
//         lastName: passenger.lastName,
//         age: passenger.age,
//         gender: passenger.gender,
//         email: passenger.email,
//         phone: passenger.phone,
//         seatClass: passenger.seatClass,
//         travelers,
//         tripType: form.tripType,
//         travelDate: form.travelDate,
//         returnDate: form.returnDate || null,
//       });
//       alert("✅ Booking Successful!");
//       console.log("✅ Booking Successful!");

//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   const renderFlightCard = (f, onSelect, selectedId) => {
//     const finalBase = f.basePrice;
//     const finalDiscounted = f.basePrice * (1 - f.discountPercent / 100);

//     return (

//       <div

//         key={f._id}
//         className={`bg-gray-800 p-6 rounded-xl shadow cursor-pointer border-2 ${selectedId === f._id ? "border-green-400" : "border-transparent"
//           }`}
//         onClick={() => onSelect(f._id)}
//       >
//         <p className="text-xl text-yellow-300 font-bold">
//           {f.airline} ({f.flightNumber})
//         </p>
//         <p className="mb-2">
//           {f.from} → {f.to} | {f.departureTime} - {f.arrivalTime}
//         </p>
//         <p className="mb-2">
//           Price:{" "}
//           <span className="text-green-400 font-bold">₹{Math.round(finalDiscounted)}</span>{" "}
//           <span className="line-through text-white-500 ml-2">₹{finalBase}</span>
//         </p>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">


//         💺✈️ {isRoundTrip ? "Select Round Trip Flights" : "Select a One-Way Flight"}
//       </h2>

//       <div className="max-w-4xl mx-auto space-y-8">
//         <h3 className="text-xl text-blue-300 font-semibold">Departure Flights</h3>
//         {departureFlights.length === 0 ? (
//           <p>No departure flights found.</p>
//         ) : (
//           departureFlights.map((f) =>
//             renderFlightCard(f, setSelectedDeparture, selectedDeparture)
//           )
//         )}

//         {isRoundTrip && (
//           <>
//             <h3 className="text-xl text-pink-300 font-semibold">Return Flights</h3>
//             {returnFlights.length === 0 ? (
//               <p>No return flights found.</p>
//             ) : (
//               returnFlights.map((f) =>
//                 renderFlightCard(f, setSelectedReturn, selectedReturn)
//               )
//             )}
//           </>
//         )}

//         {/* Passenger Details */}
//         <div className="bg-gray-700 p-6 rounded-lg mt-6 space-y-4">
//           <h3 className="text-lg font-bold text-yellow-300">Passenger Info</h3>


//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <select
//             name="gender"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             {/* <option value="Other">Other</option> */}
//           </select>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <select
//             name="seatClass"
//             value={passenger.seatClass}
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           >

//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//               <option value="Premium Economy">Premium Economy</option>
//             <option value="First">First Class</option>
//           </select>



//           {/* Travelers Count */}
//           <div className="bg-gray-800 p-4 rounded mt-4">
//             <p className="text-sm text-yellow-300 font-semibold mb-2">Travelers</p>


//             <p className="text-sm text-green-400 mb-2">
//               👥 Total Travelers:{" "}
//               {travelers.adults + travelers.children + travelers.lapInfants}
//             </p>

//             {["adults", "children", "lapInfants"].map((type) => (
//               <div key={type} className="flex items-center justify-between py-1">
//                 <span className="capitalize">
//                   {type === "adults"
//                     ? "👨 Adults (12+)"
//                     : type === "children"
//                       ? "🧒 Children (2-11)"
//                       : "👶 Lap Infants (<2)"}
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => updateTraveler(type, -1)}
//                     className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-blue-300"
//                   >
//                     –
//                   </button>
//                   <span>{travelers[type]}</span>
//                   <button
//                     type="button"
//                     onClick={() => updateTraveler(type, 1)}
//                     className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-blue-300"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Continue to Payment Button */}
//           <button
//             onClick={handleContinueToPayment}
//             className="bg-yellow-500 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 mt-4 w-full"
//           >
//             Continue to Payment 💳
//           </button>

//           <button
//             onClick={handleBooking}
//             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition mt-4"
//           >
//             Book Now
//           </button>

//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// }


//--------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation();

//   const [departureFlights, setDepartureFlights] = useState([]);
//   const [returnFlights, setReturnFlights] = useState([]);
//   const [selectedDeparture, setSelectedDeparture] = useState(null);
//   const [selectedReturn, setSelectedReturn] = useState(null);

//   const [passenger, setPassenger] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     gender: "",
//     email: "",
//     phone: "",
//   });

//   const isRoundTrip = form?.tripType === "roundtrip";

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => {
//           const data = res.data?.data || res.data;
//           if (Array.isArray(data)) setDepartureFlights(data);
//         })
//         .catch((err) => console.error("Departure flights error:", err));

//       if (isRoundTrip && form.returnDate) {
//         axios
//           .get(`http://localhost:5000/api/flights?from=${form.to}&to=${form.from}`)
//           .then((res) => {
//             const data = res.data?.data || res.data;
//             if (Array.isArray(data)) setReturnFlights(data);
//           })
//           .catch((err) => console.error("Return flights error:", err));
//       }
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const handleContinueToPayment = () => {
//     if (!selectedDeparture || !passenger.firstName || !passenger.email) {
//       alert("Please fill all required fields and select a flight");
//       return;
//     }

//     navigate("/payment", {
//       state: {
//         departureFlightId: selectedDeparture._id,
//         returnFlightId: selectedReturn?._id || null,
//         ...passenger,
//         seatClass: form.seatClass,
//         travelers: form.travelers,
//         totalPrice: (selectedDeparture?.price || 0) + (selectedReturn?.price || 0),
//       },
//     });
//   };

//   const handleBooking = async () => {
//     if (!selectedDeparture) {
//       alert("Please select a departure flight.");
//       return;
//     }
//     if (isRoundTrip && !selectedReturn) {
//       alert("Please select a return flight.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         departureFlightId: selectedDeparture,
//         returnFlightId: isRoundTrip ? selectedReturn : null,
//         ...passenger,
//         seatClass: form.seatClass,
//         travelers: form.travelers,
//         tripType: form.tripType,
//         travelDate: form.travelDate,
//         returnDate: form.returnDate || null,
//       });
//       alert("✅ Booking Successful!");
//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   const renderFlightCard = (f, onSelect, selectedId) => {
//     const finalBase = f.basePrice;
//     const finalDiscounted = f.basePrice * (1 - f.discountPercent / 100);

//     return (
//       <div
//         key={f._id}
//         className={`bg-gray-800 p-6 rounded-xl shadow cursor-pointer border-2 ${
//           selectedId === f._id ? "border-green-400" : "border-transparent"
//         }`}
//         onClick={() => onSelect(f)}
//       >
//         <p className="text-xl text-yellow-300 font-bold">
//           {f.airline} ({f.flightNumber})
//         </p>
//         <p className="mb-2">
//           {f.from} → {f.to} | {f.departureTime} - {f.arrivalTime}
//         </p>
//         <p className="mb-2">
//           Price:{" "}
//           <span className="text-green-400 font-bold">₹{Math.round(finalDiscounted)}</span>{" "}
//           <span className="line-through text-white-500 ml-2">₹{finalBase}</span>
//         </p>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
//         💺✈️ {isRoundTrip ? "Select Round Trip Flights" : "Select a One-Way Flight"}
//       </h2>

//       <div className="max-w-4xl mx-auto space-y-8">
//         <h3 className="text-xl text-blue-300 font-semibold">Departure Flights</h3>
//         {departureFlights.length === 0 ? (
//           <p>No departure flights found.</p>
//         ) : (
//           departureFlights.map((f) =>
//             renderFlightCard(f, setSelectedDeparture, selectedDeparture?._id)
//           )
//         )}

//         {isRoundTrip && (
//           <>
//             <h3 className="text-xl text-pink-300 font-semibold">Return Flights</h3>
//             {returnFlights.length === 0 ? (
//               <p>No return flights found.</p>
//             ) : (
//               returnFlights.map((f) =>
//                 renderFlightCard(f, setSelectedReturn, selectedReturn?._id)
//               )
//             )}
//           </>
//         )}

//         {/* Passenger Details */}
//         <div className="bg-gray-700 p-6 rounded-lg mt-6 space-y-4">
//           <h3 className="text-lg font-bold text-yellow-300">Passenger Info</h3>

//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <select
//             name="gender"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <button
//             onClick={handleContinueToPayment}
//             className="bg-yellow-500 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 mt-4 w-full"
//           >
//             Continue to Payment 💳
//           </button>

//           <button
//             onClick={handleBooking}
//             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition mt-4"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// }

//-------------------------------------------


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation();

//   const [departureFlights, setDepartureFlights] = useState([]);
//   const [returnFlights, setReturnFlights] = useState([]);
//   const [selectedDeparture, setSelectedDeparture] = useState(null);
//   const [selectedReturn, setSelectedReturn] = useState(null);

//   const [passenger, setPassenger] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     gender: "",
//     email: "",
//     phone: "",
//   });

//   const isRoundTrip = form?.tripType === "roundtrip";

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => {
//           let data = res.data?.data || res.data;
//           if (Array.isArray(data)) {
//             data = [...data].sort(
//               (a, b) => a.basePrice * (1 - a.discountPercent / 100) - b.basePrice * (1 - b.discountPercent / 100)
//             );
//             setDepartureFlights(data);
//           }
//         })
//         .catch((err) => console.error("Departure flights error:", err));

//       if (isRoundTrip && form.returnDate) {
//         axios
//           .get(`http://localhost:5000/api/flights?from=${form.to}&to=${form.from}`)
//           .then((res) => {
//             let data = res.data?.data || res.data;
//             if (Array.isArray(data)) {
//               data = [...data].sort(
//                 (a, b) => a.basePrice * (1 - a.discountPercent / 100) - b.basePrice * (1 - b.discountPercent / 100)
//               );
//               setReturnFlights(data);
//             }
//           })
//           .catch((err) => console.error("Return flights error:", err));
//       }
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const handleContinueToPayment = () => {
//     if (!selectedDeparture || !passenger.firstName || !passenger.email) {
//       alert("Please fill all required fields and select a flight");
//       return;
//     }

//     navigate("/payment", {
//       state: {
//         departureFlightId: selectedDeparture._id,
//         returnFlightId: selectedReturn?._id || null,
//         ...passenger,
//         seatClass: form.seatClass,
//         travelers: form.travelers,
//         totalPrice: (selectedDeparture?.price || 0) + (selectedReturn?.price || 0),
//       },
//     });
//   };

//   const handleBooking = async () => {
//     if (!selectedDeparture) {
//       alert("Please select a departure flight.");
//       return;
//     }
//     if (isRoundTrip && !selectedReturn) {
//       alert("Please select a return flight.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         departureFlightId: selectedDeparture,
//         returnFlightId: isRoundTrip ? selectedReturn : null,
//         ...passenger,
//         seatClass: form.seatClass,
//         travelers: form.travelers,
//         tripType: form.tripType,
//         travelDate: form.travelDate,
//         returnDate: form.returnDate || null,
//       });
//       alert("✅ Booking Successful!");
//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   const renderFlightCard = (f, onSelect, selectedId) => {
//     const finalBase = f.basePrice;
//     const finalDiscounted = f.basePrice * (1 - f.discountPercent / 100);

//     return (
//       <div
//         key={f._id}
//         className={`bg-gray-800 p-6 rounded-xl shadow cursor-pointer border-2 ${
//           selectedId === f._id ? "border-green-400" : "border-transparent"
//         }`}
//         onClick={() => onSelect(f)}
//       >
//         <p className="text-xl text-yellow-300 font-bold">
//           {f.airline} ({f.flightNumber})
//         </p>
//         <p className="mb-2">
//           {f.from} → {f.to} | {f.departureTime} - {f.arrivalTime}
//         </p>
//         <p className="mb-2">
//           Price: <span className="text-green-400 font-bold">₹{Math.round(finalDiscounted)}</span>{" "}
//           <span className="line-through text-white-500 ml-2">₹{finalBase}</span>
//         </p>
//       </div>
//     );
//   };

//   const toDestination = form?.to || "your destination";

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
//         💺✈️ {isRoundTrip ? "Select Round Trip Flights" : "Select a One-Way Flight"}
//       </h2>

//       <div className="max-w-4xl mx-auto space-y-8">
//         <h3 className="text-xl text-blue-300 font-semibold text-center w-full">Departure Flights</h3>

//         {departureFlights.length === 0 ? (
//           <p>No departure flights found.</p>
//         ) : (
//           <>
//             <h4 className="text-green-400 text-lg mt-4">Cheapest Flight</h4>
//             {renderFlightCard(departureFlights[0], setSelectedDeparture, selectedDeparture?._id)}

//             {departureFlights.length > 1 && (
//               <>
//                 <h4 className="text-red-300 text-lg mt-6">Other Deals to {toDestination}</h4>
//                 {departureFlights.slice(1).map((f) =>
//                   renderFlightCard(f, setSelectedDeparture, selectedDeparture?._id)
//                 )}
//               </>
//             )}
//           </>
//         )}

//         {isRoundTrip && (
//           <>
//             <h3 className="text-xl text-pink-300 font-semibold">Return Flights</h3>
//             {returnFlights.length === 0 ? (
//               <p>No return flights found.</p>
//             ) : (
//               returnFlights.map((f) =>
//                 renderFlightCard(f, setSelectedReturn, selectedReturn?._id)
//               )
//             )}
//           </>
//         )}

//         <div className="bg-gray-700 p-6 rounded-lg mt-6 space-y-4">
//           <h3 className="text-lg font-bold text-yellow-300">Passenger Info</h3>

//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <select
//             name="gender"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handlePassengerChange}
//             className="w-full p-2 rounded bg-gray-600 text-white"
//             required
//           />

//           <button
//             onClick={handleContinueToPayment}
//             className="bg-yellow-500 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 mt-4 w-full"
//           >
//             Continue to Payment 💳
//           </button>

//           <button
//             onClick={handleBooking}
//             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition mt-4"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// }

//--------------------------------------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Flights() {
//   const navigate = useNavigate();
//   const { state: form } = useLocation();

//   const [departureFlights, setDepartureFlights] = useState([]);
//   const [returnFlights, setReturnFlights] = useState([]);
//   const [selectedDeparture, setSelectedDeparture] = useState(null);
//   const [selectedReturn, setSelectedReturn] = useState(null);

//   const [passenger, setPassenger] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     gender: "",
//     email: "",
//     phone: "",
//   });

//   const isRoundTrip = form?.tripType === "roundtrip";

//   useEffect(() => {
//     if (form?.from && form?.to) {
//       axios
//         .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
//         .then((res) => {
//           let data = res.data?.data || res.data;
//           if (Array.isArray(data)) {
//             data = [...data].sort(
//               (a, b) => a.basePrice * (1 - a.discountPercent / 100) - b.basePrice * (1 - b.discountPercent / 100)
//             );
//             setDepartureFlights(data);
//           }
//         });

//       if (isRoundTrip && form.returnDate) {
//         axios
//           .get(`http://localhost:5000/api/flights?from=${form.to}&to=${form.from}`)
//           .then((res) => {
//             let data = res.data?.data || res.data;
//             if (Array.isArray(data)) {
//               data = [...data].sort(
//                 (a, b) => a.basePrice * (1 - a.discountPercent / 100) - b.basePrice * (1 - b.discountPercent / 100)
//               );
//               setReturnFlights(data);
//             }
//           });
//       }
//     }
//   }, [form]);

//   const handlePassengerChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const handleContinueToPayment = () => {
//     if (!selectedDeparture || !passenger.firstName || !passenger.email) {
//       alert("Please fill all required fields and select a flight");
//       return;
//     }

//     navigate("/payment", {
//       state: {
//         departureFlightId: selectedDeparture._id,
//         returnFlightId: selectedReturn?._id || null,
//         ...passenger,
//         seatClass: form.seatClass,
//         travelers: form.travelers,
//         totalPrice: (selectedDeparture?.price || 0) + (selectedReturn?.price || 0),
//       },
//     });
//   };

//   const handleBooking = async () => {
//     if (!selectedDeparture) return alert("Please select a departure flight.");
//     if (isRoundTrip && !selectedReturn) return alert("Please select a return flight.");

//     try {
//       await axios.post("http://localhost:5000/api/bookings", {
//         departureFlightId: selectedDeparture,
//         returnFlightId: isRoundTrip ? selectedReturn : null,
//         ...passenger,
//         seatClass: form.seatClass,
//         travelers: form.travelers,
//         tripType: form.tripType,
//         travelDate: form.travelDate,
//         returnDate: form.returnDate || null,
//       });
//       alert("✅ Booking Successful!");
//       navigate("/bookings");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Booking Failed!");
//     }
//   };

//   const renderFlightCard = (f, onSelect, selectedId, isCheapest = false) => {
//     const finalBase = f.basePrice;
//     const finalDiscounted = f.basePrice * (1 - f.discountPercent / 100);

//     return (
//       <div
//         key={f._id}
//         className={`relative bg-gray-800 p-6 rounded-xl shadow-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-400/60 cursor-pointer ${selectedId === f._id ? "border-green-400" : "border-transparent"
//           } ${isCheapest ? "ring-2 ring-yellow-300 shadow-yellow-500/30" : ""}`}
//         onClick={() => onSelect(f)}
//       >
//         {/* Recommended Tag */}
//         {isCheapest && (
//           <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-bounce">
//             🌟 Recommended
//           </span>
//         )}

//         <p className="text-xl font-bold text-yellow-400">{f.airline} ({f.flightNumber})</p>
//         <p className="mt-1 text-sm text-gray-300">
//           ✈️ {f.from} → {f.to} | 🕒 {f.departureTime} → {f.arrivalTime}
//         </p>
//         <p className="mt-2 text-green-400 font-semibold text-lg">
//           ₹{Math.round(finalDiscounted)}
//           <span className="line-through text-sm text-gray-400 ml-2">₹{finalBase}</span>
//         </p>
//       </div>
//     );
//   };


//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
//       <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
//         {isRoundTrip ? "✈️ Select Round Trip Flights" : "🛫 Select One-Way Flight"}
//       </h2>

//       <div className="max-w-6xl mx-auto space-y-12">
//         <div>
//           <h3 className="text-2xl font-semibold text-blue-300 mb-3">Departure Flights</h3>
//           {departureFlights.length === 0 ? (
//             <p className="text-red-400">❌ No departure flights found.</p>
//           ) : (
//             <div className="space-y-4">

//               {departureFlights.length > 0 && (
//                 <>
//                   <h4 className="text-green-400 font-medium text-lg">✨ Cheapest Flight</h4>
//                   {renderFlightCard(departureFlights[0], setSelectedDeparture, selectedDeparture?._id, true)}

//                   {departureFlights.length > 1 && (
//                     <>
//                       <h4 className="text-red-300 font-medium text-lg mt-6">💼 More Options</h4>
//                       <div className="grid md:grid-cols-2 gap-4">
//                         {departureFlights.slice(1).map((f) =>
//                           renderFlightCard(f, setSelectedDeparture, selectedDeparture?._id)
//                         )}
//                       </div>
//                     </>
//                   )}
//                 </>
//               )}

//             </div>
//           )}
//         </div>


//         {isRoundTrip && (
//           <div>
//             <h3 className="text-2xl font-semibold text-pink-300 mb-3">Return Flights</h3>

//             {returnFlights.length === 0 ? (
//               <p className="text-red-400">❌ No return flights found.</p>
//             ) : (
//               <>
//                 {/* Cheapest Return Flight */}
//                 <h4 className="text-green-400 text-lg mb-2">💡 Recommended (Cheapest)</h4>
//                 <div className="mb-6">
//                   {renderFlightCard(returnFlights[0], setSelectedReturn, selectedReturn?._id)}
//                 </div>

//                 {/* Other Return Flights */}
//                 {returnFlights.length > 1 && (
//                   <>
//                     <h4 className="text-yellow-300 text-lg mb-2">✈️ Other Return Options</h4>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       {returnFlights.slice(1).map((f) =>
//                         renderFlightCard(f, setSelectedReturn, selectedReturn?._id)
//                       )}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         )}


//         {/* Passenger Info Section */}


//         <div className="bg-gray-400 p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-3xl mx-auto mt-12">
//           <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">👤 Passenger Information</h3>

//           <div className="space-y-4">
//             {["firstName", "lastName", "age", "email", "phone"].map((field) => (
//               <div key={field}>
//                 <label className="block text-sm font-medium text-gray-300 mb-1 capitalize">
//                   {field.replace(/([A-Z])/g, " $1")}
//                 </label>
//                 <input
//                   type={field === "email" ? "email" : field === "age" ? "number" : "text"}
//                   name={field}
//                   placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
//                   onChange={handlePassengerChange}
//                   className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                   required
//                 />
//               </div>
//             ))}

//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
//               <select
//                 name="gender"
//                 onChange={handlePassengerChange}
//                 className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 mt-6">
//               <button
//                 onClick={handleContinueToPayment}
//                 className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition shadow-lg"
//               >
//                 💳 Continue to Payment
//               </button>
//               <button
//                 onClick={handleBooking}
//                 className="bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition shadow-lg"
//               >
//                 ✅ Book Now
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//       <br />
//       <hr />
//     </div>

//   );
// }
//---------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Flights() {
  const navigate = useNavigate();
  const { state: form } = useLocation();

  const [departureFlights, setDepartureFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);

  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });

  const isRoundTrip = form?.tripType === "roundtrip";

  useEffect(() => {
    if (form?.from && form?.to) {
      axios
        .get(`http://localhost:5000/api/flights?from=${form.from}&to=${form.to}`)
        .then((res) => {
          let data = res.data?.data || res.data;
          if (Array.isArray(data)) {
            data = [...data].sort(
              (a, b) => a.basePrice * (1 - a.discountPercent / 100) - b.basePrice * (1 - b.discountPercent / 100)
            );
            setDepartureFlights(data);
          }
        });

      if (isRoundTrip && form.returnDate) {
        axios
          .get(`http://localhost:5000/api/flights?from=${form.to}&to=${form.from}`)
          .then((res) => {
            let data = res.data?.data || res.data;
            if (Array.isArray(data)) {
              data = [...data].sort(
                (a, b) => a.basePrice * (1 - a.discountPercent / 100) - b.basePrice * (1 - b.discountPercent / 100)
              );
              setReturnFlights(data);
            }
          });
      }
    }
  }, [form]);

  const handlePassengerChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleContinueToPayment = () => {
    if (!selectedDeparture || !passenger.firstName || !passenger.email) {
      alert("Please fill all required fields and select a flight");
      return;
    }

    navigate("/payment", {
      state: {
        departureFlightId: selectedDeparture._id,
        returnFlightId: selectedReturn?._id || null,
        ...passenger,
        seatClass: form.seatClass,
        travelers: form.travelers,
        totalPrice: (selectedDeparture?.price || 0) + (selectedReturn?.price || 0),
      },
    });
  };

  const handleBooking = async () => {
    if (!selectedDeparture) return alert("Please select a departure flight.");
    if (isRoundTrip && !selectedReturn) return alert("Please select a return flight.");

    try {
      await axios.post("http://localhost:5000/api/bookings", {
        departureFlightId: selectedDeparture,
        returnFlightId: isRoundTrip ? selectedReturn : null,
        ...passenger,
        seatClass: form.seatClass,
        travelers: form.travelers,
        tripType: form.tripType,
        travelDate: form.travelDate,
        returnDate: form.returnDate || null,
      });
      alert("✅ Booking Successful!");
      navigate("/bookings");
    } catch (err) {
      console.error(err);
      alert("❌ Booking Failed!");
    }
  };

  const renderFlightCard = (f, onSelect, selectedId, isCheapest = false) => {
    const finalBase = f.basePrice;
    const finalDiscounted = f.basePrice * (1 - f.discountPercent / 100);

    return (
      <div
        key={f._id}
        className={`relative bg-gray-800 p-6 rounded-xl shadow-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-400/60 cursor-pointer ${selectedId === f._id ? "border-green-400" : "border-transparent"} ${isCheapest ? "ring-2 ring-yellow-300 shadow-yellow-500/30" : ""}`}
        onClick={() => onSelect(f)}
      >
        {isCheapest && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-bounce">
            🌟 Recommended
          </span>
        )}
        <p className="text-xl font-bold text-yellow-400">{f.airline} ({f.flightNumber})</p>
        <p className="mt-1 text-sm text-gray-300">✈️ {f.from} → {f.to} | 🕒 {f.departureTime} → {f.arrivalTime}</p>
        <p className="mt-2 text-green-400 font-semibold text-lg">
          ₹{Math.round(finalDiscounted)}
          <span className="line-through text-sm text-gray-400 ml-2">₹{finalBase}</span>
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
        {isRoundTrip ? "✈️ Select Round Trip Flights" : "🛫 Select One-Way Flight"}
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Departure Flights Section */}
        <div>
          {/* <h3 className="text-2xl font-semibold text-blue-300 mb-4 border-b border-blue-600 pb-2">Departure Flights</h3> */}

          <h3 className="text-2xl font-semibold text-blue-300 mb-6 pb-3 border-b-10 border-blue-300 shadow-blue-500/30 shadow-md">
            🛫 Departure Flights
          </h3>


          {departureFlights.length === 0 ? (
            <p className="text-red-400">❌ No departure flights found.</p>
          ) : (
            <>
              <h4 className="text-green-400 font-medium text-lg">✨ Cheapest Flight</h4>
              {renderFlightCard(departureFlights[0], setSelectedDeparture, selectedDeparture?._id, true)}

              {departureFlights.length > 1 && (
                <>
                  <h4 className="text-red-300 font-medium text-lg mt-6">💼 More Options</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {departureFlights.slice(1).map((f) =>
                      renderFlightCard(f, setSelectedDeparture, selectedDeparture?._id)
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Return Flights Section */}
        {isRoundTrip && (
          <div>
            {/* <h3 className="text-2xl font-semibold text-pink-300 mb-4 border-b border-pink-500 pb-2">Return Flights</h3> */}

            <h3 className="text-2xl font-bold text-pink-300 mb-6 pb-3 border-b-10 border-pink-300 shadow-pink-500/30 shadow-md">
              🛬 Return Flights
            </h3>

            {returnFlights.length === 0 ? (
              <p className="text-red-400">❌ No return flights found.</p>
            ) : (
              <>
                {/* <h4 className="text-green-400 text-lg mb-2">💡 Recommended (Cheapest)</h4> */}

                <h4 className="text-green-400 text-lg mb-2">💡 Cheapest Flight</h4>

                {renderFlightCard(returnFlights[0], setSelectedReturn, selectedReturn?._id, true)}

                {returnFlights.length > 1 && (
                  <>
                    <h4 className="text-yellow-300 text-lg mt-6">✈️ Other Return Options</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {returnFlights.slice(1).map((f) =>
                        renderFlightCard(f, setSelectedReturn, selectedReturn?._id)
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}

        {/* Passenger Info Section */}
        <div className="bg-gray-400 p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">👤 Passenger Information</h3>

          <div className="space-y-4">
            {["firstName", "lastName", "age", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-300 mb-1 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "email" ? "email" : field === "age" ? "number" : "text"}
                  name={field}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                  onChange={handlePassengerChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
              <select
                name="gender"
                onChange={handlePassengerChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <button
                onClick={handleContinueToPayment}
                className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition shadow-lg"
              >
                💳 Continue to Payment
              </button>
              <button
                onClick={handleBooking}
                className="bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition shadow-lg"
              >
                ✅ Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <br/><hr/>
    </div>
  );
}
