import React from "react";
import ProjectContainer from "./ManagementProjectContainer/ManagementProjectContainer";
import { IPortfolioEntry } from "../../interfaces/portfolioEntry";
import styles from "./ManagementProjectsList.module.css";

interface IManagementProjectsListProps {
  portfolioEntries: IPortfolioEntry[];
}

export default function ManagementProjectsList({ portfolioEntries }: IManagementProjectsListProps) {
  return (
    <div className={styles["project-containers-wrapper"]}>
      {portfolioEntries?.map((portfolioEntry: IPortfolioEntry) => {
        return <ProjectContainer key={portfolioEntry.id} portfolioEntry={portfolioEntry} />;
      })}
    </div>
  );
}
