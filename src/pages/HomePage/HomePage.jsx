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
        <h1>tranding today</h1>;
        <ol>
          {trandingFilms.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default HomePage;
