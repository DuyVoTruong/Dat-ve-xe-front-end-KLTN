import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {getTinhThanhPho} from "../../hooks/useFunction"

function TaiKhoanUpdateAdmin({showForm, setShowForm, update, role, tk}){


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

    const UpdateHandler = (e) =>{
        e.preventDefault();
        if(role==="USER"){
            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let hoTen = document.getElementById("formHoTen").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            let diaChi = document.getElementById("formDiaChi").value;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!password||!hoTen||!cmnd||!sdt||!email||!diaChi){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,hoTen,cmnd,sdt,email,diaChi,trangThaiHoatDong
                }
                try{
                    update(tk.id, data);
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

            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let tenNhaXe = document.getElementById("formTenNhaXe").value;
            let sdt = document.getElementById("formSDT").value;
            let moTaNgan = document.getElementById("formMoTaNgan").value;
            let diaChi = soNha+", "+xa+", "+huyen+", "+tinh;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!password||!tenNhaXe||!sdt||!moTaNgan||!diaChi||!soNha||tinh==="Chọn tỉnh thành"||huyen==="Chọn quận huyện"||xa==="Chọn phường xã"){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,tenNhaXe,sdt,moTaNgan,diaChi,trangThaiHoatDong
                }
                try{
                    update(tk.id, data);
                    //redirectTaiKhoanNhaXeHome();
                } catch {

                }
            }
        } else if(role==="ADMIN"){
            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let name = document.getElementById("formTenAdmin").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!password||!name||!cmnd||!sdt||!email){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,name,cmnd,sdt,email,trangThaiHoatDong
                }
                try{
                    update(tk.id, data);
                    //redirectTaiKhoanAdminHome();
                } catch(err) {
                    console.log(err)
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
                  <Modal.Title>Cập nhật tài khoản user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={UpdateHandler}>
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
                  <Button variant="primary" type="button" onClick={UpdateHandler}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

    }
    else if(role==="NHAXE"){

        return (
            <>
              <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Cập nhật tài khoản nhà xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={UpdateHandler}>
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
                  <Button variant="primary" type="button" onClick={UpdateHandler}>
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

    } else if(role==="ADMIN"){

        return (
            <>
              <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Cập nhật tài khoản admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={UpdateHandler}>

                    <Form.Group className="mb-3" controlId="formTenAdmin">
                        <Form.Label className="text-center">
                        Họ tên
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập họ tên của admin" defaultValue={tk.name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCMND">
                        <Form.Label className="text-center">
                        CMND
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập số CMND" defaultValue={tk.cmnd}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        Số điện thoại
                        </Form.Label>
                        <Form.Control  type="text" placeholder="Nhập số điện thoại" defaultValue={tk.sdt}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label className="text-center">
                        Email
                        </Form.Label>
                        <Form.Control  type="email" placeholder="Nhập Email" defaultValue={tk.email}/>
                    </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="button" onClick={UpdateHandler}>
                    Update
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

    }
}

export default TaiKhoanUpdateAdmin;