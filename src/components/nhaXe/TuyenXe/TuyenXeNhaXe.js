import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import { MyContext } from "../../../App";
import TuyenXeAdminAdd from "../../admin/TuyenXe/TuyenXeAdminAdd";
import TuyenXeAdminUpdate from "../../admin/TuyenXe/TuyenXeAdminUpdate";
import useTuyenXe from "../../hooks/useTuyenXe";
import DataTable, { defaultThemes } from "react-data-table-component";
import { GrSearch } from "react-icons/gr";
import { convert_vi_to_en } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

function TuyenXeNhaXe(){
    const account = useContext(MyContext).account;
    const {tuyenXe, updateTuyenXe, addTuyenXe, deleteTuyenXe} = useTuyenXe();
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [tx, setTx] = useState([]);
    let stt = 0;
    const { t } = useTranslation();
    
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

    const columns = [
        {
            name: <div>{t("Bến xe đi")}</div>,
            selector: row => row.benXeDi.tenBenXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Bến xe đến")}</div>,
            selector: row => row.benXeDen.tenBenXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Biển số xe")}</div>,
            selector: row => row.xe.bienSoXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Ngày đi")}</div>,
            selector: row => row.ngayDi,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Giờ khởi hành")}</div>,
            selector: row => row.gioDi,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Thời gian hành trình")}</div>,
            selector: row => row.thoiGianHanhTrinh,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Giá (đơn vị: đồng)")}</div>,
            selector: row => row.giaVe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Trạng thái")}</div>,
            selector: (row, index) => {
                return(
                    (()=>{
                        if(row.trangThai==="ACTIVE"){
                            return(
                                <>
                                <td>
                                    <Form.Check
                                        onChange={()=>UpdateTrangThaiTuyenXe(row.id, row)}
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
                                        onChange={()=>UpdateTrangThaiTuyenXe(row.id, row)}
                                        key={"INACTIVE"+index}
                                        type="switch"
                                        id={`switch${row.id}`}
                                    />
                                </td>
                                </>
                            );
                        }
                    })()
                );
            },
            sortable: true,
            wrap: true,
        },
        {
            name: '',
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                        <BiEdit className="edit-btn" onClick={()=>HandleShowUpdateForm(row)}></BiEdit>
                        <ImBin className="delete-btn" onClick={()=>DeleteTuyenXe(row.id)}></ImBin>
                    </div>
                    </>
                );
            },
            wrap: true
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
        <ToastContainer/>
        <TuyenXeAdminAdd showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} add={addTuyenXe} role="NHAXE" nx={""}></TuyenXeAdminAdd>
        <TuyenXeAdminUpdate key={tx.id}showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateTuyenXe} tx={tx} role="NHAXE"></TuyenXeAdminUpdate>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>{t("Quản lý tuyến xe")}</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("Tìm kiếm theo tên bến xe đi")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t('Tìm kiếm')}</Button></div>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        <DataTable
            columns={columns}
            data={tuyenXe.filter(item=>convert_vi_to_en(item.benXeDi.tenBenXe.toLowerCase()).indexOf(convert_vi_to_en(search.toLowerCase()))>=0).filter(item=>item.xe.nhaXe.taiKhoan.username===account.username)}
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

export default TuyenXeNhaXe;


{/*
        <TuyenXeAdminAdd showFormAdd={showFormAdd} setShowFormAdd={setShowFormAdd} add={addTuyenXe} role="NHAXE" nx={""}></TuyenXeAdminAdd>
        <TuyenXeAdminUpdate key={tx.id}showForm={showFormUpdate} setShowForm={setShowFormUpdate} update={updateTuyenXe} tx={tx} role="NHAXE"></TuyenXeAdminUpdate>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý tuyến xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên bến xe đi..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
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
                    if(item.xe){
                        if(item.xe.nhaXe){
                            if(item.xe.nhaXe.taiKhoan){
                                if(item.xe.nhaXe.taiKhoan.username===account.username){
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
                                }
                            }
                        }
                    }
            })}
        </tbody>
        </Table>
        </div>
        </div> */}