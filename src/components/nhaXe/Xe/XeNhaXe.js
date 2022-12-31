import { useContext, useState } from "react";
import { AccordionButton, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { MyContext } from "../../../App";
import XeAdminAdd from "../../admin/Xe/XeAdminAdd";
import useXe from "../../hooks/useXe";

const XeNhaXe =()=>{
    const account = useContext(MyContext).account;
    const {xe, deleteXe, addXe, updateXe} = useXe();
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [id, setId] = useState();

    const DeleteBenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteXe(id)
        }
    }

    const handleShowFormAdd = () => setShowFormAdd(true);

    const handleShowFormUpdate =(id)=>{
        setId(id);
        setShowFormUpdate(true);
    }

    return(
        <>
        <XeAdminAdd showForm={showFormAdd} setShowForm={setShowFormAdd} add={addXe} role={"NHAXE"}></XeAdminAdd>

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
            <th>Tên nhà xe</th>
            <th>Biển số xe</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {xe.filter(item=>item.bienSoXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((x,index)=>{
                {
                    if(x.nhaXe){
                        if(x.nhaXe.taiKhoan){
                            if(x.nhaXe.taiKhoan.username===account.username){
                                return(
                                    <>
                                    <tr>
                                    <td>{x.id}</td>
                                    <td>{x.loaiXe.tenLoaiXe}</td>
                                    <td>{x.nhaXe.tenNhaXe}</td>
                                    <td>{x.bienSoXe}</td>
                                    <td><BiEdit className="edit-btn" onClick={0}></BiEdit><ImBin className="delete-btn" onClick={(0)}></ImBin></td>
                                    </tr>
                                    </>
                                )
                            }
                        }
                    }
                }
            })}
        </tbody>
        </Table>
        </div>
        </div>
        </>
    );
}

export default XeNhaXe;