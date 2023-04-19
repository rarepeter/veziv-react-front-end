import React, { useEffect, useState } from "react";

export default function usePublicPortfolioEntries() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [publicPortfolioEntries, setPublicPortfolioEntries] = useState()

  useEffect(() => {
    
  }, []);

  return [error, isLoading, publicPortfolioEntries];
}
