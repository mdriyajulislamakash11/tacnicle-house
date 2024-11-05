import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div>
            <Toaster />
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