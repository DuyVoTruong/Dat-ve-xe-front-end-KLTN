import { useState } from "react";
import { httpRequestForgetPassword } from "../hooks/Request";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InfoMessage from "../alert message/InfoMessage";
import { Link, Navigate, useNavigate } from "react-router-dom";
import WarnMessage from "../alert message/WarnMessage";
import { ToastContainer } from "react-toastify";

const RequestForgetPassword =()=>{

    const [email, setEmail] = useState("");
    const {t} = useTranslation();
    const nav = useNavigate();


    const requestForgetPassword =()=>{

        const data = {"email": email}

        httpRequestForgetPassword(data).then(res=>res.json()).then((data)=>{
            if(data.result == true){
                setTimeout(()=>{InfoMessage(t("Vui lòng kiểm tra email để lấy mã otp"))}, 1000);
                nav("/forget-password", {state: {email: email, idHash: data.data.idHash}});
            } else if(data.status == 404){
                WarnMessage(t("Không tìm thấy tài khoản"));
            }
        })
    }

    return(
        <>
        <ToastContainer/>
        <Container>
        <Row className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <Col md={8} lg={6} xs={12}>
          <div style={{border: "solid 10px blue", background:"blue", borderRadius: "8px 8px 0px 0px"}}></div>
            <Card className="shadow" style={{borderRadius: "0px 0px 8px 8px"}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email
                        </Form.Label>
                        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="text" placeholder={t("Nhập Email")}/>
                      </Form.Group>

                      <div style={{marginTop: "30px"}} className="d-grid">
                        <Button variant="primary" type="button" onClick={requestForgetPassword}>
                          {t("Gửi")}
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        </>
    )
}

export default RequestForgetPassword;