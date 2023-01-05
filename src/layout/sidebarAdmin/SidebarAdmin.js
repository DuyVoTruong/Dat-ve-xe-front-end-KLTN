import React from "react";
import { useState } from "react";
import { FaBars }from "react-icons/fa";
import { SidebarAdminData } from "./SidebarAdminData";
import SubMenu from "./SubMenu";
import "../../App.css"

const SidebarAdmin = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <div style={{display: "flex"}}>
            <div className="sidebar" style={{width: isOpen ? "250px" : "60px"}}>
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">WEBTOUR</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px", marginTop: isOpen ? "0px" : "10px"}} className="bars">
                        <FaBars onClick={toggle}></FaBars>
                    </div>
                </div>
                {
                    SidebarAdminData.map((item, index)=>{
                        return <SubMenu item={item} isOpen={isOpen} key={index}/>
                    })
                }
            </div>
            <main-dashboard>{children}</main-dashboard>
        </div>
    );
};

export default SidebarAdmin;