import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function LichTrinh(){

    const [tuyenXe, setTuyenXe] = useState([]);
    const [benXe, setBenXe] = useState([]);
    const [loaiXe, setLoaiXe] = useState([]);
    const [xe, setXe] = useState([]);
    const [nhaXe,setNhaXe]=useState([]);
    const [diemDi, setDiemDi] = useState("");
    const [diemDen, setDiemDen] = useState("");
    let tenBenXeDi="";
    let tenBenXeDen="";
    let diaChiDi="";
    let diaChiDen="";
    let tenLoaiXe="";
    let tenNhaXe="";
    let ngayDi="";

    function searchDiemDi(data){
        for(let i=0;i<benXe.length;i++){
            if(benXe[i].id==data.id_benXeDi){
                if(benXe[i].tenBenXe.toLowerCase().indexOf(diemDi.toLowerCase())>=0){
                    return data;
                }
            }
        }
    }

    function searchDiemDen(data){
        for(let i=0;i<benXe.length;i++){
            if(benXe[i].id==data.id_benXeDen){
                if(benXe[i].tenBenXe.toLowerCase().indexOf(diemDen.toLowerCase())>=0){
                    return data;
                }
            }
        }
    }

    function searchDiemDenVaDiemDen(data){
        for(let i=0;i<benXe.length;i++){
            if(benXe[i].id==data.id_benXeDi){//tim ben xe di
                if(benXe[i].tenBenXe.toLowerCase().indexOf(diemDi.toLowerCase())>=0){
                    for(let j=0;j<benXe.length;j++){
                        if(benXe[j].id==data.id_benXeDen){//tim ben xe den
                            if(benXe[j].tenBenXe.toLowerCase().indexOf(diemDen.toLowerCase())>=0){
                                return data;
                            }
                        }
                    }
                }
            }
        }
    }

    useEffect(()=>{
        fetch("/data/tuyenXe.json").then(res=>res.json()).then(data=>{
            if(diemDi.toString().trim()==""&&diemDen.toString().trim()==""){
                setTuyenXe(data);
            }
            else{
                if(diemDi.toString().trim()!=""&&diemDen.toString().trim()==""){
                    setTuyenXe(data.filter(searchDiemDi))
                }
                if(diemDen.toString().trim()!=""&&diemDi.toString().trim()==""){
                    setTuyenXe(data.filter(searchDiemDen))
                }
                if(diemDi.toString().trim()!=""&&diemDen.toString().trim()!=""){
                    setTuyenXe(data.filter(searchDiemDenVaDiemDen))
                }
            }
        });
    },[diemDi,diemDen]);

    useEffect(()=>{
        fetch("/data/benXe.json").then(res=>res.json()).then(data=>{
            setBenXe(data);
        });
        fetch("/data/loaiXe.json").then(res=>res.json()).then(data=>{
            setLoaiXe(data);
        });
        fetch("/data/xe.json").then(res=>res.json()).then(data=>{
            setXe(data);
        });
        fetch("/data/nhaXe.json").then(res=>res.json()).then(data=>{
            setNhaXe(data);
        });
    },[]);

    const nav = useNavigate();
    const redirectDatVe =(id)=>{
        nav("/dat-ve-xe",{state:{idTuyenXe:id}});
    }

    return(
        <>
        <Container>
        <img src="/picture2.png" style={{height: "300px", width: "100%", display: "inline-block",}}/>
        </Container>
        <Container>
            <div class="row" style={{margin:"20px"}}>
                <div class="col-md-6">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDi(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDen(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen"/>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
        <div style={{marginTop:"30px", height:"500px", overflowY:"scroll"}}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Tuyến xe</th>
            <th>Nhà xe</th>
            <th>Loại xe</th>
            <th>Ngày đi</th>
            <th>Giờ khởi hành</th>
            <th>Giá vé</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {tuyenXe.map(tx=>{
                ngayDi = tx.ngayDi
                benXe.map(bx=>{
                    if(bx.id==tx.id_benXeDi){
                        tenBenXeDi=bx.tenBenXe;
                    }
                    if(bx.id==tx.id_benXeDen){
                        tenBenXeDen=bx.tenBenXe;
                    }
                });
                xe.map(x=>{
                    if(x.id==tx.id_xe){
                        loaiXe.map(lx=>{
                            if(lx.id==x.id_loaiXe){
                                tenLoaiXe=lx.loaiXe;
                            }
                        })
                        nhaXe.map(nx=>{
                            if(nx.id==x.id_nhaXe){
                                tenNhaXe=nx.tenNhaXe
                            }
                        })
                    }
                })
                return(
                    <>
                    <tr>
                    <td>{tenBenXeDi}{" => "}{tenBenXeDen}</td>
                    <td>{tenNhaXe}</td>
                    <td>{tenLoaiXe}</td>
                    <td>{ngayDi}</td>
                    <td>{tx.gioKhoiHanh}</td>
                    <td>{tx.giaVe}</td>
                    <td><button onClick={()=>redirectDatVe(tx.id)} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src="/ticket-icon.png"></img><i>Đặt vé xe</i></button></td>
                    </tr>
                    </>
                )
            })}
        </tbody>
        </Table>
        </div>
        </Container>
        </>
    )
}

export default LichTrinh;