import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { AuthStoreContext } from "../../main";
import AuthService from "../../services/AuthService";
import CtaButton from "../../components/UI/CtaButton/CtaButton";

const Footer = () => {
  const globalStore = useContext(AuthStoreContext);

  const handleSignOut = () => {
    AuthService.logOut();
    globalStore.setIsAuth(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {globalStore.isAuth ? (
          <CtaButton onClick={handleSignOut} brightTheme={true}>
            Sign out
          </CtaButton>
        ) : (
          <div className={styles["login-page-link"]}>
            <Link to={"/login?email=peter@gmail.com&password=123"}>Proceed to login page.</Link>
          </div>
        )}
        <div className={styles["project-description"]}>
          This project was created to be reviewed by Veziv.
        </div>
      </div>
    </footer>
  );
};

export default observer(Footer);
