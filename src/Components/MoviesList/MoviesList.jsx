import routes from "../../routes";
import { Link, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.css";
import defaultImg from "../../images/default.jpeg";

const MovieList = ({ movies, location }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImg;
  };

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path }) => {
        const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        return (
          <li key={id} className={styles.list__item}>
            <Link
              to={{
                pathname: `${routes.MoviesPage}/${id}`,
                state: {
                  from: location,
                },
              }}
              className={styles.link}
            >
              <div className={styles.movie__wrapper}>
                <img
                  className={styles.img}
                  src={image}
                  alt={title}
                  onError={addDefaultSrc}
                  style={{
                    width: "100%",
                    objectPosition: "center",
                    objectFit: "contain",
                    margin: "0 auto",
                    minHeight: 427,
                  }}
                />
                <p className={styles.movie__title}>{title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MovieList);
