import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function NhaXeAdminUpdate(){

    const [nhaXe,setNhaXe]=useState([]);
    const idNhaXe=window.location.pathname.split('/')[4]

    useEffect(()=>{
        fetch('/data/nhaXe.json').then(res=>res.json()).then(data=>{
            setNhaXe(data)
        });
    },[]);

    return(
        <>
        {nhaXe.map((nx,index)=>{
            console.log(idNhaXe)
            if(nx.id==idNhaXe){
                return(
        <Container key={index} style={{marginTop:"50px", marginBottom:"50px"}}>
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
                            <Form.Control type="text" placeholder="Nhập tên nhà xe" value={nx.tenNhaXe}/>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" placeholder="Nhập số điện thoại" value={nx.sdt}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                            Giới thiệu
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Nhập giới thiệu" value={nx.gioiThieu}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                            Trạng thái hoạt động
                            </Form.Label>
                            <br></br>

                            {
                                new Array(1).fill(0).map((_,index)=>{
                                if(nx.trangThaiHoatDong=="1"){
                                    return(
                                        <>
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
                                        </>
                                    );
                                }
                                else{
                                    return(
                                        <>
                                        <Form.Check
                                            inline
                                            label="on"
                                            name="Group1"
                                            type="radio"
                                            id="activeOn"
                                        />
                                        <Form.Check
                                            inline
                                            defaultChecked
                                            label="off"
                                            name="Group1"
                                            type="radio"
                                            id="activeOff"
                                        />
                                        </>
                                    );
                                }
                                })
                            }
                            
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
                );
            }
        })}
        </>
    );
}

export default NhaXeAdminUpdate;