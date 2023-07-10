import { useContext, useEffect, useState } from "react";
import { AccordionButton, Button, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { MyContext } from "../../../App";
import XeAdminAdd from "../../admin/Xe/XeAdminAdd";
import useXe from "../../hooks/useXe";
import DataTable, { defaultThemes } from "react-data-table-component";
import { convert_vi_to_en } from "../../hooks/useFunction";
import { GrSearch } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

const XeNhaXe =()=>{
    const account = useContext(MyContext).account;
    const {xe, deleteXe, addXe, updateXe} = useXe();
    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [id, setId] = useState();
    let stt = 0;
    const { t } = useTranslation();

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

    console.log(xe)

    const columns = [
        {
            name: <div>{t("Loại xe")}</div>,
            selector: row => row.loaiXe.tenLoaiXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Nhà xe")}</div>,
            selector: row => row.nhaXe.tenNhaXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Biển số xe")}</div>,
            selector: row => row.bienSoXe,
            sortable: true,
            wrap: true,
        },
        {
            name: '',
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                        <BiEdit className="edit-btn" onClick={0}></BiEdit>
                        <ImBin className="delete-btn" onClick={(0)}></ImBin>
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
        <XeAdminAdd showForm={showFormAdd} setShowForm={setShowFormAdd} add={addXe} role={"NHAXE"}></XeAdminAdd>

        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>{t("Quản lý xe")}</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("Tìm kiếm theo biển số xe")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t("Tìm kiếm")}</Button></div>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        <DataTable
            columns={columns}
            data={xe.filter(item=>convert_vi_to_en(item.bienSoXe.toLowerCase()).indexOf(convert_vi_to_en(search.toLowerCase()))>=0).filter(item=>item.nhaXe.taiKhoan.username===account.username)}
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

export default XeNhaXe;



{/*
        <XeAdminAdd showForm={showFormAdd} setShowForm={setShowFormAdd} add={addXe} role={"NHAXE"}></XeAdminAdd>

        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={(evt)=>setSearch(evt.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"text"} placeholder="Tìm kiếm theo tên..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
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
                                stt=stt+1;
                                return(
                                    <>
                                    <tr>
                                    <td>{stt}</td>
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
        </div> */}