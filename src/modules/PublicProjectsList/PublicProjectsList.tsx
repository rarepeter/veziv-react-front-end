import React from "react";
import usePublicPortfolioEntries from "../../lib/hooks/portfolio-entries/usePublicPortfolioEntries";

export default function PublicProjectsList() {
  const [error, isLoading, publicPortfolioEntries] = usePublicPortfolioEntries();
  return <div>PublicProjectsList</div>;
}
