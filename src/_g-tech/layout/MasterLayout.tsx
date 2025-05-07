import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "../../app/modules/ui/ScrollToTop";

const MasterLayout = () => {
    return <>
        <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

export { MasterLayout };