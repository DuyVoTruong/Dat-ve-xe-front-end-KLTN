import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { getTuyenXeById } from "../hooks/useFunction";
import useHangHoa from "../hooks/useHangHoa";

const GiaoHang =()=>{

    const account = useContext(MyContext).account;
    const token = useContext(MyContext).token;
    const tuyenXeId = useParams().id;
    const [tuyenXe, setTuyenXe] = useState([]);
    const {addHangHoa} = useHangHoa();
    var today = new Date();

    const convertNgay =(d)=>{
        let ngay;
        if(d.getDate()<10||d.getMonth()<9){
            let date=d.getDate();
            let month=d.getMonth()+1;
            if(date<10){
                date="0"+date;
            }
            if(month<10){
                month="0"+month
            }
            ngay = d.getFullYear()+"-"+month+"-"+date;
        }else{
            ngay = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        }
        return ngay;
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        getTuyenXeById(tuyenXeId, token).then(data=>{
            if(data){
                setTuyenXe(data);
            }
        })
    },[])

    const giaoHang =()=>{
        let canNang = document.getElementById("formCanNang").value;
        let tenNguoiNhan = document.getElementById("formTenNguoiNhan").value;
        let sdtNguoiNhan = document.getElementById("formSDTNguoiNhan").value;
        let email = document.getElementById("formEmail").value;
        let userId = 1;
        let ngayDat = convertNgay(today);
        

        if(!canNang||!tenNguoiNhan||!sdtNguoiNhan||!email||!userId||!tuyenXeId||!ngayDat){
            window.alert("Vui lòng điền đầy đủ thông tin!!!");
        }
        else{
            let data = {
                canNang,tenNguoiNhan,sdtNguoiNhan,email,userId,tuyenXeId,ngayDat
            }

            console.log(data);
            addHangHoa(data);
        }
    }

    return(
        <>
        <Container>
            <div>
                <Row className="d-flex justify-content-center align-items-center" style={{marginBottom: "200px", marginTop:"100px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <p className=" mb-5">Vui lòng chọn hình thức thanh toán và số ghế bên dưới!</p>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label className="text-center">
                                Tên tài khoản
                            </Form.Label>
                            <Form.Control type="text" value={account.username} readOnly/>
                            </Form.Group>

                            {
                                (()=>{
                                    if(tuyenXe.xe){
                                        return(
                                            <>
                                                <Form.Group className="mb-3" controlId="formNhaXe">
                                                <Form.Label className="text-center">
                                                    Nhà xe
                                                </Form.Label>
                                                <Form.Control type="text" value={`${tuyenXe.xe.nhaXe.tenNhaXe} - SĐT: ${tuyenXe.xe.nhaXe.sdt}`} readOnly/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGioDi">
                                                <Form.Label className="text-center">
                                                    Giờ khởi hành
                                                </Form.Label>
                                                <Form.Control type="time" value={tuyenXe.gioDi} readOnly/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formNgayDi">
                                                <Form.Label className="text-center">
                                                    Ngày Đi (yy-mm-dd)
                                                </Form.Label>
                                                <Form.Control type="date" value={tuyenXe.ngayDi} readOnly/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formCanNang">
                                                <Form.Label className="text-center">
                                                    Cân nặng (kg)
                                                </Form.Label>
                                                <Form.Control type="number"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formTenNguoiNhan">
                                                <Form.Label className="text-center">
                                                    Tên người nhận
                                                </Form.Label>
                                                <Form.Control type="text"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formSDTNguoiNhan">
                                                <Form.Label className="text-center">
                                                    Số điện thoại người nhận
                                                </Form.Label>
                                                <Form.Control type="text"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formEmail">
                                                <Form.Label className="text-center">
                                                    Email
                                                </Form.Label>
                                                <Form.Control type="email"/>
                                                </Form.Group>
                                            </>
                                        );
                                    }
                                })()
                            }
                            
                            <div className="d-grid">
                            <Button variant="primary" type="button" onClick={giaoHang}>
                                Giao hàng
                            </Button>
                            </div>
                        </Form>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>
        </Container>
        </>
    )
}

export default GiaoHang;
