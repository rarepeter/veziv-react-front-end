import { useContext } from "react";
import useAllPortfolioEntries from "../../lib/hooks/portfolio-entries/useAllPortfolioEntries";
import { AuthStoreContext, ErrorModalStoreContext } from "../../main";
import PageLayout from "../../layouts/PageLayout";
import { observer } from "mobx-react";
import styles from "../../styles/pages/projects-management/ProjectsManagementPage.module.css";
import { Link } from "react-router-dom";
import ManagementProjectsList from "../../modules/ManagementProjectsList/ManagementProjectsList";
import PageLoadingState from "../../modules/PageLoadingState/PageLoadingState";

const ProjectsManagementPage = () => {
  const [error, isLoading, portfolioEntries] = useAllPortfolioEntries();
  const globalErrorModal = useContext(ErrorModalStoreContext);
  const globalAuth = useContext(AuthStoreContext);

  if (!globalAuth.isAuth) {
    globalErrorModal.setModal("You are not authenticated.", "Login to access.");
  }

  if (error.message !== "" && globalAuth.isAuth) {
    globalErrorModal.setModal(error.message, error.solution);
  }

  if (isLoading)
    return (
      <PageLayout>
        <PageLoadingState />
      </PageLayout>
    );
  if (error.message !== "" || !globalAuth.isAuth)
    return (
      <PageLayout>
        <div>Error!</div>
      </PageLayout>
    );
  return (
    <PageLayout>
      <Link to={"/projects-management/add"} className={styles["add-new-project-link"]}>
        <div className={styles["add-new-project-button"]}>Add new project</div>
      </Link>
      <ManagementProjectsList portfolioEntries={portfolioEntries} />
    </PageLayout>
  );
};

export default observer(ProjectsManagementPage);
