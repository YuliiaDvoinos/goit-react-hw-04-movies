import styles from "./Review.module.css";
import axios from "axios";
import { Component } from "react";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "944ce772996bcaf96d197d63e9d3b577";

class Review extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    this.setState({ reviews: data.results });
  }
  render() {
    const { reviews } = this.state;
    const condition = reviews.length === 0;
    const message = <h3>There is no any reviews</h3>;
    const result = reviews.map(({ id, author, content }) => (
      <li key={id} className={styles.item}>
        <h3 className={styles.nickname}>{author}</h3>
        <p className={styles.comment}>{content}</p>
      </li>
    ));

    return (
      <>
        <ul>{condition ? message : result}</ul>
      </>
    );
  }
}
export default Review;
