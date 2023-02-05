import { useState } from "react";
// List copied from https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4
import MoviesList from "./movies-list.json";

export default function Movies() {
  const allMovies = MoviesList.map((movie) => ({ ...movie, isOpened: false }));

  const [movies, setMovies] = useState(allMovies);

  const openMovie = (movie: any) => {
    movie.isOpened = true;
    setMovies([...movies]);
  };

  const closeMovie = (movie: any) => {
    movie.isOpened = false;
    setMovies([...movies]);
  };

  return (
    <>
      <div>Movies</div>
      <div className="movieCards">
        {movies.map((movie) => (
          <div key={movie.Title} className="movieCard">
            {movie.isOpened ? (
              <div className="cardData">
                <div className="movieTitle">{movie.Title}</div>
                <div className="movieYear">{movie.Year}</div>
                <div className="movieDirector">{movie.Director}</div>
                <div className="cardButton">
                  <button onClick={() => closeMovie(movie)}>Close</button>
                </div>
              </div>
            ) : (
              <div className="cardButton">
                <button onClick={() => openMovie(movie)}>Open</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .movieCards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
          }

          .movieCard {
            width: 200px;
            height: 200px;
            background-color: #ccc;
            margin: 10px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .cardData div {
            margin: 5px;
          }
        `}
      </style>
    </>
  );
}
