import styles from "./LoginForm.module.css";
import useCredentials from "../../lib/hooks/credentials/useCredentials";
import TextInput from "../../components/UI/TextInput/TextInput";
import { FormEvent, useContext } from "react";
import { AuthCredentials } from "../../interfaces";
import { AuthStoreContext, ErrorModalStoreContext } from "../../main";
import CtaButton from "../../components/UI/CtaButton/CtaButton";

interface ILoginForm {
  initialCredentials: AuthCredentials;
}

export default function LoginForm({ initialCredentials }: ILoginForm) {
  const globalAuthStore = useContext(AuthStoreContext);
  const globalErrorModalStore = useContext(ErrorModalStoreContext);
  const [credentials, handleChangeEmail, handleChangePassword] = useCredentials(initialCredentials);

  const handleLogin = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await globalAuthStore.login(credentials);
    } catch (err: any) {
      globalErrorModalStore.setModal(err.message, err.solution);
    }
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
