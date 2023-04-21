import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global/global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";
import ProjectsManagementPage from "./pages/projects-management";
import ProjectAddPage from "./pages/projects-management/add";
import LoginPage from "./pages/login";
import ProjectManagementPage from "./pages/projects-management/[projectId]";
import ProjectEditPage from "./pages/projects-management/[projectId]/edit";
import ProjectPage from "./pages/projects/[projectId]";
import { Provider } from "mobx-react";
import { authStore, errorModalStore } from "./store/index";

export const AuthStoreContext = createContext(authStore);
export const ErrorModalStoreContext = createContext(errorModalStore);

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/projects-management",
    element: <ProjectsManagementPage />,
  },
  {
    path: "/projects-management/add",
    element: <ProjectAddPage />,
  },
  {
    path: "/projects-management/:projectId",
    element: <ProjectManagementPage />,
  },
  {
    path: "/projects-management/edit/:projectId",
    element: <ProjectEditPage />,
  },
  {
    path: "/projects/edit",
    element: <ProjectEditPage />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider authStore={authStore} errorModalStore={errorModalStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
