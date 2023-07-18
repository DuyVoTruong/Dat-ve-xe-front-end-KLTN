import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { httpLoginGoogleUpdate } from "../hooks/Request";
import swal from "sweetalert";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const CapNhatLoginGoogle =()=>{

    const {t} = useTranslation();
    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const nav = useNavigate();

    const capNhatLoginGoogle =()=>{
        let cmnd = document.getElementById("formCMND").value;
        let sdt = document.getElementById("formSDT").value;
        let diaChi = document.getElementById("formDiaChi").value;
        

        let data ={
            id: account.id,
            cmnd: cmnd,
            sdt: sdt,
            diaChi: diaChi
        }

        if(!account.id||!cmnd||!sdt||!diaChi){
            swal({
                title: t("Bạn phải điền đầy đủ thông tin"),
                text: "",
                icon: "info",
                button: "Ok",
            });
        } else {
            httpLoginGoogleUpdate(data, token).then(res=>res.json()).then(data=>{
                if(data.status==409){
                    swal({
                        title: t("Thông tin bị trùng"),
                        text: "",
                        icon: "info",
                        button: "Ok",
                    });
                } else if(data.status == 200){
                    nav("/home");
                    swal({
                        title: t("Cập nhật thành công"),
                        text: "",
                        icon: "success",
                        button: "Ok",
                    });
                }
            })
        }
    }

    return(
        <Container>
        <Row className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
          <Col md={8} lg={6} xs={12}>
          <div style={{border: "solid 10px blue", background:"blue", borderRadius: "8px 8px 0px 0px"}}></div>
            <Card className="shadow" style={{borderRadius: "0px 0px 8px 8px"}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form>

                        <Form.Group className="mb-3" controlId="formCMND">
                            <Form.Label className="text-center">
                            {t("CMND")}
                            </Form.Label>
                            <Form.Control type="text" placeholder={t("Nhập CMND")} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSDT">
                            <Form.Label className="text-center">
                            {t("Số điện thoại")}
                            </Form.Label>
                            <Form.Control type="text" placeholder={t("Nhập số điện thoại của bạn")} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDiaChi">
                            <Form.Label className="text-center">
                            {t("Địa chỉ")}
                            </Form.Label>
                            <Form.Control type="text" placeholder={t("Nhập địa chỉ")} />
                        </Form.Group>
                      <div style={{marginTop: "30px"}} className="d-grid">
                        <Button variant="primary" type="button" onClick={capNhatLoginGoogle}>
                          {t("Gửi")}
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
    );
}

export default CapNhatLoginGoogle;