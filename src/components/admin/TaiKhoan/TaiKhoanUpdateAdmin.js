import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {getTinhThanhPho} from "../../hooks/useFunction"
import { useTranslation } from "react-i18next";
import InfoMessage from "../../alert message/InfoMessage";

function TaiKhoanUpdateAdmin({showForm, setShowForm, update, role, tk}){

    const {t} = useTranslation();

    const handleClose = () => {setShowForm(false)};

    const UpdateHandler = (e) =>{
        e.preventDefault();
        if(role==="USER"){
            let username = tk.taiKhoan.username;
            let hoTen = document.getElementById("formHoTen").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            let diaChi = document.getElementById("formDiaChi").value;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!hoTen||!cmnd||!sdt||!email||!diaChi){
                InfoMessage();
            }
            else{
                let data = {
                    role,username,hoTen,cmnd,sdt,email,diaChi,trangThaiHoatDong
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
            let tenNhaXe = document.getElementById("formTenNhaXe").value;
            let sdt = document.getElementById("formSDT").value;
            let moTaNgan = document.getElementById("formMoTaNgan").value;
            let diaChi = soNha+", "+xa+", "+huyen+", "+tinh;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!tenNhaXe||!sdt||!moTaNgan||!diaChi||!soNha||tinh===t("Chọn tỉnh thành")||huyen===t("Chọn quận huyện")||xa===t("Chọn phường xã")){
                InfoMessage();
            }
            else{
                let data = {
                    role,username,tenNhaXe,sdt,moTaNgan,diaChi,trangThaiHoatDong
                }
                try{
                    update(tk.id, data);
                    //redirectTaiKhoanNhaXeHome();
                } catch {

                }
            }
        } else if(role==="ADMIN"){
            let username = tk.taiKhoan.username;
            let name = document.getElementById("formTenAdmin").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!name||!cmnd||!sdt||!email){
                InfoMessage();
            }
            else{
                let data = {
                    role,username,name,cmnd,sdt,email,trangThaiHoatDong
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
    })

    if(role==="USER"){

        return (
            <>
              <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{t("Cập nhật tài khoản người dùng")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={UpdateHandler}>
                    <Form.Group className="mb-3" controlId="formHoTen">
                        <Form.Label className="text-center">
                        {t("Họ tên")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập họ tên của người dùng")} defaultValue={tk.hoTen}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCMND">
                        <Form.Label className="text-center">
                        {t("CMND")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập CMND")} defaultValue={tk.cmnd}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        {t("Số điện thoại")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập số điện thoại của người dùng")} defaultValue={tk.sdt}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label className="text-center">
                        Email
                        </Form.Label>
                        <Form.Control type="email" placeholder={t("Nhập Email")} defaultValue={tk.email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiaChi">
                        <Form.Label className="text-center">
                        {t("Địa chỉ")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập địa chỉ của người dùng")} defaultValue={tk.diaChi}/>
                    </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    {t("Đóng")}
                  </Button>
                  <Button variant="primary" type="button" onClick={UpdateHandler}>
                    {t("Cập nhật")}
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
                  <Modal.Title>{t("Cập nhật tài khoản nhà xe")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={UpdateHandler}>
                    <Form.Group className="mb-3" controlId="formTenNhaXe">
                        <Form.Label className="text-center">
                        {t("Tên nhà xe")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập tên nhà xe")} defaultValue={tk.tenNhaXe}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        {t("Số điện thoại")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập số điện thoại của nhà xe")} defaultValue={tk.sdt}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMoTaNgan">
                        <Form.Label className="text-center">
                        {t("Mô tả ngắn")}
                        </Form.Label>
                        <Form.Control  as="textarea" rows={3} placeholder={t("Nhập mô tả ngắn")} defaultValue={tk.moTaNgan}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiaChi">
                        <Form.Label>{t("diachi")}</Form.Label>
                        <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                            <option>{t("Chọn tỉnh thành")}</option>
                        </Form.Select>
                        
                        <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                            <option>{t("Chọn quận huyện")}</option>
                        </Form.Select>
                                
                        <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                            <option>{t("Chọn phường xã")}</option>
                        </Form.Select>
                        {
                            (()=>{
                                if(tk.diaChi){
                                    return(
                                        <Form.Control type="text" placeholder={t("Nhập số nhà")} defaultValue={tk.diaChi.split(", ")[0]}/>
                                    )
                                }
                            })()
                        }
                    </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    {t("Đóng")}
                  </Button>
                  <Button variant="primary" type="button" onClick={UpdateHandler}>
                    {t("Cập nhật")}
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
                  <Modal.Title>{t("Cập nhật tài khoản quản trị viên")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={UpdateHandler}>

                    <Form.Group className="mb-3" controlId="formTenAdmin">
                        <Form.Label className="text-center">
                        {t("Họ tên")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập họ tên cuả quản trị viên")} defaultValue={tk.name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCMND">
                        <Form.Label className="text-center">
                        {t("CMND")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập CMND")} defaultValue={tk.cmnd}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSDT">
                        <Form.Label className="text-center">
                        {t("Số điện thoại")}
                        </Form.Label>
                        <Form.Control  type="text" placeholder={t("Nhập số điện thoại của quản trị viên")} defaultValue={tk.sdt}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label className="text-center">
                        Email
                        </Form.Label>
                        <Form.Control  type="email" placeholder={t("Nhập Email")} defaultValue={tk.email}/>
                    </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    {t("Đóng")}
                  </Button>
                  <Button variant="primary" type="button" onClick={UpdateHandler}>
                    {t("Cập nhật")}
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        );

    }
}

export default TaiKhoanUpdateAdmin;