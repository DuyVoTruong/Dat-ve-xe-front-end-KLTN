import { Button, Card, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { httpThanhToanDatVe } from "../hooks/Request";
import { useContext } from "react";
import { MyContext } from "../../App";

const TrangThanhToan =()=>{

    const token = useContext(MyContext).token;
    const soGheList = JSON.parse(localStorage.getItem("soGheList"));
    const tuyenXeId = localStorage.getItem("tuyenXeId");
    const tongSoTien = localStorage.getItem("tongSoTien");
    const { t } = useTranslation();


    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    const thanhToan =()=>{

        let data={
            soGheList: soGheList,
            tongSoTien: tongSoTien,
            tuyenXeId: tuyenXeId
        }

        httpThanhToanDatVe(data, token).then(res=>res.json()).then(data=>{
            if(data.result && data.data!=null){
                window.open(data.data, '_self');
            }
        })
    }

    return(
        <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
        <Card style={{width: "40vw"}}>
            <Card.Body>
                <Row>
                <Form.Label>
                {t("vé")}
                    {
                        soGheList.map((s,index)=>{
                            if(index==0){
                                return(
                                    <span>{' '+s}</span>
                                )
                            }
                            else{
                                return(
                                    <span>{', '+s}</span>
                                )
                            }
                        })
                    }
                </Form.Label>
                <Form.Label style={{fontSize: "18px", color: "red"}}>{t("Tổng tiền")}:{" "}
                    {formatCash(tongSoTien.toString())+"đ"}
                </Form.Label>
                <Button onClick={thanhToan}>{t("Thanh toán")}</Button>
                </Row>
            </Card.Body>
        </Card>
        </div>
        </>
    );
}

export default TrangThanhToan;