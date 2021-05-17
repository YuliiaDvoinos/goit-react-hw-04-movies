import styles from "./Cast.module.css";
import defaultImg from "../../images/default.jpeg";
import axios from "axios";
import { Component } from "react";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "944ce772996bcaf96d197d63e9d3b577";

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    this.setState({ cast: data.cast });
  }
  addDefaultSrc(ev) {
    ev.target.src = defaultImg;
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {cast.map(({ id, name, character, profile_path }) => {
            const image = `https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`;

            return (
              <li key={id} className={styles.item}>
                <img
                  src={image}
                  alt={name}
                  onError={this.addDefaultSrc}
                  style={{
                    width: 138,
                    height: 175,
                  }}
                />
                <p className={styles.name}>{name}</p>
                <p>
                  Character:
                  <span className={styles.character}>{character}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
