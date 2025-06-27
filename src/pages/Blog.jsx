import React, { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  useEffect(() => {
    fetch("/api/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to load blog data:", err));
  }, []);

  const filters = [
    "Airlines’ Reviews",
    "AranGrant News",
    "Business & First Class",
    "Destination Insights",
    "Event Highlights",
    "Industry News",
    "Travel Strategies"
  ];

  const handleToggleReadMore = (id) => {
    setExpandedBlogId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10 font-sans">
      {/* Header Section */}
      <div className="bg-gray-800 text-white p-8 rounded-lg text-center mb-8">
        <h1 className="text-3xl font-bold">ARANGRANT BLOG</h1>
        <p className="mt-2 text-gray-300">
          Discover how to book the best business class flights and enhance your travel with our expert guides
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full shadow-sm hover:bg-yellow-400 hover:text-black hover:border-yellow-500 transition-all duration-200 ease-in-out"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="shadow-lg rounded-xl overflow-hidden border bg-white">
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <p className="text-sm font-medium text-gray-500">{blog.category}</p>
              <p className="text-xs text-gray-400">{blog.readTime}</p>
              <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
              <p className="text-sm text-gray-500 mt-1">{blog.date}</p>

              {/* Show readMore content if expanded */}
              {expandedBlogId === blog.id && (
                <p className="text-sm text-gray-700 mt-2">{blog.readMore}</p>
              )}

              {/* Toggle Button */}
              {blog.readMore && (
                <button
                  onClick={() => handleToggleReadMore(blog.id)}
                  className="mt-3 inline-block bg-yellow-400 px-4 py-2 text-sm font-semibold text-black rounded hover:bg-yellow-300 transition"
                >
                  {expandedBlogId === blog.id ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
