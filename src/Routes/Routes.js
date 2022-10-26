import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    // errorElement:,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
    ]
  }
]);