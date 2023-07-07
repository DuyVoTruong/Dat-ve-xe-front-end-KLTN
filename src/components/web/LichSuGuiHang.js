import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FiDelete } from "react-icons/fi";
import { MyContext } from "../../App";
import { getHangHoaByUserId } from "../hooks/useFunction";
import { useTranslation } from "react-i18next";
import { tableCustomStyles } from "../../css/data-table-style";
import DataTable from "react-data-table-component";

const LichSuGuiHang=()=>{

    const token = useContext(MyContext).token;

    const [hangHoa, setHangHoa]=useState([]);
    const [load,setLoad] = useState(false);
    let stt = 0;

    useEffect(()=>{
        getHangHoaByUserId(1,token).then(data=>{
            if(data){
                setHangHoa(data);
            }
        })
        setLoad(false);
    },[load])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    const huyDon =(id)=>{
        if(window.confirm(t("banmuonxoadongiaohangnay"))==true){
            fetch(`http://localhost:8080/api/hanghoa/${id}`,{
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    "Content-Type": "application/json",
                }
            }).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        window.alert(t("xoadongiaohangthanhcong"));
                        setLoad(true);
                    }
                })
        }
    }

    const { t } = useTranslation();

    const columns = [
        {
            name: <div>{t("cannang")}</div>,
            selector: row => row.canNang,
            wrap: true,
            maxWidth: "20px"
        },
        {
            name: <div>{t("gia")}</div>,
            selector: row => row.gia,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("tennguoinhan")}</div>,
            selector: row => row.tenNguoNhan,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("sodienthoainguoinhan")}</div>,
            selector: row => row.sdtNguoiNhan,
            wrap: true,
        },
        {
            name: <div>Email</div>,
            selector: row => row.email,
            wrap: true,
        },
        {
            name: <div>{t("ngaydat")}</div>,
            selector: row => row.ngayDat,
            wrap: true,
        },
        {
            name: <div>{t("trangthai")}</div>,
            selector: row => row.trangThai,
            wrap: true,
        },
        {
            name: <div>{t("huydon")}</div>,
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                    {
                        (()=>{
                            if(row.trangThai==="INACTIVE"){
                                return(
                                    <>
                                        <button onClick={()=>huyDon(row.id)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><FiDelete size={30} style={{margin:"10px", color: "red"}}></FiDelete><span style={{marginRight: "10px"}}>{t("huy")}</span></button>
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
        
        <Container>
        <div style={{margin: "20px 0px", backgroundColor:"white", borderRadius: "5px", minHeight: "80vh"}} className="shadow">
        <div style={{padding: "20px"}}>
        <DataTable
            columns={columns}
            data={hangHoa}
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

export default LichSuGuiHang;