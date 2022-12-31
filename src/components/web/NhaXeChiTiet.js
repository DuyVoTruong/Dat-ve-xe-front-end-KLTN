import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, ProgressBar, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getAllDanhGiaByIdNhaXe, getNhaXeUserById } from "../hooks/useFunction"
import "../../css/comment.css"
import { MyContext } from "../../App";
import {getTuyenXeById} from "../hooks/useFunction"
import useTuyenXe from "../hooks/useTuyenXe";

const NhaXeChiTiet =()=>{


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [danhGia, setDanhGia] = useState([]);
    const nhaXeId = useParams("id").id;
    const [nhaXe,setNhaXe]=useState([]);
    const {tuyenXe}=useTuyenXe();

    const nav = useNavigate();
    const themDanhGia=(id)=>{
        nav("/nha-xe-danh-gia/"+id);
    }

    const starChecked =()=>{
        const arrayStar = document.getElementsByName("rate");
        let nStar = 0;
        for (let i=0; i<arrayStar.length;i++){
            if(arrayStar[i].checked === true){
                nStar = arrayStar[i].value;
            }
        }
        
        console.log(nStar)
    }

    const Rating=(nStar, i)=>{
        if(i<=nStar){
            return <span class="fa fa-star checkedStar"></span>
        }
        else{
            return <span class="fa fa-star"></span>
        }
    }

    const redirect =(diemDi, diemDen)=>{
        nav(`/tuyen-xe/?diemDi=${diemDi}&diemDen=${diemDen}`);
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        getNhaXeUserById(nhaXeId, token).then(data=>{
            if(data){
                setNhaXe(data);
            }
           });
        getAllDanhGiaByIdNhaXe(nhaXeId, token).then(data=>{
            console.log(data)
            if(data){
                console.log(data)
                setDanhGia(data);
            }
        });
    },[])

    return(
        <>
            <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <Col md="8">

                {/*<Card.Img style={{ width: "80%", height:"80%", display: "block", maxHeight: "250px", maxWidth: "500px", marginLeft: "auto", marginRight:"auto", marginBottom: "20px"}} variant="top" src={"https://nld.mediacdn.vn/k:2016/ben-xe-mt-1466755631165/thong-qua-dia-diem-xay-dung-ben-xe-mien-tay-moi.jpg"} />
*/}
                <Card style={{ borderRadius: "3px"}} className="shadow">
                <Card.Body>
                <Card.Title>Nhà xe {nhaXe.tenNhaXe}</Card.Title>
                <Card.Text>Số điện thoại: {nhaXe.sdt}</Card.Text>
                <Card.Text>Giới thiệu: {nhaXe.moTaNgan}</Card.Text>
                <Card.Title>Các tuyến xe nổi bật</Card.Title>
                <div style={{marginTop:"30px", height:"250px", overflowY:"scroll", marginBottom:"10px"}}>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Điểm đi</th>
                    <th>Điểm đến</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tuyenXe.map(tx=>{
                            if(tx.xe){
                                if(tx.xe.nhaXe.id===nhaXe.id){
                                    return(
                                        <tr>
                                            <td>{tx.benXeDi.tinhThanh}</td>
                                            <td>{tx.benXeDen.tinhThanh}</td>
                                            <td style={{textAlign: "center"}}><button type="button" onClick={()=>redirect(tx.benXeDi.tinhThanh,tx.benXeDen.tinhThanh)} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"15px",width:"15px",maxWidth:"80%"}} src="/view-details.png"></img><span style={{marginRight: "10px"}}>Xem chi tiết</span></button></td>
                                        </tr>
                                    );
                                }
                            }
                        })
                    }
                </tbody>
                </Table>
                </div>
                </Card.Body>
                </Card>

                <Card style={{marginTop:"10px"}} className="shadow">
                <Card.Body>
                <Card.Title>Đánh giá của người dùng</Card.Title>
                {
                    [1,2,3,4,5].map(t=>{
                        return Rating(4,t)
                    })
                }
                <Card.Title style={{marginTop: "10px"}}>4 sao dựa trên đánh giá của 200 người dùng</Card.Title>
                <hr style={{border:"3px solid #2F4F4F"}}></hr>
                <div style={{textAlign: "center"}}>
                    <Row>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">5 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="success" now={60} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">100</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">4 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="secondary" now={60} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">50</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">3 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="info" now={60} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">20</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">2 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="warning" now={60} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">10</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">1 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="danger" now={60} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">20</Card.Text>
                    </Col>
                    </Row>
                </div>
                <div className="comment-container">
                    <label>Nội dung đánh giá của người dùng</label>

                    <div className="comment-border">
                        {
                            danhGia.map(dg=>{
                                let soSao = dg.soSao;
                                let noiDung = dg.noiDung;
                                let gioDang = dg.gioDang;
                                let ngayDang = dg.ngayDang;
                                let username = "";
                                if(dg.user){
                                    if(dg.taiKhoan)
                                    username = dg.user.taiKhoan.username;
                                }
                                return(
                                    <>
                                    <div style={{marginLeft: "20px", marginRight: "20px", marginTop: "20px", marginBottom: "30px"}}>
                                        <div><label style={{margin: "3px"}}>{dg.user.taiKhoan.username} - ngày đăng: {ngayDang+" "+gioDang}</label></div>
                                        <div><label style={{margin: "3px"}}>
                                        {
                                            [1,2,3,4,5].map(t=>{
                                                return Rating(soSao, t)
                                            })
                                        }
                                        </label>
                                        </div>
                                        <p className="comment-content-border">{dg.noiDung}</p>
                                        <div style={{marginTop:"-10px", marginLeft: "10px"}}>
                                            <i style={{margin: "3px"}}>xóa</i>
                                            <i style={{margin: "3px"}}>sửa</i>
                                        </div>
                                    </div>
                                    <hr style={{border:"1px solid #2F4F4F", width:"95%", margin:"0 auto"}}></hr>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                <Button onClick={()=>themDanhGia(1)}>Thêm đánh giá</Button>
                </Card.Body>
                </Card>
                </Col>
            </div>
        </>
    )
}

export default NhaXeChiTiet;