import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Dynamc Secton */}
            <div className="">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayouts;