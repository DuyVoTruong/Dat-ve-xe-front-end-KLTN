import { memo, useCallback, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { httpGetBenXeById } from "../../hooks/Request";
import useBenXe from "../../hooks/useBenXe";
import {getBenXeById, getTinhThanhPho} from "../../hooks/useFunction"
import { useTranslation } from "react-i18next";

function BenXeUpdateForm({showForm, setShowForm, update, id}){

    const [benXe, setBenXe] = useState([]);
    const {t} = useTranslation();
    useEffect(()=>{
        if(showForm===true){
            getBenXeById(id).then(data=>{
                setBenXe(data);
            });
            getTinhThanhPho();
        }
    },[showForm])

    const handleClose = () => {setShowForm(false)};

    const UpdateBenXe = (event) => {
        event.preventDefault();
        let tenBenXe = document.getElementById("formTenBenXe").value;
        let soNha = document.getElementById("formDiaChi").value;
        let tinh = document.getElementById("city")[document.getElementById('city').selectedIndex].innerHTML;
        let huyen = document.getElementById("district")[document.getElementById('district').selectedIndex].innerHTML;
        let xa = document.getElementById("ward")[document.getElementById('ward').selectedIndex].innerHTML;
        if(!soNha||tinh==="Chọn tỉnh thành"||huyen==="Chọn quận huyện"||xa==="Chọn phường xã"){
            window.alert("Bạn phải điền đầy đủ thông tin!!!")
        }else{
            let data = {
                tenBenXe:tenBenXe,
                diaChiChiTiet:soNha+", "+xa+", "+huyen+", "+tinh,
                tinhThanh: tinh,
                trangThai: benXe.trangThai
            }
            update(id, data);
        }
    }


    return (
        <>
          <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{t("capnhatthongtinbenxe")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="formTenBenXe">
                          <Form.Label className="text-center">
                          {t("tenbenxe")}
                          </Form.Label>
                          <Form.Control type="text" placeholder={t("nhaptenbenxe")} defaultValue={benXe.tenBenXe}/>
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formDiaChi">
                          <Form.Label>{t("diachi")}</Form.Label>
                          <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                              <option>{t("chontinhthanh")}</option>
                          </Form.Select>
                          
                          <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                              <option>{t("chonquanhuyen")}</option>
                          </Form.Select>
                                  
                          <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                              <option>{t("chonphuongxa")}</option>
                          </Form.Select>
  
                            {
                                (()=>{
                                    if(benXe.diaChiChiTiet){
                                        return(
                                            <Form.Control type="text" placeholder={t("nhapsonha")} defaultValue={benXe.diaChiChiTiet.split(', ')[0]}/>
                                        )
                                    }
                                })()
                            }

                      </Form.Group>
                  </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t("dong")}
              </Button>
              <Button variant="primary" type="button" onClick={UpdateBenXe}>
                {t("capnhat")}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    );
}

export default BenXeUpdateForm;