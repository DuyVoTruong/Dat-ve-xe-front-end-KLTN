import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function TuyenXeNhaXeAdd(){

    const [xe,setXe]=useState([]);
    const [tuyenXe,setTuyenXe]=useState([]);
    const [benXe,setBenXe]=useState([]);
    const [nhaXe,setNhaXe]=useState([]);
    let tenNhaXe;
    let idTaiKhoanNhaXe=1;

    useEffect(()=>{
        fetch('/data/nhaXe.json').then(res=>res.json()).then(data=>{
            setNhaXe(data)
        });
        fetch('/data/xe.json').then(res=>res.json()).then(data=>{
            setXe(data)
        });
        fetch('/data/tuyenXe.json').then(res=>res.json()).then(data=>{
            setTuyenXe(data)
        });
        fetch('/data/benXe.json').then(res=>res.json()).then(data=>{
            setBenXe(data)
        });
    },[])

    return(
        <>
        <Container>
            <div>
                <Row className="d-flex justify-content-center align-items-center" style={{marginBottom: "200px", marginTop:"100px"}}>
                <Col md={8} lg={6} xs={12}>
                <div className="border border-3 border-primary"></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Bến xe đi
                            </Form.Label>
                            <Form.Select id="benXeDi">
                                {benXe.map(bx=>{
                                    return(
                                        <option key={`benXeDi${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Bến xe đến
                            </Form.Label>
                            <Form.Select id="benXeDen">
                                {benXe.map(bx=>{
                                    return(
                                        <option key={`benXeDen${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Xe
                            </Form.Label>
                            <Form.Select id="xe">
                                {xe.map(x=>{
                                    nhaXe.map(nx=>{
                                        if(x.id_nhaXe==nx.id){
                                            tenNhaXe=nx.tenNhaXe;
                                        }
                                    })
                                    if(x.id_nhaXe==idTaiKhoanNhaXe){
                                        return(
                                            <option key={`xe${x.id}`} value={x.id}>Biển số xe: {x.bienSoXe} - Nhà xe {tenNhaXe}</option>
                                        )
                                    }
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Giờ khởi hành
                            </Form.Label>
                            <Form.Control id="gioKhoiHanh" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Ngày đi (yy-mm-dd)
                            </Form.Label>
                            <Form.Control id="ngayDi" type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Thời gian hành trình
                            </Form.Label>
                            <Form.Control id="thoiGianHanhTrinh" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Giá vé
                            </Form.Label>
                            <Form.Control id="giaVe" type="text" />
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
                            <Button variant="primary" type="button">
                                Add
                            </Button>
                            </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Or{" "}
                            <a href="/admin/tuyen-xe" className="text-primary fw-bold">
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
            </div>
        </Container>
        </>
    );
}

export default TuyenXeNhaXeAdd;