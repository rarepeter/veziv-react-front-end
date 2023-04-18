import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";
import ProjectsManagementPage from "./pages/management";
import ProjectsPage from "./pages/projects";
import ProjectAddPage from "./pages/projects/add";
import LoginPage from "./pages/login";

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
    path: "/projects-management/editing/:projectId",
    element: <ProjectsManagementPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectsPage />,
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
