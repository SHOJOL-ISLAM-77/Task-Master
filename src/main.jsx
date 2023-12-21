import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import ErrorPage from "./ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/singUp",
        element: <SingUp/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>
);