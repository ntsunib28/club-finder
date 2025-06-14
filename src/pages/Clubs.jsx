import React, { useState } from 'react';
import { clubs as defaultClubs } from '../data/clubs';
import ClubCard from '../components/ClubCard';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [view, setView] = useState('grid');

  const sortedClubs = [...defaultClubs].sort((a, b) => {
    if (sortOrder === 'asc') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Explore Student Clubs</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Sorting Dropdown */}
        <div>
          <label htmlFor="sort" className="mr-2 font-medium">Sort by Name:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        {/* View Toggle */}
        <button
          onClick={toggleView}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Switch to {view === 'grid' ? 'List' : 'Grid'} View
        </button>
      </div>

      {/* Club Cards */}
      <div className={view === 'grid' ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}>
        {sortedClubs.map((club) => (
          <ClubCard key={club.id} club={club} view={view} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
