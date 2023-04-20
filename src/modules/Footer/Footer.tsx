import { useContext } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { AuthStoreContext } from "../../main";
import CtaButton from "../../components/UI/CtaButton/CtaButton";

const Footer = () => {
  const globalAuthStore = useContext(AuthStoreContext);

  const handleSignOut = () => {
    globalAuthStore.logout();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {globalAuthStore.isAuth ? (
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
