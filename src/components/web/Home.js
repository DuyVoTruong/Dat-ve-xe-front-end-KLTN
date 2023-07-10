import { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import useTuyenXe from '../hooks/useTuyenXe';
import {getAllBenXeUser, getNhaXeUserAll, getSaoTrungBinhNhaXe} from '../hooks/useFunction'
import "../../css/rating.css"
import { MyContext } from '../../App';
import image from '../../assets/img/anh-trang-chu.jpg';
import imageXe from '../../assets/img/xe.png';
import imageDiemDen from '../../assets/img/diemDen.png';
import { useTranslation } from 'react-i18next';
import {VscArrowSwap} from "react-icons/vsc"


function Home(){
  


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;

    const [benXe, setBenXe] = useState([]);
    const {tuyenXe} = useTuyenXe();
    const [nhaXe, setNhaXe] = useState([]);
    const [date, setDate] = useState("");
    const [diemDi, setDiemDi] = useState("");
    const [diemDen, setDiemDen] = useState("");
    const [tinhThanh, setTinhThanh] = useState([]);
    let d = new Date();
    const [sao, setSao] = useState([]);

    const convertNgay=(d)=>{
      let ngay;
      if(d.getDate()<10||d.getMonth()<9){
          let date=d.getDate();
          let month=d.getMonth()+1;
          if(date<10){
              date="0"+date;
          }
          if(month<9){
              month="0"+month
          }
          ngay = d.getFullYear()+"-"+month+"-"+date;
      }else{
          ngay = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      }
      return ngay;
    }

    const toDay = convertNgay(d);
    const nav=useNavigate();
    const danhSachTuyenXe =(diemDen)=>{
      nav("/lich-trinh?diemDen="+diemDen)
    }
    const datVe =(tx)=>{
      nav("/dat-ve-xe/"+tx.id)
    }
    const xemThongTinNhaXe =(id)=>{
      nav("/nha-xe-chi-tiet/"+ id);
    }
    const danhGiaNhaXe =(id)=>{
      nav("/nha-xe-danh-gia/"+id);
    }

    const timKiem =()=> {
      nav(`/tuyen-xe/?diemDi=${diemDi}&diemDen=${diemDen}&date=${date}`);
    }

    const checkStar =(i, soSao)=>{
      if(i<=soSao){
        return(
          <span class="fa fa-star checkedStar"></span>
        )
      }
      return(
        <span class="fa fa-star"></span>
      )
    }

    const onClickSwap =(event)=>{
      event.preventDefault();
      const temp = diemDi;
      setDiemDi(diemDen);
      setDiemDen(temp);
    }


    useEffect(()=>{
      getAllBenXeUser().then(data=>{
        if(data){
          setBenXe(data)
          const tempt = [];
          for(let i=0; i<data.length; i++){
            if(tempt.indexOf(data[i].tinhThanh)<0){
              tempt.push(data[i].tinhThanh);
            }
          }
          setTinhThanh(tempt)
        }
      })
      getNhaXeUserAll().then(data=>{
        if(data){
          setNhaXe(data)
        }
      })
      fetch("http://localhost:8081/api/thongke/nguoidung/sao-trung-binh/all").then(res=>res.json()).then(data=>{
      if(data.object){
          setSao(data.object);
        }
      })
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const { t } = useTranslation();

    return(
        <>
        <img src={image} style={{height: "400px",width:"100%", display: "inline-block", objectFit: "cover"}}/>
        
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: 'relative', top:"-375px", width:"100%", height: "350px",}}>
          <div className='search-form-container shadow'>
          <Row>
            <Col md={10}>
            <div className='search-form-border'>
              <div style={{margin:"0px 10px"}}>
              <Row>
                <Col md={4}>
                <div className='search-form-label'>{t("Điểm đi")}</div>
                <select className='search-form-select' id="DiemDi" onChange={e=>setDiemDi(e.target.value)}>
                  {
                    tinhThanh.map(t=>{
                      if(t!==diemDi){
                        return(<option key={`ttdi${t}`} value={t}>{t}</option>)
                      }else{
                        return(<option selected key={`ttdi${t}`} value={t}>{t}</option>)
                      }
                    })
                  }
                  <option hidden>{t("Chọn điểm đi")}</option>
                </select>
                </Col>
                <Col md={1}>
                <div className='search-form-line'><div className='search-form-line-icon' onClick={onClickSwap}><VscArrowSwap></VscArrowSwap></div></div>
                </Col>
                <Col md={4}>
                <div className='search-form-label'>{t("Điểm đến")}</div>
                <select className='search-form-select' id="DiemDen" onChange={e=>setDiemDen(e.target.value)}>
                  {
                    tinhThanh.map(t=>{
                      if(t!==diemDen){
                        return(<option key={`ttden${t}`} value={t}>{t}</option>)
                      }else{
                        return(<option selected key={`ttden${t}`} value={t}>{t}</option>)
                      }
                    })
                  }
                  <option hidden>{t("Chọn điểm đến")}</option>
                </select>
                </Col>
                <Col md={3}>
                  <input style={{margin:"20px 0px"}} class="form-control" type="date" required defaultValue={date||convertNgay(d)} onChange={e=>setDate(e.target.value)} min={new Date().toISOString().split('T')[0]}/>
                </Col>
                </Row>
                </div>
            </div>
            </Col>
            <Col md={2}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <button className='search-form-button' onClick={timKiem}>{t('Tìm kiếm')}</button>
              </div>
            </Col>
          </Row>
          </div>
        </div>

        <Container style={{ position: "relative", top: "-300px", marginBottom: "-350px"}}>

          <h2 style={{marginLeft: "30px"}}>{t("Các tuyến xe trong ngày")}</h2>
          <Carousel infinite={true} autoPlay={false} autoPlaySpeed={2000} responsive={responsive}>
            {tuyenXe.map(tx =>{
              if(tx.ngayDi.indexOf(toDay)>=0){
                return(
                  <Card onClick={()=>{if(!account){window.alert(t("Bạn phải đăng nhập để đặt vé"))}else{datVe(tx)}}} style={{ margin: "2rem" }} className="shadow card-transform">
                    <Card.Body>
                      {
                        (()=>{
                          let title="";
                          if(tx.benXeDi){
                              title = title + tx.benXeDi.tenBenXe + " ("+ tx.benXeDi.tinhThanh+") => ";
                          }
                          if(tx.benXeDen){
                              title = title + tx.benXeDen.tenBenXe + " ("+ tx.benXeDen.tinhThanh+")";
                          }
                          return(
                            <Card.Title key={tx.id}>{title}</Card.Title>
                          )
                        })()
                      }
                          <Card.Text>
                          {t('Ngày đi')}: {tx.ngayDi}
                          </Card.Text>
                          <Card.Text>
                          {t("Thời gian hành trình")}: {tx.thoiGianHanhTrinh}
                          </Card.Text>
                          <Card.Text>
                          {t("Giá")}: {tx.giaVe}
                          </Card.Text>
                    </Card.Body>
                  </Card>
                );
              }
            })}
          </Carousel>

        <h2 style={{marginTop:"50px", marginLeft: "30px"}}>{t("Danh sách các điểm đến")}</h2>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={false}>
          {benXe.map(bx =>{
            return(
                <Card onClick={()=>danhSachTuyenXe(bx.tinhThanh)} style={{ margin: "1rem" }} className="shadow card-transform">
                  <Card.Img height={"100vh"} variant="top" src={imageDiemDen} />
                  <Card.Body>
                      <Card.Title>{bx.tenBenXe}</Card.Title>
                      <Card.Text>
                      {bx.tinhThanh}
                      </Card.Text>
                  </Card.Body>
                </Card>
            );
          })}
        </Carousel>

        <h2 style={{marginTop:"50px", marginLeft: "30px"}}>{t("Danh sách các nhà xe")}</h2>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={false}>
          {nhaXe.map(nx =>{
            return(
                <Card style={{ margin: "1rem" }} className="shadow card-transform">
                  <Card.Img height={"100vh"} variant="top" src={imageXe} />
                  <Card.Body>
                      <Card.Title>{nx.tenNhaXe}</Card.Title>
                      <span style={{fontSize: "14px"}}>
                      {
                        [1,2,3,4,5].map((i, index)=>{
                          let soSao;
                          sao.map(s=>{
                            if(s.id==nx.id){
                              soSao=s.saoTrungBinh;
                            }
                          });
                          return checkStar(i, soSao);
                        })
                      }
                      </span>
                      <Card.Text>
                      {t('SĐT')}: {nx.sdt}
                      </Card.Text>
                      <Row>
                        <Col xs={6} sm={12} md={6}>
                          <Button style={{marginBottom:"8px", backgroundColor: "#0000CD", border: "none"}} onClick={()=>xemThongTinNhaXe(nx.id)} variant="primary">{t("Chi tiết")}</Button>
                        </Col>
                        <Col xs={6} sm={12} md={6}>
                          <Button style={{marginBottom:"8px", backgroundColor: "#20B2AA", border: "none"}} onClick={()=>{if(!account){window.alert(t("Bạn phải đăng nhập để đánh giá"))}else{danhGiaNhaXe(nx.id)}}} variant="primary">{t("Đánh giá")}</Button>
                        </Col>
                      </Row>
                  </Card.Body>
                </Card>
            );
          })}
        </Carousel>
        </Container>
        </>
    );
}

export default Home;