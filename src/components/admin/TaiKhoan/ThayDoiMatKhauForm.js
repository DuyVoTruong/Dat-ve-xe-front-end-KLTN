import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getTinhThanhPho } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";

function ThayDoiMatKhau({showForm, setShowForm, update, role, tk}){

  const {t} = useTranslation();

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
            <Modal.Title>{t("thaydoipassword")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form onSubmit={HandleUpdate}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label className="text-center">
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("nhappassword")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label className="text-center">
                        Confirm password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("nhapconfirmpassword")} />
                    </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t("dong")}
            </Button>
            <Button variant="primary" type="button" onClick={HandleUpdate}>
              {t("capnhat")}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ThayDoiMatKhau;