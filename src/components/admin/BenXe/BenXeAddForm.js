import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getTinhThanhPho } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";

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
        if(!soNha||tinh==="Chọn tỉnh thành"||huyen==="Chọn quận huyện"||xa==="Chọn phường xã"||!trangThai){
            window.alert("Bạn phải điền đầy đủ thông tin!!!")
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
            <Modal.Title>{t("thembenxe")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTenBenXe">
                        <Form.Label className="text-center">
                        {t("tenbenxe")}
                        </Form.Label>
                        <Form.Control type="text" placeholder={t("nhaptenbenxe")} />
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

                        <Form.Control type="text" placeholder={t("nhapsonha")} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                    {t("trangthai")}
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
              {t("dong")}
            </Button>
            <Button variant="primary" type="button" onClick={AddBenXe}>
              {t("them")}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default BenXeAddForm;