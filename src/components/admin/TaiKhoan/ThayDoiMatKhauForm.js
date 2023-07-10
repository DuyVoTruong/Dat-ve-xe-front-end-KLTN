import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getTinhThanhPho } from "../../hooks/useFunction";
import { useTranslation } from "react-i18next";
import InfoMessage from "../../alert message/InfoMessage";

function ThayDoiMatKhau({showForm, setShowForm, update, role, tk}){

  const {t} = useTranslation();

    const HandleUpdate = () => {
        //event.preventDefault();
        let password = document.getElementById("formPassword").value;
        let confirmPassword = document.getElementById("formConfirmPassword").value;
        if(password===confirmPassword){
            if(!password){
                InfoMessage();
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
            InfoMessage(t("Password và Confirm password không trùng nhau!!!"));
        }
    }
  
    const handleClose = () => {setShowForm(false)};
  
    return (
      <>
        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{t("Thay đổi password")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form onSubmit={HandleUpdate}>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label className="text-center">
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("Nhập password")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label className="text-center">
                        Confirm password
                        </Form.Label>
                        <Form.Control type="password" placeholder={t("Nhập confirm password")} />
                    </Form.Group>
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t("Đóng")}
            </Button>
            <Button variant="primary" type="button" onClick={HandleUpdate}>
              {t("Cập nhật")}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ThayDoiMatKhau;