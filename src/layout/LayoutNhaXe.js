import { Outlet } from "react-router-dom";
import SidebarNhaXe from "./SidebarNhaXe";

function LayoutNhaXe(){
    return(
        <>
        <SidebarNhaXe></SidebarNhaXe>
        <Outlet/>
        </>
    )
}

export default LayoutNhaXe;