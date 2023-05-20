import { Outlet } from "react-router-dom";
import Headnav from "../shared/Headnav";
import Footer from "../shared/Footer";


const Main = () => {
    return (
        <div>
            <Headnav></Headnav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;