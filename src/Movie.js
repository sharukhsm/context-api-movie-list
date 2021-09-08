import React from "react";

/* Usually we write props inside here, 
It can also be written like this to be consise */
const MovieList = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
};
export default MovieList;
