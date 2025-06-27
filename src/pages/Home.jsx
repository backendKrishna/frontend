// // src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     from: "",
//     to: "",
//     travelDate: "",
//     returnDate: "",
//     tripType: "oneway", // Default to one way
//   });

//   const [airports, setAirports] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/airports?search=")
//       // .then((res) => setAirports(res.data));
//       .then((res) => setAirports(res.data.data));
//   }, []);

//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/visitors", form);
//       navigate("/flights", { state: form });
//     } catch (err) {
//       console.error("🚨 Error from backend:", err.response?.data || err.message);
//       alert("Failed to submit form. Check console for details.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">Search Your Flight</h1>

//       <form onSubmit={handleSearch} className="bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto space-y-4">
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleFormChange}
//           placeholder="Your Name"
//           required
//           className="p-3 rounded-lg w-full bg-gray-700"
//         />
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleFormChange}
//           placeholder="Your Email"
//           required
//           className="p-3 rounded-lg w-full bg-gray-700"
//         />
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleFormChange}
//           placeholder="Your Phone Number"
//           required
//           className="p-3 rounded-lg w-full bg-gray-700"
//         />

//         <select
//           name="from"
//           value={form.from}
//           onChange={handleFormChange}
//           required
//           className="p-3 rounded-lg w-full bg-gray-700"
//         >
//           <option value="">From</option>
//           {airports.map((a) => (
//             <option key={a.code} value={a.code}>
//               {a.city} ({a.code})
//             </option>
//           ))}
//         </select>

//         <select
//           name="to"
//           value={form.to}
//           onChange={handleFormChange}
//           required
//           className="p-3 rounded-lg w-full bg-gray-700"
//         >
//           <option value="">To</option>
//           {airports.map((a) => (
//             <option key={a.code} value={a.code}>
//               {a.city} ({a.code})
//             </option>
//           ))}
//         </select>

//         {/* Trip Type Selector */}
//         <div className="flex gap-4 text-white">
//           <label>
//             <input
//               type="radio"
//               name="tripType"
//               value="oneway"
//               checked={form.tripType === "oneway"}
//               onChange={handleFormChange}
//               className="mr-1"
//             />
//             One Way
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="tripType"
//               value="roundtrip"
//               checked={form.tripType === "roundtrip"}
//               onChange={handleFormChange}
//               className="mr-1"
//             />
//             Round Trip
//           </label>
//         </div>

//         {/* Travel Date */}
//         <input
//           type="date"
//           name="travelDate"
//           value={form.travelDate}
//           onChange={handleFormChange}
//           required
//           className="p-3 rounded-lg w-full bg-gray-700 text-white"
//         />

//         {/* Return Date (only visible if round trip selected) */}
//         {form.tripType === "roundtrip" && (
//           <input
//             type="date"
//             name="returnDate"
//             value={form.returnDate}
//             onChange={handleFormChange}
//             required
//             className="p-3 rounded-lg w-full bg-gray-700 text-white"
//           />
//         )}

//         <button
//           type="submit"
//           className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300"
//         >
//           Search Flights
//         </button>
//       </form>
//     </div>
//   );
// }

//=================================================================================



// // src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// export default function Home() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     from: "",
//     to: "",
//     travelDate: "",
//     returnDate: "",
//     tripType: "oneway", // Default to one way
//   });

//   const [airports, setAirports] = useState([]);
//   const [deals, setDeals] = useState([]); // ✅ Deals state

//   //Load airports

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/airports?search=")
//       .then((res) => {
//         // Check if the response has data key or is an array directly
//         const airportList = Array.isArray(res.data.data) ? res.data.data : res.data;
//         setAirports(airportList);
//       })
//       .catch((err) => {
//         console.error("Failed to load airports:", err);
//       });
//   }, []);

//   // Load top deals
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/deals?page=1&perPage=3")
//       .then((res) => setDeals(res.data.data))
//       .catch((err) => console.error("❌ Error fetching deals:", err));
//   }, []);


//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/visitors", form);
//       navigate("/flights", { state: form });
//     } catch (err) {
//       console.error("🚨 Error from backend:", err.response?.data || err.message);
//       alert("Failed to submit form. Check console for details.");
//     }
//   };

//   return (
//     <>
//       {/* <Header /> */}

//       <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//         <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">🔍✈️ Search Your Flight</h1>

//         <form onSubmit={handleSearch} className="bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto space-y-4">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleFormChange}
//             placeholder="Your Name"
//             required
//             className="p-3 rounded-lg w-full bg-gray-700"
//           />
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleFormChange}
//             placeholder="Your Email"
//             required
//             className="p-3 rounded-lg w-full bg-gray-700"
//           />
//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleFormChange}
//             placeholder="Your Phone Number"
//             required
//             className="p-3 rounded-lg w-full bg-gray-700"
//           />


//           {/* From and To Dropdown */}

