import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <Hero />

    </div>

    // adding of all other components such 
    // as sliding bar, popups etc
  );
};

export default Layout;
