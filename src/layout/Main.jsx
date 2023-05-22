import { Outlet } from "react-router-dom";
import Headnav from "../shared/Headnav";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <div className="relative">
      <Headnav ></Headnav>
      <section className="min-h-[86vh]">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Main;
