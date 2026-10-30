import React, { useState } from 'react';
import MovieList from '../components/Movie/MovieList';

const HomePage = () => {
  // Sample movie lists data
  const [publicLists, setPublicLists] = useState([]);
  const [privateLists, setPrivateLists] = useState([]);

  return (
    <div className="container mx-auto py-10">
      <MovieList title="Public Movie Lists" movies={publicLists} />
      <MovieList title="Private Movie Lists" movies={privateLists} />
    </div>
  );
};

export default HomePage;
