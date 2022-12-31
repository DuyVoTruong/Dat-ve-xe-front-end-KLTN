import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { MyContext } from "../../App";
import { httpGetVeXe } from "../hooks/Request";
import { getVeXeUserById } from "../hooks/useFunction";
import useUser from "../hooks/useUser";
import useVeXe from "../hooks/useVeXe";

const LichSuDatVe=()=>{

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [veXe,setVeXe]=useState([]);
    useEffect(()=>{
        getVeXeUserById(account.id, token).then(data=>{
            if(data){
                setVeXe(data);
            }
        })
    },[])
    return (
        <>
        <Container>
        <div style={{marginTop:"30px", height:"500px", overflow: "auto"}} className="shadow">
        <Table striped bordered hover style={{backgroundColor:"white"}}>
        <thead>
            <tr>
            <th>Số ghế</th>
            <th>Ngày đặt</th>
            <th>Ngày nhận</th>
            <th>Bến xe đi</th>
            <th>Bến xe đến</th>
            <th>Nhà xe</th>
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
                    <td style={{textAlign: "center"}}><button onClick={0} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src="/ticket-icon.png"></img><span style={{marginRight: "10px"}}>Xóa</span></button></td>
                    </tr>
                    </>
                )
            })}
            {

            }
        </tbody>
        </Table>
        </div>
        </Container>
        </>
    );
}

export default LichSuDatVe;