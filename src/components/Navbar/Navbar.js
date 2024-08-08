import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setToOpen] = useState(false);

  const toggleMenu = () => {
    setToOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <div onClick={toggleMenu} className={isOpen ? `${styles["menu-container"]} ${styles["is-menu-open"]}` : styles["menu-container"]}>
          < div className={styles.bars}>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles["other-bar"]}></div>
          </div>
        </div>
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
    </nav >
  )
};

export default Navbar;
