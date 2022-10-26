import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourse from "../Pages/AllCourse";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Details from "../Pages/Details";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import LeftSide from "../Pages/Shared/LeftSide";
import SignUp from "../Pages/SignUp";

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
        path: '/courses',
        element: <Courses></Courses>,
        children: [
          {
            path: '/courses/course/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
            element: <AllCourse></AllCourse>
          },
        ]
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
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }

    ]
  }
]);