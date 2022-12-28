import { Outlet } from "react-router-dom";
import HeaderDashboard from "./HeaderDashboard";
import SidebarAdmin from "./sidebarAdmin/SidebarAdmin";

function LayoutAdmin(){
    return(
        <>
        <SidebarAdmin>
        <HeaderDashboard key={1}></HeaderDashboard>
            <Outlet key={2}/>
        </SidebarAdmin>
        </>
    )
}

export default LayoutAdmin;