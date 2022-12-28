import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useTaiKhoan from "../../hooks/useTaiKhoan";
import useUser from "../../hooks/useUser";

function TaiKhoanUser(){

    const {user, deleteUser, addUser, updateUser, load} = useUser();
    const {updateTaiKhoan} = useTaiKhoan();
    const [search, setSearch] = useState("");

/*
    const DeleteBenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteBenXe(id)
        }
    }*/

    const HandleUpdateTrangThai =(id, tk)=>{
        if(window.confirm("Thay đổi trạng thái")===true){
            let role = "USER";
            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let hoTen = tk.hoTen;
            let cmnd = tk.cmnd;
            let sdt = tk.sdt;
            let email = tk.email;
            let diaChi = tk.diaChi;
            let trangThaiHoatDong;
            let switchSelect = document.getElementById(`switch${tk.id}`).checked;
            if(switchSelect === true){
                trangThaiHoatDong = "ACTIVE";
                document.getElementById(`switch${tk.id}`).checked=false
            }else{
                trangThaiHoatDong = "INACTIVE";
                document.getElementById(`switch${tk.id}`).checked=true
            }
            let id=tk.taiKhoan.id;
            let data = {
                 id,role,username,password,hoTen,cmnd,sdt,email,diaChi,trangThaiHoatDong
            }
            updateTaiKhoan(tk.taiKhoan.id, data);
            //updateUser(tk.id,data);
            load();    
        }
        else{
            let switchSelect = document.getElementById(`switch${tk.id}`).checked;
            if(switchSelect === true){
                document.getElementById(`switch${tk.id}`).checked = false;
            }else{
                document.getElementById(`switch${tk.id}`).checked = true;
            }
        }
    }

    return(
        <>
        <div className="container-dashboard">
        <div style={{width: "100%", height: "30px", display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{marginRight: "10px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill onClick={0} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{marginTop:"30px", height:"500px", overflowY:"scroll"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Role</th>
            <th>Họ tên</th>
            <th>CMND</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {user.map((item,index)=>{
                    return(
                        <>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.taiKhoan.username}</td>
                        <td>{item.taiKhoan.password}</td>
                        <td>{item.taiKhoan.role}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.cmnd}</td>
                        <td>{item.sdt}</td>
                        <td>{item.email}</td>
                        <td>{item.diaChi}</td>
                        {
                            (()=>{
                                if(item.taiKhoan.trangThaiHoatDong==="ACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>HandleUpdateTrangThai(item.id, item)}
                                                key={"ACTIVE"+index} 
                                                type="switch"
                                                defaultChecked
                                                id={`switch${item.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }else if(item.taiKhoan.trangThaiHoatDong==="INACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>HandleUpdateTrangThai(item.id, item)}
                                                key={"INACTIVE"+index}
                                                type="switch"
                                                id={`switch${item.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }
                            })()
                        }
                        <td width={"175px"}><img style={{height: "100px", width: "150px"}} src={item.image}/></td>
                        <td><BiEdit className="edit-btn" onClick={0}></BiEdit><ImBin className="delete-btn" onClick={(0)}></ImBin></td>
                        </tr>
                        </>
                    )
            })}
        </tbody>
        </Table>
        </div>
        </div>
        </>
    );
}

export default TaiKhoanUser;