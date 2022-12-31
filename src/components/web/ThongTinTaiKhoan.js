import { useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

function UpdateInForForm({thongTinTaiKhoan}){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const update =()=>{
    let hoTen = document.getElementById("HoTenForm");
    let cmnd = document.getElementById("CMNDForm");
    let sdt = document.getElementById("SDTForm");
    let diaChi = document.getElementById("DiaChiForm");
    let email = document.getElementById("EmailForm");
    console.log(hoTen+" "+cmnd+" "+sdt+" "+diaChi+" "+email);
  }

  return (
    <>
      <Button className="m-3" variant="primary" onClick={handleShow}>
        Cập nhật thông tin tài khoản
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật thông tin tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="HoTenForm">
                <Form.Label className="text-center">
                Họ tên
                </Form.Label>
                <Form.Control type="text" placeholder="Nhập họ tên" defaultValue={thongTinTaiKhoan.hoTen}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="CMNDForm">
                <Form.Label className="text-center">
                CMND
                </Form.Label>
                <Form.Control type="text" placeholder="Nhập CMND" defaultValue={thongTinTaiKhoan.cmnd}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="SDTForm">
                <Form.Label className="text-center">
                Số điện thoại
                </Form.Label>
                <Form.Control type="text" placeholder="Nhập số điện thoại" defaultValue={thongTinTaiKhoan.sdt}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="DiaChiForm">
                <Form.Label className="text-center">
                Địa chỉ
                </Form.Label>
                <Form.Control type="text" placeholder="Nhập địa chỉ" defaultValue={thongTinTaiKhoan.diaChi}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="EmailForm">
                <Form.Label className="text-center">
                Email
                </Form.Label>
                <Form.Control type="email" placeholder="Nhập email" defaultValue={thongTinTaiKhoan.email}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function UpdateUserNamePassWordForm({thongTinTaiKhoan}){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update =()=>{
        let username = document.getElementById("usernameForm").value;
        let password = document.getElementById("passwordForm").value;
        console.log(username+" "+password);
    }

    return (
        <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            Cập nhật Username và Password
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Cập nhật Username và Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="usernameForm">
                    <Form.Label className="text-center">
                    Username
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nhập username" defaultValue={thongTinTaiKhoan.hoTen}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="passwordForm">
                    <Form.Label className="text-center">
                    Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Nhập password" defaultValue={thongTinTaiKhoan.cmnd}/>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={update}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

const ThongTinTaiKhoan =()=> {

    const thongTinTaiKhoan = {
        id:5,
        hoTen: "user",
        cmnd: "cmnd_user",
        sdt: "sdt_user",
        email: "email_user",
        diaChi: "diaChi_user",
        username: "username",
        password: "password",
        trangThai: "ACTIVE"
    }

    return (
        <>
        <div style={{margin: "20px"}}>
            <h3 style={{textAlign: "center"}}>Thông tin tài khoản</h3>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md="10" sm="10" >
                    <Card className="shadow">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="6">
                        <FloatingLabel label="Username" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.username}/>
                        </FloatingLabel>
                        </Col>
                        <Col md="6">
                        <FloatingLabel label="Password" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.password}/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="6">
                        <FloatingLabel label="Họ tên" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.hoTen}/>
                        </FloatingLabel>
                        </Col>
                        <Col md="6">
                        <FloatingLabel label="CMND" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.cmnd}/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="6">
                        <FloatingLabel label="Số điện thoại" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.sdt}/>
                        </FloatingLabel>
                        </Col>
                        <Col md="6">
                        <FloatingLabel label="email" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.email}/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md="6">
                        <FloatingLabel label="Địa chỉ" className="m-3">
                            <Form.Control disabled type="text" placeholder="name@example.com" defaultValue={thongTinTaiKhoan.diaChi}/>
                        </FloatingLabel>
                        </Col>
                        <Col md="6">
                        <Form.Group className="m-3">
                            <Form.Text className="mb-3">Trạng thái hoạt động</Form.Text>
                            {
                                (()=>{
                                    if(thongTinTaiKhoan.trangThai === "ACTIVE"){
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
                            <UpdateInForForm key={"user"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan}></UpdateInForForm>
                            <UpdateUserNamePassWordForm key={"taiKhoan"+thongTinTaiKhoan.id} thongTinTaiKhoan={thongTinTaiKhoan}></UpdateUserNamePassWordForm>
                        </Col>
                    </Row>

                    </Card>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default ThongTinTaiKhoan;