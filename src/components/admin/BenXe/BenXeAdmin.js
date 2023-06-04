import { useEffect, useState } from "react";
import {  Button, Form, Table } from "react-bootstrap";
import useBenXe from "../../hooks/useBenXe";
import {BsPlusSquareFill} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {ImBin} from "react-icons/im"
import BenXeAddForm from "./BenXeAddForm";
import BenXeUpdateForm from "./BenXeUpdateForm";
import DataTable, { defaultThemes } from "react-data-table-component";
import { GrSearch } from "react-icons/gr";
import { convert_vi_to_en } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";

function BenXeAdmin(){

    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [id, setId] = useState();
    let stt=0;
    const {t} = useTranslation();

    const {benXe, deleteBenXe, updateBenXe, addBenXe} = useBenXe();

    const DeleteBenXe = (id) => {
        if(window.confirm("Delete") === true){
            deleteBenXe(id)
        }
    }

    const handleShowFormAdd = () => setShowFormAdd(true);

    const updateActive =(id, item)=>{
        if(window.confirm("Thay đổi trạng thái")===true){
            let tenBenXe = item.tenBenXe;
            let diaChiChiTiet = item.diaChiChiTiet;
            let tinhThanh = item.tinhThanh;
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
                tenBenXe,diaChiChiTiet,tinhThanh,trangThai
            }
            if(!tenBenXe||!diaChiChiTiet||!tinhThanh||!trangThai){
                window.alert("Bạn phải điền đầy đủ thông tin!!!")
            }else{
                let data = {
                    tenBenXe,diaChiChiTiet,tinhThanh,trangThai
                }
                updateBenXe(id, data);
            }
        } else {
            let switchSelect = document.getElementById(`switch${item.id}`).checked;
            if(switchSelect === true){
                document.getElementById(`switch${item.id}`).checked = false;
            }else{
                document.getElementById(`switch${item.id}`).checked = true;
            }
        }

    }

    const update =(id)=>{
        setId(id);
        setShowFormUpdate(true);
    }

    const columns = [
        {
            name: <div>{t("tenbenxe")}</div>,
            selector: row => row.tenBenXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("diachi")}</div>,
            selector: row => row.diaChiChiTiet,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("trangthai")}</div>,
            selector: (row, index) => {
                return (()=>{
                    if(row.trangThai==="ACTIVE"){
                        return(
                            <>
                            <td>
                                <Form.Check
                                    onChange={()=>updateActive(row.id, row)}
                                    key={"ACTIVE"+index} 
                                    type="switch"
                                    defaultChecked
                                    id={`switch${row.id}`}
                                />
                            </td>
                            </>
                        );
                    }else if(row.trangThai==="INACTIVE"){
                        return(
                            <>
                            <td>
                                <Form.Check
                                    onChange={()=>updateActive(row.id, row)}
                                    key={"INACTIVE"+index}
                                    type="switch"
                                    id={`switch${row.id}`}
                                />
                            </td>
                            </>
                        );
                    }
                })()
            },
            sortable: true,
            wrap: true,
        },
        {
            name: <div></div>,
            selector: row => {
                return(
                    <div style={{margin: "10px"}}>
                        <BiEdit className="edit-btn" onClick={()=>update(row.id)}></BiEdit>
                        <ImBin className="delete-btn" onClick={()=>DeleteBenXe(row.id)}></ImBin>
                    </div>
                );
            },
            sortable: true,
            wrap: true,
        },
    ];

    const tableCustomStyles = {
        rows: {
          style: {
            fontSize: "16px",
            borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: defaultThemes.default.divider.default,
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: defaultThemes.default.divider.default,
          },
        },
        headCells: {
            style: {
                fontSize: "16px",
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderTopColor: defaultThemes.default.divider.default,
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: defaultThemes.default.divider.default,
            }
        },
        cells: {
    		style: {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
    		},
    	},
      }

    const [pending, setPending] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleKeyDown=(event)=>{
        if (event.key === 'Enter') {
            setSearch(event.target.value);
        }
    }

    const handleSearch=()=>{
        setSearch(document.getElementById("searchText").value);
    } 
    
    return(
        <>
        <BenXeAddForm showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} addBenXe={addBenXe}></BenXeAddForm>
        <BenXeUpdateForm key={id} showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateBenXe} id={id}></BenXeUpdateForm>

        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>{t("quanlybenxe")}</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("timkiemtheotenbenxe")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t("timkiem")}</Button></div>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding: "20px", overflow: "auto"}}>
        <DataTable
            columns={columns}
            data={benXe.filter(item=>convert_vi_to_en(item.tenBenXe.toLowerCase()).indexOf(convert_vi_to_en(search.toLowerCase()))>=0)}
            pagination
            highlightOnHover
		    pointerOnHover
            striped
            responsive
            customStyles={tableCustomStyles}
            progressPending={pending}
        />
        </div>
        </div>
        </>
    );
}

export default BenXeAdmin;


{/*
        <BenXeAddForm showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} addBenXe={addBenXe}></BenXeAddForm>
        <BenXeUpdateForm key={id} showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateBenXe} id={id}></BenXeUpdateForm>
        
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý bến xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding: "20px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>Tên bến xe</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {benXe.filter(item=>item.tenBenXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((bx,index)=>{
                stt=stt+1;
                return(
                    <>
                    <tr>
                    <td>{stt}</td>
                    <td>{bx.tenBenXe}</td>
                    <td>{bx.diaChiChiTiet}</td>
                    {
                            (()=>{
                                if(bx.trangThai==="ACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>updateActive(bx.id, bx)}
                                                key={"ACTIVE"+index} 
                                                type="switch"
                                                defaultChecked
                                                id={`switch${bx.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }else if(bx.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                        <td>
                                            <Form.Check
                                                onChange={()=>updateActive(bx.id, bx)}
                                                key={"INACTIVE"+index}
                                                type="switch"
                                                id={`switch${bx.id}`}
                                            />
                                        </td>
                                        </>
                                    );
                                }
                            })()
                        }
                    <td><BiEdit className="edit-btn" onClick={()=>update(bx.id)}></BiEdit><ImBin className="delete-btn" onClick={()=>DeleteBenXe(bx.id)}></ImBin></td>
                    </tr>
                    </>
                )
            })}
        </tbody>
        </Table>
        </div>
        </div> */}