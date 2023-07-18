import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetVeXe, httpThanhToanDatVe } from "../hooks/Request";
import { getVeXeUserById } from "../hooks/useFunction";
import useUser from "../hooks/useUser";
import useVeXe from "../hooks/useVeXe";
import { FiDelete } from "react-icons/fi"
import imageDetail from '../../assets/img/view-details.png'
import { useTranslation } from "react-i18next";
import { tableCustomStyles } from "../../css/data-table-style";
import DataTable from "react-data-table-component";
import { ToastContainer } from "react-toastify";
import SuccessMessage from "../alert message/SuccessMessage";

const LichSuDatVe=()=>{

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [load, setLoad] = useState(false);
    const [veXe,setVeXe]=useState([]);
    let stt = 0;

    useEffect(()=>{
        getVeXeUserById(account.id, token).then(data=>{
            if(data){
                setVeXe(data);
            }
        })
        setLoad(false);
    },[load])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const nav = useNavigate();
    const redirectVeXeChiTiet =(vx)=>{
        nav("/ve-xe-chi-tiet", {state: vx});
    }

    const deleteVeXe =(id)=>{
        if(window.confirm(t("Bạn muốn hủy vé xe này?"))===true){
            fetch("http://localhost:8081/api/vexe/"+id,{
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            }).then(res=>res.json()).then(data=>{
                if(data.status==200){
                    SuccessMessage(t("Hủy vé xe thành công"));
                    setLoad(true);
                }else{
                    window.alert(t("Đã xảy ra lỗi"));
                }
            })
        }
    }

    const thanhToan =(row)=>{


        const soGheList = [];
        soGheList.push(row.soGhe);

        let data={
            soGheList: soGheList,
            tongSoTien: row.tuyenXe.giaVe,
            tuyenXeId: row.tuyenXe.id
        }

        httpThanhToanDatVe(data, token).then(res=>res.json()).then(data=>{
            if(data.result && data.data!=null){
                window.open(data.data, '_self');
            }
        })
    }

    const { t } = useTranslation();

    const columns = [
        {
            name: <div>{t("Số ghế")}</div>,
            selector: row => row.soGhe,
            wrap: true,
            maxWidth: "20px"
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
            name: <div>{t("Bến xe đi")}</div>,
            selector: row => row.tuyenXe.benXeDi.tenBenXe,
            wrap: true,
        },
        {
            name: <div>{t("Bến xe đến")}</div>,
            selector: row => row.tuyenXe.benXeDen.tenBenXe,
            wrap: true,
        },
        {
            name: <div>{t("Nhà xe")}</div>,
            selector: row => row.tuyenXe.xe.nhaXe.tenNhaXe,
            wrap: true,
        },
        {
            name: <div>{t("Trạng thái")}</div>,
            selector: row => row.trangThai,
            wrap: true,
        },
        {
            name: <div>{t("Chi tiết")} / {t("Hủy đơn")}</div>,
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                    <button onClick={()=>redirectVeXeChiTiet(row)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDetail}></img><span style={{marginRight: "10px"}}>{t("Chi tiết")}</span></button>
                        {
                            (()=>{
                                if(row.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                            <button style={{padding: "15px" ,margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}} onClick={()=>thanhToan(row)}>{t("Thanh toán")}</button>
                                            <button onClick={()=>deleteVeXe(row.id)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><FiDelete size={30} style={{margin:"10px", color: "red"}}></FiDelete><span style={{marginRight: "10px"}}>{t("Hủy")}</span></button>
                                        </>
                                    );
                                }
                            })()
                        }
                    </div>
                    </>
                );
            },
            wrap: true,
            minWidth: "300px",
        },
    ];

    return (
        <>
        <ToastContainer/>
        <Container>
        <div style={{margin: "20px 0px", backgroundColor:"white", borderRadius: "5px", minHeight:"80vh"}} className="shadow">
        <div style={{padding: "20px"}}>
        <DataTable
            columns={columns}
            data={veXe}
            pagination
            highlightOnHover
		    pointerOnHover
            striped
            responsive
            customStyles={tableCustomStyles}
        />
        </div>
        </div>
        </Container>

        </>
    );
}

export default LichSuDatVe;