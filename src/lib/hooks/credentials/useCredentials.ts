import { useState } from "react";
import { AuthCredentials } from "../../../interfaces";

export default function useCredentials(
  defaultCredentials: AuthCredentials | null = { email: "", password: "" }
) {
  const [credentials, setCredentials] = useState<AuthCredentials>(
    defaultCredentials ? defaultCredentials : { email: "", password: "" }
  );

  const handleChangeEmail = (email: AuthCredentials["email"]) => {
    setCredentials((prev) => ({ ...prev, email }));
  };
  const handleChangePassword = (password: AuthCredentials["password"]) => {
    setCredentials((prev) => ({ ...prev, password }));
  };
  return [credentials, handleChangeEmail, handleChangePassword] as const;
}
