import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <PrivateRoute><Services /></PrivateRoute> },
      { path: "profile", element: <PrivateRoute><Profile /></PrivateRoute> },

      { path: "auth/login", element: <Login /> },
      { path: "auth/register", element: <Register /> },
    ],
  },

  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
