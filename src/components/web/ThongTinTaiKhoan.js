import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Image, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetAdminById, httpGetNhaXeById, httpGetNhaXeUserById, httpGetUserById, httpPutAdmin, httpPutNhaXe, httpPutTaiKhoan, httpPutUser } from "../hooks/Request";
import { useTranslation } from "react-i18next";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import swal from "sweetalert";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase";

function UpdateInForForm({thongTinTaiKhoan, setLoad}){
  const token = useContext(MyContext).token;
  const account = useContext(MyContext).account;
  const [show, setShow] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const [urlImageUpload, setUrlImageUpload] = useState(thongTinTaiKhoan.picture);
  const {t} = useTranslation();

  const handleClose = () => {setShow(false); window.location.reload();}
  const handleShow = () => setShow(true);
    
  const uploadImage =()=>{
    if(imageUpload == null) {
        swal({
            title: t("Chưa chọn hình ảnh"),
            text: "",
            icon: "info",
            button: "Ok",
        });
    }

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot)=>{
        getDownloadURL(snaphsot.ref).then((url)=>{
            setUrlImageUpload(url);
        })
        swal({
            title: t("Hình ảnh đã được tải lên"),
            text: "",
            icon: "success",
            button: "Ok",
        });
    })
  }

  const update =()=>{
    if(account.role==="USER"){
        let hoTen = document.getElementById("HoTenForm").value;
        let cmnd = document.getElementById("CMNDForm").value;
        let sdt = document.getElementById("SDTForm").value;
        let diaChi = document.getElementById("DiaChiForm").value;
        let email = thongTinTaiKhoan.email;
        let trangThaiHoatDong = thongTinTaiKhoan.taiKhoan.trangThaiHoatDong;
        let picture = urlImageUpload;
        let role = "USER";
        if(!hoTen||!cmnd||!sdt||!diaChi||!email||!trangThaiHoatDong||!role||!picture){
            swal({
                title: t("Bạn phải điền đầy đủ thông tin"),
                text: "",
                icon: "info",
                button: "Ok",
            });
        }else{

            let data = {
                hoTen,cmnd,sdt,diaChi,email,trangThaiHoatDong,role,picture
            }

            try{
                httpPutUser(thongTinTaiKhoan.id,data,token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        swal({
                            title: t("Cập nhật thành công"),
                            text: "",
                            icon: "success",
                            button: "Ok",
                        });
                        setLoad(true);
                    }
                    else{
                        if(data.status==403){
                            swal({
                                title: t("Vui lòng đăng nhập lại"),
                                text: "",
                                icon: "info",
                                button: "Ok",
                            });
                        }
                    }
                })
            }catch(err){
                swal({
                    title: err.status,
                    text: "",
                    icon: "error",
                    button: "Ok",
                });
            }
        }
    }else if(account.role==="NHAXE"){
        let tenNhaXe = document.getElementById("TenNhaXeForm").value;
        let sdt = document.getElementById("SDTForm").value;
        let email = thongTinTaiKhoan.email;
        let diaChi = document.getElementById("DiaChiForm").value;
        let moTaNgan = document.getElementById("MoTaNganForm").value;
        let trangThaiHoatDong = thongTinTaiKhoan.taiKhoan.trangThaiHoatDong;
        let picture = urlImageUpload;
        let role = "NHAXE";
        if(!tenNhaXe||!sdt||!email||!diaChi||!moTaNgan||!trangThaiHoatDong||!role||!picture){
            swal({
                title: t("Bạn phải điền đầy đủ thông tin"),
                text: "",
                icon: "info",
                button: "Ok",
            });
        }else{

            let data = {
                tenNhaXe,sdt,diaChi,moTaNgan,trangThaiHoatDong,role,email,picture
            }

            try{
                httpPutNhaXe(thongTinTaiKhoan.id,data,token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        swal({
                            title: t("Cập nhật thành công"),
                            text: "",
                            icon: "success",
                            button: "Ok",
                        });
                        setLoad(true);
                    }
                    else{
                        if(data.status==403){
                            swal({
                                title: t("Vui lòng đăng nhập lại"),
                                text: "",
                                icon: "info",
                                button: "Ok",
                            });
                        }
                    }
                })
            }catch(err){
                swal({
                    title: err.status,
                    text: "",
                    icon: "error",
                    button: "Ok",
                });
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
            swal({
                title: t("Bạn phải điền đầy đủ thông tin"),
                text: "",
                icon: "info",
                button: "Ok",
            });
        }else{

            let data = {
                name,sdt,email,cmnd,trangThaiHoatDong,role
            }

            try{
                httpPutAdmin(thongTinTaiKhoan.id,data,token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        swal({
                            title: t("Cập nhật thành công"),
                            text: "",
                            icon: "success",
                            button: "Ok",
                        });
                        setLoad(true);
                    }
                    else{
                        if(data.status==403){
                            swal({
                                title: t("Vui lòng đăng nhập lại"),
                                text: "",
                                icon: "info",
                                button: "Ok",
                            });
                        }
                    }
                    console.log(data)
                })
            }catch(err){
                swal({
                    title: err.status,
                    text: "",
                    icon: "error",
                    button: "Ok",
                });
            }
        }
    }
  }

  if(account.role==="USER"){
    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            {t("Cập nhật thông tin tài khoản")}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{t("Cập nhật thông tin tài khoản")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="HoTenForm">
                    <Form.Label className="text-center">
                    {t("Họ tên")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập họ tên của người dùng")} defaultValue={thongTinTaiKhoan.hoTen}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="CMNDForm">
                    <Form.Label className="text-center">
                    {t("CMND")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập CMND")} defaultValue={thongTinTaiKhoan.cmnd}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="SDTForm">
                    <Form.Label className="text-center">
                    {t("Số điện thoại")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập số điện thoại")} defaultValue={thongTinTaiKhoan.sdt}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="DiaChiForm">
                    <Form.Label className="text-center">
                    {t("Địa chỉ")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập địa chỉ")} defaultValue={thongTinTaiKhoan.diaChi}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="ImageForm">
                    <Form.Label className="text-center">
                   {t("Hình ảnh")}
                    </Form.Label>
                    <Form.Control 
                        type="file" 
                        onChange={(event)=>{
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px"}}>
                        <Image style={{objectFit: "scale-down"}} height={"150vh"} width={"200vw"} src={urlImageUpload}></Image>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px"}}>
                        <Button onClick={uploadImage}>Upload Image</Button>
                    </div>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("Đóng")}
            </Button>
            <Button variant="primary" onClick={update}>
                {t("Cập nhật")}
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
  }else if(account.role==="NHAXE"){
    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            {t("Cập nhật thông tin tài khoản")}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{t("Cập nhật thông tin tài khoản")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="TenNhaXeForm">
                    <Form.Label className="text-center">
                    {t("Tên nhà xe")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập tên nhà xe")} defaultValue={thongTinTaiKhoan.tenNhaXe}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="SDTForm">
                    <Form.Label className="text-center">
                    {t("Số điện thoại")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập số điện thoại của nhà xe")} defaultValue={thongTinTaiKhoan.sdt}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="DiaChiForm">
                    <Form.Label className="text-center">
                    {t("Địa chỉ")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập địa chỉ")} defaultValue={thongTinTaiKhoan.diaChi}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="MoTaNganForm">
                    <Form.Label className="text-center">
                    {t("Mô tả ngắn")}
                    </Form.Label>
                    <Form.Control type="email" placeholder={t("Nhập mô tả ngắn")} defaultValue={thongTinTaiKhoan.moTaNgan}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="ImageForm">
                    <Form.Label className="text-center">
                    {t("Hình ảnh")}
                    </Form.Label>
                    <Form.Control 
                        type="file" 
                        onChange={(event)=>{
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px"}}>
                        <Image style={{objectFit: "cover"}} height={"150vh"} width={"200vw"} src={urlImageUpload}></Image>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px"}}>
                        <Button onClick={uploadImage}>Upload Image</Button>
                    </div>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("Đóng")}
            </Button>
            <Button variant="primary" onClick={update}>
                {t("Cập nhật")}
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
  }else if(account.role==="ADMIN"){
    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            {t("Cập nhật thông tin tài khoản")}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{t("Cập nhật thông tin tài khoản")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="HoTenForm">
                    <Form.Label className="text-center">
                    {t("Họ tên")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập họ tên của quản trị viên")} defaultValue={thongTinTaiKhoan.name}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="SDTForm">
                    <Form.Label className="text-center">
                    {t("Số điện thoại")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập số điện thoại của quản trị viên")} defaultValue={thongTinTaiKhoan.sdt}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="EmailForm">
                    <Form.Label className="text-center">
                    Email
                    </Form.Label>
                    <Form.Control type="email" placeholder={t("Nhập Email")} defaultValue={thongTinTaiKhoan.email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="CMNDForm">
                    <Form.Label className="text-center">
                    {t("CMND")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("Nhập CMND")} defaultValue={thongTinTaiKhoan.cmnd}/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("Đóng")}
            </Button>
            <Button variant="primary" onClick={update}>
                {t("Cập nhật")}
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
            swal({
                title: t("Bạn phải điền đầy đủ thông tin"),
                text: "",
                icon: "info",
                button: "Ok",
            });
        }
        else if(password!==confirmPassword){
            swal({
                title: t("Mật khẩu mới và mật khẩu xác nhận không trùng nhau"),
                text: "",
                icon: "info",
                button: "Ok",
            });
        }
        else {
            try{
                console.log("abc")
                httpPutTaiKhoan(thongTinTaiKhoan.taiKhoan.id, {password}, token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        swal({
                            title: t("Thay đổi password thành công"),
                            text: "",
                            icon: "success",
                            button: "Ok",
                        });
                        localStorage.clear();
                        setAccount();
                        nav("/home");
                    }else if(data.status==403){
                        swal({
                            title: t("Vui lòng đăng nhập lại"),
                            text: "",
                            icon: "info",
                            button: "Ok",
                        });
                    }else{
                        swal({
                            title: t("Đã xảy ra lỗi, vui lòng thực hiện lại"),
                            text: "",
                            icon: "error",
                            button: "Ok",
                        });
                    }
                })
            }catch(err){
                swal({
                    title: t("Đã xảy ra lỗi, vui lòng thực hiện lại"),
                    text: "",
                    icon: "error",
                    button: "Ok",
                });
            }
        }
    }

    if(thongTinTaiKhoan){
        return (
            <>
            <Button className="m-3" variant="primary" onClick={handleShow}>
                {t("Thay đổi password")}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{t("Thay đổi password")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="passwordForm">
                        <Form.Label className="text-center">
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("Nhập password")}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPasswordForm">
                        <Form.Label className="text-center">
                        Confirm Password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("Nhập confirm password")}/>
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {t("Đóng")}
                </Button>
                <Button variant="primary" onClick={update}>
                    {t("Cập nhật")}
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
                    <h3 style={{textAlign: "center"}}>{t("Thông tin tài khoản")}</h3>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="10" sm="10" >
                            <Card className="shadow">
                          {
                            (()=>{
                                if(!thongTinTaiKhoan.taiKhoan.provider == "GOOGLE"){
                                    return(
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
                                    );
                                }
                            })()
                          }      
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("Họ tên")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.hoTen}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("CMND")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.cmnd}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("Số điện thoại")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.sdt}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label="Email" className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.email}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("Địa chỉ")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.diaChi}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <Form.Group className="m-3">
                                    <Form.Text className="mb-3">{t("Trạng thái")}</Form.Text>
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
                    <h3 style={{textAlign: "center"}}>{t("Thông tin tài khoản")}</h3>
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
                                <FloatingLabel label={t("Số điện thoại")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.sdt}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("Mô tả ngắn")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.moTaNgan}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col md="6">
                                <FloatingLabel label={t("Địa chỉ")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.diaChi}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("Tên nhà xe")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.tenNhaXe}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FloatingLabel label="Email" className="m-3">
                                        <Form.Control disabled type="email" placeholder="name@example.com" value={thongTinTaiKhoan.email}/>
                                    </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <Form.Group className="m-3">
                                    <Form.Text className="mb-3">{t("Trạng thái")}</Form.Text>
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
                    <h3 style={{textAlign: "center"}}>{t("Thông tin tài khoản")}</h3>
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
                                <FloatingLabel label={t("Số điện thoại")} className="m-3">
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
                                <FloatingLabel label={t("Họ tên")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.name}/>
                                </FloatingLabel>
                                </Col>
                                <Col md="6">
                                <FloatingLabel label={t("CMND")} className="m-3">
                                    <Form.Control disabled type="text" placeholder="name@example.com" value={thongTinTaiKhoan.cmnd}/>
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                <Form.Group className="m-3">
                                    <Form.Text className="mb-3">{t("Trạng thái")}</Form.Text>
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