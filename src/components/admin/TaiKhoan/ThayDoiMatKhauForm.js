import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getTinhThanhPho } from "../../hooks/useFunction";

function ThayDoiMatKhau({showForm, setShowForm, update, role, tk}){


    const HandleUpdate = () => {
        //event.preventDefault();
        if(role==="USER"){
            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let hoTen = document.getElementById("formHoTen").value;
            let cmnd = document.getElementById("formCMND").value;
            let sdt = document.getElementById("formSDT").value;
            let email = document.getElementById("formEmail").value;
            let diaChi = document.getElementById("formDiaChi").value;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!password||!hoTen||!cmnd||!sdt||!email||!diaChi){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,hoTen,cmnd,sdt,email,diaChi,trangThaiHoatDong
                }
                try{
                    update(tk.taiKhoan.id, data);
                    //redirectTaiKhoanUserHome();
                } catch {

                }
            }
        }
        else if(role==="NHAXE"){
            let soNha = document.getElementById("formDiaChi").value;
            let tinh = document.getElementById("city")[document.getElementById('city').selectedIndex].innerHTML;
            let huyen = document.getElementById("district")[document.getElementById('district').selectedIndex].innerHTML;
            let xa = document.getElementById("ward")[document.getElementById('ward').selectedIndex].innerHTML;

            let username = tk.taiKhoan.username;
            let password = tk.taiKhoan.password;
            let tenNhaXe = document.getElementById("formTenNhaXe").value;
            let sdt = document.getElementById("formSDT").value;
            let moTaNgan = document.getElementById("formMoTaNgan").value;
            let diaChi = soNha+", "+xa+", "+huyen+", "+tinh;
            let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
            if(!role||!username||!password||!tenNhaXe||!sdt||!moTaNgan||!diaChi||!soNha||tinh==="Chọn tỉnh thành"||huyen==="Chọn quận huyện"||xa==="Chọn phường xã"){
                window.alert("Vui lòng điền đầy đủ thông tin!!!")
            }
            else{
                let data = {
                    role,username,password,tenNhaXe,sdt,moTaNgan,diaChi,trangThaiHoatDong
                }
                try{
                    update(tk.taiKhoan.id, data);
                    //redirectTaiKhoanNhaXeHome();
                } catch {

                }
            }
        } else if(role==="ADMIN"){
            let password = document.getElementById("formPassword").value;
            let confirmPassword = document.getElementById("formConfirmPassword").value;
            if(password===confirmPassword){
                let username = tk.taiKhoan.username;
                let name = tk.name;
                let cmnd = tk.cmnd;
                let sdt = tk.sdt;
                let email = tk.email;
                let trangThaiHoatDong = tk.taiKhoan.trangThaiHoatDong;
                if(!role||!username||!password||!name||!cmnd||!sdt||!email){
                    window.alert("Vui lòng điền đầy đủ thông tin!!!")
                }
                else{
                    let data = {
                        role,username,password,name,cmnd,sdt,email,trangThaiHoatDong
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