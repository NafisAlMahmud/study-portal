import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collage from "../Pages/Collage/Collage";
import Admission from "../Pages/Admission/Admission";
import MyCollage from "../Pages/MyCollage/MyCollage";

import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/SignUp";
import DetailsCollage from "../Pages/Collage/DetailsCollage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/college",
        element: <Collage></Collage>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollage></MyCollage>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/detailCollage/:id",
        element: <DetailsCollage></DetailsCollage>,
        loader: ({ params }) =>
          fetch(
            `https://study-portal-server.vercel.app/detailCollage/${params.id}`
          ),
      },
    ],
  },
]);
