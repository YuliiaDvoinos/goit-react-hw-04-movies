import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

import Spinner from "./Components/Spinner";
import NavigationBar from "./Components/NavigationBar";
import NotFound from "./pages/NotFound";
import Container from "./Components/Container/Container";

const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /*webpackChunkName: "movies-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /*webpackChunkName: "movie-details-page"*/)
);

function App() {
  return (
    <>
      <Container>
        <div className="App">
          <NavigationBar />
        </div>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.HomePage} component={HomePage} />
            <Route
              path={routes.MovieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route path={routes.MoviesPage} component={MoviesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
