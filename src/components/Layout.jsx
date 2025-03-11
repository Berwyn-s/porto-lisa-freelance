import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer>© 2025 Your Website</footer>
        </div>
    );
}

export default Layout;
