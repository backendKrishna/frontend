
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // ✅ Import this

// export default function Deals() {
//     const [deals, setDeals] = useState([]);
//     const [page, setPage] = useState(1); // ✅ This line fixes the error
//     const navigate = useNavigate(); // ✅ Define navigate

//     const perPage = 3;

//     // useEffect(() => {
//     //     axios
//     //         .get(`http://localhost:5000/api/deals?page=${page}&perPage=${perPage}`)
//     //         .then((res) => setDeals(res.data.data || res.data))
//     //         .catch((err) => console.error("❌ Error fetching deals:", err));
//     // }, [page]);


//     //IF WE WANT ALL IMAGE SHOULD COME IN ONE PAGE THEN UNCOMMENT BELOW CODE

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/deals")
//             .then(res => setDeals(res.data.data || res.data));
//     }, []);



//     return (
//         <div className="min-h-screen bg-gray-900 text-white p-6">
//             <hr />
//             <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
//                 ✈️ Flight Deals
//             </h1>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {Array.isArray(deals) &&
//                     deals.map((deal) => (
//                         <div
//                             key={deal._id}
//                             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
//                         >
//                             <img
//                                 src={deal.image}
//                                 alt={deal.city}
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-4">
//                                 <h2 className="text-xl font-bold">{deal.city}</h2>
//                                 <p className="text-yellow-300 font-semibold mt-2">
//                                     From ${deal.price} <span className="text-xs text-gray-300">USD</span>
//                                 </p>


//                                 <button
//                                     onClick={() => {
//                                         alert(`✅ You have successfully booked for ${deal.city}`);
//                                         setTimeout(() => {
//                                             navigate(`/?prefillFromDeal=${deal.city}`);
//                                         }, 500); // slight delay so alert finishes before redirect
//                                     }}
//                                     className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
//                                 >
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
                   
                   
                   
//                    ))}
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-6 gap-4">
//                 <button
//                     disabled={page <= 1}
//                     onClick={() => setPage((p) => p - 1)}
//                     className="bg-gray-700 px-4 py-2 rounded disabled:opacity-40"
//                 >
//                     ⬅️ Previous
//                 </button>
//                 <button
//                     onClick={() => setPage((p) => p + 1)}
//                     className="bg-gray-700 px-4 py-2 rounded"
//                 >
//                     Next ➡️
//                 </button>
//             </div>
//             <br />
//             <hr />
//         </div>
//     );
// }




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Deals() {
  const [deals, setDeals] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const perPage = 3;

  // Load all deals (no pagination)
  useEffect(() => {
    axios
      .get("http://backend-l374.onrender.com/api/deals")
      .then((res) => setDeals(res.data.data || res.data))
      .catch((err) => console.error("❌ Error fetching deals:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <hr />
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
        ✈️ Flight Deals
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(deals) &&
          deals.map((deal) => (
            <div
              key={deal._id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-3 hover:shadow-yellow-400/100 transition duration-300"
            >
              <img
                src={deal.image}
                alt={deal.city}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white">{deal.city}</h2>
                <p className="text-yellow-300 font-semibold mt-2">
                  From ${deal.price}{" "}
                  <span className="text-xs text-gray-300">USD</span>
                </p>

                <button
                  onClick={() => {
                    alert(`✅ You have successfully booked for ${deal.city}`);
                    setTimeout(() => {
                      navigate(`/?prefillFromDeal=${deal.city}`);
                    }, 500);
                  }}
                  className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Optional Pagination Controls (if needed later) */}
      
      <div className="flex justify-center mt-6 gap-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="bg-gray-700 px-4 py-2 rounded disabled:opacity-40"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Next ➡️
        </button>
      </div> 
     

      <br />
      <hr />
    </div>
  );
}
