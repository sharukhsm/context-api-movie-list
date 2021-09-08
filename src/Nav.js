import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { MovieContext } from "./MovieContext";

const NavComponent = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link href="#home">Sharukh</Nav.Link>
          <Nav.Link href="#features">List of movies: {movies.length}</Nav.Link>
        </Nav>
      </Navbar>
      {/* <h3>Sharukh</h3>
      <h3>List of movies: </h3> */}
    </div>
  );
};
export default NavComponent;
