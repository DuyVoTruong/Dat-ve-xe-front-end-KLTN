import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { getTinhThanhPho } from "../../hooks/useFunction";

function BenXeAddForm({showFormAdd, setShowFormAdd, addBenXe}){

    useEffect(()=>{
        if(showFormAdd===true){
            //getTinhThanhPho();
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
            <Modal.Title>Thêm bến xe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTenBenXe">
                        <Form.Label className="text-center">
                        Tên bến xe
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên nhà xe" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiaChi">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                            <option>Chọn tỉnh thành</option>
                        </Form.Select>
                        
                        <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                            <option>Chọn quận huyện</option>
                        </Form.Select>
                                
                        <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                            <option>Chọn phường xã</option>
                        </Form.Select>

                        <Form.Control type="text" placeholder="Nhập số nhà" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                    Trạng thái hoạt động
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
              Close
            </Button>
            <Button variant="primary" type="button" onClick={AddBenXe}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default BenXeAddForm;