import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import {getTinhThanhPho} from "../../hooks/useFunction"

function TaiKhoanAddAdmin({showForm, setShowForm, add, role}){


    const handleClose = () => {setShowForm(false)};

    const nav = useNavigate();
    const redirectTaiKhoanUserHome =()=>{
        nav("/admin/tai-khoan/user");
    }
    const redirectTaiKhoanNhaXeHome =()=>{
        nav("/admin/tai-khoan/nha-xe");
    }
    const redirectTaiKhoanAdminHome =()=>{
        nav("/admin/tai-khoan/admin");
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
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,hoTen,cmnd,sdt,email,diaChi
                }
                try{
                    add(data);
                    //redirectTaiKhoanUserHome();
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
            if(!role||!username||!password||!tenNhaXe||!sdt||!moTaNgan||!diaChi||!soNha||tinh==="Chọn tỉnh thành"||huyen==="Chọn quận huyện"||xa==="Chọn phường xã"){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,tenNhaXe,sdt,moTaNgan,diaChi
                }
                try{
                    add(data);
                    //redirectTaiKhoanNhaXeHome();
                } catch {

                }
            }
        } else if(role==="ADMIN"){
            let username = document.getElementById("formUsername").value;
            let password = document.getElementById("formPassword").value;
            let name = document.getElementById("formTenAdmin").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            if(!role||!username||!password||!name||!cmnd||!sdt||!email){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,name,cmnd,sdt,email
                }
                try{
                    add(data);
                    //redirectTaiKhoanAdminHome();
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

        return (
            <>
              <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thêm tài khoản user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={signUpHandler}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">
                        Username
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Nhập password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHoTen">
                        <Form.Label className="text-center">
                        Họ tên
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập họ tên" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCMND">
                        <Form.Label className="text-center">
                        CMND
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập CMND" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        Số điện thoại
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập số điện thoại" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label className="text-center">
                        Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Nhập Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiaChi">
                        <Form.Label className="text-center">
                        Địa chỉ
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập địa chỉ" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                        Add
                        </Button>
                    </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="button" onClick={signUpHandler}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

        return(
            <div style={{marginTop: "30px", marginBottom: "50px"}}>
                <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                    <Card className="shadow">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <p>Thêm tài khoản với vai trò</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={0}
                            inline
                            label="Người dùng"
                            name="group"
                            type={"radio"}
                            defaultChecked
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={0}
                            inline
                            label="Nhà xe"
                            name="group"
                            type={"radio"}
                            value={"NHAXE"}
                            id={`radio-nhaxe`}
                        />
                        <Form.Check
                            onChange={0}
                            inline
                            label="Admin"
                            name="group"
                            type={"radio"}
                            value={"ADMIN"}
                            id={`radio-admin`}
                        />
                        </div>
                        <div className="mb-3">
                            <Form onSubmit={signUpHandler}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-center">
                                Username
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập username" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Nhập password" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formHoTen">
                                <Form.Label className="text-center">
                                Họ tên
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ tên" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formCMND">
                                <Form.Label className="text-center">
                                CMND
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập CMND" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                Số điện thoại
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập số điện thoại" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-center">
                                Email
                                </Form.Label>
                                <Form.Control type="email" placeholder="Nhập Email" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formDiaChi">
                                <Form.Label className="text-center">
                                Địa chỉ
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập địa chỉ" />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                Add
                                </Button>
                            </div>
                            </Form>
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

        return (
            <>
              <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thêm tài khoản nhà xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={signUpHandler}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">
                        Username
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Nhập password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTenNhaXe">
                        <Form.Label className="text-center">
                        Tên nhà xe
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên nhà xe" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        Số điện thoại
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập số điện thoại" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMoTaNgan">
                        <Form.Label className="text-center">
                        Giới thiệu
                        </Form.Label>
                        <Form.Control  as="textarea" rows={3} placeholder="Nhập nội dung giới thiệu" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiaChi">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                            <option>Chọn tỉnh thành</option>
                        </Form.Select>
                        
                        <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                            <option>Chọn quận huyện</option>
                        </Form.Select>
                                
                        <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                            <option>Chọn phường xã</option>
                        </Form.Select>

                        <Form.Control type="text" placeholder="Nhập số nhà" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                        Add
                        </Button>
                    </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="button" onClick={signUpHandler}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

        return(
            <div style={{marginTop: "30px", marginBottom: "50px"}}>
                <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                    <Card className="shadow">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <p>Thêm tài khoản với vai trò</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={0}
                            inline
                            label="Người dùng"
                            name="group"
                            type={"radio"}
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={0}
                            inline
                            label="Nhà xe"
                            name="group"
                            type={"radio"}
                            defaultChecked
                            value={"NHAXE"}
                            id={`radio-nhaxe`}
                        />
                        <Form.Check
                            onChange={0}
                            inline
                            label="Admin"
                            name="group"
                            type={"radio"}
                            value={"ADMIN"}
                            id={`radio-admin`}
                        />
                        </div>
                        <div className="mb-3">
                            <Form onSubmit={signUpHandler}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-center">
                                Username
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập username" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Nhập password" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formTenNhaXe">
                                <Form.Label className="text-center">
                                Tên nhà xe
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập tên nhà xe" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                Số điện thoại
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập số điện thoại" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formMoTaNgan">
                                <Form.Label className="text-center">
                                Giới thiệu
                                </Form.Label>
                                <Form.Control  as="textarea" rows={3} placeholder="Nhập nội dung giới thiệu" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formDiaChi">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                                    <option>Chọn tỉnh thành</option>
                                </Form.Select>
                                
                                <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                                    <option>Chọn quận huyện</option>
                                </Form.Select>
                                        
                                <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                                    <option>Chọn phường xã</option>
                                </Form.Select>
    
                                <Form.Control type="text" placeholder="Nhập số nhà" />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                Add
                                </Button>
                            </div>
                            </Form>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
                </div>
            </div>
        );
    } else if(role==="ADMIN"){

        return (
            <>
              <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thêm tài khoản admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={signUpHandler}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">
                        Username
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Nhập password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTenAdmin">
                        <Form.Label className="text-center">
                        Họ tên
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập họ tên của admin" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCMND">
                        <Form.Label className="text-center">
                        CMND
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập số CMND" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        Số điện thoại
                        </Form.Label>
                        <Form.Control  type="text" placeholder="Nhập số điện thoại" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label className="text-center">
                        Email
                        </Form.Label>
                        <Form.Control  type="email" placeholder="Nhập Email" />
                    </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="button" onClick={signUpHandler}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

        return(
            <div style={{marginTop: "30px", marginBottom: "50px"}}>
                <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                    <Card className="shadow">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <p>Thêm tài khoản với vai trò</p>
                        <div style={{marginBottom: "30px", marginTop:"20px"}}>
                        <Form.Check
                            onChange={0}
                            inline
                            label="Người dùng"
                            name="group"
                            type={"radio"}
                            value={"USER"}
                            id={`radio-nguoidung`}
                        />
                        <Form.Check
                            onChange={0}
                            inline
                            label="Nhà xe"
                            name="group"
                            type={"radio"}
                            value={"NHAXE"}
                            id={`radio-nhaxe`}
                        />
                        <Form.Check
                            onChange={0}
                            inline
                            label="Admin"
                            name="group"
                            type={"radio"}
                            defaultChecked
                            value={"ADMIN"}
                            id={`radio-admin`}
                        />
                        </div>
                        <div className="mb-3">
                            <Form onSubmit={signUpHandler}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-center">
                                Username
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập username" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Nhập password" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formTenAdmin">
                                <Form.Label className="text-center">
                                Họ tên
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ tên của admin" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formCMND">
                                <Form.Label className="text-center">
                                CMND
                                </Form.Label>
                                <Form.Control type="text" placeholder="Nhập số CMND" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formSDT">
                                <Form.Label className="text-center">
                                Số điện thoại
                                </Form.Label>
                                <Form.Control  type="text" placeholder="Nhập số điện thoại" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-center">
                                Email
                                </Form.Label>
                                <Form.Control  type="email" placeholder="Nhập Email" />
                            </Form.Group>
    
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                Add
                                </Button>
                            </div>
                            </Form>
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

export default TaiKhoanAddAdmin;