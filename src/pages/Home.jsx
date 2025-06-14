import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to Campus Club Finder 🎓
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover amazing student clubs, explore upcoming events, and join communities that match your passion.
        </p>
        <img
          src="/images/campus.png"
          alt="Campus Clubs"
          className="w-full max-w-md mx-auto mb-6"
        />
        <Link
          to="/clubs"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Explore Clubs
        </Link>
      </div>
    </div>
  );
};

export default Home;
