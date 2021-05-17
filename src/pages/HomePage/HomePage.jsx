import styles from "./HomePage.module.css";
import axios from "axios";
import { Component } from "react";
import MovieList from "../../Components/MoviesList";

const BASE_URL = "https://api.themoviedb.org/3/trending/";
const API_KEY = "944ce772996bcaf96d197d63e9d3b577";

class HomePage extends Component {
  state = {
    trandingFilms: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(`${BASE_URL}movie/day?api_key=${API_KEY}`);
    this.setState({ trandingFilms: data.results });
  }
  render() {
    const { trandingFilms } = this.state;
    const { location } = this.props;

    return (
      <>
        <h1 className={styles.page__title}>tranding today</h1>
        <MovieList movies={trandingFilms} location={location} />
      </>
    );
  }
}

export default HomePage;
