import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import "../../css/rating.css"
import useDanhGia from "../hooks/useDanhGia";
import {getNhaXeById, getNhaXeUserById} from "../hooks/useFunction"
import useUser from "../hooks/useUser";
import { useTranslation } from "react-i18next";

const NhaXeDanhGia =()=>{


    const account = useContext(MyContext).account;
    const token = useContext(MyContext).token;


    const nhaXeId = useParams().id;
    const [nhaXe, setNhaXe]=useState([]);
    const {addDanhGia} = useDanhGia();

    const {user} = useUser();
    const nav = useNavigate();
    const {t} = useTranslation();

    useEffect(()=>{
       window.scrollTo(0,0);
       getNhaXeUserById(nhaXeId, token).then(data=>{
        if(data){
            setNhaXe(data);
        }
       });
    },[])

    const convertNgayDang=(d)=>{
        let ngayDang;
        if(d.getDate()<10||d.getMonth()<9){
            let date=d.getDate();
            let month=d.getMonth()+1;
            if(date<10){
                date="0"+date;
            }
            if(month<9){
                month="0"+month
            }
            ngayDang = d.getFullYear()+"-"+month+"-"+date;
        }else{
            ngayDang = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        }
        return ngayDang;
    }

    const convertGioDang=(h,m)=>{
        let gioDang;
        let hour=h;
        let minutes=m;
        if(h<10){
            hour="0"+hour;
        }
        if(m<10){
            minutes="0"+minutes;
        }
        gioDang = `${hour}:${minutes}:00`;
        console.log(gioDang)
        return gioDang;
    }

    const handleAddDanhGia =()=>{
        let soSao = Number(starChecked());
        const d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let gioDang = convertGioDang(h,m);
        let ngayDang = convertNgayDang(d);
        let noiDung = document.getElementById("comment").value;
        
        if(soSao===0){
            window.alert(t("banphaichonsosao"))
        } else if(!gioDang||!ngayDang||!noiDung||!soSao){
            window.alert(t("banphaidiendayduthongtin"))
        }else if(!account.id){
            window.alert(t("banphaidangnhapdedanhgianhaxe"))
        }
        else {
            let data = { 
                soSao,noiDung,gioDang,ngayDang,userId:account.id,nhaXeId 
            }
            console.log(data)
            addDanhGia(data)
        }
    }

    const starChecked =()=>{
        const arrayStar = document.getElementsByName("rate");
        let nStar = 0;
        for (let i=0; i<arrayStar.length;i++){
            if(arrayStar[i].checked === true){
                nStar = arrayStar[i].value;
            }
        }
        
        return nStar
    }

    return (
        <>
            <div style={{margin: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
            <Col md="8">
            <Card style={{ borderRadius: "5px", backgroundColor: "#FFFAFA"}}>
            <Card.Img style={{ width: "80%", height:"80%", maxHeight: "250px", maxWidth: "500px", marginLeft: "auto", marginRight:"auto", marginTop: "10px"}} variant="top" src={"https://nld.mediacdn.vn/k:2016/ben-xe-mt-1466755631165/thong-qua-dia-diem-xay-dung-ben-xe-mien-tay-moi.jpg"} />
            <Card.Body>
            <Card.Title>{nhaXe.tenNhaXe}</Card.Title>
            <Card.Text>{t("Số điện thoại")}: {nhaXe.sdt}</Card.Text>
            <Card.Text>{t("Mô tả ngắn")}: {nhaXe.moTaNgan}</Card.Text>
            <Card.Title>{t("Đánh giá của bạn")}</Card.Title>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
            </div>
            <div style={{marginTop: "60px"}}>
                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>{t("Nội dung đánh giá")}</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </div>
            <Button onClick={handleAddDanhGia}>{t("Đánh giá")}</Button>
            </Card.Body>
            </Card>
            </Col>
            </div>
        </>
    );
}

export default NhaXeDanhGia;