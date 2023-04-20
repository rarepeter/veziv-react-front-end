import React from "react";
import { IPortfolioEntry } from "../../../interfaces/portfolioEntry";
import styles from "./ManagementProjectContainer.module.css";
import { Link } from "react-router-dom";

interface IProjectConatinerProps {
  portfolioEntry: IPortfolioEntry;
}

export default function ManagementProjectContainer({ portfolioEntry }: IProjectConatinerProps) {
  return (
    <>
      <div className={styles["management-project-container"]}>
        <Link to={`/projects/${portfolioEntry.id}`} className={styles["portfolio-entry-link"]}>
          <div className={styles["project-container"]}>
            <div className={styles["image-container"]}>
              <img
                src={portfolioEntry.coverImageUrl}
                alt={`Cover image for project with title: ${portfolioEntry.title}`}
              />
            </div>
            <div className={styles["project-info-container"]}>
              <div className={styles["project-info-container__title-label"]}>Project name:</div>
              <div className={styles["project-info-container__title"]}>{portfolioEntry.title}</div>
            </div>
            <div className={styles["client-info-container"]}>
              <div className={styles["client-info-container__client-name-label"]}>Client:</div>
              <div className={styles["client-info-container__client-name"]}>
                {portfolioEntry.clientName}
              </div>
              <div className={styles["client-info-container__client-link-label"]}>
                Client website:
              </div>
              <div className={styles["client-info-container__client-link"]}>
                {portfolioEntry.clientLink}
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/projects-management/edit/${portfolioEntry.id}`}>
          <div className={styles["management-project-container__edit-btn"]}>Edit</div>
        </Link>
      </div>
    </>
  );
}
