import React, { useState, useContext } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { MovieContext } from "./MovieContext";

const AddMovie = (props) => {
  //We use film to differentiate from Movies variable
  const [film, setFilm] = useState({
    name: "",
    price: "",
  });
  const [movies, setMovies] = useContext(MovieContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setFilm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitMovie(event) {
    setMovies((prevMovies) => [...prevMovies, film]);
    setFilm({
      name: "",
      price: "",
    });
    event.preventDefault();
  }

  return (
    <form onSubmit={submitMovie}>
      <input
        onChange={handleChange}
        value={film.name}
        type="text"
        name="name"
      ></input>
      <input
        onChange={handleChange}
        value={film.price}
        type="text"
        name="price"
      ></input>
      <button>Add</button>
    </form>
  );
};

export default AddMovie;
