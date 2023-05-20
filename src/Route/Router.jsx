import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/AllToys/ToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
          path:"/toys",
          element:<AllToys></AllToys>,
          loader:()=> fetch('http://localhost:5000/toys')
        },
        {
          path:"/toy/:id",
          element:<ToyDetails></ToyDetails>,
          loader:({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);

export default router;