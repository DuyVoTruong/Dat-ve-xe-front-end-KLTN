import { Outlet } from "react-router-dom";
import SidebarNhaXe from "./sidebarNhaXe/SidebarNhaXe";
import HeaderDashboard from "./HeaderDashboard"

function LayoutNhaXe(){
    return(
        <>
        <SidebarNhaXe>
        <HeaderDashboard key={1}></HeaderDashboard>
            <Outlet key={2}/>
        </SidebarNhaXe>
        </>
    )
}

export default LayoutNhaXe;