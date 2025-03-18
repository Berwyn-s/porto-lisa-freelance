import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Navbar />
            <main className="py-10 bg-white text-black">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
