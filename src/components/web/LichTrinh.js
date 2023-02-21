import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getTuyenXeFindByAddress } from "../hooks/useFunction";
import image from '../../assets/img/picture2.png';
import imageDetail from '../../assets/img/view-details.png';

function LichTrinh(){

    const [q] = useSearchParams();
    const [diemDi, setDiemDi] = useState(q.get("diemDi"));
    const [diemDen, setDiemDen] = useState(q.get("diemDen"));
    const [tuyenXe, setTuyenXe] = useState([]);
    const diemDiDiemDen = [];

    useEffect(()=>{
        let data = {
            benXeDi:diemDi,
            benXeDen:diemDen
        }
        getTuyenXeFindByAddress(data).then(data=>{
            if(data){
                setTuyenXe(data);
            }
        })
    },[diemDi,diemDen]);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
        
    },[]);

    const nav = useNavigate();
    const redirect =(diemDi, diemDen)=>{
        nav(`/tuyen-xe/?diemDi=${diemDi}&diemDen=${diemDen}`);
    }

    return(
        <>
        <Container>
        <img src={image} style={{height: "300px", width: "100%", display: "inline-block",}}/>
        </Container>
        <Container>
            <div class="row" style={{margin:"20px"}}>
                <div class="col-md-6">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDi(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi" defaultValue={diemDi}/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDen(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen" defaultValue={diemDen}/>
                    </div>
                </div>
            </div>
        </Container>
        <Container>
        <div style={{marginTop:"30px", height:"500px", backgroundColor: "white", overflow:"auto"}}>
        <div style={{padding: "20px"}}>
        <Table striped bordered hover style={{backgroundColor: "white"}}>
        <thead>
            <tr>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
                {
                    tuyenXe.map(item=>{
                        if(diemDiDiemDen.indexOf(item.benXeDi.tinhThanh+item.benXeDen.tinhThanh)<0){
                            diemDiDiemDen.push(item.benXeDi.tinhThanh+item.benXeDen.tinhThanh);
                            return(
                                <>
                                <tr>
                                <td>{item.benXeDi.tinhThanh}</td>
                                <td>{item.benXeDen.tinhThanh}</td>
                                <td style={{textAlign: "center"}}><button onClick={()=>redirect(item.benXeDi.tinhThanh,item.benXeDen.tinhThanh)} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDetail}></img><span style={{marginRight: "10px"}}>Xem chi tiết</span></button></td>
                                </tr>
                                </>
                            )
                        }
                    })
                }
        </tbody>
        </Table>
        </div>
        </div>
        </Container>
        </>
    )
}

export default LichTrinh;