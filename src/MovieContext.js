//Context Api Step: 1
import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Fight club",
      price: "$20",
      id: 1452,
    },
    {
      name: "Harry potter",
      price: "$30",
      id: 5423,
    },
    {
      name: "Valimai",
      price: "$50",
      id: 7564,
    },
    {
      name: "Beast",
      price: "$40",
      id: 7544,
    },
  ]);

  return (
    //Context Api Step: 2
    <MovieContext.Provider value={[movies, setMovies]}>
      {/* You can pass the state variables or, values in this case,
    as props to specific components like adding <MovieList /> <Nav /> 
    or you can use the below method and pass it to whichever components
     you want by just importing MovieContext.js */}
      {props.children}
    </MovieContext.Provider>
  );
};
