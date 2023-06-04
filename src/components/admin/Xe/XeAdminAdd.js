import { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { MyContext } from "../../../App";
import useLoaiXe from "../../hooks/useLoaiXe";
import useNhaXe from "../../hooks/useNhaXe";
import { useTranslation } from "react-i18next";

function XeAdminAdd({showForm, setShowForm, add}){

    const account = useContext(MyContext).account;
    const {nhaXe} = useNhaXe(account.role);
    const {loaiXe} = useLoaiXe();
    const { t } = useTranslation();

    const handleClose = () => {setShowForm(false)};

    const AddXe = (event) => {
        event.preventDefault();
        let tenNhaXe;
        if(account.role==="NHAXE"){
            nhaXe.map(nx=>{
                if(nx.id==account.id){
                    tenNhaXe=nx.tenNhaXe;
                }
            })
        }
        else{
            tenNhaXe = document.getElementById("formSelectTenNhaXe").value;
        }
        let bienSoXe = document.getElementById("formBienSoXe").value;
        let tenLoaiXe = document.getElementById("formSelectTenLoaiXe").value;
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
              <Modal.Title>{t("themxe")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBienSoXe">
                    <Form.Label className="text-center">
                    {t("biensoxe")}
                    </Form.Label>
                    <Form.Control type="text" placeholder={t("nhapbiensoxe")} />
                </Form.Group>
                
                {
                    (()=>{
                        if(account.role!=="NHAXE"){
                            return(
                                <Form.Group className="mb-3" controlId="formTenNhaXe">
                                    <Form.Label className="text-center">
                                    {t("nhaxe")}
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
                            )
                        }
                    })()
                }

                <Form.Group className="mb-3" controlId="formTenLoaiXe">
                    <Form.Label className="text-center">
                    {t("loaixe")}
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
                {t("dong")}
              </Button>
              <Button variant="primary" type="button" onClick={AddXe}>
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