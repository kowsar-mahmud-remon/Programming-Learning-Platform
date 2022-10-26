import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Details from "../Pages/Details";
import Faq from "../Pages/Faq";
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
      {
        path: '/courses/:id',
        element: <Courses></Courses>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }

    ]
  }
]);