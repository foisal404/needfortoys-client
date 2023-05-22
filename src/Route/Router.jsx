import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/AllToys/ToyDetails";
import Blog from "../pages/Blog/Blog";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import Mytoys from "../pages/Mytoys/Mytoys";
import ToyEdit from "../pages/Mytoys/ToyEdit";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://mango-toys-server.vercel.app/categories')
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
          loader:()=> fetch('https://mango-toys-server.vercel.app/toys')
        },
        {
          path:"/toy/:id",
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params})=> fetch(`https://mango-toys-server.vercel.app/toys/${params.id}`)
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        {
          path:"/addtoy",
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>,
        },
        {
          path:"/mytoys",
          element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
        },
        {
          path:'/edit/:id',
          element:<PrivateRoute><ToyEdit></ToyEdit></PrivateRoute>,
          loader:({params})=> fetch(`https://mango-toys-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);

export default router;