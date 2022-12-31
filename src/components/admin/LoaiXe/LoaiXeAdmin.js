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

        <div className="container-dashboard">
        <div style={{width: "100%", height: "30px", display: "flex"}}>
        <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{marginRight: "10px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
        <BsPlusSquareFill onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{marginTop:"30px"}}>
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