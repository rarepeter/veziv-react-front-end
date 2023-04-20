import React from "react";
import { IPortfolioEntry } from "../../../interfaces/portfolioEntry";
import styles from "./ProjectContainer.module.css";
import { Link } from "react-router-dom";

interface IProjectConatinerProps {
  portfolioEntry: IPortfolioEntry;
}

export default function ProjectContainer({ portfolioEntry }: IProjectConatinerProps) {
  return (
    <>
      <Link to={`/projects/${portfolioEntry.id}`} className={styles["portfolio-entry-link"]}>
        <div className={styles["project-container"]}>
          <div className={styles["image-container"]}>
            <img
              src="https://media.licdn.com/dms/image/D4E03AQE1uoZcqX7dgQ/profile-displayphoto-shrink_800_800/0/1666548106524?e=1687392000&v=beta&t=6-QQqgBuIqa5nxKArPqrstXxXW8cr6DR85CvbwNkpQE"
              alt=""
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
            <div className={styles["client-info-container__client-link-label"]}>Client website:</div>
            <div className={styles["client-info-container__client-link"]}>
              {portfolioEntry.clientLink}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
