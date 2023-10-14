import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Nabvar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Root;