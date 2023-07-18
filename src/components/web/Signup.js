import { useContext, useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import {getTinhThanhPho} from "../hooks/useFunction"
import { httpPostSignUp } from "../hooks/Request";
import { MyContext } from "../../App";
import { t } from "i18next";
import swal from "sweetalert";

function Signup(){

    const [role, setRole] = useState("USER");
    const {signUp} = useSignUp();
    const token = useContext(MyContext).token;

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
            let picture = "https://firebasestorage.googleapis.com/v0/b/uploadimage-83b65.appspot.com/o/images%2Fdefault_avatar.png989f063f-864d-497f-aaee-0ad210b3b5e2?alt=media&token=2d270ccf-7dec-4403-973d-6a2109557688";
            if(!role||!username||!password||!hoTen||!cmnd||!sdt||!email||!diaChi){
                swal({
                    title: t("Bạn phải điền đầy đủ thông tin"),
                    text: "",
                    icon: "info",
                    button: "Ok",
                });
            }
            else{
                let data = {
                    role,username,password,hoTen,cmnd,sdt,email,diaChi,picture
                }
                try {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    signUp(data);
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
            let email = document.getElementById("formEmail").value;
            let sdt = document.getElementById("formSDT").value;
            let moTaNgan = document.getElementById("formMoTaNgan").value;
            let diaChi = soNha+", "+xa+", "+huyen+", "+tinh;
            let picture = "https://firebasestorage.googleapis.com/v0/b/uploadimage-83b65.appspot.com/o/images%2Fxe.png6d58e73d-c4b6-4721-9609-1ab8cfe28540?alt=media&token=1b2a2ef3-d287-4d72-8a7e-d4245271b437";
            if(!role||!username||!password||!tenNhaXe||!email||!sdt||!moTaNgan||!diaChi||!soNha||tinh===t("Chọn tỉnh thành")||huyen===t("Chọn quận huyện")||xa===t("Chọn phường xã")){
                swal({
                    title: t("Bạn phải điền đầy đủ thông tin"),
                    text: "",
                    icon: "info",
                    button: "Ok",
                });
            }
            else{
                let data = {
                    role,username,password,tenNhaXe,email,sdt,moTaNgan,diaChi,picture
                }
                try {
                    httpPostSignUp(data, token).then(res => res.json()).then(data =>{
                        if (data.status == 200){
                            swal({
                                title: t("Thành công!!! Vui lòng liên hệ quản trị viên để được kích hoạt tài khoản qua số điện thoại: 0366441943!!!"),
                                text: "",
                                icon: "success",
                                button: "Ok",
                            });
                        }
                        else {
                            swal({
                                title: t("Đã xảy ra lỗi, vui lòng thực hiện lại"),
                                text: "",
                                icon: "error",
                                button: "Ok",
                            });
                        }
                    });
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
                        <p>{t("Đăng ký với vai trò")}</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("Người dùng")}
                            name="group"
                            type={"radio"}
                            defaultChecked
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("Nhà xe")}
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
                                <Form.Control type="text" placeholder={t("Nhập username")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Enter Password</Form.Label>
                                <Form.Control type="password" placeholder={t("Nhập password")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formHoTen">
                                <Form.Label className="text-center">
                                {t("Họ tên")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("Nhập họ tên của bạn")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formCMND">
                                <Form.Label className="text-center">
                                {t("CMND")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("Nhập CMND")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                {t("Số điện thoại")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("Nhập số điện thoại của bạn")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-center">
                                Email
                                </Form.Label>
                                <Form.Control type="email" placeholder={t("Nhập Email")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formDiaChi">
                                <Form.Label className="text-center">
                                {t("Địa chỉ")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("Nhập địa chỉ")} />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                {t("Đăng ký")}
                                </Button>
                            </div>
                            </Form>
                            <div className="mt-3">
                            <p className="mb-0  text-center">
                                {t("Hoặc")}{" "}
                                <Link className="text-primary fw-bold" to={"/login"}>{t("Đăng nhập")}</Link>
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
                        <p>{t("Đăng ký với vai trò")}</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("Người dùng")}
                            name="group"
                            type={"radio"}
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={(e)=>setRole(e.target.value)}
                            inline
                            label={t("Nhà xe")}
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
                                <Form.Control type="text" placeholder={t("Nhập username")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder={t("Nhập password")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formTenNhaXe">
                                <Form.Label className="text-center">
                                {t("Tên nhà xe")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("Nhập tên nhà xe")} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-center">
                                Email
                                </Form.Label>
                                <Form.Control type="email" placeholder={t("Nhập Email")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                {t("Số điện thoại")}
                                </Form.Label>
                                <Form.Control type="text" placeholder={t("Nhập số điện thoại của nhà xe")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formMoTaNgan">
                                <Form.Label className="text-center">
                                {t("Mô tả ngắn")}
                                </Form.Label>
                                <Form.Control  as="textarea" rows={3} placeholder={t("Nhập nội dung mô tả ngắn")} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formDiaChi">
                                <Form.Label>{t("Địa chỉ")}</Form.Label>
                                <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                                    <option>{t("Chọn tỉnh thành")}</option>
                                </Form.Select>
                                
                                <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                                    <option>{t("Chọn quận huyện")}</option>
                                </Form.Select>
                                        
                                <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                                    <option>{t("Chọn phường xã")}</option>
                                </Form.Select>
    
                                <Form.Control type="text" placeholder={t("Nhập số nhà")} />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                {t("Đăng ký")}
                                </Button>
                            </div>
                            </Form>
                            <div className="mt-3">
                            <p className="mb-0  text-center">
                                {t("Hoặc")}{" "}
                                <Link className="text-primary fw-bold" to={"/login"}>{t("Đăng nhập")}</Link>
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