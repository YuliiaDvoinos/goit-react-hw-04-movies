import styles from "./MovieDetailsPage.module.css";
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
        <div className={styles.movie__container}>
          <div className={styles.poster__wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          </div>
          <div className={styles.info__wrapper}>
            <h2 className={styles.film__title}>
              {title}({release_date})
            </h2>
            <ul className={styles.info__list}>
              <li>
                <h3>
                  User score:{" "}
                  <span className={styles.vote__number}>{vote_average}</span>
                </h3>
              </li>
              <li>
                <h3>Overview:</h3>
                <p>{movie.overview}</p>
              </li>
              <li>
                <h3>Genres:</h3>
                <ul className={styles.list}>
                  {genres.map((genre) => (
                    <li className={styles.item} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="extra__wrapper">
          <ul className={styles.extra__list}>
            <li className={styles.extra__item}>
              <NavLink
                activeStyle={{
                  color: "black",
                  borderBottom: "3px solid blueviolet",
                }}
                className={styles.extra__link}
                to={`${match.url}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li className={styles.extra__item}>
              <NavLink
                activeStyle={{
                  color: "black",
                  borderBottom: "3px solid blueviolet",
                }}
                className={styles.extra__link}
                to={`${match.url}/review`}
              >
                Review
              </NavLink>
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
