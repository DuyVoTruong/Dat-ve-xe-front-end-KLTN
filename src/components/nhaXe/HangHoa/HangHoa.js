import { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../App";
import useTuyenXe from "../../hooks/useTuyenXe";

const HangHoa =()=>{
    const account = useContext(MyContext).account;
    const {tuyenXe} = useTuyenXe();
    const [search, setSearch] = useState("");
    let stt = 0;

    const nav = useNavigate();
    const redirect =(tx)=>{
        nav(`/nha-xe/hang-hoa/quan-ly/${tx.id}`)
    }

    useEffect(()=>{
        //getAllVe
    },[])

    return(
        <>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h2>Quản lý hàng hóa</h2></div>
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
                                        <Button onClick={()=>redirect(item)} style={{margin:"10px", backgroundColor:"#00FF99", color: "black"}}>Quản lý hàng hóa</Button>
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
        </div>
        </>
    );
}

export default HangHoa;