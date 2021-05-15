import { Link, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.css";
import routes from "../../routes";
import defaultImg from "../../images/default.jpeg";

// import noImg from "../../no-img.jpg";
const MovieList = ({ movies, location }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImg;
  };
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path }) => {
        const image = `https://image.tmdb.org/t/p/w138_and_h175_face/${poster_path}`;
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
                />
                <p className={styles.movie__title}>{title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
    // <ul className={s.PreviewList}>
    //   {movies.map((movie) => (
    //     <li className={s.PreviewItem} key={movie.id}>
    //       <Link
    //         className={s.PreviewLink}
    //         to={{
    //           pathname: `/movies/${movie.id}`,
    //           state: {
    //             from: location,
    //           },
    //         }}
    //       >
    //         <img
    //           className={s.PreviewImg}
    //           src={
    //             movie.poster_path
    //               ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    //               : noImg
    //           }
    //           alt={movie.title}
    //         />
    //         {movie.title}
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default withRouter(MovieList);
