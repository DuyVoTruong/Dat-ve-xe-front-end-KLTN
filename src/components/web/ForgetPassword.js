import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { httpForgetPassword } from "../hooks/Request";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import InfoMessage from "../alert message/InfoMessage";
import WarnMessage from "../alert message/WarnMessage";

const ForgetPassword =()=>{

    const {t} = useTranslation();
    const [state, setState] = useState(useLocation().state);
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const nav = useNavigate();
    console.log(otp);

    const forgetPassword =()=>{

        const data = {
            otp: otp,
            idHash: state.idHash,
            newPassword: newPassword,
        }

        if(confirmPassword==newPassword){
            httpForgetPassword(data).then(res => res.json()).then((data)=>{
                if(data.result == true){
                   setTimeout(()=> {SuccessMessage(t("Bạn đã thay đổi mật khẩu thành công"))}, 1000);
                   nav("/login");
                } else if(data.status == 400) {
                    if(data.message == "Account locked"){
                        InfoMessage(t("Tài khoản của bạn đã bị khóa"));
                    } else if(data.message == "Code invalid"){
                        WarnMessage(t("Vui lòng xem lại mã otp!!! Nhập sai quá 5 lần sẽ bị khóa tài khoản!!!"));
                    } else if(data.message == "Wrong hash"){
                        InfoMessage(t("Mã hash sai"));
                    }
                } else {
                    ErrorMessage(t("Đã xảy ra lỗi vui lòng thực hiện lại"));
                }
            })
        } else {
            ErrorMessage(t("Mật khẩu mới và mật khẩu xác nhận không trùng nhau"));
        }
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
                    <Form onSubmit={forgetPassword}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          OTP
                        </Form.Label>
                        <Form.Control onChange={(event)=>setOtp(event.target.value)} type="text" placeholder={t("Nhập mã otp")}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-center">
                          New password
                        </Form.Label>
                        <Form.Control onChange={(event)=>setNewPassword(event.target.value)} type="text" placeholder={t("Nhập new password")}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-center">
                          Confirm password
                        </Form.Label>
                        <Form.Control onChange={(event)=>setConfirmPassword(event.target.value)} type="text" placeholder={t("Nhập confirm password")}/>
                      </Form.Group>

                      <div style={{marginTop: "30px"}} className="d-grid">
                        <Button variant="primary" type="submit">
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
    );
}

export default ForgetPassword;