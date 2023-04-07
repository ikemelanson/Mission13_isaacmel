import { Movie } from '../types/movie';
import { useEffect, useState } from 'react';

function Movies() {
  const [movieArray, setMovieData] = useState<Movie[]>([]);

  //import data from api
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://localhost:4000/movie');
      const temp = await response.json();
      setMovieData(temp);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Movie Database</h1>
      <p>Here is a list of all the movies that I like!</p>

      {/* generate a table displaying all the movies in the database */}
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Lent To</th>
            <th>Edited</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* generate each row in the table */}
          {movieArray.map((movie) => (
            <tr key={movie.movieId}>
              <td>{movie.category}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.director}</td>
              <td>{movie.rating}</td>
              <td>{movie.lentTo}</td>
              <td>{movie.edited}</td>
              <td>{movie.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Movies;