//           <select
//             name="from"
//             value={form.from}
//             onChange={handleFormChange}
//             required
//             className="p-3 rounded-lg w-full bg-gray-700"
//           >
//             <option value="">🛫 From</option>
//             {Array.isArray(airports) &&
//               airports.map((a) => (
//                 <option key={a.code} value={a.code}>
//                   {a.city} ({a.code})
//                 </option>
//               ))}
//           </select>

//           <select
//             name="to"
//             value={form.to}
//             onChange={handleFormChange}
//             required
//             className="p-3 rounded-lg w-full bg-gray-700"
//           >
//             <option value="">🛬 To</option>
//             {Array.isArray(airports) &&
//               airports.map((a) => (
//                 <option key={a.code} value={a.code}>
//                   {a.city} ({a.code})
//                 </option>
//               ))}
//           </select>



//           {/* Trip Type Selector */}
//           <div className="flex gap-4 text-white">
//             <label>
//               <input
//                 type="radio"
//                 name="tripType"
//                 value="oneway"
//                 checked={form.tripType === "oneway"}
//                 onChange={handleFormChange}
//                 className="mr-1"
//               />
//               One Way
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="tripType"
//                 value="roundtrip"
//                 checked={form.tripType === "roundtrip"}
//                 onChange={handleFormChange}
//                 className="mr-1"
//               />
//               Round Trip
//             </label>
//           </div>

//           {/* Travel Date */}
//           <input
//             type="date"
//             name="travelDate"
//             value={form.travelDate}
//             onChange={handleFormChange}
//             required
//             className="p-3 rounded-lg w-full bg-gray-700 text-white"
//           />

//           {/* Return Date (only visible if round trip selected) */}
//           {form.tripType === "roundtrip" && (
//             <input
//               type="date"
//               name="returnDate"
//               value={form.returnDate}
//               onChange={handleFormChange}
//               required
//               className="p-3 rounded-lg w-full bg-gray-700 text-white"
//             />
//           )}

//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300"
//           >
//             Search Flights
//           </button>
//         </form>


//         {/* ✅ Flight Deals Section */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4 text-yellow-400 text-center">🔥 Top Flight Deals</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {deals.map((deal) => (
//               <div
//                 key={deal._id}
//                 className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
//               >
//                 <img
//                   src={deal.image}
//                   alt={deal.city}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-bold">{deal.city}</h3>
//                   <p className="text-yellow-300 font-semibold mt-2">From ₹{deal.price}</p>
//                   {/* <button className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
//                   Book Now
//                 </button> */}

//                   <button
//                     className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
//                     onClick={() =>
//                       navigate("/?prefillFromDeal=" + deal.city)
//                     }>Book Now</button>

//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-6">
//             <a href="/deals" className="text-yellow-300 hover:underline">
//               View All Deals ➡️
//             </a>
//           </div>
//         </div>
//         <br />
//         <hr />
//         {/* <Footer /> */}
//       </div>
//     </>
//   );
// }



//--------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     from: "",
//     to: "",
//     travelDate: "",
//     returnDate: "",
//     tripType: "oneway",
//   });

//   const [airports, setAirports] = useState([]);
//   const [deals, setDeals] = useState([]);

//   // Inputs for search boxes
//   const [inputFrom, setInputFrom] = useState("");
//   const [inputTo, setInputTo] = useState("");
//   const [showFromList, setShowFromList] = useState(false);
//   const [showToList, setShowToList] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/airports?search=")
//       .then((res) => {
//         const airportList = Array.isArray(res.data.data)
//           ? res.data.data
//           : res.data;
//         setAirports(airportList);
//       })
//       .catch((err) => {
//         console.error("Failed to load airports:", err);
//       });
//   }, []);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/deals?page=1&perPage=3")
//       .then((res) => setDeals(res.data.data))
//       .catch((err) => console.error("❌ Error fetching deals:", err));
//   }, []);

//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/visitors", form);
//       navigate("/flights", { state: form });
//     } catch (err) {
//       console.error("🚨 Error from backend:", err.response?.data || err.message);
//       alert("Failed to submit form. Check console for details.");
//     }
//   };

//   const filterAirports = (query) =>
//     airports.filter((a) =>
//       [a.city, a.code, a.name].some((field) =>
//         field.toLowerCase().includes(query.toLowerCase())
//       )
//     );

//   const handleSelect = (type, airport) => {
//     setForm({ ...form, [type]: airport.code });
//     if (type === "from") {
//       setInputFrom(`${airport.city} (${airport.code})`);
//       setShowFromList(false);
//     } else {
//       setInputTo(`${airport.city} (${airport.code})`);
//       setShowToList(false);
//     }
//   };

//   const handleKeyDown = (type, inputValue, setInputValue, setShowList) => (e) => {
//     if (e.key === "Enter") {
//       const results = filterAirports(inputValue);
//       if (results.length > 0) {
//         e.preventDefault(); // prevent form submit
//         handleSelect(type, results[0]);
//         setShowList(false);
//       }
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
//         🔍✈️ Search Your Flight
//       </h1>

