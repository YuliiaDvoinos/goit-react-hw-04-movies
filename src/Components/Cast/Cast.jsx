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
  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Cast;
