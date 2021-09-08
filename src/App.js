import "./App.css";
//Components
import MovieList from "./MovieList";
import NavComponent from "./Nav";
import AddMovie from "./AddMovie";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Context Api Step: 3
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    /* Context Api Step: 4
    Wrapping movie provider to the required components, so that
     all the components get the state variables. */
    <MovieProvider>
      <div className="App">
        <NavComponent />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
