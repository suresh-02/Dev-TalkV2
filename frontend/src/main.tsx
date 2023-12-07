import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import Login from "./components/login.tsx";
import Register from "./components/Register.tsx";

const Layout = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
