import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpLogin } from "../hooks/Request";
import { FcGoogle } from "react-icons/fc";
import backgroundLogin from "../../assets/img/background-login2.jpg";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

function Login() {

  const setToken = useContext(MyContext).setToken;
  const [role, setRole] = useState("USER");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {t} = useTranslation();

  const nav = useNavigate();

  const loginGoogle =()=>{
    window.location.replace("https://accounts.google.com/o/oauth2/auth?scope=profile&redirect_uri=http://localhost:8081/api/login-google&response_type=code&client_id=632584279277-6ov8je5ek4p0p67ad1892832k4naihk3.apps.googleusercontent.com&approval_prompt=force");
  }

  const login = async(e)=>{
    e.preventDefault();
    let accountLogin ={
      username,password
    }

    httpLogin(accountLogin).then(res=>res.json()).then(data=>{
      console.log(data);
      if(data.object!=null){
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
        window.alert(t("Đăng nhập thành công!!!"))
        if(data.object.role==="USER"){
          nav("/home")
        }else if(data.object.role==="ADMIN"){
          nav("/admin/home")
        }else if(data.object.role==="NHAXE"){
          nav("/nha-xe/home")
        }
      }
      else if(data.status==401){
        window.alert(t("Username hoặc password không chính xác!!!"))
      }
      else{
        window.alert(data.message)
      }
    })
  }

  return (
    <>
      <ToastContainer/>
      <img src={backgroundLogin} style={{width: '100vw', height: '100vh', objectFit: "cover", filter: "brightness(60%)"}}></img>
      <div style={{position: "absolute", top: "0px", left: "0px", width: '100vw', height: '100vh'}}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <Col md={8} lg={6} xs={12}>
          <div style={{border: "solid 10px blue", background:"blue", borderRadius: "8px 8px 0px 0px"}}></div>
            <Card className="shadow" style={{borderRadius: "0px 0px 8px 8px"}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">WebTour</h2>
                  <p className=" mb-5">{t("Vui lòng nhập username và password của bạn")}</p>
                  <div className="mb-3">
                    <Form onSubmit={login}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder={t("Nhập username")}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder={t("Nhập password")} />
                      </Form.Group>

                      {/*<Form.Group
                        className="mb-3"
                      >
                        <Form.Label>Vai trò</Form.Label>
                        <Form.Select style={{display:"block"}} onChange={(e)=>setRole(e.target.value)}>
                              <option defaultChecked value={"USER"}>Người dùng</option>
                              <option value={"NHAXE"}>Nhà xe</option>
                              <option value={"ADMIN"}>Admin</option>
                        </Form.Select>
                      </Form.Group>*/}

                    
                      <Form.Group
                        style={{marginTop: "20px"}}
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#/request-forget-password">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          {t("Đăng nhập")}
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        {t("Không có tài khoản?")}{" "}
                        <a className="text-primary fw-bold">
                          <Link to="/sign-up">{t("Đăng ký")}</Link>
                        </a>
                      </p>
                      <p className="mb-2  text-center">
                        {t("Hoặc")}
                      </p>
                      <p className="mb-0  text-center">
                        <Button onClick={loginGoogle} style={{backgroundColor: "white", borderColor: "red"}}><FcGoogle size={35}></FcGoogle><span style={{color:"black", marginLeft: "10px"}}>Login with google</span></Button>
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        <a lassName="text-primary fw-bold">
                          <Link to="/">{t("Đến trang chủ")}</Link>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Login;