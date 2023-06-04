import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetVeXe } from "../hooks/Request";
import { getVeXeUserById } from "../hooks/useFunction";
import useUser from "../hooks/useUser";
import useVeXe from "../hooks/useVeXe";
import { FiDelete } from "react-icons/fi"
import imageDetail from '../../assets/img/view-details.png'
import { useTranslation } from "react-i18next";

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
        if(window.confirm(t("banmuonhuyvexenay"))===true){
            fetch("http://localhost:8080/api/vexe/"+id,{
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            }).then(res=>res.json()).then(data=>{
                if(data.status==200){
                    window.alert(t("huyvexethanhcong"));
                    setLoad(true);
                }else{
                    window.alert(t("daxayraloi"));
                }
            })
        }
    }

    const { t } = useTranslation();

    return (
        <>
        <Container>
        <div style={{marginTop:"30px", height:"500px", borderRadius: "3px", backgroundColor:"white", overflow: "auto"}} className="shadow">
        <div style={{padding: "20px"}}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>{t("soghe")}</th>
            <th>{t("ngaydat")}</th>
            <th>{t("ngaynhan")}</th>
            <th>{t("benxedi")}</th>
            <th>{t("benxeden")}</th>
            <th>{t("nhaxe")}</th>
            <th>{t("trangthai")}</th>
            <th>{t("chitiet")} / {t("huydon")}</th>
            </tr>
        </thead>
        <tbody>
            {veXe.map(vx=>{
                stt=stt+1;
                return(
                    <>
                    <tr>
                    <td>{stt}</td>
                    <td>{vx.soGhe}</td>
                    <td>{vx.ngayDat}</td>
                    <td>{vx.ngayNhan}</td>
                    <td>{vx.tuyenXe.benXeDi.tenBenXe}</td>
                    <td>{vx.tuyenXe.benXeDen.tenBenXe}</td>
                    <td>{vx.tuyenXe.xe.nhaXe.tenNhaXe}</td>
                    <td>{vx.trangThai}</td>
                    <td style={{textAlign: "center"}}>
                        <button onClick={()=>redirectVeXeChiTiet(vx)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDetail}></img><span style={{marginRight: "10px"}}>{t("chitiet")}</span></button>
                        {
                            (()=>{
                                if(vx.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                            <button onClick={()=>deleteVeXe(vx.id)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><FiDelete size={30} style={{margin:"10px", color: "red"}}></FiDelete><span style={{marginRight: "10px"}}>{t("huy")}</span></button>
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

export default LichSuDatVe;