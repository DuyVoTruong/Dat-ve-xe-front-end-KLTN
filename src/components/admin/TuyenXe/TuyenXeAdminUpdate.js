import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function TuyenXeAdminUpdate(){

    const idTuyenXe=window.location.pathname.split('/')[4]
    const [xe,setXe]=useState([]);
    const [tuyenXe,setTuyenXe]=useState([]);
    const [benXe,setBenXe]=useState([]);
    const [nhaXe,setNhaXe]=useState([]);
    let idBenXeDi;
    let idBenXeDen;
    let idXe;
    let idNhaXe;
    let tenNhaXe;
    let gioKhoiHanh;
    let ngayDi;
    let thoiGianHanhTrinh;
    let giaVe;
    let active;

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
            <div className="container-dashboard">
                <Row className="d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <div className="mb-3">
                        <Form>
                        {
                            tuyenXe.map(tx=>{
                                if(tx.id==idTuyenXe){
                                    idBenXeDi=tx.id_benXeDi;
                                    idBenXeDen=tx.id_benXeDen;
                                    idXe=tx.id_xe;
                                    gioKhoiHanh=tx.gioKhoiHanh;
                                    ngayDi=tx.ngayDi;
                                    thoiGianHanhTrinh=tx.thoiGianHanhTrinh;
                                    giaVe=tx.giaVe;
                                    active=tx.active;
                                    xe.map(x=>{
                                        if(x.id==idXe){
                                            idNhaXe=x.id_nhaXe;
                                            nhaXe.map(nx=>{
                                                if(nx.id==idNhaXe){
                                                    tenNhaXe=nx.tenNhaXe;
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Bến xe đi
                            </Form.Label>
                            <Form.Select id="benXeDi">
                                {benXe.map(bx=>{
                                    if(bx.id==idBenXeDi){
                                        return(
                                        <option key={`benXeDi${bx.id}`} value={bx.id} selected>{bx.tenBenXe}</option>
                                        )
                                    }
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
                                    if(bx.id==idBenXeDen){
                                        return(
                                        <option key={`benXeDen${bx.id}`} value={bx.id} selected>{bx.tenBenXe}</option>
                                        )
                                    }
                                    return(
                                        <option key={`benXeDen${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Xe của nhà xe {tenNhaXe}
                            </Form.Label>
                            <Form.Select id="xe">
                                {xe.map(x=>{
                                    if(x.id==idXe){
                                        return(
                                        <option key={`xe${x.id}`} value={x.id} selected>{x.bienSoXe}</option>
                                        )
                                    }
                                    if(x.id_nhaXe==idNhaXe){
                                        return(
                                            <option key={`xe${x.id}`} value={x.id}>{x.bienSoXe}</option>
                                        )
                                    }
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Giờ khởi hành
                            </Form.Label>
                            <Form.Control id="gioKhoiHanh" type="text" defaultValue={gioKhoiHanh}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Ngày đi (yy-mm-dd)
                            </Form.Label>
                            <Form.Control id="ngayDi" type="date" defaultValue={ngayDi} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Thời gian hành trình
                            </Form.Label>
                            <Form.Control id="thoiGianHanhTrinh" type="text" defaultValue={thoiGianHanhTrinh}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Giá vé
                            </Form.Label>
                            <Form.Control id="giaVe" type="text" defaultValue={giaVe}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                            Trạng thái hoạt động
                            </Form.Label>
                            <br></br>
                            {
                                new Array(1).fill(0).map((_,index)=>{
                                if(active=="1"){
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
                            <Button variant="primary" type="button">
                                Update
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
        </>
    );
}

export default TuyenXeAdminUpdate;