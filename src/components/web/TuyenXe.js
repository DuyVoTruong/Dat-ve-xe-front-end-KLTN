import './../../css/tuyenXe.css';
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllBenXeUser, getTuyenXeFindByAddressDate } from "../hooks/useFunction";
import { MyContext } from "../../App";
import {ImLocation} from "react-icons/im"
import {VscArrowSwap} from "react-icons/vsc"
import imageDiemDen from '../../assets/img/diemDen.png';
import { useTranslation } from 'react-i18next';
import { FiCircle } from 'react-icons/fi';
import swal from 'sweetalert';

function TuyenXe(){

    const account = useContext(MyContext).account;
    const [tuyenXe, setTuyenXe] = useState([]);
    const [sao, setSao] = useState([]);
    const [tinhThanh, setTinhThanh] = useState([]);
    let d = new Date();

    const [q] = useSearchParams();
    const [diemDi, setDiemDi] = useState(q.get("diemDi"));
    const [diemDen, setDiemDen] = useState(q.get("diemDen"));

    function formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
      })
    }

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

  const [date, setDate] = useState(q.get("date")||convertNgay(d));

    const onClickSwap =(event)=>{
      event.preventDefault();
      const temp = diemDi;
      setDiemDi(diemDen);
      setDiemDen(temp);
    }

    useEffect(()=>{
      getAllBenXeUser().then(data=>{
        if(data){
          const tempt = [];
          for(let i=0; i<data.length; i++){
            if(tempt.indexOf(data[i].tinhThanh)<0){
              tempt.push(data[i].tinhThanh);
            }
          }
          setTinhThanh(tempt)
        }
      })

      let data = {
        benXeDi:diemDi,
        benXeDen:diemDen,
        date:date
      }
      if(!diemDi&&!diemDen&&!date){
        setTuyenXe([])
      }else{
        getTuyenXeFindByAddressDate(data).then(data=>{
          console.log(data);
          if(data){
            setTuyenXe(data)
          }
          else{
            setTuyenXe([])
          }
        })
      }

      fetch("http://localhost:8081/api/thongke/nguoidung/sao-trung-binh/all").then(res=>res.json()).then(data=>{
      if(data.object){
          setSao(data.object);
        }
      })

    },[diemDi,diemDen,date])

    useEffect(()=>{
      window.scrollTo(0,0);
    },[]);

    const nav = useNavigate();
    const datVe =(tx)=>{
        nav("/dat-ve-xe/"+tx.id);
    }

    const giaoHang =(tx)=>{
      nav("/giao-hang/"+tx.id);
    }

    const { t } = useTranslation();

    return(
        <>

        <Container style={{marginTop: "50px", marginBottom: "50px"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                <button className='search-form-button'>{t('Tìm kiếm')}</button>
              </div>
            </Col>
          </Row>
          </div>
          </div>
        </Container>

        <h1 style={{textAlign:"center", marginBottom: "50px"}}>{t("Tất cả các tuyến xe trong ngày")} {new Date(date).toLocaleDateString('vi')}</h1>

        <Container style={{maxWidth: "1100px" ,width: "85%"}}>
          <Row>
            { tuyenXe.map(tx => {
              return(
                <>
                <Card className='tuyen-xe-card'>
                  <Row>
                    <Col xs={12} md={3} lg={3} style={{display: "flex", justifyContent: "center", }}>
                      <div style={{margin: "10px"}}>
                        <Image src={imageDiemDen} style={{ height: "100%", width: "100%", objectFit: "cover"}}></Image>
                      </div>
                    </Col>
                    <Col xs={6} md={5} lg={5}>
                      <div style={{margin: "10px"}}>
                        <Row>
                          {
                            sao.map(s=>{
                              if(s.id==tx.xe.nhaXe.id){
                                return(
                                  <h5>{tx.xe.nhaXe.tenNhaXe} <span className='so-sao-tuyen-xe-span'><i className='fa fa-star'></i> {t(`${s.saoTrungBinh} sao`)}</span></h5>
                                );
                              }
                            })
                          }
                        </Row>
                        <Row>
                          <label style={{color: "gray"}}>{tx.xe.loaiXe.tenLoaiXe}</label>
                        </Row>
                        <Row>
                          <span><FiCircle></FiCircle><span style={{ margin: "0px 10px"}}>{tx.benXeDi.tenBenXe} ({tx.benXeDi.tinhThanh})</span></span>
                        </Row>
                        <div className='duong-dut-net-div'>
                          <span className='thoi-gian-hanh-trinh-tuyen-xe-span'>{tx.thoiGianHanhTrinh}</span>
                        </div>
                        <Row>
                          <span><ImLocation></ImLocation><span style={{ margin: "0px 10px"}}>{tx.benXeDen.tenBenXe} ({tx.benXeDen.tinhThanh})</span></span>
                        </Row>
                        <Row>
                          <span className='gio-khoi-hanh-tuyen-xe-span'>{t("Giờ khởi hành")} {tx.gioDi}</span>
                        </Row>
                      </div>
                    </Col>
                    <Col xs={6} md={4} lg={4}>
                      <Row style={{ margin: "10px", textAlign: "right"}}>
                        <label className='gia-tuyen-xe-span'>{formatCash(tx.giaVe.toString())}đ</label>
                      </Row>
                      <Row style={{ margin: "20px 10px 10px 10px", textAlign: "right"}}>
                        {/*<label className='so-ghe-trong-tuyen-xe-span'>Còn 2 ghế</label>*/}
                      </Row>
                      <Row>
                        <Button 
                          onClick={()=>{
                            if(!account){
                                swal({
                                  title: t("Bạn phải đăng nhập để đặt vé!!!"),
                                  text: "",
                                  icon: "info",
                                  button: "Ok",
                                });
                              }else{
                                datVe(tx)
                          }}} 
                          style={{backgroundColor: "green", margin: "10px 0", border: "none", width: "90%"}}>{t("Đặt vé")}
                        </Button>

                        <Button 
                          onClick={()=>{
                            if(!account){
                              swal({
                                title: t("Bạn phải đăng nhập để nhờ giao hàng!!!"),
                                text: "",
                                icon: "info",
                                button: "Ok",
                              });
                            }else{
                              giaoHang(tx)
                          }}}
                          style={{backgroundColor: "blue", margin: "10px 0", border: "none", width: "90%"}}>{t("Giao hàng")}
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card>
                </>
              );
            })}
          </Row>
        </Container>
        </>
    )
}

export default TuyenXe;