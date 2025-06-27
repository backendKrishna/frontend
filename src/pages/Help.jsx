
// import React, { useState } from "react"; // ✅ lowercase "react"

// import { FiChevronDown, FiChevronUp } from "react-icons/fi";


// const helpCategories = [
//   { title: "At the airport", icon: "🛫" },
//   { title: "Baggage", icon: "🧳" },
//   { title: "Booking a Flight", icon: "📅" },
//   { title: "Bundles and Additional Services", icon: "💎" },
//   { title: "Cancellations & Refunds", icon: "❌" },
//   { title: "Documents", icon: "📄" },
//   { title: "Passenger Details", icon: "🧍‍♂️" },
//   { title: "Special Services", icon: "♿" },
// ];

// const faqs = [
//   {
//     question: "Cancellation within 24 hours of booking",
//     answer: "You can cancel your flight within 24 hours for a full refund as per airline policy.",
//   },
//   {
//     question: "Booking a flight in a few steps",
//     answer: "Search, compare, and book your flight directly through our website or app.",
//   },
//   {
//     question: "Voluntary cancellations beyond 24 hours",
//     answer: "You may cancel your ticket, but cancellation fees may apply depending on the airline.",
//   },
//   {
//     question: "Payment methods",
//     answer: "We accept all major credit/debit cards, UPI, wallets, and net banking.",
//   },
//   {
//     question: "Refunds due to a schedule change or flight cancellation",
//     answer: "Refunds are processed automatically if the airline cancels or reschedules your flight.",
//   },
//   {
//     question: "Traveling with children",
//     answer: "Children under 2 travel free on lap; child fares apply above that age with ID proof.",
//   },
// ];

// export default function Helps() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const [email, setEmail] = useState("");  // ✅ Inside the component
//   const [status, setStatus] = useState("");


//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
// const [subscribers, setSubscribers] = useState([]);

// useEffect(() => {
//   fetch("http://localhost:5000/api/subscribers")
//     .then((res) => res.json())
//     .then((data) => setSubscribers(data))
//     .catch((err) => console.error("Error fetching subscribers:", err));
// }, []);

//   return (
//     <div className="bg-[#f9f5f0] min-h-screen text-gray-800">
//       {/* Header Section */}
//       <section className="bg-white py-10 text-center shadow">
//         <h1 className="text-3xl font-bold">HELP & CUSTOMER SERVICE</h1>
//         <div className="mt-6 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search Help"
//             className="w-80 px-4 py-2 border rounded-l"
//           />
//           <button className="bg-orange-500 text-white px-6 rounded-r hover:bg-orange-600">
//             GO
//           </button>
//         </div>
//       </section>

//       {/* Help Categories */}
//       <section className="py-10 px-4 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Categories</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {helpCategories.map((cat, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded shadow hover:shadow-md cursor-pointer text-center"
//             >
//               <div className="text-3xl mb-2">{cat.icon}</div>
//               <p className="font-medium">{cat.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-8 px-4 max-w-3xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border rounded-lg bg-white shadow">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100"
//               >
//                 <span>{faq.question}</span>
//                 {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
//               </button>
//               {activeIndex === index && (
//                 <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter */}
//       {/* <section className="bg-[#f2efe8] py-12 text-center px-4">
//         <h2 className="text-xl font-semibold mb-2">
//           RECEIVE EXCLUSIVE <span className="text-orange-500">FLIGHT OFFERS</span>
//         </h2>
//         <p className="mb-4">Subscribe to our newsletter and receive updates on the best flight deals</p>
        
        
//         <div className="flex justify-center gap-2 max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter e-mail"
//             className="w-full px-4 py-2 border rounded-l"
//           />
//           <button className="bg-green-600 text-white px-6 rounded-r hover:bg-green-700">
//             Submit
//           </button>
//         </div>
//         <p className="text-xs mt-2 text-gray-500">
//           By providing your email you consent to receive occasional promotional emails from us
//         </p>
//       </section> */}



// {/* Newsletter */}
// <section className="bg-[#f2efe8] py-12 text-center px-4">
//   <h2 className="text-xl font-semibold mb-2">
//     RECEIVE EXCLUSIVE <span className="text-orange-500">FLIGHT OFFERS</span>
//   </h2>
//   <p className="mb-4">Subscribe to our newsletter and receive updates on the best flight deals</p>

//   {/* Email input + Submit */}
//   <form
//     onSubmit={(e) => {
//       e.preventDefault();
//       if (email) {
//         // Replace this URL with your actual API endpoint
//         fetch("/api/subscribe", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             setStatus("Subscribed successfully!");
//             setEmail("");
//           })
//           .catch((err) => {
//             setStatus("Subscription failed. Please try again.");
//           });
//       } else {
//         setStatus("Please enter a valid email.");
//       }
//     }}
//     className="flex justify-center gap-2 max-w-md mx-auto"
//   >
//     <input
//       type="email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       placeholder="Enter e-mail"
//       className="w-full px-4 py-2 border rounded-l"
//       required
//     />
//     <button type="submit" className="bg-green-600 text-white px-6 rounded-r hover:bg-green-700">
//       Submit
//     </button>
//   </form>

//   {/* Status Message */}
//   {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}

