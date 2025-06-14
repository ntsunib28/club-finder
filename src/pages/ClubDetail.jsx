import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';

const ClubDetail = () => {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (joinedClubs.includes(clubId)) {
      setJoined(true);
    }
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
    }
  };

  if (!club) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-red-600">Club not found 😢</h1>
        <p>Please check the URL or return to the clubs page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">{club.name}</h1>
      <img
        src={club.image}
        alt={club.name}
        className="w-fit max-w-52 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-6">{club.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="list-disc list-inside mb-6">
        {club.events.map((event, index) => (
          <li key={index} className="text-lg">
            {event.name} – {event.date}
          </li>
        ))}
      </ul>

      {!joined ? (
        <button
          onClick={handleJoin}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Join Club
        </button>
      ) : (
        <p className="text-green-600 font-semibold">🎉 You have joined this club!</p>
      )}
    </div>
  );
};

export default ClubDetail;
