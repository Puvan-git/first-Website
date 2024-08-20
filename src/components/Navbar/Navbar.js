import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setToOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/Portfolio">
        Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={isOpen ? "/assets/closeIcon.png" : "/assets/icon.png"}
          onClick={() => setToOpen(!isOpen)}
          alt="menu-button" >
        </img>
        <ul className={`${styles.menuitems} ${isOpen && styles.menuOpen}`}
          onClick={() => setToOpen(false)}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default Navbar;
