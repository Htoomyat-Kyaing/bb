import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.jsx";
import ForgotPassword from "./routes/ForgotPassword.jsx";
import ResetPassword from "./routes/ResetPassword.jsx";
import VerifyOTP from "./routes/VerifyOTP.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import CarPassTicket from "./routes/CarPassTicket.jsx";
import Report from "./routes/Report.jsx";
import SetupAndConfig from "./routes/SetupAndConfig.jsx";
import Print from "./routes/Print.jsx";
import CarTypes from "./routes/CarTypes.jsx";
import AllUsers from "./routes/AllUsers.jsx";
import AddNewUser from "./routes/AddNewUser.jsx";
import RolePermission from "./routes/RolePermission.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/carpassticket",
        element: <CarPassTicket />,
      },
      {
        path: "/view-report",
        element: <Report />,
      },
      {
        path: "/setupandconfig",
        element: <SetupAndConfig />,
      },
      {
        path: "/car-types",
        element: <CarTypes />,
      },
      {
        path: "/allusers",
        element: <AllUsers />,
      },
      {
        path: "/rolepermission",
        element: <RolePermission />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verifyotp",
    element: <VerifyOTP />,
  },
  {
    path: "/print",
    element: <Print />,
  },
  {
    path: "/addnewuser",
    element: <AddNewUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
