import React, { useContext } from "react";
import Movie from "./Movie";
//Context Api Step: 5
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  /* Context Api Step: 6
   Here we use state variables like we 
  regularly use but instead of useState we use useContext */
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {/* Looping through movies array and 
    rendering it as h3 in Movie component.
    Here the movies array is received from MovieContext.js
    */}
      {movies.map((movie) => {
        return <Movie name={movie.name} price={movie.price} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;
