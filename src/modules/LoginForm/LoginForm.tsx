import styles from "./LoginForm.module.css";
import useCredentials from "../../lib/hooks/credentials/useCredentials";
import TextInput from "../../components/UI/TextInput/TextInput";
import { FormEvent, useContext, useEffect } from "react";
import AuthService from "../../services/AuthService";
import { AuthCredentials } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { AuthStoreContext } from "../../main";
import CtaButton from "../../components/UI/CtaButton/CtaButton";

interface ILoginForm {
  initialCredentials: AuthCredentials;
}

export default function LoginForm({ initialCredentials }: ILoginForm) {
  const globalStore = useContext(AuthStoreContext);
  const [credentials, handleChangeEmail, handleChangePassword] = useCredentials(initialCredentials);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const data = await AuthService.login(credentials);
    localStorage.setItem("authToken", data.access_token);
    globalStore.setIsAuth(true);
  };

  return (
    <form className={styles["login-form"]} onSubmit={(e) => handleLogin(e)}>
      <TextInput
        labelText="Email:"
        name="email"
        onValueChange={handleChangeEmail}
        value={credentials.email}
      />
      <TextInput
        labelText="Password:"
        name="password"
        onValueChange={handleChangePassword}
        value={credentials.password}
      />
      <CtaButton type="submit">Login</CtaButton>
    </form>
  );
}
