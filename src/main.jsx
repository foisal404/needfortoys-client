import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";
import Authprovider from "./provider/Authprovider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="2xl:container mx-auto">
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
      <ToastContainer />
    </React.StrictMode>
  </div>
);
