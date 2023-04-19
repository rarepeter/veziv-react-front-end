import { useContext } from "react";
import PageLayout from "../layouts/PageLayout";
import { ErrorModalStoreContext } from "../main";
import CtaButton from "../components/UI/CtaButton/CtaButton";

export default function IndexPage() {
  const globalErrorModal = useContext(ErrorModalStoreContext);
  return (
    <PageLayout>
      <CtaButton onClick={() => globalErrorModal.setModal("some text", "the solution")}>
        Show modal
      </CtaButton>
    </PageLayout>
  );
}
