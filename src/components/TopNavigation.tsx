import React, { useEffect, useState } from "react";
import styles from "../styles/TopNavigation.module.scss";
import Button from "./Button";

export default function TopNavigation() {
  const [position, setPosition] = useState<number | undefined>(0);

  let handleScroll = () => {
    setPosition(document.querySelector("body")?.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={position !== 0 ? { backgroundColor: "#0a11166e" } : undefined}
    >
      <div className={styles.wrapper}>
        <div className={styles.favicon}>
          <img src="/favicon.ico" alt="" />
        </div>
        <div className={styles.navList}>
          <ul className={styles.leftNav}>
            <li className={styles.navItem}>
              <a href="movies">Movies</a>
            </li>
          </ul>
          <div className={styles.rightNav}>
            <input type="text" />
            <Button type="primary">Sign in</Button>
            <Button type="border">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
