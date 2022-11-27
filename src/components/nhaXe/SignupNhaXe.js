import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignupNhaXe(){

    const nav = useNavigate();
    const redirectNhaXe =()=> {
        nav("/nha-xe/sign-up");
    }

    const redirectNguoiDung =()=> {
        nav("/sign-up");
    }

    return(
        <div>
        <Container style={{paddingTop:"50px", paddingBottom:"50px"}}>
            <h1 style={{textAlign:"center", marginBottom:"30px"}}>Trang đăng ký dành cho nhà xe</h1>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
                <div className="border border-3 border-primary"></div>
                <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                    <p>Đăng ký với vai trò</p>
                    <div style={{marginBottom: "30px"}}>
                        <Button onClick={redirectNhaXe} variant="outline-primary">Nhà xe</Button>{' '}
                        <Button onClick={redirectNguoiDung}variant="outline-primary">Người dùng</Button>{' '}
                    </div>
                    <div className="mb-3">
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                            Username
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                            Tên nhà xe
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập họ tên" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                            Số điện thoại
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập số điện thoại" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                            Giới thiệu
                            </Form.Label>
                            <Form.Control  as="textarea" rows={3} placeholder="Nhập nội dung giới thiệu" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Sign Up
                            </Button>
                        </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Or{" "}
                            <a href="/login" className="text-primary fw-bold">
                            Login
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
    );
}

export default SignupNhaXe;