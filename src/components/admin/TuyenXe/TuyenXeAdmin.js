import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useTuyenXe from "../../hooks/useTuyenXe";
import TuyenXeAdminAdd from "./TuyenXeAdminAdd";

function TuyenXeAdmin(){

    const {tuyenXe, updateTuyenXe, addTuyenXe, deleteTuyenXe} = useTuyenXe();
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [id, setId] = useState();

/*
    const DeleteBenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteBenXe(id)
        }
    }*/


    const handleShowFormAdd = () => setShowFormAdd(true);

    const UpdateTrangThaiTuyenXe =(id, item)=>{
        if(window.confirm("Thay đổi trạng thái")===true){
            let tenBenXeDi = item.benXeDi.tenBenXe;
            let tenBenXeDen = item.benXeDen.tenBenXe;
            let ngayDi = item.ngayDi;
            let gioDi = item.gioDi;
            let thoiGianHanhTrinh = item.thoiGianHanhTrinh;
            let giaVe = item.giaVe;
            let bienSoXe = item.xe.bienSoXe;
            let trangThai="ACTIVE";
            let switchSelect = document.getElementById(`switch${item.id}`).checked;
            if(switchSelect === true){
                trangThai = "ACTIVE";
                document.getElementById(`switch${item.id}`).checked=false
            }else{
                trangThai = "INACTIVE";
                document.getElementById(`switch${item.id}`).checked=true
            }
            let data = {
                ngayDi, gioDi, thoiGianHanhTrinh, giaVe, trangThai, bienSoXe, tenBenXeDi, tenBenXeDen
            }
            updateTuyenXe(id, data);
        }
        else{
            let switchSelect = document.getElementById(`switch${item.id}`).checked;
            if(switchSelect === true){
                document.getElementById(`switch${item.id}`).checked = false;
            }else{
                document.getElementById(`switch${item.id}`).checked = true;
            }
        }
    }

    return(
        <>
        <div className="container-dashboard">

        <TuyenXeAdminAdd showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} add={addTuyenXe}></TuyenXeAdminAdd>

        <div style={{width: "100%", height: "30px", display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{marginRight: "10px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên bến xe đi..."></input>
            <BsPlusSquareFill onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{marginTop:"30px", height:"500px", overflowY:"scroll"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Tên nhà xe đi</th>
            <th>Tên nhà xe đến</th>
            <th>Biển số xe</th>
            <th>Ngày đi</th>
            <th>Giờ đi</th>
            <th>Thời gian hành trình</th>
            <th>Giá vé</th>
            <th>Trạng thái</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {tuyenXe.filter(item=>item.benXeDi.tenBenXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((item,index)=>{
                    return(
                        <>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.benXeDi.tenBenXe}</td>
                        <td>{item.benXeDen.tenBenXe}</td>
                        <td>{item.xe.bienSoXe}</td>
                        <td>{item.ngayDi}</td>
                        <td>{item.gioDi}</td>
                        <td>{item.thoiGianHanhTrinh}</td>
                        <td>{item.giaVe}</td>
                        {
                            (()=>{
                                if(item.trangThai==="ACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>UpdateTrangThaiTuyenXe(item.id, item)}
                                                key={"ACTIVE"+index} 
                                                type="switch"
                                                defaultChecked
                                                id={`switch${item.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }else if(item.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>UpdateTrangThaiTuyenXe(item.id, item)}
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

export default TuyenXeAdmin;