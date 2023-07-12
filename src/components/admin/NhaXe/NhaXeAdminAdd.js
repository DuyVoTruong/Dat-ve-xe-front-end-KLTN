import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import {getTinhThanhPho} from "../../hooks/useFunction"
import { useEffect } from "react";
import InfoMessage from "../../alert message/InfoMessage";

function NhaXeAdminAdd(){

    const {signUp} = useSignUp();
    const nav = useNavigate();

    const signUpHandler = (e) =>{
        e.preventDefault();
        
        let role = "NHAXE"
        let soNha = document.getElementById("formDiaChi").value;
        let tinh = document.getElementById("city")[document.getElementById('city').selectedIndex].innerHTML;
        let huyen = document.getElementById("district")[document.getElementById('district').selectedIndex].innerHTML;
        let xa = document.getElementById("ward")[document.getElementById('ward').selectedIndex].innerHTML;

        let username = document.getElementById("formUsername").value;
        let password = document.getElementById("formPassword").value;
        let tenNhaXe = document.getElementById("formTenNhaXe").value;
        let sdt = document.getElementById("formSDT").value;
        let moTaNgan = document.getElementById("formMoTaNgan").value;
        let picture = "https://firebasestorage.googleapis.com/v0/b/uploadimage-83b65.appspot.com/o/images%2Fxe.png6d58e73d-c4b6-4721-9609-1ab8cfe28540?alt=media&token=1b2a2ef3-d287-4d72-8a7e-d4245271b437";
        let diaChi = soNha+", "+xa+", "+huyen+", "+tinh;
        if(!role||!username||!password||!tenNhaXe||!sdt||!moTaNgan||!diaChi||!soNha||tinh==="Chọn tỉnh thành"||huyen==="Chọn quận huyện"||xa==="Chọn phường xã"||!picture){
            InfoMessage();
        }
        else{
            let data = {
                role,username,password,tenNhaXe,sdt,moTaNgan,diaChi,picture
            }
            try{
                signUp(data);
                nav("/admin/nha-xe");
            } catch {

            }
        }
    }

    useEffect(()=>{
        getTinhThanhPho();
    },[])

    return(
        <div style={{marginTop: "30px", marginBottom: "50px"}}>
            <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
            <Col md={8} lg={6} xs={12}>
            <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                <Card.Body>
                    <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                    <p>Thêm tài khoản với vai trò</p>
                    <div className="mb-3">
                        <Form onSubmit={signUpHandler}>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label className="text-center">
                            Username
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Nhập password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTenNhaXe">
                            <Form.Label className="text-center">
                            Tên nhà xe
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên nhà xe" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSDT">
                            <Form.Label className="text-center">
                            Số điện thoại
                            </Form.Label>
                            <Form.Control type="text" placeholder="Nhập số điện thoại" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMoTaNgan">
                            <Form.Label className="text-center">
                            Giới thiệu
                            </Form.Label>
                            <Form.Control  as="textarea" rows={3} placeholder="Nhập nội dung giới thiệu" />
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

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Add
                            </Button>
                        </div>
                        </Form>
                    </div>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            </div>
        </div>
    );
}

export default NhaXeAdminAdd;