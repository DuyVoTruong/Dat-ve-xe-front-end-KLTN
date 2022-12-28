import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import "../../css/rating.css"
import useDanhGia from "../hooks/useDanhGia";
import {getNhaXeById, getNhaXeUserById} from "../hooks/useFunction"
import useUser from "../hooks/useUser";

const NhaXeDanhGia =()=>{


    const account = useContext(MyContext).account;
    const token = useContext(MyContext).token;


    const nhaXeId = useParams("id").id;
    const [nhaXe, setNhaXe]=useState([]);
    const {addDanhGia} = useDanhGia();

    const {user} = useUser();
    let userId = "";
    const nav = useNavigate();

    useEffect(()=>{
       window.scrollTo(0,0);
       getNhaXeUserById(nhaXeId, token).then(data=>{
        if(data){
            setNhaXe(data);
        }
       });
    },[])

    const handleAddDanhGia =()=>{
        user.map(u=>{
            if(u.taiKhoan){
                if(u.taiKhoan.username===account.username){
                    userId=u.id
                }
            }
        })
        let soSao = Number(starChecked());
        const d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let gioDang = `${h}:${m}:00`;
        let ngayDang = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
        let noiDung = document.getElementById("comment").value;
        
        if(soSao===0){
            window.alert("Bạn phải chọn số sao")
        } else if(!gioDang||!ngayDang||!noiDung||!soSao){
            window.alert("Bạn phải điền đầy đủ thông tin!!!")
        }else if(userId===""){
            window.alert("Bạn phải đăng nhập để đánh giá nhà xe!!!")
        }
        else {
            let data = { 
                soSao,noiDung,gioDang,ngayDang,userId,nhaXeId 
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
            <Card.Text>Số điện thoại: {nhaXe.sdt}</Card.Text>
            <Card.Text>Giới thiệu: {nhaXe.moTaNgan}</Card.Text>
            <Card.Title>Đánh giá của bạn</Card.Title>
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
                    <Form.Label>Nội dung đánh giá</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </div>
            <Button onClick={handleAddDanhGia}>Đánh giá</Button>
            </Card.Body>
            </Card>
            </Col>
            </div>
        </>
    );
}

export default NhaXeDanhGia;