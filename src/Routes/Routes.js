import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import OtherMain from "../layout/OtherMain";
import AllCourse from "../Pages/AllCourse";
import Blog from "../Pages/Blog";
import Checkout from "../Pages/Checkout";
import Courses from "../Pages/Courses";
import Details from "../Pages/Details";
import ErrorPage from "../Pages/ErrorPage";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import LeftSide from "../Pages/Shared/LeftSide";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <OtherMain></OtherMain>,
        children: [
          {
            path: '/courses',
            loader: () => fetch('https://programming-learning-platform-server-delta.vercel.app/details'),
            element: <Courses></Courses>
          },
          {
            path: '/courses/course/:id',
            loader: ({ params }) => fetch(`https://programming-learning-platform-server-delta.vercel.app/details/${params.id}`),
            element: <AllCourse></AllCourse>
          },

          {
            path: '/courses/details/:id',
            loader: ({ params }) => fetch(`https://programming-learning-platform-server-delta.vercel.app/all-details/${params.id}`),
            element: <Details></Details>
          },
          {
            path: '/courses/checkout/:id',
            loader: ({ params }) => fetch(`https://programming-learning-platform-server-delta.vercel.app/all-details/${params.id}`),
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
          }
        ]
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