import { useContext, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { BsPlusSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useLocation, useParams } from "react-router-dom";
import { MyContext } from "../../../App";
import { convert_vi_to_en, getAllVeXeByTuyenXeId, getTuyenXeById } from "../../hooks/useFunction";
import useTuyenXe from "../../hooks/useTuyenXe";
import useVeXe from "../../hooks/useVeXe";
import DataTable, { defaultThemes } from "react-data-table-component";
import { GrSearch } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import SuccessMessage from "../../alert message/SuccessMessage";
import ErrorMessage from "../../alert message/ErrorMessage";
import swal from "sweetalert";

const QuanLyVeXe =()=>{
    const account = useContext(MyContext).account;
    const token = useContext(MyContext).token;
    const tuyenXeId = useParams().id;
    const [search, setSearch] = useState("");
    const [veXe, setVeXe] = useState([]);
    const [tuyenXe, setTuyenXe] = useState([]);
    const [load,setLoad] = useState(false);
    let stt = 0;
    const {t} = useTranslation();


    const updateVeXe =(id,data)=>{
        fetch(`http://localhost:8081/api/vexe/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res=>res.json()).then(data=>{
            if(data.status==200){
                SuccessMessage();
                setLoad(true);
            }
        })
    }

    useEffect(()=>{
        getAllVeXeByTuyenXeId(tuyenXeId, token).then(data=>{
            if(data){
                setVeXe(data);
            }
        })
        getTuyenXeById(tuyenXeId, token).then(data=>{
            if(data){
                setTuyenXe(data);
            }
        })
        setLoad(false);
    },[load])

    const xacNhan=(vx)=>{
        let soGhe = [vx.soGhe];
        let ngayNhan = vx.ngayNhan;
        let hinhThucThanhToan = vx.hinhThucThanhToan;
        let trangThai = "ACTIVE";

        let data = {
            soGhe,ngayNhan,hinhThucThanhToan,trangThai
        }

        if(!soGhe||!ngayNhan||!hinhThucThanhToan||!trangThai){
            ErrorMessage(t("Đã xảy ra lỗi!!! Vui lòng xác nhận lại!!!"))
        } else{
            let data = {
                soGhe,ngayNhan,hinhThucThanhToan,trangThai
            }

            updateVeXe(vx.id, data);
        }
    }

    const xacNhanHoanThanh=(vx)=>{
        let soGhe = [vx.soGhe];
        let ngayNhan = vx.ngayNhan;
        let hinhThucThanhToan = vx.hinhThucThanhToan;
        let trangThai = "COMPLETED";

        let data = {
            soGhe,ngayNhan,hinhThucThanhToan,trangThai
        }

        if(!soGhe||!ngayNhan||!hinhThucThanhToan||!trangThai){
            ErrorMessage(t("Đã xảy ra lỗi!!! Vui lòng xác nhận lại!!!"));
        } else{
            let data = {
                soGhe,ngayNhan,hinhThucThanhToan,trangThai
            }

            updateVeXe(vx.id, data);
        }
    }

    const deleteVeXe =(id)=>{

        swal({
            title: t("Bạn muốn hủy vé xe này?"),
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch("http://localhost:8081/api/vexe/"+id,{
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    "Content-Type": "application/json",
                },
                }).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        SuccessMessage(t("Hủy vé xe thành công!!!"));
                        setLoad(true);
                    }else{
                        window.alert(t("Đã xảy ra lỗi!!!"));
                    }
                })
            } else {

            }
        });
    }

    const columns = [
        {
            name: <div>{t("Người đặt")}</div>,
            selector: row => row.user.hoTen,
            sortable: true,
            wrap: true,
            width: "15%",
        },
        {
            name: <div>{t("Số điện thoại")}</div>,
            selector: row => row.user.sdt,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Ngày đặt")}</div>,
            selector: row => row.ngayDat,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Ngày nhận")}</div>,
            selector: row => row.ngayNhan,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Số ghế")}</div>,
            selector: row => row.soGhe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Loại ghế")}</div>,
            selector: row => row.tuyenXe.xe.loaiXe.tenLoaiXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Trạng thái")}</div>,
            selector: row => row.trangThai,
            sortable: true,
            wrap: true,
        },
        {
            name: '',
            selector: (row, index)=>{
                return(()=>{
                    if(row.trangThai==="INACTIVE"){
                        return(
                            <>
                            <div>
                                <Button onClick={()=>xacNhan(row)} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>{t("Xác nhận")}</Button>
                                <Button onClick={()=>deleteVeXe(row.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>{t("Hủy")}</Button>
                            </div>
                            </>
                        )
                    }
                    else if(row.trangThai==="ACTIVE"){
                        return(
                            <>
                            <div>
                                <Button onClick={()=>xacNhanHoanThanh(row)} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>{t("Hoàn thành")}</Button>
                                <Button onClick={()=>deleteVeXe(row.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>{t("Hủy")}</Button>
                            </div>
                            </>
                        )
                    }
                })()
            },
            wrap: true,
            width: "20%",
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
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
        <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("Tìm kiếm theo tên của người đặt")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t("Tìm kiếm")}</Button></div>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={0} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        {
            (()=>{
                if(tuyenXe){
                    if(tuyenXe.benXeDi&&tuyenXe.benXeDen&&tuyenXe.xe)
                    return(
                        <>
                        <div>{t("Quản lý vé xe của tuyến xe")}:</div>
                        <div><b>{t("Bến xe đi")}:</b> {tuyenXe.benXeDi.tenBenXe} - <b>{t("Bến xe đến")}:</b> {tuyenXe.benXeDen.tenBenXe} - <b>{t("Biển số xe")}:</b> {tuyenXe.xe.bienSoXe} - <b>{t("Ngày đi")}:</b> {tuyenXe.ngayDi} - <b>{t("Giờ khởi hành")}:</b> {tuyenXe.gioDi}</div>
                        </>
                    )
                }
            })()
        }
        <h1 style={{textAlign: "center"}}>{t("Danh sách các vé xe")}</h1>
        <DataTable
            columns={columns}
            data={veXe.filter(item=>convert_vi_to_en(item.user.hoTen.toLowerCase()).indexOf(convert_vi_to_en(search.toLowerCase()))>=0)}
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

export default QuanLyVeXe;



{/*        
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={e=>setSearch(e.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"search"} placeholder="Tìm kiếm theo tên người đặt..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={0} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        {
            (()=>{
                if(tuyenXe){
                    if(tuyenXe.benXeDi&&tuyenXe.benXeDen&&tuyenXe.xe)
                    return(
                        <>
                        <div>Quản lý vé xe của tuyến xe:</div>
                        <div><b>Bến xe đi:</b> {tuyenXe.benXeDi.tenBenXe} - <b>Bến xe đến:</b> {tuyenXe.benXeDen.tenBenXe} - <b>Biển số xe:</b> {tuyenXe.xe.bienSoXe} - <b>Ngày đi:</b> {tuyenXe.ngayDi} - <b>Giờ đi:</b> {tuyenXe.gioDi}</div>
                        </>
                    )
                }
            })()
        }
        <h1 style={{textAlign: "center"}}>Danh sách các vé xe</h1>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>Tên người đặt</th>
            <th>Số điện thoại</th>
            <th>Ngày đặt</th>
            <th>Ngày nhận</th>
            <th>Số ghế</th>
            <th>Loại ghế</th>
            <th>Trạng thái</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
        {
            veXe.map(vx=>{
                stt=stt+1;
                return(
                    <tr>
                        <td>{stt}</td>
                        <td>{vx.user.hoTen}</td>
                        <td>{vx.user.sdt}</td>
                        <td>{vx.ngayDat}</td>
                        <td>{vx.ngayNhan}</td>
                        <td>{vx.soGhe}</td>
                        <td>{vx.tuyenXe.xe.loaiXe.tenLoaiXe}</td>
                        <td>{vx.trangThai}</td>
                        {
                            (()=>{
                                if(vx.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                        <Button onClick={()=>xacNhan(vx)} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>Xác nhận</Button>
                                        <Button onClick={()=>deleteVeXe(vx.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>Hủy</Button>
                                        </>
                                    )
                                }
                                else if(vx.trangThai==="ACTIVE"){
                                    return(
                                        <>
                                        <Button onClick={()=>xacNhanHoanThanh(vx)} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>Xác nhận hoàn thành</Button>
                                        <Button onClick={()=>deleteVeXe(vx.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>Hủy</Button>
                                        </>
                                    )
                                }
                            })()
                        }
                    </tr>
                )
            })
        }
        </tbody>
        </Table>
        </div>
        </div> */}