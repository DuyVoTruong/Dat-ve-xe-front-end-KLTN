import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useNhaXe from "../../hooks/useNhaXe";
import useSignUp from "../../hooks/useSignUp";
import useTaiKhoan from "../../hooks/useTaiKhoan";
import TaiKhoanAddAdmin from "./TaiKhoanAddAdmin";
import TaiKhoanUpdateAdmin from "./TaiKhoanUpdateAdmin";
import ThayDoiMatKhau from "./ThayDoiMatKhauForm";

function TaiKhoanAdmin(){

    const {admin, addAdmin, updateAdmin, deleteAdmin, signUp, updateTaiKhoan} = useAdmin();
    const [tk,setTk] = useState("");
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [showFormUpdatePassword, setShowFormUpdatePassword] = useState(false);
    let stt = 0;

/*
    const DeleteBenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteBenXe(id)
        }
    }*/

    const UpdateTrangThai =(id, tk)=>{
        if(window.confirm("Thay đổi trạng thái")===true){
            let role = "ADMIN";
            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let name = tk.name;
            let cmnd = tk.cmnd;
            let sdt = tk.sdt;
            let email = tk.email;
            let trangThaiHoatDong;
            let switchSelect = document.getElementById(`switch${tk.id}`).checked;
            if(switchSelect === true){
                trangThaiHoatDong = "ACTIVE";
                document.getElementById(`switch${tk.id}`).checked=false
            }else{
                trangThaiHoatDong = "INACTIVE";
                document.getElementById(`switch${tk.id}`).checked=true
            }
            
            let data = {
                id,role,username,password,name,cmnd,sdt,email,trangThaiHoatDong
            }
            updateAdmin(id, data)           
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

    const HandleShowUpdateForm =(taiKhoan)=>{
        setTk(taiKhoan)
        setShowFormUpdate(true)
    }

    const HandleShowUpdatePasswordForm =(taiKhoan)=>{
        setTk(taiKhoan)
        setShowFormUpdatePassword(true)
    }

    return(
        <>
        <TaiKhoanAddAdmin showForm={showFormAdd} setShowForm={setShowFormAdd} add={signUp} role={"ADMIN"}></TaiKhoanAddAdmin>
        <TaiKhoanUpdateAdmin key={tk.id} showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateAdmin} role={"ADMIN"} tk={tk}></TaiKhoanUpdateAdmin>
        {
            (()=>{
                if(tk.taiKhoan){
                    return(
                        <ThayDoiMatKhau key={tk.id+"matkhau"} showForm={showFormUpdatePassword} setShowForm={setShowFormUpdatePassword} update={updateTaiKhoan} role={"ADMIN"} tk={tk}></ThayDoiMatKhau>
                    )
                }
            })()
        }
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý tài khoản admin</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill style={{marginTop:"25px"}} onClick={()=>setShowFormAdd(true)} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Role</th>
            <th>Họ tên</th>
            <th>CMND</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {admin.map((tk,index)=>{
                stt=stt+1;
                    return(
                        <>
                        <tr>
                        <td>{stt}</td>
                        <td>{tk.taiKhoan.username}</td>
                        <td>{tk.taiKhoan.role}</td>
                        <td>{tk.name}</td>
                        <td>{tk.cmnd}</td>
                        <td>{tk.sdt}</td>
                        <td>{tk.email}</td>
                        {
                            (()=>{
                                if(tk.taiKhoan.trangThaiHoatDong==="ACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>UpdateTrangThai(tk.id, tk)}
                                                key={"ACTIVE"+index} 
                                                type="switch"
                                                defaultChecked
                                                id={`switch${tk.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }else if(tk.taiKhoan.trangThaiHoatDong==="INACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>UpdateTrangThai(tk.id, tk)}
                                                key={"INACTIVE"+index}
                                                type="switch"
                                                id={`switch${tk.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }
                            })()
                        }
                        <td>
                            <BiEdit className="edit-btn" onClick={()=>HandleShowUpdateForm(tk)}></BiEdit>
                            <ImBin className="delete-btn" onClick={(0)}></ImBin>
                            <BiEditAlt onClick={()=>HandleShowUpdatePasswordForm(tk)} className="edit-password-btn">Thay đổi mật khẩu</BiEditAlt>
                        </td>
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

export default TaiKhoanAdmin;