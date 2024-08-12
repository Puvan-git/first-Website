import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  // const [isOpen, setToOpen] = useState(false);

  // const toggleMenu = () => {
  //   setToOpen(!isOpen);
  // };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title}>
        Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={getImageUrl("icon.png")}
          alt="menu-button" >
        </img>
        <ul className={styles.menuItems}>
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
}

export default Navbar;
