import { useContext } from "react";
import PageLayout from "../layouts/PageLayout";
import PublicProjectsList from "../modules/PublicProjectsList/PublicProjectsList";

export default function IndexPage() {
  return (
    <PageLayout>
      <PublicProjectsList />
    </PageLayout>
  );
}