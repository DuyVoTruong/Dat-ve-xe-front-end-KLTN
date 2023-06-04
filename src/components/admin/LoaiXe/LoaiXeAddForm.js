import { useEffect } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLoaiXe from "../../hooks/useLoaiXe";
import { useTranslation } from "react-i18next";

function LoaiXeAddForm({showForm, setShowForm, add}){

    const {t} = useTranslation();

    const AddLoaiXe = (event) => {
        event.preventDefault();
        let tenLoaiXe = document.getElementById("formTenLoaiXe").value;
        let sucChua = Number(document.getElementById("formSucChua").value);
        if(!tenLoaiXe||!sucChua){
            window.alert("Bạn phải điền đầy đủ thông tin!!!")
        }else{
            if(sucChua<1){
                window.alert("Sức chứa của xe phải lớn hơn 0")
            }else{
                let data = {
                    tenLoaiXe,sucChua
                }
                add(data);
            }
        }
    }

    const handleClose = () => {setShowForm(false)};

    return (
        <>
          <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{t("themloaixe")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTenLoaiXe">
                        <Form.Label className="text-center">
                        {t("tenloaixe")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("nhaptenloaixe")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSucChua">
                        <Form.Label>{t("succhua")}</Form.Label>
                        <Form.Control type="number" min={1} defaultValue={1} placeholder={t("nhapsucchuacuaxe")} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t("dong")}
              </Button>
              <Button variant="primary" type="button" onClick={AddLoaiXe}>
                {t("them")}
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
                        <Form.Group className="mb-3" controlId="formTenLoaiXe">
                            <Form.Label className="text-center">
                            Tên loại xe
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên loại xe" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSucChua">
                            <Form.Label>Sức chứa</Form.Label>
                            <Form.Control type="number" min={1} defaultValue={1} placeholder="Nhập sức chứa của xe" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button onClick={AddLoaiXe} variant="primary" type="button">
                            Add
                            </Button>
                        </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Or{" "}
                            <Link className="text-primary fw-bold" to="/admin/loai-xe">Back</Link>
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

export default LoaiXeAddForm;