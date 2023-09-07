import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const pages = [
  {
    path: "/",
    element: <Login />,
    title: "LOGIN",
  },
  {
    path: "/register",
    element: <Register />,
    title: "Register",
  },
  {
    path: "/profil",
    element: <Home />,
    title: "HOME",
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
