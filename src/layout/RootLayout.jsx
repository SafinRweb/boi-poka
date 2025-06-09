import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="p-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;
