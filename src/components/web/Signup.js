import { useContext, useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import {getTinhThanhPho} from "../hooks/useFunction"
import { httpPostSignUp } from "../hooks/Request";
import { MyContext } from "../../App";
import { t } from "i18next";

function Signup(){

    const [role, setRole] = useState("USER");
    const {signUp} = useSignUp();
    const token = useContext(MyContext).token;

    const nav = useNavigate();
    const redirectLogin =()=> {
        nav("/login");
    }

    const signUpHandler = (e) =>{
        e.preventDefault();
        if(role==="USER"){
            let username = document.getElementById("formUsername").value;
            let password = document.getElementById("formPassword").value;
            let hoTen = document.getElementById("formHoTen").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            let diaChi = document.getElementById("formDiaChi").value;
            if(!role||!username||!password||!hoTen||!cmnd||!sdt||!email||!diaChi){
                window.alert(t("vuilongdiendayduthongtin"))
            }
            else{
                let data = {
                    role,username,password,hoTen,cmnd,sdt,email,diaChi
                }
                try {
                    signUp(data);
                    redirectLogin();
                } catch {

                }
            }
        }
        else if(role==="NHAXE"){
            let soNha = document.getElementById("formDiaChi").value;
            let tinh = document.getElementById("city")[document.getElementById('city').selectedIndex].innerHTML;
            let huyen = document.getElementById("district")[document.getElementById('district').selectedIndex].innerHTML;
            let xa = document.getElementById("ward")[document.getElementById('ward').selectedIndex].innerHTML;

            let username = document.getElementById("formUsername").value;
            let password = document.getElementById("formPassword").value;
            let tenNhaXe = document.getElementById("formTenNhaXe").value;
            let sdt = document.getElementById("formSDT").value;
            let moTaNgan = document.getElementById("formMoTaNgan").value;
            let diaChi = soNha+", "+xa+", "+huyen+", "+tinh;
            if(!role||!username||!password||!tenNhaXe||!sdt||!moTaNgan||!diaChi||!soNha||tinh===t("chontinhthanh")||huyen===t("chonquanhuyen")||xa===t("chonphuongxa")){
                window.alert(t("vuilongdiendayduthongtin"))
            }
            else{
                let data = {
                    role,username,password,tenNhaXe,sdt,moTaNgan,diaChi
                }
                try {
                    httpPostSignUp(data, token).then(res => res.json()).then(data =>{
                        if (data.status == 200){
                            alert(t("tinnhankichhoatnhaxe"));
                        }
                        else {
                            alert(data.message);
                        }
                    });
                    redirectLogin();
                } catch {

                }
            }
        }
    }

    useEffect(()=>{
        if(role==="NHAXE"){
            getTinhThanhPho();
        }
    },[role])

    if(role==="USER"){
        return(
            <div style={{marginTop: "30px"}}>
                {/*<h1 style={{textAlign:"center", marginBottom:"30px"}}>Trang đăng ký dành cho người dùng</h1>*/}
                <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue", borderRadius: "8px 8px 0px 0px"}}></div>
                    <Card className="shadow" style={{borderRadius: "0px 0px 8px 8px"}}>
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">WebTour</h2>
                        <p>Đăng ký với vai trò</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("nguoidung")}
                            name="group"
                            type={"radio"}
                            defaultChecked
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("nhaxe")}
                            name="group"
                            type={"radio"}
                            value={"NHAXE"}
                            id={`radio-nhaxe`}
                        />
                        </div>
                        <div className="mb-3">
                            <Form onSubmit={signUpHandler}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-center">
                                Username
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhapusername")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Enter Password</Form.Label>
                                <Form.Control type="password" placeholder={t("nhappassword")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formHoTen">
                                <Form.Label className="text-center">
                                {t("hoten")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhaphoten")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formCMND">
                                <Form.Label className="text-center">
                                {t("cmnd")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhapcmnd")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                {t("sodienthoai")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhapsodienthoai")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-center">
                                Email
                                </Form.Label>
                                <Form.Control type="email" placeholder={t("nhapemail")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formDiaChi">
                                <Form.Label className="text-center">
                                {t("diachi")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhapdiachi")} />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                {t("signup")}
                                </Button>
                            </div>
                            </Form>
                            <div className="mt-3">
                            <p className="mb-0  text-center">
                                {t("or")}{" "}
                                <Link className="text-primary fw-bold" to={"/login"}>{t("login")}</Link>
                            </p>
                            </div>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
                </div>
            </div>
        );
    }
    else if(role==="NHAXE"){
        return(
            <div style={{marginTop: "30px"}}>
                {/*<h1 style={{textAlign:"center", marginBottom:"30px"}}>Trang đăng ký dành cho nhà xe</h1>*/}
                <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue", borderRadius: "8px 8px 0px 0px"}}></div>
                    <Card className="shadow" style={{borderRadius: "0px 0px 8px 8px"}}>
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">WebTour</h2>
                        <p>{t("dangkyvoivaitro")}</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("nguoidung")}
                            name="group"
                            type={"radio"}
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("nhaxe")}
                            name="group"
                            type={"radio"}
                            defaultChecked
                            value={"NHAXE"}
                            id={`radio-nhaxe`}
                        />
                        </div>
                        <div className="mb-3">
                            <Form onSubmit={signUpHandler}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-center">
                                Username
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhapusername")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder={t("nhappassword")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formTenNhaXe">
                                <Form.Label className="text-center">
                                {t("tennhaxe")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhaptennhaxe")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                {t("sodienthoai")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("nhapsodienthoai")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formMoTaNgan">
                                <Form.Label className="text-center">
                                {t("motangan")}
                                </Form.Label>
                                <Form.Control  as="textarea" rows={3} placeholder={t("nhapnoidungmotangan")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formDiaChi">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                                    <option>{t("chontinhthanh")}</option>
                                </Form.Select>
                                
                                <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                                    <option>{t("chonquanhuyen")}</option>
                                </Form.Select>
                                        
                                <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                                    <option>{t("chonphuongxa")}</option>
                                </Form.Select>
    
                                <Form.Control type="text" placeholder={t("nhapsonha")} />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                {t("signup")}
                                </Button>
                            </div>
                            </Form>
                            <div className="mt-3">
                            <p className="mb-0  text-center">
                                {t("or")}{" "}
                                <Link className="text-primary fw-bold" to={"/login"}>{t("login")}</Link>
                            </p>
                            </div>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
                </div>
            </div>
        );
    }
}

export default Signup;