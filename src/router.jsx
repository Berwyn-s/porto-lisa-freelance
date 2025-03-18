import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/about_us/AboutUs";
import Career from "./pages/Career";
import WebDesigner from "./pages/WebDesigner";
import FrontEndDeveloper from "./pages/FrontEndDeveloper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/career",
                element: <Career />,
            },
            {
                path: "/career/web-designer",
                element: <WebDesigner />,
            },
            {
                path: "/career/front-end-developer",
                element: <FrontEndDeveloper />,
            },
        ],
    },
]);

export default router;
