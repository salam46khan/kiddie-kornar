import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div>
            <p>head</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;