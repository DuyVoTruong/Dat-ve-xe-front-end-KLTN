import { useContext, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../App";
import useTuyenXe from "../../hooks/useTuyenXe";
import DataTable, { defaultThemes } from "react-data-table-component";
import { GrSearch } from "react-icons/gr";
import { convert_vi_to_en } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

const VeXe =()=>{
    const account = useContext(MyContext).account;
    const {tuyenXe} = useTuyenXe();
    const [search, setSearch] = useState("");
    let stt =0;
    const {t}= useTranslation();

    const nav = useNavigate();
    const redirect =(tx)=>{
        nav(`/nha-xe/ve-xe/quan-ly/${tx.id}`)
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
            name: '',
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                        <Button onClick={()=>redirect(row)} style={{margin:"10px", backgroundColor:"#00FF99", color: "black"}}>{t("Quản lý vé xe")}</Button>
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
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>{t("Quản lý vé xe")}</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("Tìm kiếm theo tên bến xe đi")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t("Tìm kiếm")}</Button></div>
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

export default VeXe;


{/*        
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý vé xe</h2></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={e=>setSearch(e.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"search"} placeholder="Tìm kiếm theo tên bến xe đi..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={0} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>Bến xe đi</th>
            <th>Bến xe đến</th>
            <th>Biển số xe</th>
            <th>Ngày đi</th>
            <th>Giờ đi</th>
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
                                        <Button onClick={()=>redirect(item)} style={{margin:"10px", backgroundColor:"#00FF99", color: "black"}}>Quản lý vé xe</Button>
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