import styles from "./PageLoadingState.module.css";

export default function PageLoadingState() {
  return (
    <section className={styles["loading-page"]}>
      <div className={styles["loading-container"]}>
        <div className={styles["loading-circle"]}>
          <div className={styles["circle"]}></div>
        </div>
        <div className={styles["loading-text"]}>Loading...</div>
      </div>
    </section>
  );
}