//   <p className="text-xs mt-2 text-gray-500">
//     By providing your email you consent to receive occasional promotional emails from us
//   </p>
// </section>



//       <hr />
//     </div>
//   );
// }





import React, { useState, useEffect } from "react"; // ✅ useEffect imported
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const helpCategories = [
  { title: "At the airport", icon: "🛫" },
  { title: "Baggage", icon: "🧳" },
  { title: "Booking a Flight", icon: "📅" },
  { title: "Bundles and Additional Services", icon: "💎" },
  { title: "Cancellations & Refunds", icon: "❌" },
  { title: "Documents", icon: "📄" },
  { title: "Passenger Details", icon: "🧍‍♂️" },
  { title: "Special Services", icon: "♿" },
];

const faqs = [
  {
    question: "Cancellation within 24 hours of booking",
    answer: "You can cancel your flight within 24 hours for a full refund as per airline policy.",
  },
  {
    question: "Booking a flight in a few steps",
    answer: "Search, compare, and book your flight directly through our website or app.",
  },
  {
    question: "Voluntary cancellations beyond 24 hours",
    answer: "You may cancel your ticket, but cancellation fees may apply depending on the airline.",
  },
  {
    question: "Payment methods",
    answer: "We accept all major credit/debit cards, UPI, wallets, and net banking.",
  },
  {
    question: "Refunds due to a schedule change or flight cancellation",
    answer: "Refunds are processed automatically if the airline cancels or reschedules your flight.",
  },
  {
    question: "Traveling with children",
    answer: "Children under 2 travel free on lap; child fares apply above that age with ID proof.",
  },
];

export default function Helps() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [subscribers, setSubscribers] = useState([]);
const [searchQuery, setSearchQuery] = useState("");


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Fetch subscribers from backend
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/subscriber")
  //     .then((res) => res.json())
  //     .then((data) => setSubscribers(data))
  //     .catch((err) => console.error("Error fetching subscribers:", err));
  // }, []);


useEffect(() => {
  fetch("http://localhost:5000/api/subscriber")
    .then((res) => res.json())
    .then((resData) => {
      setSubscribers(resData.data || []); // ✅ extract array safely
    });
}, []);


  return (
    <div className="bg-[#f9f5f0] min-h-screen text-gray-800">
      {/* Header Section */}
      <section className="bg-white py-10 text-center shadow">
        <h1 className="text-3xl font-bold">HELP & CUSTOMER SERVICE</h1>

        {/* <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search Help"
            className="w-80 px-4 py-2 border rounded-l"
          />
          <button className="bg-orange-500 text-white px-6 rounded-r hover:bg-orange-600">
            GO
          </button>
        </div> */}



<div className="mt-6 flex justify-center">
  <input
    type="text"
    // placeholder="Search Help"
      placeholder="Search Help – type Booking, Payment or Cancel"
    className="w-80 px-4 py-2 border rounded-l"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button
    className="bg-orange-500 text-white px-6 rounded-r hover:bg-orange-600"
    onClick={() => {
      const target = document.getElementById("faq-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    GO
  </button>
</div>


      </section>

      {/* Help Categories */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {helpCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-md cursor-pointer text-center"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="font-medium">{cat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-white shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section> */}

      {/* FAQ Section */}
<section id="faq-section" className="py-8 px-4 max-w-3xl mx-auto">
  <h2 className="text-xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {faqs
      .filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((faq, index) => (
        <div key={index} className="border rounded-lg bg-white shadow">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100"
          >
            <span>{faq.question}</span>
            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {activeIndex === index && (
            <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
  </div>
</section>


      {/* Newsletter Subscription Section */}
      <section className="bg-[#f2efe8] py-12 text-center px-4">
        <h2 className="text-xl font-semibold mb-2">
          RECEIVE EXCLUSIVE <span className="text-orange-500">FLIGHT OFFERS</span>
        </h2>
        <p className="mb-4">Subscribe to our newsletter and receive updates on the best flight deals</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              fetch("http://localhost:5000/api/subscriber", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              })
                .then((res) => res.json())
                .then((data) => {
                  setStatus("Subscribed successfully!");
                  setEmail("");
                })
                .catch(() => {
                  setStatus("Subscription failed. Please try again.");
                });
            } else {
              setStatus("Please enter a valid email.");
            }
          }}
          className="flex justify-center gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter e-mail"
            className="w-full px-4 py-2 border rounded-l"
            required
          />
          <button type="submit" className="bg-green-600 text-white px-6 rounded-r hover:bg-green-700">
            Submit
          </button>
        </form>

        {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}

        <p className="text-xs mt-2 text-gray-500">
          By providing your email you consent to receive occasional promotional emails from us
        </p>
      </section>

      {/* Subscribers list for admin/testing */}

      <section className="py-10 px-4 max-w-3xl mx-auto">
  <h2 className="text-lg font-semibold mb-4">📧 Subscribed Emails</h2>
  {subscribers.length === 0 ? (
    <p>No subscribers found.</p>
  ) : (
    <ul className="list-disc pl-5 text-sm text-gray-700">
      {subscribers.map((sub, index) => (
        <li key={index}>{sub.email}</li>
      ))}
    </ul>
  )}
</section>


      <hr />
    </div>
  );
}
