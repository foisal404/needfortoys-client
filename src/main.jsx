import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";
import Authprovider from "./provider/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="2xl:container mx-auto">
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </React.StrictMode>
  </div>
);
