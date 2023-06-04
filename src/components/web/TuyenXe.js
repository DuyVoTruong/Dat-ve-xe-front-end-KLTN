import './../../css/tuyenXe.css';
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table, ToastBody } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {GrDescend, GrAscend} from "react-icons/gr"
import { getAllBenXeUser, getAllVeXeByTuyenXeId, getTuyenXeFindByAddressDate } from "../hooks/useFunction";
import useNhaXe from "../hooks/useNhaXe";
import { MyContext } from "../../App";
import imageDatVe from '../../assets/img/ticket-icon.png';
import imageChuyenHang from '../../assets/img/chuyen-hang.png'
import {ImRadioUnchecked} from "react-icons/im"
import {FaMapMarkerAlt, FaRegClock} from "react-icons/fa"
import {VscArrowSwap} from "react-icons/vsc"
import imageDiemDen from '../../assets/img/diemDen.png';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
)

function TuyenXe(){

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [benXe, setBenXe] = useState([]);
    const [tuyenXe, setTuyenXe] = useState([]);
    const {nhaXe} = useNhaXe();
    const [tinhThanh, setTinhThanh] = useState([]);
    let d = new Date();
    const toDay = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();

    const [q] = useSearchParams();
    const [diemDi, setDiemDi] = useState(q.get("diemDi"));
    const [diemDen, setDiemDen] = useState(q.get("diemDen"));
    const [Ascending, SetAscending] = useState(true);
    let soGheDaDat = 0;

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


    const onClickAscending = () =>{
        SetAscending(!Ascending);
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
        {/*
        <Container>
          <div id="booking" class="section" style={{marginBottom: "100px"}}>
            <div class="section-center">
              <div class="container">
                <div>
                  <div class="booking-form shadow">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Điểm đi</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi" defaultValue={diemDi} onChange={e=>setDiemDi(e.target.value)}/>
                            <select className='form-control' id="DiemDi" onChange={e=>setDiemDi(e.target.value)}>
                            {
                              tinhThanh.map(t=>{
                                if(t!==diemDi){
                                  return(<option key={`ttdi${t}`} value={t}>{t}</option>)
                                }else{
                                  return(<option selected key={`ttdi${t}`} value={t}>{t}</option>)
                                }
                              })
                            }
                            <option hidden>Chọn điểm đi</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                          <span class="form-label">Điểm đến</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen" defaultValue={diemDen} onChange={e=>setDiemDen(e.target.value)}/>
                            <select className='form-control' id="DiemDen" onChange={e=>setDiemDen(e.target.value)}>
                              {
                                tinhThanh.map(t=>{
                                  if(t!==diemDen){
                                    return(<option key={`ttden${t}`} value={t}>{t}</option>)
                                  }else{
                                    return(<option selected key={`ttden${t}`} value={t}>{t}</option>)
                                  }
                                })
                              }
                              <option hidden>Chọn điểm đến</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Ngày đi</span>
                            <input class="form-control" type="date" required defaultValue={date||convertNgay(d)} onChange={e=>setDate(e.target.value)}/>
                          </div>
                            </div>
                        {
                            (()=>{
                                if(Ascending === true){
                                    return(
                                        <div class="col-md-3">
                                        <div class="form-group">
                                            <span class="form-label">Sắp xếp giá</span>
                                            <p class="form-control center" onClick={onClickAscending} style={{display: "flex", justifyContent: "center"}}>
                                                <div style={{position: "absolute", top: "50%", transform: "inherit"}}>
                                                    <GrAscend></GrAscend>Tăng dần
                                                </div>
                                            </p>
                                        </div>
                                        </div>
                                    );
                                }
                                else{
                                    return(
                                        <div class="col-md-3">
                                        <div class="form-group">
                                            <span class="form-label">Sắp xếp giá</span>
                                            <p class="form-control center" onClick={onClickAscending} style={{display: "flex", justifyContent: "center"}}>
                                                <div style={{position: "absolute", top: "50%", transform: "inherit"}}>
                                                    <GrDescend></GrDescend>Giảm dần
                                                </div>
                                            </p>
                                        </div>
                                        </div>
                                    );
                                }
                            })()
                        }
                        
                        <div class="col-md-3">
                          <div class="form-btn">
                          <button class="submit-btn"><i class="text-white px-2 fa fa-search">TÌM KIẾM</i></button>
                          </div>https://galaxylands.com.vn/wp-content/uploads/2022/12/tieu-su-ca-si-rose-blackpink-12.jpg
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>*/}

        <Container>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div className='search-form-container shadow'>
          <Row>
            <Col md={10}>
            <div className='search-form-border'>
              <div style={{margin:"0px 10px"}}>
              <Row>
                <Col md={4}>
                <div className='search-form-label'>{t("diemdi")}</div>
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
                <option hidden>{t("chondiemdi")}</option>
                  </select>
                </Col>
                <Col md={1}>
                <div className='search-form-line'><div className='search-form-line-icon' onClick={onClickSwap}><VscArrowSwap></VscArrowSwap></div></div>
                </Col>
                <Col md={4}>
                <div className='search-form-label'>{t("diemden")}</div>
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
                  <option hidden>{t("chondiemden")}</option>
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
                <button className='search-form-button'>{t('timkiem')}</button>
              </div>
            </Col>
          </Row>
          </div>
          </div>
        </Container>

        <h1 style={{textAlign:"center", marginBottom: "50px"}}>{t("tatcatuyenxetrongngay")} {new Date(date).toLocaleDateString('vi')}</h1>
        {
          tuyenXe.map(tx=>{
            return(
              <>
              <LazyLoad key={tx.id} height={350}>
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
                          <div className='tuyen-xe-infor-title'>{t("diemdi")}</div>
                          <div className='tuyen-xe-infor-text'>{tx.benXeDi.tenBenXe} ({tx.benXeDi.tinhThanh})</div>
                        </div>
                        <div className='tuyen-xe-infor-container'>
                          <div className='tuyen-xe-infor-title'>{t("diemden")}</div>
                          <div className='tuyen-xe-infor-text'>{tx.benXeDen.tenBenXe} ({tx.benXeDen.tinhThanh})</div>
                        </div>
                        <div className='tuyen-xe-infor-container'>
                          <div className='tuyen-xe-infor-title'>{t("thoigianhanhtrinh")}</div>
                          <div className='tuyen-xe-infor-text'>{tx.thoiGianHanhTrinh}</div>
                        </div>
                        <div className='tuyen-xe-infor-container'>
                          <div className='tuyen-xe-infor-title'>{t("ngaydi")}</div>
                          <div className='tuyen-xe-infor-text'>{tx.ngayDi}</div>
                        </div>
                        <div className='tuyen-xe-infor-container'>
                          <div className='tuyen-xe-infor-title'>{t("giokhoihanh")}</div>
                          <div className='tuyen-xe-infor-text'>{tx.gioDi}</div>
                        </div>
                      </div>
                      <Col sm={6}>
                        <Button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để đặt vé!!!")}else{datVe(tx)}}} style={{backgroundColor: "green", margin: "0px 0px 20px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDatVe}></img>{t("datve")}</Button>
                      </Col>
                      <Col sm={6}>
                        <Button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để nhờ giao hàng!!!")}else{giaoHang(tx)}}} style={{backgroundColor: "blue", margin: "0px 0px 20px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageChuyenHang}></img>{t("giaohang")}</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                </Container>
              </div>
              </LazyLoad>
              </>
            )
          })
        }

        {/*
        <Container>
        <div style={{marginTop:"30px", height:"500px", backgroundColor:"white", borderRadius: "3px", overflow: "auto"}} className="shadow">
        <div style={{padding: "20px"}}>
        <Table striped bordered hover style={{backgroundColor:"white"}}>
        <thead>
            <tr>
            <th>Tuyến xe</th>
            <th>Nhà xe</th>
            <th>Loại xe</th>
            <th>Sức chứa</th>
            <th>Ngày đi</th>
            <th>Giờ khởi hành</th>
            <th>Thời gian hành trình</th>
            <th>Giá vé</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
          
            {tuyenXe.map(tx=>{
                return(
                    <>
                    <tr>
                    <td>{tx.benXeDi.tenBenXe} ({tx.benXeDi.tinhThanh}){" => "}{tx.benXeDen.tenBenXe} ({tx.benXeDen.tinhThanh})</td>
                    <td>{tx.xe.nhaXe.tenNhaXe}</td>
                    <td>{tx.xe.loaiXe.tenLoaiXe}</td>
                    <td>{tx.xe.loaiXe.sucChua}</td>
                    <td>{tx.ngayDi}</td>
                    <td>{tx.gioDi}</td>
                    <td>{tx.thoiGianHanhTrinh}</td>
                    <td>{tx.giaVe}</td>
                    <td style={{textAlign: "center"}}>
                      <button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để đặt vé!!!")}else{datVe(tx)}}} style={{margin:"10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageDatVe}></img><span style={{marginRight: "10px"}}>Đặt vé xe</span></button>
                      <button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để nhờ giao hàng!!!")}else{giaoHang(tx)}}} style={{margin:"10px", border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src={imageChuyenHang}></img><span style={{marginRight: "10px"}}>Giao hàng</span></button>
                    </td>
                    </tr>
                    </>
                )
            })}
            {
                (()=>{
                    soGheDaDat=0;
                })()
            }

        </tbody>
        </Table>
        </div>
        </div>
          </Container> */}
        </>
    )
}

export default TuyenXe;