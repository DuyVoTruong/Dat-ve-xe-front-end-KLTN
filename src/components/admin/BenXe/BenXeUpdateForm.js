import { memo, useCallback, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { httpGetBenXeById } from "../../hooks/Request";
import useBenXe from "../../hooks/useBenXe";
import {getBenXeById, getTinhThanhPho} from "../../hooks/useFunction"
import { useTranslation } from "react-i18next";
import InfoMessage from "../../alert message/InfoMessage";

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
        if(!soNha||tinh===t("Chọn tỉnh thành")||huyen===t("Chọn quận huyện")||xa===t("Chọn phường xã")){
            InfoMessage();
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
              <Modal.Title>{t("Cập nhật thông tin bến xe")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="formTenBenXe">
                          <Form.Label className="text-center">
                          {t("Tên bến xe")}
                          </Form.Label>
                          <Form.Control type="text" placeholder={t("Nhập tên bến xe")} defaultValue={benXe.tenBenXe}/>
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formDiaChi">
                          <Form.Label>{t("Địa chỉ")}</Form.Label>
                          <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                              <option>{t("Chọn tỉnh thành")}</option>
                          </Form.Select>
                          
                          <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                              <option>{t("Chọn quận huyện")}</option>
                          </Form.Select>
                                  
                          <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                              <option>{t("Chọn phường xã")}</option>
                          </Form.Select>
  
                            {
                                (()=>{
                                    if(benXe.diaChiChiTiet){
                                        return(
                                            <Form.Control type="text" placeholder={t("Nhập số nhà")} defaultValue={benXe.diaChiChiTiet.split(', ')[0]}/>
                                        )
                                    }
                                })()
                            }

                      </Form.Group>
                  </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t("Đóng")}
              </Button>
              <Button variant="primary" type="button" onClick={UpdateBenXe}>
                {t("Cập nhật")}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    );
}

export default BenXeUpdateForm;