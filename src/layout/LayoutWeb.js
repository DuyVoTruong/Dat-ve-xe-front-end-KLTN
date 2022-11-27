import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function LayoutWeb(){
    return(
        <>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
        </>
    )
}

export default LayoutWeb;