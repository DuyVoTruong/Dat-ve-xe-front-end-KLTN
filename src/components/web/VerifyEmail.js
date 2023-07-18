import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { httpVerifyEmail } from "../hooks/Request";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ErrorMessage from "../alert message/ErrorMessage";
import WarnMessage from "../alert message/WarnMessage";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { MyContext } from "../../App";

const VerifyEmail =()=>{

    const setToken = useContext(MyContext).setToken;
    const {t} = useTranslation();
    const [otp, setOtp] = useState("");
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const nav = useNavigate();

    const verifyEmail =()=>{

        const data = {
            otp: otp,
            idHash: localStorage.getItem('idHash').toString(),
            username: username,
            password: password
        }
        console.log(data);
        if(otp!=null){
            httpVerifyEmail(data).then(res => res.json()).then((data)=>{
                if(data.object != null){
                   setTimeout(()=> {SuccessMessage(t("Bạn đã xác thực email thành công"))}, 1000);
                   localStorage.removeItem('idHash');
                   localStorage.removeItem('username');
                   localStorage.removeItem('password');
                   const userToken = {
                    jwtToken: data.object.jwtToken,
                    account: {
                      id: data.object.id,
                      username: data.object.username,
                      role: data.object.role,
                      email: data.object.email
                    }
                  }
                  setToken(userToken);//lưu token
                  //window.alert(t("Đăng nhập thành công!!!"))
                  if(data.object.role==="USER"){
                    nav("/home")
                  }else if(data.object.role==="ADMIN"){
                    nav("/admin/home")
                  }else if(data.object.role==="NHAXE"){
                    nav("/nha-xe/home")
                  }
                } else if(data.status == 400) {
                    if(data.message == "Account locked"){
                        InfoMessage(t("Tài khoản của bạn đã bị khóa"));
                    } else if(data.message == "Code invalid"){
                        WarnMessage(t("Vui lòng xem lại mã otp!!! Nhập sai quá 5 lần sẽ bị khóa tài khoản!!!"));
                    } else if(data.message == "Wrong hash"){
                        InfoMessage(t("Mã hash sai"));
                    }
                } else {
                  console.log(data);
                    ErrorMessage(t("Đã xảy ra lỗi vui lòng thực hiện lại"));
                }
            })
        } else {
            ErrorMessage(t("Bạn phải điền đầy đủ thông tin"));
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
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          OTP
                        </Form.Label>
                        <Form.Control onChange={(event)=>setOtp(event.target.value)} type="text" placeholder={t("Nhập mã otp")}/>
                      </Form.Group>
                      <div style={{marginTop: "30px"}} className="d-grid">
                        <Button variant="primary" type="button" onClick={verifyEmail}>
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

export default VerifyEmail;