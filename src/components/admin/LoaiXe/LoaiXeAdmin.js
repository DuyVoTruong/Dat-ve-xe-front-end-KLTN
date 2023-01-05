import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useLoaiXe from "../../hooks/useLoaiXe";
import LoaiXeAddForm from "./LoaiXeAddForm";
import LoaiXeUpdateForm from "./LoaiXeUpdateForm";

function LoaiXeAdmin(){

    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [lx, setLx] = useState("");
    const {loaiXe,addLoaiXe, updateLoaiXe, deleteLoaiXe} = useLoaiXe();


    const handleShowFormAdd = () => setShowFormAdd(true);

    const DeleteLoaiXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteLoaiXe(id)
        }
    }

    const handleShowFormUpdate =(lx)=>{
        setLx(lx)
        setShowFormUpdate(true);
    }

    return(
        <>
        <LoaiXeAddForm showForm={showFormAdd} setShowForm={setShowFormAdd} add={addLoaiXe}></LoaiXeAddForm>
        {
            (()=>{
                if(lx){
                    return(
                        <LoaiXeUpdateForm key={lx.id} showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateLoaiXe} id={lx.id} lx={lx}></LoaiXeUpdateForm>
                    )
                }
            })()
        }

        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý loại xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding: "20px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Tên loại xe</th>
            <th>Sức chứa</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {loaiXe.filter(item=>item.tenLoaiXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((lx,index)=>{
                return(
                    <>
                    <tr>
                    <td>{lx.id}</td>
                    <td>{lx.tenLoaiXe}</td>
                    <td>{lx.sucChua}</td>
                    <td><BiEdit className="edit-btn" onClick={()=>handleShowFormUpdate(lx)}></BiEdit><ImBin className="delete-btn" onClick={()=>DeleteLoaiXe(lx.id)}></ImBin></td>
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

export default LoaiXeAdmin;