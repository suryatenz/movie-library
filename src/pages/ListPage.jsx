import React from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../components/Movie/MovieList';

const ListPage = () => {
  const { listId } = useParams();
  // Fetch the list data using the listId
  const list = { title: "Sample List", movies: [] };

  return (
    <div className="container mx-auto py-10">
      <MovieList title={list.title} movies={list.movies} />
    </div>
  );
};

export default ListPage;
