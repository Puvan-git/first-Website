import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <a className={styles.title}>Portfolio</a>
    <div className={styles.menu}>
      <ul className={styles.menuitems}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
