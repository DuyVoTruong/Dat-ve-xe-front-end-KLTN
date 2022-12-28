import React from "react";
import { useState } from "react";
import { FaBars }from "react-icons/fa";
import { SidebarNhaXeData } from "./SidebarNhaXeData";
import "../../App.css"
import SubMenuNhaXe from "./SubMenuNhaXe";

const SidebarNhaXe = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <div style={{display: "flex"}}>
            <div className="sidebar" style={{width: isOpen ? "250px" : "60px"}}>
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px", marginTop: isOpen ? "0px" : "10px"}} className="bars">
                        <FaBars onClick={toggle}></FaBars>
                    </div>
                </div>
                {
                    SidebarNhaXeData.map((item, index)=>{
                        return <SubMenuNhaXe item={item} isOpen={isOpen} key={index}/>
                    })
                }
            </div>
            <main-dashboard>{children}</main-dashboard>
        </div>
    );
};

export default SidebarNhaXe;