import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imageDiemDen from '../../assets/img/diemDen.png';
import imageDatVe from '../../assets/img/ticket-icon.png';
import imageChuyenHang from '../../assets/img/chuyen-hang.png'

function TuyenXeScreen ({tx, account}){

    const nav = useNavigate();
    const datVe =(tx)=>{
        nav("/dat-ve-xe/"+tx.id);
    }

    const giaoHang =(tx)=>{
      nav("/giao-hang/"+tx.id);
    }

    return(
        <div className='tuyen-xe-container'>
        <Container>
        <Row>
            <Col md={4} sm={12}>
            <img className='img-fluid' style={{width: "250px", margin: "10px", paddingRight:"10px", marginLeft: "auto", marginRight:"auto", display: "block"}} src={imageDiemDen} />
            </Col>
            <Col md={8} sm={12}>
            <Row>
                <Col md={6} ms={12}>
                    <div className='tuyen-xe-title' style={{marginTop: "10px"}}>{tx.xe.nhaXe.tenNhaXe}</div>
                </Col>
                <Col md={6} ms={12}>
                    <div style={{marginTop: "10px", }}>
                    <div className='tuyen-xe-gia'>{tx.giaVe}000đ</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div style={{margin:"0px 0px 20px"}}>
                <div className='tuyen-xe-infor-container'>
                    <div className='tuyen-xe-infor-title'>Điểm đi</div>
                    <div className='tuyen-xe-infor-text'>{tx.benXeDi.tenBenXe} ({tx.benXeDi.tinhThanh})</div>
                </div>
                <div className='tuyen-xe-infor-container'>
                    <div className='tuyen-xe-infor-title'>Điểm đến</div>
                    <div className='tuyen-xe-infor-text'>{tx.benXeDen.tenBenXe} ({tx.benXeDen.tinhThanh})</div>
                </div>
                <div className='tuyen-xe-infor-container'>
                    <div className='tuyen-xe-infor-title'>Thời gian hành trình</div>
                    <div className='tuyen-xe-infor-text'>{tx.thoiGianHanhTrinh}</div>
                </div>
                <div className='tuyen-xe-infor-container'>
                    <div className='tuyen-xe-infor-title'>Ngày đi</div>
                    <div className='tuyen-xe-infor-text'>{tx.ngayDi}</div>
                </div>
                <div className='tuyen-xe-infor-container'>
                    <div className='tuyen-xe-infor-title'>Giờ khởi hành</div>
                    <div className='tuyen-xe-infor-text'>{tx.gioDi}</div>
                </div>
                </div>
                <Col sm={6}>
                <Button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để đặt vé!!!")}else{datVe(tx)}}} style={{backgroundColor: "green", margin: "0px 0px 20px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDatVe}></img>Đặt vé</Button>
                </Col>
                <Col sm={6}>
                <Button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để nhờ giao hàng!!!")}else{giaoHang(tx)}}} style={{backgroundColor: "blue", margin: "0px 0px 20px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageChuyenHang}></img>Giao hàng</Button>
                </Col>
            </Row>
            </Col>
        </Row>
        </Container>
        </div>
    );
}

export default TuyenXeScreen;