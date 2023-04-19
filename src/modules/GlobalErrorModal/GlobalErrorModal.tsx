import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ErrorModalStoreContext } from "../../main";
import styles from "./GlobalErrorModal.module.css";
import CtaButton from "../../components/UI/CtaButton/CtaButton";

const GlobalErrorModal = () => {
  const errorModalContext = useContext(ErrorModalStoreContext);

  if (!errorModalContext.isVisible) {
    return null;
  }

  return (
    <div className={styles["screen-cover"]}>
      <div className={styles["modal-container"]}>
        <div className={styles["text-group"]}>
          <div className={styles["modal-text"]}>{errorModalContext.text}</div>
          <div className={styles["modal-solution"]}>{errorModalContext.solution}</div>
        </div>
        <CtaButton onClick={() => errorModalContext.setIsVisible(false)}>Close</CtaButton>
      </div>
    </div>
  );
};

export default observer(GlobalErrorModal);
