import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function NhaXeAdminAdd(){

    return(
        <>
        <Container style={{marginTop:"50px", marginBottom:"50px"}}>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
                <div className="border border-3 border-primary"></div>
                <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                    <div className="mb-3">
                        <Form>
                        <Form.Group className="mb-3"
                        >
                            <Form.Label className="text-center">
                            Tên nhà xe
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên nhà xe" />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" placeholder="Nhập số điện thoại" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                            Giới thiệu
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Nhập giới thiệu" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                            Trạng thái hoạt động
                            </Form.Label>
                            <br></br>

                            <Form.Check
                                inline
                                defaultChecked
                                label="on"
                                name="Group1"
                                type="radio"
                                id="activeOn"
                            />
                            <Form.Check
                                inline
                                label="off"
                                name="Group1"
                                type="radio"
                                id="activeOff"
                            />
                                        
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Update
                            </Button>
                        </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Or{" "}
                            <a href="/admin/nha-xe" className="text-primary fw-bold">
                            Back
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
        </>
    );
}

export default NhaXeAdminAdd;