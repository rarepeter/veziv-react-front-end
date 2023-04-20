import { useEffect, useState } from "react";
import { IPortfolioEntry } from "../../../interfaces/portfolioEntry";
import { fetchWithAuth } from "../../interceptors/fetchInterceptor";
import { ALL_PROJECTS_URL } from "../../../data/urls";

const defaultError = {
  message: "",
  solution: "",
};

export default function useAllPortfolioEntries() {
  const [error, setError] = useState(defaultError);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioEntries, setPortfolioEntries] = useState<IPortfolioEntry[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchWithAuth(ALL_PROJECTS_URL);
      if (data.ok) {
        const response = await data.json();
        setPortfolioEntries(response.portfolioEntries);
      } else {
        const response = await data.json();
        setError({ message: response.message, solution: response.solution });
      }
      setIsLoading(false);
    })();
  }, []);

  return [error, isLoading, portfolioEntries] as const;
}
