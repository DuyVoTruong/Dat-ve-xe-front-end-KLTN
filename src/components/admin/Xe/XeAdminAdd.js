import { useEffect } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import useLoaiXe from "../../hooks/useLoaiXe";
import useNhaXe from "../../hooks/useNhaXe";

function XeAdminAdd({showForm, setShowForm, add}){

    const {nhaXe} = useNhaXe();
    const {loaiXe} = useLoaiXe();

    const handleClose = () => {setShowForm(false)};

    const AddXe = (event) => {
        event.preventDefault();
        let bienSoXe = document.getElementById("formBienSoXe").value;
        let tenLoaiXe = document.getElementById("formSelectTenLoaiXe").value;
        let tenNhaXe = document.getElementById("formSelectTenNhaXe").value;
        if(!bienSoXe||!tenLoaiXe||!tenNhaXe){
            window.alert("Bạn phải điền đầy đủ thông tin!!!")
        }else{
            let data = {
                bienSoXe,tenLoaiXe,tenNhaXe,
            }
            add(data);
        }
    }

    return (
        <>
          <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thêm loại xe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBienSoXe">
                    <Form.Label className="text-center">
                    Biển số xe
                    </Form.Label>
                    <Form.Control type="text" placeholder="Nhập biển số xe" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formTenNhaXe">
                    <Form.Label className="text-center">
                    Tên nhà xe
                    </Form.Label>
                    <Form.Select id="formSelectTenNhaXe">
                        {
                            nhaXe.map((nx, index)=>{
                                return(
                                    <>
                                    <option key={index}>{nx.tenNhaXe}</option>
                                    </>
                                );
                            })
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTenLoaiXe">
                    <Form.Label className="text-center">
                    Tên loại xe
                    </Form.Label>
                    <Form.Select id="formSelectTenLoaiXe">
                        {
                            loaiXe.map((lx, index)=>{
                                return(
                                    <>
                                    <option key={index}>{lx.tenLoaiXe}</option>
                                    </>
                                );
                            })
                        }
                    </Form.Select>
                </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="button" onClick={AddXe}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    );


    return(
        <>
        <div className="container-dashboard">
            <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
            <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                    <div className="mb-3">
                        <Form>
                        <Form.Group className="mb-3" controlId="formBienSoXe">
                            <Form.Label className="text-center">
                            Biển số xe
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập biển số xe" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formTenNhaXe">
                            <Form.Label className="text-center">
                            Tên nhà xe
                            </Form.Label>
                            <Form.Select id="formSelectTenNhaXe">
                                {
                                    nhaXe.map((nx, index)=>{
                                        return(
                                            <>
                                            <option key={index}>{nx.tenNhaXe}</option>
                                            </>
                                        );
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTenLoaiXe">
                            <Form.Label className="text-center">
                            Tên loại xe
                            </Form.Label>
                            <Form.Select id="formSelectTenLoaiXe">
                                {
                                    loaiXe.map((lx, index)=>{
                                        return(
                                            <>
                                            <option key={index}>{lx.tenLoaiXe}</option>
                                            </>
                                        );
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <div className="d-grid">
                            <Button onClick={AddXe} variant="primary" type="button">
                            Add
                            </Button>
                        </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Or{" "}
                            <a href="/admin/ben-xe" className="text-primary fw-bold">
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

export default XeAdminAdd;