//       <form onSubmit={handleSearch} className="bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto space-y-4">
//         <input name="name" value={form.name} onChange={handleFormChange} placeholder="Your Name" required className="p-3 rounded-lg w-full bg-gray-700" />
//         <input name="email" value={form.email} onChange={handleFormChange} placeholder="Your Email" required className="p-3 rounded-lg w-full bg-gray-700" />
//         <input name="phone" value={form.phone} onChange={handleFormChange} placeholder="Your Phone Number" required className="p-3 rounded-lg w-full bg-gray-700" />

//         {/* From Airport Searchable */}
//         <div className="relative">
//           <input
//             type="text"
//             value={inputFrom}
//             placeholder="🛫 From"
//             onChange={(e) => {
//               setInputFrom(e.target.value);
//               setShowFromList(true);
//             }}
//             onFocus={() => setShowFromList(true)}
//             onKeyDown={handleKeyDown("from", inputFrom, setInputFrom, setShowFromList)}
//             className="p-3 w-full rounded-lg bg-gray-700 text-white"
//           />
//           {showFromList && inputFrom && (
//             <ul className="absolute z-10 w-full bg-white text-black border rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
//               {filterAirports(inputFrom).map((a) => (
//                 <li
//                   key={a.code}
//                   onClick={() => handleSelect("from", a)}
//                   className="p-2 hover:bg-blue-100 cursor-pointer"
//                 >
//                   {a.city} ({a.code}) - {a.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* To Airport Searchable */}
//         <div className="relative">
//           <input
//             type="text"
//             value={inputTo}
//             placeholder="🛬 To"
//             onChange={(e) => {
//               setInputTo(e.target.value);
//               setShowToList(true);
//             }}
//             onFocus={() => setShowToList(true)}
//             onKeyDown={handleKeyDown("to", inputTo, setInputTo, setShowToList)}
//             className="p-3 w-full rounded-lg bg-gray-700 text-white"
//           />
//           {showToList && inputTo && (
//             <ul className="absolute z-10 w-full bg-white text-black border rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
//               {filterAirports(inputTo).map((a) => (
//                 <li
//                   key={a.code}
//                   onClick={() => handleSelect("to", a)}
//                   className="p-2 hover:bg-blue-100 cursor-pointer"
//                 >
//                   {a.city} ({a.code}) - {a.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Trip Type Selector */}
//         <div className="flex gap-4 text-white">
//           <label>
//             <input
//               type="radio"
//               name="tripType"
//               value="oneway"
//               checked={form.tripType === "oneway"}
//               onChange={handleFormChange}
//               className="mr-1"
//             />
//             One Way
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="tripType"
//               value="roundtrip"
//               checked={form.tripType === "roundtrip"}
//               onChange={handleFormChange}
//               className="mr-1"
//             />
//             Round Trip
//           </label>
//         </div>

//         <input
//           type="date"
//           name="travelDate"
//           value={form.travelDate}
//           onChange={handleFormChange}
//           required
//           className="p-3 rounded-lg w-full bg-white text-black"
//           style={{ colorScheme: "light" }} // Forces light theme calendar
//         />

//         {form.tripType === "roundtrip" && (
//           <input
//             type="date"
//             name="returnDate"
//             value={form.returnDate}
//             onChange={handleFormChange}
//             required
//             // className="p-3 rounded-lg w-full bg-gray-700 text-white"
//             className="p-3 rounded-lg w-full bg-white text-black"
//             style={{ colorScheme: "light" }} // Forces light theme calendar
//           />
//         )}

//         <button
//           type="submit"
//           className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300"
//         >
//           Search Flights
//         </button>
//       </form>

//       {/* ✅ Flight Deals Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4 text-yellow-400 text-center">🔥 Top Flight Deals</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {deals.map((deal) => (
//             <div key={deal._id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
//               <img src={deal.image} alt={deal.city} className="w-full h-56 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold">{deal.city}</h3>
//                 <p className="text-yellow-300 font-semibold mt-2">From ₹{deal.price}</p>
//                 <button
//                   className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
//                   onClick={() => navigate("/?prefillFromDeal=" + deal.city)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-6">
//           <a href="/deals" className="text-yellow-300 hover:underline">
//             View All Deals ➡️
//           </a>
//         </div>
//       </div>
//       <br />
//       <hr />
//     </div>
//   );
// }



