import React, { useState, useContext } from "react";
// Semantic UI
import "semantic-ui-css/semantic.min.css";
import { Button, Form } from "semantic-ui-react";
//Context api
import { MovieContext } from "./MovieContext";

const AddMovie = (props) => {
  //We use film to differentiate from Movies variable
  const [film, setFilm] = useState({
    name: "",
    price: "",
  });
  const [movies, setMovies] = useContext(MovieContext);

  //To update the current changes to the state variable
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
    //To clear out the values in the input area.
    setFilm({
      name: "",
      price: "",
    });
    //To prevent refresh while submitting
    event.preventDefault();
  }

  return (
    <div>
      <h1>Add a movie to the list</h1>

      <Form
        onSubmit={submitMovie}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        <Form.Field>
          <Form.Input
            key={film.id}
            onChange={handleChange}
            value={film.name}
            type="text"
            name="name"
            placeholder="Movie"
            label="Movie"
          />
        </Form.Field>

        <Form.Field>
          <Form.Input
            label="Price"
            key={film.id}
            onChange={handleChange}
            value={film.price}
            type="text"
            name="price"
            placeholder="Price"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddMovie;
