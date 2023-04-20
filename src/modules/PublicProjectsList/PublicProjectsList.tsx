import React from "react";
import usePublicPortfolioEntries from "../../lib/hooks/portfolio-entries/usePublicPortfolioEntries";
import styles from "./PublicProjectsList.module.css";
import { IPortfolioEntry } from "../../interfaces/portfolioEntry";
import ProjectContainer from "./ProjectContainer/ProjectContainer";

export default function PublicProjectsList() {
  const [error, isLoading, publicPortfolioEntries] = usePublicPortfolioEntries();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className={styles["project-containers-wrapper"]}>
      {publicPortfolioEntries?.map((portfolioEntry: IPortfolioEntry) => {
        return <ProjectContainer key={portfolioEntry.id} portfolioEntry={portfolioEntry} />;
      })}
    </div>
  );
}
