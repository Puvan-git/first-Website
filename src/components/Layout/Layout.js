import React from "react";
import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects"

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <Hero />
      <Projects />
    </div>

    // adding of all other components such 
    // as sliding bar, popups etc
  );
};

export default Layout;
