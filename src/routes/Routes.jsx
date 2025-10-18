import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);
export default router;
