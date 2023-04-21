import { useContext } from "react";
import PageLayout from "../../layouts/PageLayout";
import useAuth from "../../lib/hooks/credentials/useAuth";
import PortfolioEntryAddForm from "../../modules/PortfolioEntryAddForm/PortfolioEntryAddForm";
import { AuthStoreContext, ErrorModalStoreContext } from "../../main";
import { observer } from "mobx-react";

const ProjectAddPage = () => {
  const [error, isLoading, isAuth] = useAuth();
  const globalErrorModal = useContext(ErrorModalStoreContext);
  const globalAuth = useContext(AuthStoreContext);

  if (!globalAuth.isAuth) {
    globalErrorModal.setModal("You are not authenticated.", "Login to access.");
  }
  if (error.message !== "") {
    globalErrorModal.setModal(error.message, error.solution);
  }
  if (isLoading)
    return (
      <PageLayout>
        <div>Helou!</div>
      </PageLayout>
    );

  if (error.message !== "" || !globalAuth.isAuth) {
    return (
      <PageLayout>
        <div>Error!</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PortfolioEntryAddForm />
    </PageLayout>
  );
};

export default observer(ProjectAddPage);
