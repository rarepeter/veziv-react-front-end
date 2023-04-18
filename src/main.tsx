import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";
import ProjectsManagementPage from "./pages/projects-management";
import ProjectsPage from "./pages/projects";
import ProjectAddPage from "./pages/projects/add";
import LoginPage from "./pages/login";
import ProjectManagementPage from "./pages/projects-management/[projectId]";
import ProjectEditPage from "./pages/projects-management/[projectId]/edit";
import ProjectPage from "./pages/projects/[projectId]";

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
    path: "/projects-management/:projectId",
    element: <ProjectManagementPage />,
  },
  {
    path: "/projects-management/:projectId/editing",
    element: <ProjectEditPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectPage />,
  },
  {
    path: "/projects/add",
    element: <ProjectAddPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
