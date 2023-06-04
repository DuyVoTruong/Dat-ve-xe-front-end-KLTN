import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import useLoaiXe from "../../hooks/useLoaiXe";
import LoaiXeAddForm from "./LoaiXeAddForm";
import LoaiXeUpdateForm from "./LoaiXeUpdateForm";
import DataTable, { defaultThemes } from "react-data-table-component";
import { GrSearch } from "react-icons/gr";
import { useTranslation } from "react-i18next";

function LoaiXeAdmin(){

    const [search, setSearch] = useState("");
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormUpdate, setShowFormUpdate] = useState(false);
    const [lx, setLx] = useState("");
    const {loaiXe,addLoaiXe, updateLoaiXe, deleteLoaiXe} = useLoaiXe();
    let stt=0;
    const {t} = useTranslation();


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

    const columns = [
        {
            name: <div>{t("tenloaixe")}</div>,
            selector: row => row.tenLoaiXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("succhua")}</div>,
            selector: row => row.sucChua,
            sortable: true,
            wrap: true,
        },
        {
            name: '',
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                        <BiEdit className="edit-btn" onClick={()=>handleShowFormUpdate(row)}></BiEdit>
                        <ImBin className="delete-btn" onClick={()=>DeleteLoaiXe(row.id)}></ImBin>
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

        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>{t("quanlyloaixe")}</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("timkiemtheotenloaixe")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t("timkiem")}</Button></div>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={handleShowFormAdd} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding: "20px", overflow: "auto"}}>
        <DataTable
            columns={columns}
            data={loaiXe.filter(item=>item.tenLoaiXe.toLowerCase().indexOf(search.toLowerCase())>=0)}
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

export default LoaiXeAdmin;


{/*        
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
            <th>STT</th>
            <th>Tên loại xe</th>
            <th>Sức chứa</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {loaiXe.filter(item=>item.tenLoaiXe.toLowerCase().indexOf(search.toLowerCase())>=0).map((lx,index)=>{
                stt=stt+1;
                return(
                    <>
                    <tr>
                    <td>{stt}</td>
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
        </div> */}