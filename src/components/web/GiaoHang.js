import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { getTuyenXeById } from "../hooks/useFunction";
import useHangHoa from "../hooks/useHangHoa";
import { useTranslation } from "react-i18next";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import { ToastContainer } from "react-toastify";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { httpGetUserById, httpPostHangHoa } from "../hooks/Request";

const GiaoHang =()=>{

    const account = useContext(MyContext).account;
    const token = useContext(MyContext).token;
    const tuyenXeId = useParams().id;
    const [tuyenXe, setTuyenXe] = useState([]);
    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);
    const nav = useNavigate();
    const {addHangHoa} = useHangHoa();
    var today = new Date();
    const {t} = useTranslation();

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

    useEffect(()=>{
        if(account){
            httpGetUserById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }
    },[account])

    const giaoHang =()=>{
        let canNang = document.getElementById("formCanNang").value;
        let tenNguoiNhan = document.getElementById("formTenNguoiNhan").value;
        let sdtNguoiNhan = document.getElementById("formSDTNguoiNhan").value;
        let email = document.getElementById("formEmail").value;
        let userId = account.id;
        let ngayDat = convertNgay(today);
        

        if(!canNang||!tenNguoiNhan||!sdtNguoiNhan||!email||!userId||!tuyenXeId||!ngayDat){
            InfoMessage();
        }
        else{
            let data = {
                canNang,tenNguoiNhan,sdtNguoiNhan,email,userId,tuyenXeId,ngayDat
            }

            console.log(data)

            try {
                httpPostHangHoa(data,token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        nav("/lich-su-gui-hang/");
                        setTimeout(()=>{SuccessMessage()}, 1000);
                    }
                    else{
                        ErrorMessage(data.message);
                    }
                })
            } catch(err) {
                FailMessage();
            }
        }
    }

    return(
        <>
        <ToastContainer/>
        <Container>
            <div>
                <Row className="d-flex justify-content-center align-items-center" style={{marginBottom: "200px", marginTop:"100px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <p className=" mb-5">{t("Vui lòng chọn hình thức thanh toán và số ghế bên dưới")}</p>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label className="text-center">
                                {t("Tên tài khoản")}
                            </Form.Label>
                            <Form.Control type="text" value={thongTinTaiKhoan.hoTen} readOnly/>
                            </Form.Group>

                            {
                                (()=>{
                                    if(tuyenXe.xe){
                                        return(
                                            <>
                                                <Form.Group className="mb-3" controlId="formNhaXe">
                                                <Form.Label className="text-center">
                                                    {t("Nhà xe")}
                                                </Form.Label>
                                                <Form.Control type="text" value={`${tuyenXe.xe.nhaXe.tenNhaXe} - SĐT: ${tuyenXe.xe.nhaXe.sdt}`} readOnly/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGioDi">
                                                <Form.Label className="text-center">
                                                    {t("Giờ khởi hành")}
                                                </Form.Label>
                                                <Form.Control type="time" value={tuyenXe.gioDi} readOnly/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formNgayDi">
                                                <Form.Label className="text-center">
                                                    {t("Ngày đi")} (yy-mm-dd)
                                                </Form.Label>
                                                <Form.Control type="date" value={tuyenXe.ngayDi} readOnly/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formCanNang">
                                                <Form.Label className="text-center">
                                                    {t("Cân nặng")} (kg)
                                                </Form.Label>
                                                <Form.Control type="number"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formTenNguoiNhan">
                                                <Form.Label className="text-center">
                                                    {t("Tên người nhận")}
                                                </Form.Label>
                                                <Form.Control type="text"/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formSDTNguoiNhan">
                                                <Form.Label className="text-center">
                                                    {t("Số điện thoại của người nhận")}
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
                                {t("Giao hàng")}
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
