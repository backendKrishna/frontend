import React, { useState } from "react";

const allReviews = [
  {
    title: "Great booking experience!",
    content: "Very smooth booking process. Got an amazing deal on business class tickets.",
    date: "June 2025",
    author: "Rajesh K.",
    stars: 5,
  },
  {
    title: "Highly recommended",
    content: "Their team was super helpful. I got fast support even at midnight.",
    date: "May 2025",
    author: "Samantha P.",
    stars: 5,
  },
  {
    title: "Value for money",
    content: "Booked flights to Australia with a great price. Will use again!",
    date: "April 2025",
    author: "John M.",
    stars: 4,
  },
  // Add more mock reviews as needed
];

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-[#f5ede3] py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        OUR CUSTOMERS ARE OUR <span className="text-orange-500">GREATEST ASSET</span>
      </h2>

      <div className="flex justify-center items-center gap-2 text-gray-700 font-semibold text-lg mt-2">
        <span>Excellent</span>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
            className="h-5 w-5"
            alt="star"
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          Top rated <strong>4.7</strong> out of 5, based on <strong>2,197</strong> reviews
        </span>
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
              {/* Star Rating */}
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
              <p className="font-semibold text-gray-500 mt-1">{review.author}</p>
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
  );
}
