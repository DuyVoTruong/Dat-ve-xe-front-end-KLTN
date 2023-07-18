import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { httpGetNhaXeById, httpRequestGiaHan } from "../../hooks/Request";
import { MyContext } from "../../../App";
import { Card, Col, Container, Row } from "react-bootstrap";

const GoiGiaHanConHan =()=>{

    const goiGiaHan = [{
        "name": "1 Tháng",
        "value": 2000000,
    },{
        "name": "3 Tháng",
        "value": 5000000,
    },{
        "name": "6 Tháng",
        "value": 9000000,
    },{
        "name": "12 Tháng",
        "value": 16000000,
    }]

    const mau = ["#FFCCCC","#FFCC99","#FFCC66","#FFCC33"]

    const {t} = useTranslation();

    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;

    useEffect(()=>{
        
        httpGetNhaXeById(account.id, token).then(data=>{
            if(data.object){
                setThongTinTaiKhoan(data.object);
            }
        })
            
    },[])

    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    const giaHanTaiKhoan =(soTien)=>{

        const data = {
            soTien: soTien,
            email: account.email
        }

        httpRequestGiaHan(data, token).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.result==true && data.data!=null){
                window.open(data.data, '_self');
            }
        })
    }

    return(
        <>
            <Container>
            <Row style={{margin: "20vh 5vw 30vh"}}>
            <label style={{fontSize: "24px", margin: "15px"}}>{t("Ngày hết hạn dịch vụ dành cho nhà xe")}: {thongTinTaiKhoan.ngayHetHan}</label>
            <label style={{fontSize: "24px", margin: "15px"}}>{t("Chọn gói gian hạn dịch vụ tài khoản nhà xe")}</label>
            {
                goiGiaHan.map((ggh,index)=>{
                    return(
                        <>
                        <Col md={6}>
                            <Card className="card" onClick={()=>giaHanTaiKhoan(ggh.value)} style={{margin:"15px", backgroundColor: mau[index]}}>
                            <Card.Body>
                                <Card.Title>
                                    {t(`${ggh.name}`)}
                                </Card.Title>
                                    {formatCash(ggh.value.toString())+"đ"}
                            </Card.Body>
                            </Card>
                        </Col>
                        </>
                    )
                })
            }
            </Row>
            </Container>
        </>
    )
}

export default GoiGiaHanConHan;