import { Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";
import Container from "./Components/Container/Container";
import routes from "./routes";

function App() {
  return (
    <>
      <Container>
        <div className="App">
          <NavigationBar />
        </div>
        <Switch>
          <Route exact path={routes.HomePage} component={HomePage} />
          <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.MoviesPage} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
