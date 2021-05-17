import Loader from "react-loader-spinner";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  loader__container: {
    width: 100,
    margin: "0 auto",
    marginTop: 20,
  },
});
const Spinner = () => {
  const styles = useStyles();
  return (
    <div className={styles.loader__container}>
      <Loader type="TailSpin" color="lavender" height={100} width={100} />
    </div>
  );
};

export default Spinner;