//---------------------------------------------------------------------


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    travelDate: "",
    returnDate: "",
    tripType: "oneway",
    seatClass: "Economy", // ✅ New field added
  });

  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    lapInfants: 0,
  });

  const [airports, setAirports] = useState([]);
  const [deals, setDeals] = useState([]);
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeRegion, setActiveRegion] = useState("India");



  useEffect(() => {
    axios
      .get("http://backend-l374.onrender.com/api/airports?search=")
      .then((res) => {
        const airportList = Array.isArray(res.data.data)
          ? res.data.data
          : res.data;
        setAirports(airportList);
      })
      .catch((err) => {
        console.error("Failed to load airports:", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://backend-l374.onrender.com/api/deals?page=1&perPage=3")
      .then((res) => setDeals(res.data.data))
      .catch((err) => console.error("❌ Error fetching deals:", err));
  }, []);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://backend-l374.onrender.com/api/visitors", {
        ...form,
        travelers,
      });
      navigate("/flights", { state: { ...form, travelers } });
    } catch (err) {
      console.error("🚨 Error from backend:", err.response?.data || err.message);
      alert("Failed to submit form. Check console for details.");
    }
  };

  const filterAirports = (query) =>
    airports.filter((a) =>
      [a.city, a.code, a.name].some((field) =>
        field.toLowerCase().includes(query.toLowerCase())
      )
    );

  const handleSelect = (type, airport) => {
    setForm({ ...form, [type]: airport.code });
    if (type === "from") {
      setInputFrom(`${airport.city} (${airport.code})`);
      setShowFromList(false);
    } else {
      setInputTo(`${airport.city} (${airport.code})`);
      setShowToList(false);
    }
  };

  const handleKeyDown = (type, inputValue, setInputValue, setShowList) => (e) => {
    if (e.key === "Enter") {
      const results = filterAirports(inputValue);
      if (results.length > 0) {
        e.preventDefault();
        handleSelect(type, results[0]);
        setShowList(false);
      }
    }
  };

  const updateTraveler = (type, delta) => {
    setTravelers((prev) => {
      const updated = { ...prev, [type]: Math.max(0, prev[type] + delta) };
      if (type === "adults" && updated.adults === 0) updated.adults = 1;
      return updated;
    });
  };

  const airlineLogos = [
    { name: "Singapore Airlines", src: "https://logos-world.net/wp-content/uploads/2023/01/Singapore-Airlines-Logo-1972.png" },
    { name: "Swiss", src: "https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg" },
    { name: "Emirates", src: "https://e7.pngegg.com/pngimages/72/830/png-clipart-dubai-the-emirates-group-airline-logo-emirates-text-logo-thumbnail.png" },
    { name: "Qatar Airways", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png" },
    { name: "Air India", src: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Air_India.svg" },
    { name: "IndiGo", src: "https://i0.wp.com/atcnews.org/wp-content/uploads/2024/05/Indigo-logo.png?fit=800%2C229&ssl=1" },
    { name: "Air Asia", src: "https://airhex.com/images/airline-logos/alt/airasia.png" },
    { name: "Qantas", src: "https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png" },
    { name: "Go First", src: "https://airhex.com/images/airline-logos/go-first.png" },
    { name: "United Airlines", src: "https://cdn.freebiesupply.com/logos/large/2x/united-airlines-7-logo-svg-vector.svg" },
    { name: "American Airlines", src: "https://cdn.worldvectorlogo.com/logos/logo-american-airlines.svg" },
    { name: "Delta Airlines", src: "https://1000logos.net/wp-content/uploads/2017/09/Delta-Air-Lines-Logo-1966.png" },
  ];


  const allReviews = [
    {
      title: "Outstanding service from Zac",
      content: "First time using AranGrant. Zac was kind and marked it as urgent. Got an email within 48 hours. Great service!",
      date: "December 01, 2022",
      author: "Joan Bernstein, US",
    },
    {
      title: "Kevin is phenomenal",
      content: "Kevin answered all my questions patiently and made everything smooth. Hoping rest goes well too.",
      date: "December 13, 2022",
      author: "Gayatri, US",
    },
    {
      title: "Nayeli was so patient and a truly godsend",
      content: "She listened to every concern about my father’s flight. Truly deserves a promotion.",
      date: "December 15, 2022",
      author: "Hank, USA",
    },
    {
      title: "Amazing support",
      content: "Agent was quick and helpful. Got my changes sorted in minutes!",
      date: "December 20, 2022",
      author: "Priya, India",
    },
    {
      title: "Highly Recommended",
      content: "Service was excellent and everything was on time and well informed.",
      date: "December 25, 2022",
      author: "John, UK",
    },
    {
      title: "Fantastic booking process",
      content: "Very smooth, no confusion, polite agent. 5 stars!",
      date: "January 02, 2023",
      author: "Sara, Canada",
    },
  ];


  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Basic email validation
  //   if (!email.includes("@")) {
  //     setError("Please enter a valid email.");
  //     return;
  //   }

  //   setError("");
  //   // You can replace this with actual API logic
  //   console.log("Submitted Email:", email);
  //   alert("Thank you for subscribing!");
  //   setEmail("");
  // };


  const destinations = [
    {
      city: "New York",
      image: "https://media.nomadicmatt.com/2023/ellistour1.jpeg",
      price: 1980,
      region: "USA",
    },
    {
      city: "Los Angeles",
      image: "https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2024/02/26040501/los-angeles-attractions.jpg",
      price: 1870,
      region: "USA",
    },
    {
      city: "Chicago",
      image: "https://tourscanner.com/blog/wp-content/uploads/2022/02/Millennium-Park-Chicago.jpg",
      price: 1760,
      region: "USA",
    },
    {
      city: "Miami",
      image: "https://www.datocms-assets.com/34574/1654715173-1.jpg?auto=format&fit=max&w=1200",
      price: 1822,
      region: "USA",
    },
    {
      city: "Delhi",
      image: "https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg",
      price: 1342,
      region: "India",
    },
    {
      city: "Bangalore",
      image: "https://www.swantour.com/blogs/wp-content/uploads/2018/02/Tourist-Places-in-Bangalore.jpg",
      price: 1285,
      region: "India",
    },
    {
      city: "Mumbai",
      image: "https://hblimg.mmtcdn.com/content/hubble/img/mumbai/mmt/activities/m_activities_mumbai_gateway_of_india_l_472_766.jpg",
      price: 1144,
      region: "India",
    },
    {
      city: "Kolkata",
      image: "https://cdn.pixabay.com/photo/2017/11/20/08/23/howrah-bridge-2964776_1280.jpg",
      price: 1089,
      region: "India",
    },
    {
      city: "Sydney",
      image: "https://hblimg.mmtcdn.com/content/hubble/img/sydney/mmt/activities/t_ufs/m_opera_house_activities_sydney_l_468_702.jpg",
      price: 2125,
      region: "Australia",
    },
    {
      city: "Melbourne",
      image: "https://www.celebritycruises.com/blog/content/uploads/2022/06/best-places-to-visit-in-melbourne-royal-exhibition-building-hero.jpg",
      price: 2080,
      region: "Australia",
    },
    {
      city: "Brisbane",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ETRj0bGpq-Ajszt1smagia-xB7rByDulvjmfmyz5Y3VgHrdy2d-fGiOkhKNqUm9IUBM&usqp=CAU",
      price: 1999,
      region: "Australia",
    },
    {
      city: "Perth",
      image: "https://media.istockphoto.com/id/922533224/photo/perth.jpg?s=612x612&w=0&k=20&c=fP44a9BHenJzYJ3m5VG4FrBbLVZh76969cU_Cnm-rik=",
      price: 2044,
      region: "Australia",
    },
    {
      city: "Perth",
      image: "https://media.istockphoto.com/id/922533224/photo/perth.jpg?s=612x612&w=0&k=20&c=fP44a9BHenJzYJ3m5VG4FrBbLVZh76969cU_Cnm-rik=",
      price: 2044,
      region: "Australia",
    },
  ];


  const regions = ["India", "USA", "Australia"];


  // Sample destination filtering
  const filteredDestinations = destinations.filter(dest => dest.region === activeRegion);

  // Load visible count of filtered destinations
  const visibleDestinations = filteredDestinations.slice(0, visibleCount);

  // Handle region change
  const handleRegionClick = (region) => {
    setActiveRegion(region);
    setVisibleCount(4); // Reset to 4 on region change
  };

  // Handle View All click
  const handleViewAll = () => {
    setVisibleCount(filteredDestinations.length); // Show all
  };

  // const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      setStatus(""); // Clear any previous status
      return;
    }

    setError(""); // Clear any existing error

    fetch("http://backend-l374.onrender.com/api/subscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Submitted Email:", email);
        alert("Thank you for subscribing!");
        setStatus("Subscribed successfully!");
        setEmail("");
      })
      .catch(() => {
        setStatus("Subscription failed. Please try again.");
      });
  };















  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        🔍✈️ Search Your Flight
      </h1>



      <form
        onSubmit={handleSearch}
        className="bg-gray-400 rounded-xl p-6 max-w-3xl mx-auto space-y-4"
      >
        <input name="name" value={form.name} onChange={handleFormChange} placeholder="Your Name" required className="p-3 rounded-lg w-full bg-gray-700" />
        <input name="email" value={form.email} onChange={handleFormChange} placeholder="Your Email" required className="p-3 rounded-lg w-full bg-gray-700" />
        <input name="phone" value={form.phone} onChange={handleFormChange} placeholder="Your Phone Number" required className="p-3 rounded-lg w-full bg-gray-700" />

        {/* From Airport Searchable */}
        <div className="relative">
          <input
            type="text"
            value={inputFrom}
            placeholder="🛫 From"
            onChange={(e) => {
              setInputFrom(e.target.value);
              setShowFromList(true);
            }}
            onFocus={() => setShowFromList(true)}
            onKeyDown={handleKeyDown("from", inputFrom, setInputFrom, setShowFromList)}
            className="p-3 w-full rounded-lg bg-gray-700 text-white"
          />
          {showFromList && inputFrom && (
            <ul className="absolute z-10 w-full bg-white text-black border rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
              {filterAirports(inputFrom).map((a) => (
                <li
                  key={a.code}
                  onClick={() => handleSelect("from", a)}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                >
                  {a.city} ({a.code}) - {a.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* To Airport Searchable */}
        <div className="relative">
          <input
            type="text"
            value={inputTo}
            placeholder="🛬 To"
            onChange={(e) => {
              setInputTo(e.target.value);
              setShowToList(true);
            }}
            onFocus={() => setShowToList(true)}
            onKeyDown={handleKeyDown("to", inputTo, setInputTo, setShowToList)}
            className="p-3 w-full rounded-lg bg-gray-700 text-white"
          />
          {showToList && inputTo && (
            <ul className="absolute z-10 w-full bg-white text-black border rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
              {filterAirports(inputTo).map((a) => (
                <li
                  key={a.code}
                  onClick={() => handleSelect("to", a)}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                >
                  {a.city} ({a.code}) - {a.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Trip Type Selector */}
        <div className="flex gap-4 text-white">
          <label>
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={form.tripType === "oneway"}
              onChange={handleFormChange}
              className="mr-1"
            />
            One Way
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={form.tripType === "roundtrip"}
              onChange={handleFormChange}
              className="mr-1"
            />
            Round Trip
          </label>
        </div>

        <input
          type="date"
          name="travelDate"
          value={form.travelDate}
          onChange={handleFormChange}
          required
          className="p-3 rounded-lg w-full bg-white text-black"
          style={{ colorScheme: "light" }}
        />

        {form.tripType === "roundtrip" && (
          <input
            type="date"
            name="returnDate"
            value={form.returnDate}
            onChange={handleFormChange}
            required
            className="p-3 rounded-lg w-full bg-white text-black"
            style={{ colorScheme: "light" }}
          />
        )}

        {/* Seat Class Dropdown */}
        <select
          name="seatClass"
          value={form.seatClass}
          onChange={handleFormChange}
          className="p-3 rounded-lg w-full bg-gray-700 text-white"
          required
        >
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>

        {/* Traveler Selection */}
        <div className="bg-gray-800 p-4 rounded mt-4 text-white">
          <p className="text-sm text-yellow-300 font-semibold mb-2">Travelers</p>
          <p className="text-sm text-green-400 mb-2">
            👥 Total Travelers: {travelers.adults + travelers.children + travelers.lapInfants}
          </p>

          {["adults", "children", "lapInfants"].map((type) => (
            <div key={type} className="flex items-center justify-between py-1">
              <span className="capitalize">
                {type === "adults"
                  ? "👨 Adults (12+)"
                  : type === "children"
                    ? "🧒 Children (2-11)"
                    : "👶 Lap Infants (<2)"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateTraveler(type, -1)}
                  className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-blue-300"
                >
                  –
                </button>
                <span>{travelers[type]}</span>
                <button
                  type="button"
                  onClick={() => updateTraveler(type, 1)}
                  className="bg-gray-600 px-2 rounded hover:bg-gray-500 text-blue-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300"
        >
          Search Flights
        </button>
      </form>

      <br /><br />
      {/* 🛫 Airline Logos */}


      {/* <div className="flex flex-wrap justify-between items-center w-full gap-4 mb-8"> */}
      <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-6 mb-8">
        {airlineLogos.map((airline) => (
          <img
            key={airline.name}
            src={airline.src}
            alt={airline.name}
            className="h-8 object-contain filter invert"
          />
        ))}
      </div>


      <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-6 mb-8">
        {airlineLogos.map((airline) => (
          <img
            key={airline.name}
            src={airline.src}
            alt={airline.name}
            className="h-8 object-contain filter invert brightness-200 opacity-70 hover:opacity-100 transition duration-300 ease-in-out"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-6 mb-8">
        {airlineLogos.map((airline) => (
          <img
            key={airline.name}
            src={airline.src}
            alt={airline.name}
            className="h-8 object-contain invert brightness-40 grayscale opacity-100 hover:opacity-100 transition duration-200"
          />
        ))}
      </div>






      <div className="flex flex-wrap items-center justify-center gap-2 py-6 text-white text-sm sm:text-base">
        <h2 className="font-semibold whitespace-nowrap">
          Our customers <span className="text-yellow-400">trust us!</span>
        </h2>
        <span className="font-bold text-yellow-300 whitespace-nowrap">Excellent</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.5 12.18 1 8.27l6.09-.88L10 2l2.91 5.39 6.09.88-4.5 3.91 1.378 5.91z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300 whitespace-nowrap">
          Top rated <span className="font-bold">4.7</span> out of 5, based on <span className="font-bold">2,197</span> reviews
        </p>
      </div>

      {/* AFFORDABLE BUSINESS CLASS */}
      <section className="text-center px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold text-black mb-2">
          AFFORDABLE BUSINESS CLASS <span className="text-orange-500">FLIGHTS</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Arangrant’s negotiated contracts and agreements with major airlines enable us to provide cheap flights business class,
          and first-class offers with discounts of up to 70%. Our primary goal is to earn customer loyalty and trust and establish
          an enviable reputation for quality travel planning & booking service.
        </p>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionClick(region)}
              className={`px-4 py-2 border rounded-full text-sm font-medium ${activeRegion === region
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Destination Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visibleDestinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-4 rounded-xl shadow-xl transform hover:-translate-y-2 hover:shadow-orange-500/80 transition duration-250"
            >
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-black text-lg">{dest.city}</h3>
                  <p className="text-sm text-gray-500">Business class from*</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold text-black text-xl">
                      ${dest.price.toLocaleString()}{" "}
                      <span className="text-xs text-gray-600">USD</span>
                    </p>
                    <button className="bg-green-600 hover:bg-green-500 text-white text-sm px-4 py-2 rounded-md">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* View All Deals Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleViewAll}
            className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition"
          >
            View All {activeRegion} Deals
          </button>
        </div>


      </section>



      {/* ✅ Business Class Expectations Section */}

      <div className="bg-gradient-to-b from-gray-800 to-gray-400 rounded-xl p-8 mt-10 text-white shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-2 tracking-wide">
          SURPASSING BUSINESS CLASS TRAVEL <span className="text-orange-300">EXPECTATIONS</span>
        </h2>
        <p className="text-center mb-10 text-gray-400 max-w-xl mx-auto">
          Devotion embodies our business as we put our customers’ comfort and pleasure first.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform hover:-translate-y-2 hover:shadow-orange-500/30 transition duration-300">
            <img src="https://nypost.com/wp-content/uploads/sites/2/2024/08/iStock-1281533018.jpg?quality=75&strip=all&w=1024" alt="Business Class" className="mx-auto mb-4 rounded-lg h-40 w-full object-cover" />
            <h3 className="text-lg font-bold text-white-400 mb-2">💼 Business class for less</h3>
            <p className="text-sm text-gray-300">
              Access exclusive fare deals with major airlines. Save significantly on business class flights.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform hover:-translate-y-2 hover:shadow-orange-500/30 transition duration-300">
            <img src="https://www.shutterstock.com/image-photo/beautiful-woman-sitting-office-clients-260nw-291421736.jpg" alt="Travel Experts" className="mx-auto mb-4 rounded-lg h-40 w-full object-cover" />
            <h3 className="text-lg font-bold text-white-400 mb-2">🧑‍✈️ The team of travel experts</h3>
            <p className="text-sm text-gray-300">
              Our agents help tailor perfect itineraries, maximizing your travel experience and savings.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform hover:-translate-y-2 hover:shadow-orange-500/30 transition duration-300">
            <img src="https://plus.unsplash.com/premium_photo-1658506646178-e4ef5810361b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Support" className="mx-auto mb-4 rounded-lg h-40 w-full object-cover" />
            <h3 className="text-lg font-bold text-white-400 mb-2">📞 24/7 professional support</h3>
            <p className="text-sm text-gray-300">
              Get real-time support from our experts — no waiting, no stress, just instant help.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Contact Agent Section */}
      <div className="bg-gray-900 mt-10 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between text-white shadow-xl border-t border-orange-300">
        <div className="flex items-center gap-4 h-24">
          <img
            src="https://arangrant.com/wp-content/uploads/sites/3/2024/01/consultants-4.png"
            className="h-full w-auto rounded-full object-contain shadow-lg"
            alt="Agent"
          />
          <div>
            <p className="text-lg font-semibold text-white-400">Contact your personal agent 24/7 –</p>
            <p className="text-sm text-gray-300">Make your business class flights cheap & smooth</p>
          </div>
        </div>

        <a href="tel:+919876543210" className="mt-4 md:mt-0 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-bold transition duration-300">
          📞 Call Now: +91 98765 43210
        </a>
      </div>




      {/* ✅ Trusted Reviews Section */}
      <section className="bg-[#f5ede3] py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          OUR CUSTOMERS ARE OUR <span className="text-orange-500">GREATEST ASSET</span>
        </h2>
        <div className="flex justify-center items-center gap-2 text-gray-700 font-semibold text-lg mt-2">
          <span>Excellent</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" className="h-5 w-5" alt="star" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" className="h-5 w-5" alt="star" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" className="h-5 w-5" alt="star" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" className="h-5 w-5" alt="star" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" className="h-5 w-5" alt="star" />
          <span className="ml-2 text-sm text-gray-600">Top rated <strong>4.7</strong> out of 5, based on <strong>2,197</strong> reviews</span>
        </div>

        {/* Review Cards */}


        <div className="mt-10 grid gap-6 px-6 md:grid-cols-3 max-w-7xl mx-auto">
          {allReviews.slice(0, visibleCount).map((review, index) => {
            const starCount = Number(review.stars) || 0;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-50"
              >
                {/* ⭐ Star Rating */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${i < starCount ? "text-yellow-400" : "text-yellow-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.287 3.946c.3.921-.755 1.688-1.54 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.074 9.373c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.951-.69l1.285-3.946z" />
                    </svg>
                  ))}
                </div>

                <h4 className="font-bold text-base text-gray-800 mb-1 break-words">{review.title}</h4>
                <p className="text-sm text-gray-700 mt-2">{review.content}</p>
                <p className="text-xs text-gray-500 mt-4">{review.date}</p>
                <p className="font-semibold text-gray-300 mt-1">{review.author}</p>
              </div>
            );
          })}
        </div>


        {visibleCount < allReviews.length && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              className="mt-8 px-6 py-2 border border-green-600 text-green-600 bg-transparent hover:bg-green-600 hover:text-white rounded-lg transition-all duration-300"
            >
              Read more reviews
            </button>
          </div>
        )}

      </section>


      {/* ✅ Airlines We Work With Section */}
      <section className="bg-[#fdf7f0] py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          AIRLINES WE WORK WITH
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We partner with major international airlines to provide competitive fares and premium service worldwide.
        </p>


        <div className="flex flex-wrap justify-center items-center gap-6 px-4 max-w-5xl mx-auto mb-10">
          {/* Existing Airlines */}
          <img src="https://i.pinimg.com/736x/cb/14/a4/cb14a4b97cc5ca03bbfa5a8b8e1bc5c0.jpg" className="h-10 object-contain" alt="Singapore Airlines" />
          <img src="https://cdn.worldvectorlogo.com/logos/emirates-logo-2.svg" className="h-6 object-contain" alt="Emirates" />
          <img src="https://d21buns5ku92am.cloudfront.net/69647/images/433143-QR%20Logo%20Horizontal%20White-6a70c4-medium-1654772384.png" className="h-6 object-contain" alt="Qatar" />
          <img src="https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg" className="h-8 object-contain" alt="Swiss" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbgswtEVHsGwHfni16vWkba2Yd8wLXOLJ3g&s" className="h-6 object-contain" alt="Air India" />
          <img src="https://brandlogos.net/wp-content/uploads/2012/12/united-airlines-logo-vector.png" className="h-6 object-contain" alt="United Airlines" />

          {/* New Airlines (not already in the list above) */}
          <img src="https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.jpg" className="h-6 object-contain" alt="IndiGo" />
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png" className="h-6 object-contain" alt="Qantas" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhbRWH6ZUDU1CsHkNDlX8t_q4YzQyysOkFw&s" className="h-6 object-contain" alt="Go First" />
          <img src="https://cdn.worldvectorlogo.com/logos/logo-american-airlines.svg" className="h-6 object-contain" alt="American Airlines" />
          <img src="https://wallpapercat.com/w/full/6/6/f/1449277-3840x2160-desktop-4k-delta-air-lines-wallpaper-image.jpg" className="h-6 object-contain" alt="Delta Airlines" />
        </div>

        {/* Newsletter Box */}

        {/* <div className="bg-white shadow-md rounded-xl px-6 py-6 w-full max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-orange-300 mb-1">GET $50 OFF YOUR FIRST BOOKING!</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to stay in touch with premium flight deals and the latest discounts
          </p>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
            >
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-xs text-gray-400 mt-2">
            By providing your email you consent to receive occasional promotional emails from us
          </p>
        </div> */}

        <div className="bg-white shadow-md rounded-xl px-6 py-6 w-full max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-orange-300 mb-1">
            GET $50 OFF YOUR FIRST BOOKING!
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe to stay in touch with premium flight deals and the latest discounts
          </p>

          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
            >
              Submit
            </button>
          </form>

          {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}

          <p className="text-xs text-gray-400 mt-2">
            By providing your email you consent to receive occasional promotional emails from us
          </p>
        </div>

      </section>


      {/* ✅ Flight Deals Section */}

      {/* <div className="mt-10"> */}

      {/* <div   className="bg-gray-900 p-4 rounded-xl shadow-xl transform hover:-translate-y-4 hover:shadow-orange-500/100 transition duration-200">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400 text-center">🔥 Top Flight Deals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal._id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img src={deal.image} alt={deal.city} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{deal.city}</h3>
          
                <p className="text-yellow-300 font-semibold mt-2">
                  From $ {deal.price} <span className="text-xs text-gray-300">USD</span>
                </p>

                <button
                  className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
                  onClick={() => navigate("/?prefillFromDeal=" + deal.city)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/deals" className="text-yellow-300 hover:underline">
            View All Deals ➡️
          </a>
        </div>
      </div> */}

      <div className="bg-gray-900 p-4 rounded-xl">
  <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">🔥 Top Flight Deals</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {deals.map((deal) => (
      <div
        key={deal._id}
        className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-5 hover:shadow-yellow-400/80 transition duration-300"
      >
        <img
          src={deal.image}
          alt={deal.city}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-left">
          <h3 className="text-xl font-bold text-white">{deal.city}</h3>
          <p className="text-yellow-300 font-semibold mt-2">
            From $ {deal.price} <span className="text-xs text-gray-300">USD</span>
          </p>

          <button
            className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
            onClick={() => navigate("/?prefillFromDeal=" + deal.city)}
          >
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center mt-6">
    <a href="/deals" className="text-yellow-300 hover:underline">
      View All Deals ➡️
    </a>
  </div>
</div>

      
      <br />
      <hr />
    </div>
  );
}
