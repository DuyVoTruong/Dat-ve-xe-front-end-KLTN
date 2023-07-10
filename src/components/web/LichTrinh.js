import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getTuyenXeFindByAddress } from "../hooks/useFunction";
import image from '../../assets/img/picture2.png';
import imageDetail from '../../assets/img/view-details.png';
import { useTranslation } from "react-i18next";
import DataTable, { defaultThemes } from "react-data-table-component";
import { tableCustomStyles } from "../../css/data-table-style";

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
            }else{
               setTuyenXe([]);
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

    const { t } = useTranslation();

    const columns = [
        {
            name: <div>{t("Điểm đi")}</div>,
            selector: row => row.benXeDi.tenBenXe,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Điểm đến")}</div>,
            selector: row => row.benXeDen.tenBenXe,
            sortable: true,
            wrap: true,
        },
        {
            name: '',
            selector: (row, index)=>{
                return(
                    <>
                    <div style={{margin: "10px"}}>
                        <button onClick={()=>redirect(row.benXeDi.tinhThanh,row.benXeDen.tinhThanh)} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDetail}></img><span style={{marginRight: "10px"}}>{t("Chi tiết")}</span></button>
                    </div>
                    </>
                );
            },
            wrap: true
        },
    ];

    return(
        <>
        <Container>
        <img src={image} style={{maxHeight: "300px", width: "100%", height: "80%", display: "inline-block",}}/>
        </Container>

        <Container>
            <div class="row" style={{margin:"20px"}}>
                <div class="col-md-6 mt-3">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDi(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder={t("Chọn điểm đi")} list="DiemDi" defaultValue={diemDi}/>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDen(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder={t("Chọn điểm đến")} list="DiemDen" defaultValue={diemDen}/>
                    </div>
                </div>
            </div>
        </Container>

        <Container>
        <div style={{margin: "20px 0px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{padding: "20px"}}>
        <DataTable
            columns={columns}
            data={tuyenXe.filter(tx=>{
                if(diemDiDiemDen.indexOf(tx.benXeDi.tinhThanh+tx.benXeDen.tinhThanh)<0){
                    diemDiDiemDen.push(tx.benXeDi.tinhThanh+tx.benXeDen.tinhThanh);
                    return tx;
                }})}
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

        {/*<Container>
            <div class="row" style={{margin:"20px"}}>
                <div class="col-md-6">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDi(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder={t("chondiemdi")} list="DiemDi" defaultValue={diemDi}/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <input onChange={evt=>setDiemDen(evt.target.value)} style={{borderRadius:"20px"}} class="form-control" type="text" placeholder={t("chondiemden")} list="DiemDen" defaultValue={diemDen}/>
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
            <th>{t("diemdi")}</th>
            <th>{t("diemden")}</th>
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
                                <td style={{textAlign: "center"}}><button onClick={()=>redirect(item.benXeDi.tinhThanh,item.benXeDen.tinhThanh)} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDetail}></img><span style={{marginRight: "10px"}}>{t("chitiet")}</span></button></td>
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
            </Container>*/}
        </>
    )
}

export default LichTrinh;