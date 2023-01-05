import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import useNhaXe from "../../hooks/useNhaXe";
import useTaiKhoan from "../../hooks/useTaiKhoan";
import TaiKhoanAddAdmin from "../TaiKhoan/TaiKhoanAddAdmin";
import TaiKhoanUpdateAdmin from "../TaiKhoan/TaiKhoanUpdateAdmin";

function NhaXeAdmin(){

    const {nhaXe,updateNhaXe,addNhaXe,deleteNhaXe,signUp,updateTaiKhoan} = useNhaXe();
    const [tk,setTk] = useState("");
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
/*
    const DeleteBenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteBenXe(id)
        }
    }*/
    const UpdateTaiKhoan =(id, tk)=>{
        if(window.confirm("Thay đổi trạng thái")===true){
            let role = "NHAXE";
            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let tenNhaXe = tk.tenNhaXe;
            let sdt = tk.sdt;
            let moTaNgan = tk.moTaNgan;
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
                id,role,username,password,tenNhaXe,sdt,moTaNgan,diaChi,trangThaiHoatDong
            }
            updateNhaXe(id, data)
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

    return(
        <>
        <TaiKhoanAddAdmin showForm={showFormAdd} setShowForm={setShowFormAdd} add={signUp} role={"NHAXE"}></TaiKhoanAddAdmin>
        <TaiKhoanUpdateAdmin key={tk.id} showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateNhaXe} role={"NHAXE"} tk={tk}></TaiKhoanUpdateAdmin>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý nhà xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={()=>setShowFormAdd(true)} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding: "20px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Role</th>
            <th>Tên nhà xe</th>
            <th>Số điện thoại</th>
            <th>Mô tả ngắn</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {nhaXe.filter(item => item.tenNhaXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((tk,index)=>{
                    return(
                        <>
                        <tr>
                        <td>{tk.id}</td>
                        <td>{tk.taiKhoan.role}</td>
                        <td>{tk.tenNhaXe}</td>
                        <td>{tk.sdt}</td>
                        <td>{tk.moTaNgan}</td>
                        <td>{tk.diaChi}</td>
                        {
                            (()=>{
                                if(tk.taiKhoan.trangThaiHoatDong==="ACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                key={"ACTIVE"+index}
                                                onChange={()=>UpdateTaiKhoan(tk.id, tk)}
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
                                                key={"INACTIVE"+index}
                                                onChange={()=>UpdateTaiKhoan(tk.id, tk)}
                                                type="switch"
                                                id={`switch${tk.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }
                            })()
                        }
                        <td width={"175px"}><img style={{height: "100px", width: "150px"}} src={tk.image}/></td>
                        <td><BiEdit className="edit-btn" onClick={()=>HandleShowUpdateForm(tk)}></BiEdit><ImBin className="delete-btn" onClick={(0)}></ImBin></td>
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

export default NhaXeAdmin;