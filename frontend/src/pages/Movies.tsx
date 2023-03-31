import movieData from '../data.json';

const movieArray = movieData.MovieData;

function Movies() {
  return (
    <>
      <h1>Movie Database</h1>
      <p>Here is a list of all the movies that I like!</p>

      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movieArray.map((movie) => (
            <tr>
              <td>{movie.Category}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Director}</td>
              <td>{movie.Rating}</td>
              <td>{movie.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Movies;
