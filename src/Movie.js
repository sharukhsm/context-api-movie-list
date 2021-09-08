import React from "react";

/* Usually we write props inside here, 
It can also be written like this to be consise */
const MovieList = ({ name, price }) => {
  return (
    <div
      style={{
        paddingBottom: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row wrap",
      }}
    >
      <h2>
        {name}: {price}
      </h2>
    </div>
  );
};
export default MovieList;
