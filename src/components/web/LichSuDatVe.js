import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetVeXe } from "../hooks/Request";
import { getVeXeUserById } from "../hooks/useFunction";
import useUser from "../hooks/useUser";
import useVeXe from "../hooks/useVeXe";
import { FiDelete } from "react-icons/fi"

const LichSuDatVe=()=>{

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [load, setLoad] = useState(false);
    const [veXe,setVeXe]=useState([]);
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
        if(window.confirm("Bạn muốn hủy vé xe này?")===true){
            fetch("http://localhost:8080/api/vexe/"+id,{
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            }).then(res=>res.json()).then(data=>{
                if(data.status==200){
                    window.alert("Hủy vé xe thành công!!!");
                    setLoad(true);
                }else{
                    window.alert("Đã xảy ra lỗi!!!");
                }
            })
        }
    }

    return (
        <>
        <Container>
        <div style={{marginTop:"30px", height:"500px", borderRadius: "3px", backgroundColor:"white", overflow: "auto"}} className="shadow">
        <div style={{padding: "20px"}}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Số ghế</th>
            <th>Ngày đặt</th>
            <th>Ngày nhận</th>
            <th>Bến xe đi</th>
            <th>Bến xe đến</th>
            <th>Nhà xe</th>
            <th>Trạng thái</th>
            <th>Xem chi tiết / Hủy đơn</th>
            </tr>
        </thead>
        <tbody>
            {veXe.map(vx=>{
                return(
                    <>
                    <tr>
                    <td>{vx.soGhe}</td>
                    <td>{vx.ngayDat}</td>
                    <td>{vx.ngayNhan}</td>
                    <td>{vx.tuyenXe.benXeDi.tenBenXe}</td>
                    <td>{vx.tuyenXe.benXeDen.tenBenXe}</td>
                    <td>{vx.tuyenXe.xe.nhaXe.tenNhaXe}</td>
                    <td>{vx.trangThai}</td>
                    <td style={{textAlign: "center"}}>
                        <button onClick={()=>redirectVeXeChiTiet(vx)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src="/view-details.png"></img><span style={{marginRight: "10px"}}>Xem chi tiết</span></button>
                        {
                            (()=>{
                                if(vx.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                            <button onClick={()=>deleteVeXe(vx.id)} style={{margin: "10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><FiDelete size={30} style={{margin:"10px", color: "red"}}></FiDelete><span style={{marginRight: "10px"}}>Huỷ đơn</span></button>
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