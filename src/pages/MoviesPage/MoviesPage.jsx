import styles from "./MoviesPage.module.css";
import axios from "axios";
import { Component } from "react";

import MoviesList from "../../Components/MoviesList/MoviesList";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "944ce772996bcaf96d197d63e9d3b577";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.movies !== prevState.movies) {
      localStorage.setItem("movies", JSON.stringify(this.state.movies));
      localStorage.setItem("query", JSON.stringify(this.state.query));
    }
  }
  componentDidMount() {
    const savedMovies = localStorage.getItem("movies");
    const savedQuery = localStorage.getItem("query");
    const parsedMovies = JSON.parse(savedMovies);
    const parsedQuery = JSON.parse(savedQuery);
    if (parsedMovies) {
      this.setState({
        movies: parsedMovies,
        query: parsedQuery,
      });
    }
  }
  handleInputChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const searchedMovie = this.state.query;
    axios
      .get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=20`
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      });
    if (this.state.query) {
      this.props.history.push({
        search: `query=${this.state.query}`,
      });
    }
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <button
            type="submit"
            className={styles.btn}
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </form>
        <MoviesList movies={movies} pathname={this.props.location.pathname} />
      </>
    );
  }
}
export default MoviesPage;
