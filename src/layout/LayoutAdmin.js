import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

function LayoutAdmin(){
    return(
        <>
        <SidebarAdmin></SidebarAdmin>
        <Outlet/>
        </>
    )
}

export default LayoutAdmin;