import { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import useTuyenXe from '../hooks/useTuyenXe';
import {getAllBenXeUser, getNhaXeUserAll, getSaoTrungBinhNhaXe} from '../hooks/useFunction'
import "../../css/rating.css"
import { MyContext } from '../../App';
import image from '../../assets/img/picture1.png';
import imageXe from '../../assets/img/xe.png';
import imageDiemDen from '../../assets/img/diemDen.png';
import { useTranslation } from 'react-i18next';

function Home(){
  


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;

    const [benXe, setBenXe] = useState([]);
    const {tuyenXe} = useTuyenXe();
    const [nhaXe, setNhaXe] = useState([]);
    const [date, setDate] = useState("");
    const [diemDi, setDiemDi] = useState("");
    const [diemDen, setDiemDen] = useState("");
    const tinhThanh = [];
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


    useEffect(()=>{
      getAllBenXeUser().then(data=>{
        if(data){
          setBenXe(data)
        }
      })
      getNhaXeUserAll().then(data=>{
        if(data){
          setNhaXe(data)
        }
      })
      fetch("http://localhost:8080/api/thongke/nguoidung/sao-trung-binh/all").then(res=>res.json()).then(data=>{
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
          items: 3
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
        <img src={image} style={{maxHeight: "700px", height:"80%", width:"100%", display: "inline-block",}}/>
        <Container>
          <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div>
                  <div class="booking-form shadow">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">{t("diemdi")}</span>
                            <input class="form-control" type="text" placeholder={t("chondiemdi")} list="DiemDi" onChange={e=>setDiemDi(e.target.value)}/>
                            <datalist id="DiemDi">
                            {benXe.map(bx=>{
                                return(<option value={bx.tinhThanh}></option>);
                            })}
                            </datalist>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">{t("diemden")}</span>
                            <input class="form-control" type="text" placeholder={t("chondiemden")} list="DiemDen" onChange={e=>setDiemDen(e.target.value)}/>
                            <datalist id="DiemDen">
                            {benXe.map(bx=>{
                              if(tinhThanh.indexOf(bx.tinhThanh)<0){
                                tinhThanh.push(bx.tinhThanh);
                                return(<option value={bx.tinhThanh}></option>);
                              }
                            })}
                            </datalist>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">{t("ngaydi")}</span>
                            <input class="form-control" type="date" required onChange={e=>setDate(e.target.value)} min={new Date().toISOString().split('T')[0]}/>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                          <button class="submit-btn" type='button' onClick={timKiem}><i class="text-white px-2 fa fa-search">{t("timkiem")}</i></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container>

          <h1 style={{marginTop:"50px", marginLeft: "30px"}}>{t("cactuyenxetrongngay")}</h1>
          <Carousel infinite={true} autoPlay={false} autoPlaySpeed={2000} responsive={responsive}>
            {tuyenXe.map(tx =>{
              if(tx.ngayDi.indexOf(toDay)>=0){
                return(
                  <Card onClick={()=>{if(!account){window.alert(t("banphaidangnhapdedatve"))}else{datVe(tx)}}} style={{ margin: "2rem" }} className="shadow card-transform">
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
                          {t('ngaydi')}: {tx.ngayDi}
                          </Card.Text>
                          <Card.Text>
                          {t("thoigianhanhtrinh")}: {tx.thoiGianHanhTrinh}
                          </Card.Text>
                          <Card.Text>
                          {t("gia")}: {tx.giaVe}
                          </Card.Text>
                    </Card.Body>
                  </Card>
                );
              }
            })}
          </Carousel>

        <h1 style={{marginTop:"50px", marginLeft: "30px"}}>{t("danhsachcacdiemden")}</h1>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={false}>
          {benXe.map(bx =>{
            return(
                <Card onClick={()=>danhSachTuyenXe(bx.tinhThanh)} style={{ margin: "2rem" }} className="shadow card-transform">
                  <Card.Img height={"200px"} variant="top" src={imageDiemDen} />
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

        <h1 style={{marginTop:"50px", marginLeft: "30px"}}>{t("danhsachcacnhaxe")}</h1>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={false}>
          {nhaXe.map(nx =>{
            return(
                <Card style={{ margin: "2rem" }} className="shadow card-transform">
                  <Card.Img height={"150px"} variant="top" src={imageXe} />
                  <Card.Body>
                      <Card.Title>{nx.tenNhaXe}
                      <span style={{marginLeft: "20px"}}>
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
                      </Card.Title>
                      <Card.Text>
                      {t('sdt')}: {nx.sdt}
                      </Card.Text>
                        <Button style={{marginLeft: "3px", marginBottom:"2px"}} onClick={()=>xemThongTinNhaXe(nx.id)} variant="primary">{t("chitiet")}</Button>
                        <Button style={{marginLeft: "3px", marginBottom:"2px"}} onClick={()=>{if(!account){window.alert(t("banphaidangnhapdedanhgia"))}else{danhGiaNhaXe(nx.id)}}} variant="primary">{t("danhgia")}</Button>
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