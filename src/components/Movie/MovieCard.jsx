import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-4">{movie.Title}</h3>
      <p className="text-gray-700">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
