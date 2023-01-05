import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useTaiKhoan from "../../hooks/useTaiKhoan";
import useUser from "../../hooks/useUser";
import TaiKhoanAddAdmin from "./TaiKhoanAddAdmin";
import TaiKhoanUpdateAdmin from "./TaiKhoanUpdateAdmin";
import ThayDoiMatKhau from "./ThayDoiMatKhauForm";

function TaiKhoanUser(){

    const {user, deleteUser, addUser, updateUser, signUp, updateTaiKhoan} = useUser();
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
            let data = {
                 id,role,username,password,hoTen,cmnd,sdt,email,diaChi,trangThaiHoatDong
            }
            updateUser(id, data);
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
        <TaiKhoanAddAdmin showForm={showFormAdd} setShowForm={setShowFormAdd} add={signUp} role={"USER"}></TaiKhoanAddAdmin>
        <TaiKhoanUpdateAdmin key={tk.id} showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateUser} role={"USER"} tk={tk}></TaiKhoanUpdateAdmin>
        {
            (()=>{
                if(tk.taiKhoan){
                    return(
                        <ThayDoiMatKhau key={tk.id+"matkhau"} showForm={showFormUpdatePassword} setShowForm={setShowFormUpdatePassword} update={updateTaiKhoan} role={"ADMIN"} tk={tk}></ThayDoiMatKhau>
                    )
                }
            })()
        }
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý tài khoản user</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={()=>setShowFormAdd(true)} className="add-btn"></BsPlusSquareFill>
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
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {user.map((item,index)=>{
                stt=stt+1;
                    return(
                        <>
                        <tr>
                        <td>{stt}</td>
                        <td>{item.taiKhoan.username}</td>
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
                        <td>
                            <BiEdit className="edit-btn" onClick={()=>HandleShowUpdateForm(item)}></BiEdit>
                            <ImBin className="delete-btn" onClick={(0)}></ImBin>
                            <BiEditAlt onClick={()=>HandleShowUpdatePasswordForm(item)} className="edit-password-btn">Thay đổi mật khẩu</BiEditAlt>
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

export default TaiKhoanUser;