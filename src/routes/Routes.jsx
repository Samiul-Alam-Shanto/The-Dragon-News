import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";
import HomeLayout from "../layouts/HomeLayout";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
