import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Puvan</h1>
            <p className={styles.description}>I'm a front-end developer, a fresh graduate ever interested in the world of web development.
                Reach out if you'd like to learn more!
            </p>
            <a href="mailto:myemail@live.com.sg" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/icon.png" alt="Hero" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
};

export default Hero;