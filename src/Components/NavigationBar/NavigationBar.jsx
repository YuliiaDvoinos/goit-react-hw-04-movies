import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  header: {
    background: "lavender",
    padding: 30,
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    "&:not(:last-child)": {
      marginRight: 10,
    },
  },
});
const NavigationBar = () => {
  const styles = useStyles();
  return (
    <>
      <header className={styles.header}>
        <nav>
          <NavLink
            exact
            className={styles.link}
            activeStyle={{
              color: "blueviolet",
              borderBottom: "3px solid black",
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={styles.link}
            activeStyle={{
              color: "blueviolet",
              borderBottom: "3px solid black",
            }}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
