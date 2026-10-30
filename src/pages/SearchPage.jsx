import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/Movie/MovieCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=94079983`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Search for a movie..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
