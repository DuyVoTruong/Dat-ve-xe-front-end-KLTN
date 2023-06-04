import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpLogin } from "../hooks/Request";
import { FcGoogle } from "react-icons/fc";
import backgroundLogin from "../../assets/img/background-login2.jpg";
import { useTranslation } from "react-i18next";

function Login() {

  const setToken = useContext(MyContext).setToken;
  const [role, setRole] = useState("USER");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {t} = useTranslation();

  const nav = useNavigate();
  const login = async(e)=>{
    e.preventDefault();
    let accountLogin ={
      username,password
    }
    httpLogin(accountLogin).then(res=>res.json()).then(data=>{
      if(data.jwtToken){
        const userToken = {
          jwtToken: data.jwtToken,
          account: {
            id: data.id,
            username: data.username,
            role: data.role
          }
        }
        setToken(userToken);//lưu token
        window.alert("Đăng nhập thành công!!!")
        if(data.role==="USER"){
          nav("/home")
        }else if(data.role==="ADMIN"){
          nav("/admin/home")
        }else if(data.role==="NHAXE"){
          nav("/nha-xe/home")
        }
      }
      else if(data.status==401){
        window.alert("Username hoặc password không chính xác!!!")
      }
      else{
        window.alert(data.message)
      }
    })
  }

  return (
    <>
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
                  <p className=" mb-5">{t("vuilongnhapusernamevapasswordcuaban")}</p>
                  <div className="mb-3">
                    <Form onSubmit={login}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder={t("nhapusername")}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder={t("nhappassword")} />
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

                      {/*
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                    </Form.Group>*/}
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          {t("login")}
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        {t("khongcotaikhoan")}{" "}
                        <a href="/sign-up" className="text-primary fw-bold">
                          <Link to="/sign-up">Sign Up</Link>
                        </a>
                      </p>
                      <p className="mb-2  text-center">
                        {t("or")}
                      </p>
                      <p className="mb-0  text-center">
                        <Button style={{backgroundColor: "white", borderColor: "red"}}><FcGoogle size={35}></FcGoogle><span style={{color:"black", marginLeft: "10px"}}>Login with google</span></Button>
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        <a lassName="text-primary fw-bold">
                          <Link to="/">{t("dentrangchu")}</Link>
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