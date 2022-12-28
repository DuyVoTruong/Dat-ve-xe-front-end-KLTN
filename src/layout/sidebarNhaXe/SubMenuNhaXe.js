import React, { useState } from "react";
import { Link } from "react-router-dom";
  
const SubMenuNhaXe = ({ item, isOpen }) => {
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
        <Link className="link" to={item.path} onClick={item.subNav && showSubnav} >
            <div style={{justifyContent: "space-between", alignItems: "center", display: "flex"}}>
                {item.icon}
                <span style={{display: isOpen ? "block" : "none", marginLeft: "16px"}}>{item.title}</span>
            </div>
            <div style={{display: isOpen ? "block" : "none"}}>
                {item.subNav && subnav 
                ? item.iconOpened
                : item.subNav 
                ? item.iconClosed
                :null}
            </div>
        </Link>
        {subnav && item.subNav.map((item,index)=>{
            return(
                <Link className="dropdown-link" style={{display: isOpen ? "flex" : "none"}} to={item.path} key={index}>
                    {item.icon}
                    <span style={{paddingLeft: "16px"}}>{item.title}</span>
                </Link>
            )
        })}
    </>
  );
};
  
export default SubMenuNhaXe;