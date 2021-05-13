import { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cast from "../../Components/Cast";
import Review from "../../Components/Review/Review";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "944ce772996bcaf96d197d63e9d3b577";
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=944ce772996bcaf96d197d63e9d3b577&language=en-US
class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
    title: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    this.setState({
      ...data,
      movie: data,
    });
  }
  render() {
    const { title, release_date, vote_average, movie, genres, poster_path } =
      this.state;
    const { match } = this.props;

    return (
      <>
        <NavLink to="/">back</NavLink>
        <div className="movie__container">
          <div className="poster__wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          </div>
          <div className="info__wrapper">
            <h2>
              {title}({release_date})
            </h2>
            <ul>
              <li>
                <p>user score {vote_average}</p>
              </li>
              <li>
                <h3>overview</h3>
                <p>{movie.overview}</p>
              </li>
              <li>
                <h3>genres</h3>
                <ul>
                  {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="extra__wrapper">
          <ul>
            <li>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/review`}>Review</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/review`} component={Review} />
          </Switch>
        </div>
      </>
    );
  }
}
export default MovieDetailsPage;

//original_title || title
//overview
//vote_average
//release_date
//genres (array)
//poster_path
