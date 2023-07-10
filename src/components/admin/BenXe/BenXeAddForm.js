import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getTinhThanhPho } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";
import InfoMessage from "../../alert message/InfoMessage";

function BenXeAddForm({showFormAdd, setShowFormAdd, addBenXe}){

    const {t} = useTranslation();

    useEffect(()=>{
        if(showFormAdd===true){
            getTinhThanhPho();
        }
    },[showFormAdd]);

    const AddBenXe = (event) => {
        //event.preventDefault();
        let tenBenXe = document.getElementById("formTenBenXe").value;
        let soNha = document.getElementById("formDiaChi").value;
        let tinh = document.getElementById("city")[document.getElementById('city').selectedIndex].innerHTML;
        let huyen = document.getElementById("district")[document.getElementById('district').selectedIndex].innerHTML;
        let xa = document.getElementById("ward")[document.getElementById('ward').selectedIndex].innerHTML;
        let trangThai="ACTIVE";
        let groupTrangThai = document.getElementsByName("Group")
        for(let i=0;i<groupTrangThai.length;i++){
            if(groupTrangThai[i].checked===true){
                trangThai=groupTrangThai[i].value
            }
        }
        if(!soNha||tinh===t("Chọn tỉnh thành")||huyen===t("Chọn quận huyện")||xa===t("Chọn phường xã")||!trangThai){
            InfoMessage();
        }else{
            let data = {
                tenBenXe:tenBenXe,
                diaChiChiTiet:soNha+", "+xa+", "+huyen+", "+tinh,
                tinhThanh: tinh,
                trangThai: trangThai
            }
            addBenXe(data);
        }
    }
  
    const handleClose = () => {setShowFormAdd(false)};
  
    return (
      <>
        <Modal show={showFormAdd} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{t("Thêm bến xe")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTenBenXe">
                        <Form.Label className="text-center">
                        {t("Tên bến xe")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("Nhập tên bến xe")} />
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

                        <Form.Control type="text" placeholder={t("Nhập số nhà")} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                    {t("Trạng thái")}
                    </Form.Label>
                    <br></br>
                        <Form.Check
                            inline
                            defaultChecked
                            label="on"
                            name="Group"
                            type="radio"
                            id="activeOn"
                            value={"ACTIVE"}
                        />
                        <Form.Check
                            inline
                            label="off"
                            name="Group"
                            type="radio"
                            id="activeOff"
                            value={"INACTIVE"}
                        />
                    </Form.Group>

                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t("Đóng")}
            </Button>
            <Button variant="primary" type="button" onClick={AddBenXe}>
              {t("Thêm")}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default BenXeAddForm;