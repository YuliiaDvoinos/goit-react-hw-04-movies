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
          {cast.map((oneCast) => (
            <li key={oneCast.id}>{oneCast.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
export default Cast;
