import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import useNhaXe from "../../hooks/useNhaXe";
import useTaiKhoan from "../../hooks/useTaiKhoan";

function NhaXeAdmin(){

    const {nhaXe,updateNhaXe} = useNhaXe();
    const {updateTaiKhoan} = useTaiKhoan();

    const [search, setSearch] = useState("");
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
            let id = tk.taiKhoan.id;
            let data = {
                id,role,username,password,tenNhaXe,sdt,moTaNgan,diaChi,trangThaiHoatDong
            }
            updateTaiKhoan(tk.taiKhoan.id, data)           
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
                        <td>{tk.taiKhoan.username}</td>
                        <td>{tk.taiKhoan.password}</td>
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

export default NhaXeAdmin;