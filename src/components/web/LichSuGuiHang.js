import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FiDelete } from "react-icons/fi";
import { MyContext } from "../../App";
import { getHangHoaByUserId } from "../hooks/useFunction";
import { useTranslation } from "react-i18next";

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

    return (
        <>
        <Container>
        <div style={{marginTop:"30px", height:"500px", backgroundColor: "white", overflow: "auto"}} className="shadow">
        <div style={{padding: "20px"}}>
        <Table striped bordered hover style={{backgroundColor:"white"}}>
        <thead>
            <tr>
            <th>STT</th>
            <th>{t("cannang")}</th>
            <th>{t("gia")}</th>
            <th>{t("tennguoinhan")}</th>
            <th>{t("sodienthoainguoinhan")}</th>
            <th>Email</th>
            <th>{t("ngaydat")}</th>
            <th>{t("trangthai")}</th>
            <th>{t("huydon")}</th>
            </tr>
        </thead>
        <tbody>
            {hangHoa.map(h=>{
                stt=stt+1;
                return(
                    <>
                    <tr>
                    <td>{stt}</td>
                    <td>{h.canNang}</td>
                    <td>{h.gia}</td>
                    <td>{h.tenNguoNhan}</td>
                    <td>{h.sdtNguoiNhan}</td>
                    <td>{h.email}</td>
                    <td>{h.ngayDat}</td>
                    <td>{h.trangThai}</td>
                    <td style={{textAlign: "center"}}>
                        {
                            (()=>{
                                if(h.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                            <button onClick={()=>huyDon(h.id)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><FiDelete size={30} style={{margin:"10px", color: "red"}}></FiDelete><span style={{marginRight: "10px"}}>{t("huy")}</span></button>
                                        </>
                                    );
                                }
                            })()
                        }
                    </td>
                    </tr>
                    </>
                )
            })}
            {

            }
        </tbody>
        </Table>
        </div>
        </div>
        </Container>
        </>
    );
}

export default LichSuGuiHang;