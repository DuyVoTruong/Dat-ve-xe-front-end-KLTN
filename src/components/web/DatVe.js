import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetUserById, httpPostVeXe } from "../hooks/Request";
import { getAllVeXeByTuyenXeId, getTuyenXeById } from "../hooks/useFunction";
import { ToastContainer, toast } from 'react-toastify';
import {ReactComponent as SeatIcon} from "../../assets/svg/seat-frame.svg"
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import "../../css/dat-ve.css"
import ErrorMessage from "../alert message/ErrorMessage";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";

function DatVe(){

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const tuyenXeId = useParams("id").id;
    const [tuyenXeById, setTuyenXeById] = useState([]);
    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);
    
    const [veXeDaDat, setVeXeDaDat] = useState([]);
    let sucChua = 20;
    const [hinhThucThanhToan, setHinhThucThanhToan]=useState("ONLINE");
    var today = new Date();
    const {t} = useTranslation();
    const [veDaChon, setVeDaChon] = useState([]);
    const [tongTien, setTongTien] = useState(0);

    let ngayDat = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    let ngayNhan = tomorrow.getFullYear()+"-"+(tomorrow.getMonth()+1)+"-"+tomorrow.getDate();
    let tenBenXeDen = "";
    let tenBenXeDi = "";
    let tenNhaXe = "";
    let sdt = "";
    const nav = useNavigate();

    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    const convertNgayNhan=()=>{
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1)
        let ngayNhan;
        if(tomorrow.getDate()<10||tomorrow.getMonth()<9){
            let date=tomorrow.getDate();
            let month=tomorrow.getMonth()+1;
            if(date<10){
                date="0"+date;
            }
            if(month<10){
                month="0"+month
            }
            ngayNhan = tomorrow.getFullYear()+"-"+month+"-"+date;
        }else{
            ngayNhan = tomorrow.getFullYear()+"-"+(tomorrow.getMonth()+1)+"-"+tomorrow.getDate();
        }
        return ngayNhan;
    }

    const convertNgay =(d)=>{
        let ngay;
        if(d.getDate()<10||d.getMonth()<9){
            let date=d.getDate();
            let month=d.getMonth()+1;
            if(date<10){
                date="0"+date;
            }
            if(month<10){
                month="0"+month
            }
            ngay = d.getFullYear()+"-"+month+"-"+date;
        }else{
            ngay = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        }
        return ngay;
    }

    const DatVe=()=>{
         // Khai báo tham số
         let checkbox = document.getElementsByName('Group1');
         let soGhe = [];
         
         // Lặp qua từng checkbox để lấy giá trị
         for (var i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                soGhe.push(Number(checkbox[i].value));
            }
         }

        let userId = account.id;

        ngayNhan=convertNgayNhan();

        if(!ngayDat||!ngayNhan||!hinhThucThanhToan||!tuyenXeId||soGhe.length==0){
            InfoMessage();
        }
        else if(userId===null){
            InfoMessage(t("Bạn phải đăng nhập để đặt vé"))
        }
        else {
            let data = {
                soGhe,ngayDat:convertNgay(today),ngayNhan,hinhThucThanhToan,tuyenXeId,userId
            }

            console.log(data)

            if(hinhThucThanhToan=="ONLINE"){

                httpPostVeXe(data, token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        localStorage.setItem("soGheList", JSON.stringify(soGhe));
                        localStorage.setItem("tuyenXeId", tuyenXeId);
                        localStorage.setItem("tongSoTien", tongTien);
                        nav("/trang-thanh-toan");
                    }
                    else{
                        ErrorMessage(data.message);
                    }
                });

            } else if(hinhThucThanhToan=="OFFLINE"){
                httpPostVeXe(data, token).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        nav("/lich-su-dat-ve");
                        setTimeout(()=>{SuccessMessage(t("Bạn đã đặt vé thành công"))}, 1000);
                    }
                    else{
                        ErrorMessage(data.message);
                    }
                });
            }
        }
    }

    const xuLyVeChon =(soGhe)=>{
        let trung = 0;
        for(let i=0;i < veDaChon.length; i++){
            if(veDaChon[i]==soGhe){
                trung = 1;
            }
        }
        if(trung===0){
            setTongTien((veDaChon.length+1)*tuyenXeById.giaVe);
            veDaChon.push(soGhe);
        } else {
            setTongTien((veDaChon.length-1)*tuyenXeById.giaVe);
            setVeDaChon(veDaChon.filter(vx=>vx!==soGhe));
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0);
        getAllVeXeByTuyenXeId(tuyenXeId,token).then(data=>{
            if(data){
                setVeXeDaDat(data)
            }
        });
        getTuyenXeById(tuyenXeId, token).then(data=>{
            if(data){
              setTuyenXeById(data)
              console.log(data)
            }
          })
    },[])

    useEffect(()=>{
        if(account){
            httpGetUserById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }
    },[account])

    return(
        <>
        <ToastContainer/>
        <Container>
            <div>
                <Row className="d-flex justify-content-center align-items-center" style={{marginBottom: "200px", marginTop:"100px"}}>
                <Col md={8} lg={6} xs={12}>
                <div style={{border: "solid 10px blue", background:"blue"}}></div>
                <Card className="shadow">
                    <Card.Body>
                    <div className="mb-3 mt-md-4">
                        <p className=" mb-5">{t("Vui lòng chọn hình thức thanh toán và số ghế bên dưới")}</p>
                        <div className="mb-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label className="text-center">
                                {t("Họ tên")}
                            </Form.Label>
                            <Form.Control type="text" value={thongTinTaiKhoan.hoTen} readOnly/>
                            </Form.Group>

                            {
                                (()=>{
                                    if(tuyenXeById.benXeDi){
                                        tenBenXeDi=tuyenXeById.benXeDi.tenBenXe;
                                    }
                                    if(tuyenXeById.benXeDen){
                                        tenBenXeDen=tuyenXeById.benXeDen.tenBenXe;
                                    }
                                    if(tuyenXeById.xe){
                                        if(tuyenXeById.xe.nhaXe){
                                            tenNhaXe=tuyenXeById.xe.nhaXe.tenNhaXe;
                                            sdt=tuyenXeById.xe.nhaXe.sdt;
                                        }
                                        if(tuyenXeById.xe.loaiXe){
                                            sucChua=tuyenXeById.xe.loaiXe.sucChua;
                                        }
                                    }
                                        return(
                                            <>
                                            <Form.Group className="mb-3" controlId="formTuyenXe">
                                            <Form.Label className="text-center">
                                                {t("Tuyến xe")}
                                            </Form.Label>

                                            <Form.Control type="text" value={tenBenXeDi+" => "+tenBenXeDen} readOnly/>
                                            </Form.Group>
                                            </>
                                        )
                                })()
                            }

                            <Form.Group className="mb-3" controlId="formNhaXe">
                            <Form.Label className="text-center">
                                {t("Nhà xe")}
                            </Form.Label>
                            <Form.Control type="text" value={tenNhaXe+" - SĐT: "+sdt} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGioDi">
                            <Form.Label className="text-center">
                                {t("Giờ khởi hành")}
                            </Form.Label>
                            <Form.Control type="time" value={tuyenXeById.gioDi} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formNgayDi">
                            <Form.Label className="text-center">
                                {t("Ngày đi")} (yy-mm-dd)
                            </Form.Label>
                            <Form.Control type="datetime" value={tuyenXeById.ngayDi} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formNgayDat">
                            <Form.Label className="text-center">
                                {t("Ngày đặt")} (yy-mm-dd)
                            </Form.Label>
                            <Form.Control type="datetime" value={ngayDat} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formNgayNhan">
                            <Form.Label className="text-center">
                                {t("Ngày nhận")} (yy-mm-dd)
                            </Form.Label>
                            <Form.Control type="datetime" value={ngayNhan} readOnly/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHinhThucThanhToan">
                            <Form.Label className="text-center">
                                {t("Hình thức thanh toán")}
                            </Form.Label>
                            <Form.Select onChange={evt=>setHinhThucThanhToan(evt.target.value)}>
                                <option key={"online"} defaultChecked value={"ONLINE"}>online</option>
                                <option key={"offline"} value={"OFFLINE"}>offline</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                                {t("Chọn số ghế")}
                            </Form.Label>
                            
                            </Form.Group>

                            { new Array(sucChua).fill(0).map((_,index)=>{
                                    let flag=0;
                                    veXeDaDat.map(vx=>{
                                        if((index+1)===vx.soGhe){
                                            flag=1;
                                        }
                                    })

                                    if(flag===1){
                                        return(
                                            <label><input type="checkbox" value={index+1} name="Group1" disabled></input>
                                                <span className="label" style={{backgroundColor: "gray", color: "gray", cursor:"not-allowed"}}>
                                                    <span className="label-so-ghe">{index+1}</span>
                                                    <SeatIcon class="seat"></SeatIcon>
                                                </span>
                                            </label>
                                        );
                                    }

                                    return(
                                        <label><input onClick={evt=>{xuLyVeChon(evt.target.value)}} type="checkbox" value={index+1} name="Group1" ></input>
                                            <span className="label">
                                                <span className="label-so-ghe">{index+1}</span>
                                                <SeatIcon class="seat"></SeatIcon>
                                            </span>
                                        </label>
                                    );

                                })
                            }

                            <div style={{marginTop: "10px"}}>
                                {t("Ghi chú")}
                            </div>

                            <div>
                                <label style={{margin:"10px"}}>
                                    <span className="label">
                                        <span className="label-so-ghe"></span>
                                        <SeatIcon class="seat"></SeatIcon>
                                    </span>
                                    {t("Trống")}
                                </label>
                                <label style={{margin:"10px"}}>
                                    <span className="label" style={{backgroundColor: "gray", color: "gray"}}>
                                        <span className="label-so-ghe"></span>
                                        <SeatIcon class="seat"></SeatIcon>
                                    </span>
                                    {t("Đã đặt")}
                                </label>
                                <label style={{margin:"10px"}}>
                                    <span className="label" style={{color: "blue"}}>
                                        <span className="label-so-ghe"></span>
                                        <SeatIcon class="seat"></SeatIcon>
                                    </span>
                                    {t("Đang chọn")}
                                </label>
                            </div>

                            <div style={{marginTop: "10px", marginBottom: "20px"}}>
                                <div>{veDaChon.length} {t("vé")}: 
                                    {veDaChon.map((v,index)=>{
                                        if(index==0){
                                            return(
                                                <span>{' '+v}</span>
                                            )
                                        }
                                        else{
                                            return(
                                                <span>{', '+v}</span>
                                            )
                                        }
                                    })}
                                </div>
                                <h4 style={{color: "red"}}>{t("Tổng tiền")}: {formatCash(tongTien.toString())} đ</h4>
                            </div>
                            
                            {/*
                                new Array(sucChua).fill(0).map((_,index)=>{
                                    let flag = 0;
                                    veXeDaDat.map(vx=>{
                                        if((index+1)===vx.soGhe){
                                            flag=1;
                                        }
                                    })
                                    if(flag===1){
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
                            */}
                            

                            <div className="d-grid">
                            <Button variant="primary" type="button" onClick={DatVe}>
                                {t("Đặt vé")}
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