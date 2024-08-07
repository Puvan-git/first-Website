import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar />
    </div>

    // adding of all other components such 
    // as sliding bar, popups etc
  );
};

export default Layout;
