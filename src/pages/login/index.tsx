import { useLocation } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import LoginForm from "../../modules/LoginForm/LoginForm";
import styles from "../../styles/pages/login/LoginPage.module.css";
import { AuthCredentials } from "../../interfaces";

export default function LoginPage() {
  const query = new URLSearchParams(useLocation().search);
  const initialCredentials = {
    email: query.get("email") ? query.get("email") : "",
    password: query.get("password") ? query.get("password") : "",
  } as AuthCredentials;

  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <LoginForm initialCredentials={initialCredentials} />
      </div>
    </PageLayout>
  );
}
