import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { getTinhThanhPho } from "../../hooks/useFunction";

function ThayDoiMatKhau({showForm, setShowForm, update, role, tk}){


    const HandleUpdate = () => {
        //event.preventDefault();
        let password = document.getElementById("formPassword").value;
        let confirmPassword = document.getElementById("formConfirmPassword").value;
        if(password===confirmPassword){
            if(!password){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    password
                }
                try{
                    update(tk.taiKhoan.id, data);
                    //redirectTaiKhoanAdminHome();
                } catch(err) {
                    console.log(err)
                }
            }
        } else{
            window.alert("Password và Confirm password không trùng nhau!!!")
        }
    }
  
    const handleClose = () => {setShowForm(false)};
  
    return (
      <>
        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thay đổi mật khẩu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form onSubmit={HandleUpdate}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label className="text-center">
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Nhập password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label className="text-center">
                        Confirm password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Nhập confirm password" />
                    </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="button" onClick={HandleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ThayDoiMatKhau;