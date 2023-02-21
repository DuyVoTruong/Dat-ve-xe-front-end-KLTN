import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, ProgressBar, Row, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllDanhGiaByIdNhaXe, getNhaXeUserById } from "../hooks/useFunction"
import "../../css/comment.css"
import { MyContext } from "../../App";
import {getTuyenXeById} from "../hooks/useFunction"
import useTuyenXe from "../hooks/useTuyenXe";
import imageDetail from '../../assets/img/view-details.png'

const NhaXeChiTiet =()=>{


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [danhGia, setDanhGia] = useState([]);
    const nhaXeId = useParams().id;
    const [nhaXe,setNhaXe]=useState([]);
    const {tuyenXe}=useTuyenXe();
    const [thongKeSao,setThongKeSao]=useState([{sao1:0,sao2:0,sao3:0,sao4:0,sao5:0,soNguoiDanhGia:0}]);
    const [saoTB, setSaoTB] = useState(0);
    const [load, setLoad] = useState(false);

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

    const deleteDanhGia =(id)=>{
        if(window.confirm("Bạn muốn xóa đánh giá này?")===true){
            fetch("http://localhost:8080/api/danhgia/"+id,{
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            }).then(res=>res.json()).then(data=>{
                if(data.status==200){
                    window.alert("Xóa đánh giá thành công!!!");
                    setLoad(true);
                }else{
                    window.alert("Đã xảy ra lỗi!!!");
                }
            })
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
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
        fetch(`http://localhost:8080/api/thongke/nguoidung/so-sao/${nhaXeId}`,{
            headers:{
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            }
        }).then(res=>res.json()).then(data=>{
            if(data){
                {
                    if(data.object){
                        setThongKeSao(data.object);
                    }
                }
            }
        })
        fetch(`http://localhost:8080/api/thongke/nguoidung/sao-trung-binh/${nhaXeId}`,{
            headers:{
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            }
        }).then(res=>res.json()).then(data=>{
            if(data){
                {
                    if(data.object){
                        setSaoTB(data.object);
                    }
                }
            }
        })
        setLoad(false);
    },[load])

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
                                            <td style={{textAlign: "center"}}><button type="button" onClick={()=>redirect(tx.benXeDi.tinhThanh,tx.benXeDen.tinhThanh)} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"15px",width:"15px",maxWidth:"80%"}} src={imageDetail}></img><span style={{marginRight: "10px"}}>Xem chi tiết</span></button></td>
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
                        return Rating(saoTB,t)
                    })
                }
                {
                    (()=>{
                       if(Number(saoTB)){
                        return(
                            <Card.Title style={{marginTop: "10px"}}>{saoTB} sao dựa trên đánh giá của {thongKeSao.soNguoiDanhGia} người dùng</Card.Title>
                        );
                       } 
                       else{
                        return(
                            <Card.Title style={{marginTop: "10px"}}>Chưa có người dùng nào đánh giá</Card.Title>
                        );
                       }
                    })()
                }
                <hr style={{border:"3px solid #2F4F4F"}}></hr>
                <div style={{textAlign: "center"}}>
                    <Row>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">5 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="success" now={thongKeSao.sao5/(thongKeSao.sao1+
                        thongKeSao.sao2+thongKeSao.sao3+thongKeSao.sao4+thongKeSao.sao5)*100} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">{thongKeSao.sao5}</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">4 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="secondary" now={thongKeSao.sao4/(thongKeSao.sao1+
                        thongKeSao.sao2+thongKeSao.sao3+thongKeSao.sao4+thongKeSao.sao5)*100} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">{thongKeSao.sao4}</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">3 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="info" now={thongKeSao.sao3/(thongKeSao.sao1+
                        thongKeSao.sao2+thongKeSao.sao3+thongKeSao.sao4+thongKeSao.sao5)*100} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">{thongKeSao.sao3}</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">2 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="warning" now={thongKeSao.sao2/(thongKeSao.sao1+
                        thongKeSao.sao2+thongKeSao.sao3+thongKeSao.sao4+thongKeSao.sao5)*100} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">{thongKeSao.sao2}</Card.Text>
                    </Col>

                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">1 sao</Card.Text>
                    </Col>
                    <Col md="8" sm="8" xs="6">
                        <ProgressBar className="mb-3" variant="danger" now={thongKeSao.sao1/(thongKeSao.sao1+
                        thongKeSao.sao2+thongKeSao.sao3+thongKeSao.sao4+thongKeSao.sao5)*100} />
                    </Col>
                    <Col md="2" sm="2" xs="3">
                        <Card.Text className="mb-3">{thongKeSao.sao1}</Card.Text>
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
                                        {
                                            (()=>{
                                                if(account){
                                                    if(account.id==dg.user.id){
                                                        return(
                                                            <div style={{marginTop:"-10px", marginLeft: "10px"}}>
                                                                <Link onClick={()=>deleteDanhGia(dg.id)} style={{margin: "3px"}}>xóa</Link>
                                                                <Link to={"/nha-xe-danh-gia/"+nhaXeId} style={{margin: "3px"}}>sửa</Link>
                                                            </div>
                                                        );
                                                    }
                                                }
                                            })()
                                        }
                                    </div>
                                    <hr style={{border:"1px solid #2F4F4F", width:"95%", margin:"0 auto"}}></hr>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                <Button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để đánh giá!!!")}else{themDanhGia(nhaXeId)}}}>Thêm đánh giá</Button>
                </Card.Body>
                </Card>
                </Col>
            </div>
        </>
    )
}

export default NhaXeChiTiet;