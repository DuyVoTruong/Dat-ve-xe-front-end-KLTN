import { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useTuyenXe from "../../hooks/useTuyenXe";
import TuyenXeAdminAdd from "./TuyenXeAdminAdd";
import TuyenXeAdminUpdate from "./TuyenXeAdminUpdate";

function TuyenXeAdmin(){

    const {tuyenXe, updateTuyenXe, addTuyenXe, deleteTuyenXe} = useTuyenXe();
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [tx, setTx] = useState([]);
    let stt = 0;
    
    const DeleteTuyenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteTuyenXe(id)
        }
    }


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

    const HandleShowUpdateForm =(tuyenXe)=>{
        setTx(tuyenXe)
        setShowFormUpdate(true)
    }

    return(
        <>
        <TuyenXeAdminAdd showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} add={addTuyenXe}></TuyenXeAdminAdd>
        <TuyenXeAdminUpdate key={tx.id}showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateTuyenXe} tx={tx}></TuyenXeAdminUpdate>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý tuyến xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên bến xe đi..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"30px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>Tên bến xe đi</th>
            <th>Tên bến xe đến</th>
            <th>Biển số xe</th>
            <th>Ngày đi</th>
            <th>Giờ đi</th>
            <th>Thời gian hành trình</th>
            <th style={{maxWidth:"100px"}}>Giá vé (đơn vị: nghìn đồng)</th>
            <th>Trạng thái</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {tuyenXe.filter(item=>item.benXeDi.tenBenXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((item,index)=>{
                stt=stt+1;
                    return(
                        <>
                        <tr>
                        <td>{stt}</td>
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
                        <td><BiEdit className="edit-btn" onClick={()=>HandleShowUpdateForm(item)}></BiEdit><ImBin className="delete-btn" onClick={()=>DeleteTuyenXe(item.id)}></ImBin></td>
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