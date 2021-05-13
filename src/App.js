import { Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";
import Container from "./Components/Container/Container";

function App() {
  return (
    <>
      <Container>
        <div className="App">
          <NavigationBar />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
