import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles["project-description"]}>This project was created to be reviewed by Veziv.</div>
      </div>
    </footer>
  );
}
