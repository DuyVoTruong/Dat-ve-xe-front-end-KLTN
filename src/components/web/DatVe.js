import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useBenXe from "../hooks/useBenXe";
import useLoaiXe from "../hooks/useLoaiXe";
import useNhaXe from "../hooks/useNhaXe";
import useTuyenXe from "../hooks/useTuyenXe";
import useVeXe from "../hooks/useVeXe";
import useXe from "../hooks/useXe";

function DatVe(){

    const location = useLocation();
    const {tuyenXe} = useTuyenXe();
    const {benXe} = useBenXe();
    const {loaiXe} = useLoaiXe();
    const {veXe} = useVeXe();
    const {xe} = useXe();
    const {nhaXe} = useNhaXe();
    console.log(tuyenXe)
    let sucChua = 0;
    const [idTuyenXe,setIdTuyenXe]=useState(location.state.idTuyenXe);
    const [idTaiKhoan,setIdTaiKhoan]=useState(1);
    const [idHinhThucThanhToan,setIdHinhThucThanhToan]=useState();
    const [hinhThucThanhToan, setHinhThucThanhToan]=useState([]);
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1)
    let ngayDat = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    let ngayNhan = tomorrow.getFullYear()+"-"+(tomorrow.getMonth()+1)+"-"+tomorrow.getDate();
    let tenBenXeDen = "";
    let tenBenXeDi = "";
    let gioKhoiHanh = "";
    let ngayDi = "";
    let tenNhaXe = "";
    let sdt = "";

    const DatVe=()=>{
         // Khai báo tham số
         let checkbox = document.getElementsByName('Group1');
         let soGhe = "";
         
         // Lặp qua từng checkbox để lấy giá trị
         for (var i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                console.log(1)
                soGhe = soGhe + checkbox[i].value + ' ';
            }
         }
         soGhe = soGhe.substring(0,soGhe.length-1)
    let data = {
            "id_tuyenXe":idTuyenXe,
            "id_taiKhoan":idTaiKhoan,
            "soGhe":soGhe,
            "ngayDat":ngayDat,
            "ngayNhan":ngayNhan,
            "id_hinhThucThanhToan":idHinhThucThanhToan
        }
        console.log(data)
        /*
        fetch("/",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        */
    }

    return(
        <>
        <Container>
            <div>
                <Row className="d-flex justify-content-center align-items-center" style={{marginBottom: "200px", marginTop:"100px"}}>
                <Col md={8} lg={6} xs={12}>
                <div className="border border-3 border-primary"></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                        <p className=" mb-5">Vui lòng chọn hình thức thanh toán và số ghế bên dưới thông tin bên dưới!</p>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Tên người đặt
                            </Form.Label>
                            <Form.Control type="text" value={"Duy"} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Tuyến xe
                            </Form.Label>
                            {tuyenXe.map(tx=>{ //lay gia tri ben xe di va ben xe den
                                if(tx.id==idTuyenXe){
                                    gioKhoiHanh=tx.gioKhoiHanh;
                                    ngayDi=tx.ngayDi;

                                    benXe.map(bx=>{
                                        if(bx.id==tx.id_benXeDi){
                                          tenBenXeDi=bx.tenBenXe
                                        }
                
                                        if(bx.id==tx.id_benXeDen){
                                          tenBenXeDen=bx.tenBenXe
                                        }
                                    })

                                    xe.map(x=>{
                                        if(x.id==tx.id_xe){
                                            nhaXe.map(nx=>{
                                                if(nx.id==x.id_nhaXe){
                                                    tenNhaXe=nx.tenNhaXe
                                                    sdt=nx.sdt
                                                }
                                            })
                                        }
                                    })

                                }
                            })}
                            <Form.Control type="text" value={tenBenXeDi+" => "+tenBenXeDen} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Nhà xe
                            </Form.Label>
                            <Form.Control type="text" value={tenNhaXe+" - SĐT: "+sdt} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Giờ khởi hành
                            </Form.Label>
                            <Form.Control type="datetime" value={gioKhoiHanh} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Ngày Đi (yy-mm-dd)
                            </Form.Label>
                            <Form.Control type="datetime" value={ngayDi} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Ngày đặt (yy-mm-dd)
                            </Form.Label>
                            <Form.Control type="datetime" value={ngayDat} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Ngày nhận (yy-mm-dd)
                            </Form.Label>
                            <Form.Control type="datetime" value={ngayNhan} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Hình thức thanh toán
                            </Form.Label>
                            <Form.Select onChange={evt=>setIdHinhThucThanhToan(evt.target.value)}>
                                {hinhThucThanhToan.map(ht=>{
                                    return(
                                    <option key={`id${ht.id}`} value={ht.id}>{ht.ten}</option>
                                    )
                                })}
                                <option hidden>Chọn hình thức thanh toán</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                Chọn số ghế
                            </Form.Label>
                            {tuyenXe.map(tx=>{
                                if(tx.id==idTuyenXe){
                                    xe.map(x=>{
                                        if(x.id==tx.id_xe){
                                            loaiXe.map(lx=>{
                                                if(lx.id==x.id_loaiXe){
                                                    sucChua=lx.sucChua
                                                }
                                            })
                                        }
                                    })
                                }
                            })}
                            </Form.Group>
                            
                            {
                                new Array(sucChua).fill(0).map((_,index)=>{
                                    let flag = 0;
                                    veXe.map(vx=>{
                                        if(vx.id_tuyenXe==idTuyenXe){
                                            let arr = vx.soGhe.split(' ');
                                            arr.map(a=>{
                                                if(a==index+1){
                                                    flag=1;
                                                }
                                            })
                                        }
                                    })
                                    if(flag==1){
                                        if(index<9){
                                            return(
                                                <>
                                                    <Form.Check
                                                        inline
                                                        disabled
                                                        label={"0"+(index+1)}
                                                        name="Group1"
                                                        type={"checkbox"}
                                                        id={`checkbox-${index}`}
                                                        value={index+1}
                                                    />
                                                </>
                                            )
                                        }
                                        return(
                                            <>
                                                <Form.Check
                                                    inline
                                                    disabled
                                                    label={index+1}
                                                    name="Group1"
                                                    type={"checkbox"}
                                                    id={`checkbox-${index}`}
                                                    value={index+1}
                                                />
                                            </>
                                        )
                                    }
                                    else{
                                        if(index<9){
                                            return(
                                                <>
                                                    <Form.Check
                                                        inline
                                                        label={"0"+(index+1)}
                                                        name="Group1"
                                                        type={"checkbox"}
                                                        id={`checkbox-${index}`}
                                                        value={index+1}
                                                    />
                                                </>
                                            )
                                        }
                                        return(
                                            <>
                                                <Form.Check
                                                    inline
                                                    label={index+1}
                                                    name="Group1"
                                                    type={"checkbox"}
                                                    id={`checkbox-${index}`}
                                                    value={index+1}
                                                />
                                            </>
                                        )
                                    }
                                })
                            }
                            

                            <div className="d-grid">
                            <Button variant="primary" type="button" onClick={DatVe}>
                                Đặt vé
                            </Button>
                            </div>
                        </Form>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </div>
        </Container>
        </>
    )
}

export default DatVe;