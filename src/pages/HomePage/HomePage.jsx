import styles from "./HomePage.module.css";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

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
    return (
      <>
        <h1 className={styles.page__title}>tranding today</h1>
        <ul className={styles.list}>
          {trandingFilms.map(({ id, title, poster_path }) => (
            <li key={id} className={styles.list__item}>
              <Link to={`/movies/${id}`} className={styles.link}>
                <div className={styles.movie__wrapper}>
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face/${poster_path}`}
                    alt={title}
                  />
                  <p className={styles.movie__title}>{title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
