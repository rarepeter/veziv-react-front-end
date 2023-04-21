import { useContext } from "react";
import usePublicPortfolioEntries from "../../lib/hooks/portfolio-entries/usePublicPortfolioEntries";
import styles from "./PublicProjectsList.module.css";
import { IPortfolioEntry } from "../../interfaces/portfolioEntry";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
import PageLoadingState from "../PageLoadingState/PageLoadingState";
import { ErrorModalStoreContext } from "../../main";

export default function PublicProjectsList() {
  const [error, isLoading, publicPortfolioEntries] = usePublicPortfolioEntries();
  const globalErrorModal = useContext(ErrorModalStoreContext);

  if (error.message !== "") {
    globalErrorModal.setModal(error.message, error.solution);
    return <div>{error.message}</div>;
  }

  if (isLoading) return <PageLoadingState />;

  return (
    <div className={styles["project-containers-wrapper"]}>
      {publicPortfolioEntries?.length === 0 ? (
        <div>There are no projects to display!</div>
      ) : (
        publicPortfolioEntries?.map((portfolioEntry: IPortfolioEntry) => {
          return <ProjectContainer key={portfolioEntry.id} portfolioEntry={portfolioEntry} />;
        })
      )}
    </div>
  );
}
