import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetAdminById, httpGetNhaXeById, httpGetNhaXeUserById, httpGetUserById, httpPutAdmin, httpPutNhaXe, httpPutTaiKhoan, httpPutUser } from "../hooks/Request";
import { useTranslation } from "react-i18next";

function UpdateInForForm({thongTinTaiKhoan, setLoad}){
  const token = useContext(MyContext).token;
  const account = useContext(MyContext).account;
  const [show, setShow] = useState(false);
  const {t} = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const update =()=>{
    if(account.role==="USER"){
        let hoTen = document.getElementById("HoTenForm").value;
        let cmnd = document.getElementById("CMNDForm").value;
        let sdt = document.getElementById("SDTForm").value;
        let diaChi = document.getElementById("DiaChiForm").value;
        let email = document.getElementById("EmailForm").value;
        let trangThaiHoatDong = thongTinTaiKhoan.taiKhoan.trangThaiHoatDong;
        let role = "USER";
        if(!hoTen||!cmnd||!sdt||!diaChi||!email||!trangThaiHoatDong||!role){
            window.alert(t("vuilongdiendayduthongtin"))
        }else{

            let data = {
                hoTen,cmnd,sdt,diaChi,email,trangThaiHoatDong,role
            }

            try{
                httpPutUser(thongTinTaiKhoan.id,data,token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        window.alert(t("capnhatthanhcong"));
                        setLoad(true);
                    }
                    else{
                        if(data.status==403){
                            window.alert(t("vuilongdangnhaplai"));
                        }
                    }
                })
            }catch(err){
                window.alert(err.status);
            }
        }
    }else if(account.role==="NHAXE"){
        let tenNhaXe = document.getElementById("TenNhaXeForm").value;
        let sdt = document.getElementById("SDTForm").value;
        let diaChi = document.getElementById("DiaChiForm").value;
        let moTaNgan = document.getElementById("MoTaNganForm").value;
        let trangThaiHoatDong = thongTinTaiKhoan.taiKhoan.trangThaiHoatDong;
        let role = "NHAXE";
        if(!tenNhaXe||!sdt||!diaChi||!moTaNgan||!trangThaiHoatDong||!role){
            window.alert(t("vuilongdiendayduthongtin"))
        }else{

            let data = {
                tenNhaXe,sdt,diaChi,moTaNgan,trangThaiHoatDong,role
            }

            try{
                httpPutNhaXe(thongTinTaiKhoan.id,data,token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        window.alert(t("capnhatthanhcong"));
                        setLoad(true);
                    }
                    else{
                        if(data.status==403){
                            window.alert(t("vuilongdangnhaplai"));
                        }
                    }
                })
            }catch(err){
                window.alert(err.status);
            }
        }
    }else if(account.role==="ADMIN"){
        let name = document.getElementById("HoTenForm").value;
        let sdt = document.getElementById("SDTForm").value;
        let email = document.getElementById("EmailForm").value;
        let cmnd = document.getElementById("CMNDForm").value;
        let trangThaiHoatDong = thongTinTaiKhoan.taiKhoan.trangThaiHoatDong;
        let role = "ADMIN";
        if(!name||!sdt||!email||!cmnd||!trangThaiHoatDong||!role){
            window.alert(t("vuilongdiendayduthongtin"))
        }else{

            let data = {
                name,sdt,email,cmnd,trangThaiHoatDong,role
            }

            try{
                httpPutAdmin(thongTinTaiKhoan.id,data,token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        window.alert(t("capnhatthanhcong"));
                        setLoad(true);
                    }
                    else{
                        if(data.status==403){
                            window.alert(t("vuilongdangnhaplai"));
                        }
                    }
                    console.log(data)
                })
            }catch(err){
                window.alert(err.status);
            }
        }
    }
  }

  if(account.role==="USER"){
    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            {t("capnhatthongtintaikhoan")}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{t("capnhatthongtintaikhoan")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="HoTenForm">
                    <Form.Label className="text-center">
                    {t("hoten")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhaphoten")} defaultValue={thongTinTaiKhoan.hoTen}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="CMNDForm">
                    <Form.Label className="text-center">
                    {t("cmnd")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapcmnd")} defaultValue={thongTinTaiKhoan.cmnd}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="SDTForm">
                    <Form.Label className="text-center">
                    {t("sodienthoai")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapsodienthoai")} defaultValue={thongTinTaiKhoan.sdt}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="DiaChiForm">
                    <Form.Label className="text-center">
                    {t("diachi")}
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nhập địa chỉ" defaultValue={thongTinTaiKhoan.diaChi}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="EmailForm">
                    <Form.Label className="text-center">
                    Email
                    </Form.Label>
                    <Form.Control type="email" placeholder={t("nhapemail")} defaultValue={thongTinTaiKhoan.email}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("dong")}
            </Button>
            <Button variant="primary" onClick={update}>
                {t("capnhat")}
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
  }else if(account.role==="NHAXE"){
    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            {t("capnhatthongtintaikhoan")}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{t("capnhatthongtintaikhoan")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="TenNhaXeForm">
                    <Form.Label className="text-center">
                    {t("tennhaxe")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhaptennhaxe")} defaultValue={thongTinTaiKhoan.tenNhaXe}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="SDTForm">
                    <Form.Label className="text-center">
                    {t("sodienthoai")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapsodienthoai")} defaultValue={thongTinTaiKhoan.sdt}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="DiaChiForm">
                    <Form.Label className="text-center">
                    {t("diachi")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapdiachi")} defaultValue={thongTinTaiKhoan.diaChi}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="MoTaNganForm">
                    <Form.Label className="text-center">
                    {t("motangan")}
                    </Form.Label>
                    <Form.Control type="email" placeholder={t("nhapmotangan")} defaultValue={thongTinTaiKhoan.moTaNgan}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("dong")}
            </Button>
            <Button variant="primary" onClick={update}>
                {t("capnhat")}
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
  }else if(account.role==="ADMIN"){
    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            {t("capnhatthongtintaikhoan")}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{t("capnhatthongtintaikhoan")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="HoTenForm">
                    <Form.Label className="text-center">
                    {t("hoten")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhaphoten")} defaultValue={thongTinTaiKhoan.name}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="SDTForm">
                    <Form.Label className="text-center">
                    {t("sodienthoai")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapsodienthoai")} defaultValue={thongTinTaiKhoan.sdt}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="EmailForm">
                    <Form.Label className="text-center">
                    Email
                    </Form.Label>
                    <Form.Control type="email" placeholder={t("nhapemail")} defaultValue={thongTinTaiKhoan.email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="CMNDForm">
                    <Form.Label className="text-center">
                    {t("cmnd")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapcmnd")} defaultValue={thongTinTaiKhoan.cmnd}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("dong")}
            </Button>
            <Button variant="primary" onClick={update}>
                {t("capnhat")}
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
  }
}

function UpdateUserNamePassWordForm({thongTinTaiKhoan, setLoad}){
    
    const [show, setShow] = useState(false);
    const setAccount = useContext(MyContext).setAccount;
    const token = useContext(MyContext).token;
    const nav = useNavigate();
    const {t} = useTranslation();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update =()=>{
        let password = document.getElementById("passwordForm").value;
        let confirmPassword = document.getElementById("confirmPasswordForm").value;
        if(!password||!confirmPassword){
            window.alert(t("vuilongdiendayduthongtin"))
        }
        else if(password!==confirmPassword){
            window.alert(t("passwordkhongtrungnhau"))
        }
        else {
            try{
                console.log("abc")
                httpPutTaiKhoan(thongTinTaiKhoan.taiKhoan.id, {password}, token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        window.alert(t("thaydoipasswordthanhcong"));
                        localStorage.clear();
                        setAccount();
                        nav("/home");
                    }else if(data.status==403){
                        window.alert(t("vuilongdangnhaplai"));
                    }else{
                        window.alert(data.message)
                    }
                })
            }catch(err){
                window.alert(err)
            }
        }
    }

    if(thongTinTaiKhoan){
        return (
            <>
            <Button className="m-3" variant="primary" onClick={handleShow}>
                {t("thaydoipassword")}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{t("thaydoipassword")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="passwordForm">
                        <Form.Label className="text-center">
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("nhappassword")}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPasswordForm">
                        <Form.Label className="text-center">
                        Confirm Password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("nhapconfirmpassword")}/>
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t("dong")}
                </Button>
                <Button variant="primary" onClick={update}>
                    {t("capnhat")}
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

const ThongTinTaiKhoan =()=> {

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);
    const [load, setLoad] = useState(false);
    const {t} = useTranslation();


    useEffect(()=>{

        if(account.role==="USER"){
            httpGetUserById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }else if(account.role==="NHAXE"){
            httpGetNhaXeById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }else if(account.role==="ADMIN"){
            httpGetAdminById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }
        setLoad(false);
    },[load])

    console.log(thongTinTaiKhoan)
    if(account.role==="USER"){
        if(thongTinTaiKhoan.taiKhoan){
            return (
                <>
                <div style={{margin: "20px"}}>
                    <h3 style={{textAlign: "center"}}>{t("thongtintaikhoan")}</h3>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="10" sm="10" >
                            <Card className="shadow">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label="Username" className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.taiKhoan.username}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label="Password" className="m-3">
                                    <Form.Control disabled type="password" placeholder="name@example.com" value={"*******"}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("hoten")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.hoTen}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("cmnd")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.cmnd}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("sodienthoai")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.sdt}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label="email" className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.email}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("diachi")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.diaChi}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <Form.Group className="m-3">
                                    <Form.Text className="mb-3">{t("trangthai")}</Form.Text>
                                    {
                                        (()=>{
                                            if(thongTinTaiKhoan.taiKhoan.trangThaiHoatDong === "ACTIVE"){
                                                return(
                                                    <>
                                                    <Form>
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="on"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOn"}
                                                            defaultChecked
                                                        />
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="off"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOff"}
                                                        />
                                                    </Form>
                                                    </>
                                                )
                                            } else {
                                                return(
                                                    <>
                                                    <Form>
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="on"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOn"}
                                                        />
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="off"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOff"}
                                                            defaultChecked
                                                        />
                                                    </Form>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
    
                                </Form.Group>
                                </Col>
                            </Row>
    
    
                            <Row>
                                <Col md="10">
                                    <UpdateInForForm key={"user"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan} setLoad={setLoad}></UpdateInForForm>
                                    <UpdateUserNamePassWordForm key={"taiKhoan"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan} setLoad={setLoad}></UpdateUserNamePassWordForm>
                                </Col>
                            </Row>
    
                            </Card>
                        </Col>
                    </Row>
                </div>
                </>
            );
        }
    }else if(account.role==="NHAXE"){
        if(thongTinTaiKhoan.taiKhoan){
            return (
                <>
                <div style={{margin: "20px"}}>
                    <h3 style={{textAlign: "center"}}>{t("thongtintaikhoan")}</h3>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="10" sm="10" >
                            <Card className="shadow">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label="Username" className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.taiKhoan.username}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label="Password" className="m-3">
                                    <Form.Control disabled type="password" placeholder="name@example.com" value={"*******"}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("sodienthoai")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.sdt}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("motangan")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.moTaNgan}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("diachi")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.diaChi}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("tennhaxe")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.tenNhaXe}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                <Form.Group className="m-3">
                                    <Form.Text className="mb-3">{t("trangthai")}</Form.Text>
                                    {
                                        (()=>{
                                            if(thongTinTaiKhoan.taiKhoan.trangThaiHoatDong === "ACTIVE"){
                                                return(
                                                    <>
                                                    <Form>
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="on"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOn"}
                                                            defaultChecked
                                                        />
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="off"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOff"}
                                                        />
                                                    </Form>
                                                    </>
                                                )
                                            } else {
                                                return(
                                                    <>
                                                    <Form>
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="on"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOn"}
                                                        />
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="off"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOff"}
                                                            defaultChecked
                                                        />
                                                    </Form>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
    
                                </Form.Group>
                                </Col>
                            </Row>
    
    
                            <Row>
                                <Col md="10">
                                    <UpdateInForForm key={"user"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan} setLoad={setLoad}></UpdateInForForm>
                                    <UpdateUserNamePassWordForm key={"taiKhoan"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan} setLoad={setLoad}></UpdateUserNamePassWordForm>
                                </Col>
                            </Row>
    
                            </Card>
                        </Col>
                    </Row>
                </div>
                </>
            );
        }
    }else if(account.role==="ADMIN"){
        if(thongTinTaiKhoan.taiKhoan){
            return (
                <>
                <div style={{margin: "20px"}}>
                    <h3 style={{textAlign: "center"}}>{t("thongtintaikhoan")}</h3>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="10" sm="10" >
                            <Card className="shadow">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label="Username" className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.taiKhoan.username}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label="Password" className="m-3">
                                    <Form.Control disabled type="password" placeholder="name@example.com" value={"*******"}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("sodienthoai")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.sdt}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label="Email" className="m-3">
                                    <Form.Control disabled type="email" placeholder="name@example.com" value={thongTinTaiKhoan.email}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("hoten")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.name}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("cmnd")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.cmnd}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                <Form.Group className="m-3">
                                    <Form.Text className="mb-3">{t("trangthai")}</Form.Text>
                                    {
                                        (()=>{
                                            if(thongTinTaiKhoan.taiKhoan.trangThaiHoatDong === "ACTIVE"){
                                                return(
                                                    <>
                                                    <Form>
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="on"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOn"}
                                                            defaultChecked
                                                        />
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="off"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOff"}
                                                        />
                                                    </Form>
                                                    </>
                                                )
                                            } else {
                                                return(
                                                    <>
                                                    <Form>
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="on"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOn"}
                                                        />
                                                        <Form.Check
                                                            disabled
                                                            inline
                                                            label="off"
                                                            name="group"
                                                            type={"radio"}
                                                            id={"activeOff"}
                                                            defaultChecked
                                                        />
                                                    </Form>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
    
                                </Form.Group>
                                </Col>
                            </Row>
    
    
                            <Row>
                                <Col md="10">
                                    <UpdateInForForm key={"user"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan} setLoad={setLoad}></UpdateInForForm>
                                    <UpdateUserNamePassWordForm key={"taiKhoan"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan} setLoad={setLoad}></UpdateUserNamePassWordForm>
                                </Col>
                            </Row>
    
                            </Card>
                        </Col>
                    </Row>
                </div>
                </>
            );
        }
    }
}

export default ThongTinTaiKhoan;