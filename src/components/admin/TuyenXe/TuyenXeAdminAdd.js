import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import useBenXe from "../../hooks/useBenXe";
import useNhaXe from "../../hooks/useNhaXe";
import useXe from "../../hooks/useXe";
import {getAllBenXeUser} from "../../hooks/useFunction"
import { MyContext } from "../../../App";

function TuyenXeAdminAdd({showFormAdd, setShowFormAdd, add, role}){


    const {xe} = useXe();
    const {benXe} = useBenXe(role);
    const account = useContext(MyContext).account;

    const AddTuyenXe = (event) => {
        //event.preventDefault();
        let tenBenXeDi = document.getElementById("benXeDi")[document.getElementById('benXeDi').selectedIndex].innerHTML;
        let tenBenXeDen = document.getElementById("benXeDen")[document.getElementById('benXeDen').selectedIndex].innerHTML;
        let bienSoXe = document.getElementById("xe").value;
        let ngayDi = document.getElementById("ngayDi").value;
        let gioDi = document.getElementById("gioDi").value;
        console.log("giờ đi "+ gioDi)
        let thoiGianHanhTrinh = document.getElementById("thoiGianHanhTrinh").value;
        let giaVe = Number(document.getElementById("giaVe").value);
        let trangThai = "";
        let groupTrangThai = document.getElementsByName("Group")
        for(let i=0;i<groupTrangThai.length;i++){
            if(groupTrangThai[i].checked===true){
                trangThai=groupTrangThai[i].value
            }
        }
        if(!tenBenXeDi||!tenBenXeDen||!ngayDi||!gioDi||!thoiGianHanhTrinh||!giaVe||!trangThai||!bienSoXe){
            window.alert("Bạn phải điền đầy đủ thông tin!!!")
        }else if(tenBenXeDen===tenBenXeDi){
            window.alert("Tên bến xe đi và tên bến xe đến bị trùng nhau!!! Vui lòng chọn lại!!!")
        }else if(giaVe<0) {
            window.alert("Giá vé phải lớn hơn hơn 0!!!")
        }else {
            let data = {
                tenBenXeDi, tenBenXeDen, ngayDi, gioDi,xe,thoiGianHanhTrinh, giaVe, trangThai, bienSoXe
            }
            console.log(data)
            add(data);
        }
    }
  
    const handleClose = () => {setShowFormAdd(false)};

    return (
        <>
          <Modal show={showFormAdd} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thêm tuyến xe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Bến xe đi
                    </Form.Label>
                    <Form.Select id="benXeDi">
                        {benXe.map(bx=>{
                            if(bx.trangThai==="ACTIVE"){
                                return(
                                    <option key={`benXeDi${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                )
                            }
                        })}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Bến xe đến
                    </Form.Label>
                    <Form.Select id="benXeDen">
                        {benXe.map(bx=>{
                            if(bx.trangThai==="ACTIVE"){
                                return(
                                    <option key={`benXeDen${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                )
                            }
                        })}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Xe
                    </Form.Label>
                    <Form.Select id="xe">
                        {xe.map(x=>{
                            if(x.nhaXe){
                                if(x.nhaXe.taiKhoan){
                                    if(role==="NHAXE"){
                                        if(x.nhaXe.taiKhoan.username===account.username)
                                        {
                                            return(
                                                <option key={`xe${x.id}`} value={x.bienSoXe}>Biển số xe: {x.bienSoXe} - Nhà xe {x.nhaXe.tenNhaXe}</option>
                                            )
                                        }
                                    }
                                    else{
                                        return(
                                            <option key={`xe${x.id}`} value={x.bienSoXe}>Biển số xe: {x.bienSoXe} - Nhà xe {x.nhaXe.tenNhaXe}</option>
                                        )
                                    }
                                }
                            }
                        })}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Giờ khởi hành
                    </Form.Label>
                    <Form.Control id="gioDi" type="time" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Ngày đi (yy-mm-dd)
                    </Form.Label>
                    <Form.Control id="ngayDi" type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Thời gian hành trình
                    </Form.Label>
                    <Form.Control id="thoiGianHanhTrinh" type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        Giá vé (đơn vị: nghìn đồng)
                    </Form.Label>
                    <Form.Control id="giaVe" type="number" min={1} />
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
              <Button variant="primary" type="button" onClick={AddTuyenXe}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
/*
    return(
        <>
            <div className="container-dashboard">
                <Row className="d-flex justify-content-center align-items-center" >
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Bến xe đi
                            </Form.Label>
                            <Form.Select id="benXeDi">
                                {benXe.map(bx=>{
                                    return(
                                        <option key={`benXeDi${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Bến xe đến
                            </Form.Label>
                            <Form.Select id="benXeDen">
                                {benXe.map(bx=>{
                                    return(
                                        <option key={`benXeDen${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Xe
                            </Form.Label>
                            <Form.Select id="xe">
                                {xe.map(x=>{
                                    nhaXe.map(nx=>{
                                        if(x.id_nhaXe==nx.id){
                                            tenNhaXe=nx.tenNhaXe;
                                        }
                                    })
                                    return(
                                        <option key={`xe${x.id}`} value={x.id}>Biển số xe: {x.bienSoXe} - Nhà xe {tenNhaXe}</option>
                                    )
                                })}
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Giờ khởi hành
                            </Form.Label>
                            <Form.Control id="gioKhoiHanh" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Ngày đi (yy-mm-dd)
                            </Form.Label>
                            <Form.Control id="ngayDi" type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Thời gian hành trình
                            </Form.Label>
                            <Form.Control id="thoiGianHanhTrinh" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label className="text-center">
                                Giá vé
                            </Form.Label>
                            <Form.Control id="giaVe" type="text" />
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
                                    name="Group1"
                                    type="radio"
                                    id="activeOn"
                                />
                                <Form.Check
                                    inline
                                    label="off"
                                    name="Group1"
                                    type="radio"
                                    id="activeOff"
                                />
                            </Form.Group>

                            <div className="d-grid">
                            <Button variant="primary" type="button">
                                Add
                            </Button>
                            </div>
                        </Form>
                        <div className="mt-3">
                        <p className="mb-0  text-center">
                            Or{" "}
                            <a href="/admin/tuyen-xe" className="text-primary fw-bold">
                            Back
                            </a>
                        </p>
                        </div>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>
        </>
    );*/
}

export default TuyenXeAdminAdd;