import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../../data/urls";

interface IError {
  message: string;
  solution: string;
}

const defaultError = {
  message: "",
  solution: "",
};

export default function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [error, setError] = useState<IError>(defaultError);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("authToken");
      const response = await fetch(`${SERVER_URL}/auth/verify-token/${accessToken}`);
      if (response.ok) {
        setIsAuth(true);
      } else {
        const errorData = await response.json();
        setError({ message: errorData.message, solution: errorData.solution });
      }
      setIsLoading(false);
    })();
  }, []);

  return [error, isLoading, isAuth] as const;
}
