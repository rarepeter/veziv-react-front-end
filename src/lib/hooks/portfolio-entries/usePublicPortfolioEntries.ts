import { useEffect, useReducer, useState } from "react";
import { ACTION_TYPES, INITIAL_STATE, projectsReducer } from "./publicPortfolioReducer";
import { PUBLIC_PROJECTS_URL } from "../../../data/urls";
import { IPortfolioEntry } from "../../../interfaces";

interface IError {
  message: string;
  solution: string;
}

const defaultError = {
  message: "",
  solution: "",
};

export default function usePublicPortfolioEntries() {
  const [error, setError] = useState<IError>(defaultError);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [portfolioEntries, setPortfolioEntries] = useState<IPortfolioEntry[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(PUBLIC_PROJECTS_URL);
      if (response.ok) {
        const data = await response.json();
        setPortfolioEntries(data.portfolioEntries);
      } else {
        const errorData = await response.json();
        setError({ message: errorData.message, solution: errorData.solution });
      }
      setIsLoading(false);
    })();
  }, []);

  return [error, isLoading, portfolioEntries] as const;
}
