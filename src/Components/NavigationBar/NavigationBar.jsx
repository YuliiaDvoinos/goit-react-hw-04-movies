import { NavLink } from "react-router-dom";
import routes from "../../routes";
// import { ReactComponent as Logo } from "../../images/logo.svg";
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
        {/* <Logo className={styles.logo} /> */}

        <nav>
          <NavLink
            exact
            className={styles.link}
            activeStyle={{
              color: "blueviolet",
              borderBottom: "3px solid black",
            }}
            to={routes.HomePage}
          >
            Home
          </NavLink>
          <NavLink
            className={styles.link}
            activeStyle={{
              color: "blueviolet",
              borderBottom: "3px solid black",
            }}
            to={routes.MoviesPage}
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
