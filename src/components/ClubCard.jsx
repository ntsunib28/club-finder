// src/components/ClubCard.jsx
import { Link } from 'react-router-dom';

export default function ClubCard({ club, view = 'grid' }) {
  const { id, name, image, shortDescription } = club;

  return (
    <div
      className={`border rounded-lg shadow-sm bg-white ${
        view === 'grid' ? 'w-full' : 'flex items-center gap-4 p-4'
      }`}
    >
      <img
        src={image}
        alt={name}
        className={`object-cover rounded-t-lg ${
          view === 'grid'
            ? 'w-full h-40'
            : 'w-32 h-32 rounded-lg flex-shrink-0'
        }`}
      />
      <div className={`${view === 'grid' ? 'p-4' : ''} flex flex-col justify-between`}>
        <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{shortDescription}</p>
        <Link
          to={`/clubs/${id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
