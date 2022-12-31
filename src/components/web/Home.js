import { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import useTuyenXe from '../hooks/useTuyenXe';
import {getAllBenXeUser, getNhaXeUserAll} from '../hooks/useFunction'
import "../../css/rating.css"
import { MyContext } from '../../App';

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
    const toDay = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();

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

    return(
        <>
        <img src="/picture1.png" style={{height: "700px", width: "100%", display: "inline-block",}}/>
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
                            <span class="form-label">Điểm đi</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi" onChange={e=>setDiemDi(e.target.value)}/>
                            <datalist id="DiemDi">
                            {benXe.map(bx=>{
                                return(<option value={bx.tinhThanh}></option>);
                            })}
                            </datalist>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Điểm đến</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen" onChange={e=>setDiemDen(e.target.value)}/>
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
                            <span class="form-label">Ngày đi</span>
                            <input class="form-control" type="date" required onChange={e=>setDate(e.target.value)}/>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                          <button class="submit-btn" type='button' onClick={timKiem}><i class="text-white px-2 fa fa-search">TÌM KIẾM</i></button>
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

          <h1 style={{marginTop:"50px"}}>Các tuyến xe trong ngày</h1>
          <Carousel infinite={true} autoPlay={false} autoPlaySpeed={2000} responsive={responsive}>
            {tuyenXe.map(tx =>{
              if(tx.ngayDi.indexOf(toDay)>=0){
                return(
                  <Card onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để đặt vé!!!")}else{datVe(tx)}}} style={{ margin: "2rem" }} className="shadow card-transform">
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
                          Ngày đi: {tx.ngayDi}
                          </Card.Text>
                          <Card.Text>
                          Thời gian hành trình: {tx.thoiGianHanhTrinh}
                          </Card.Text>
                          <Card.Text>
                          Giá vé: {tx.giaVe}
                          </Card.Text>
                    </Card.Body>
                  </Card>
                );
              }
            })}
          </Carousel>

        <h1 style={{marginTop:"50px"}}>Danh sách các điểm đến</h1>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={false}>
          {benXe.map(bx =>{
            return(
                <Card onClick={()=>danhSachTuyenXe(bx.tinhThanh)} style={{ margin: "2rem" }} className="shadow card-transform">
                  <Card.Img height={"200px"} variant="top" src={"/img/diemDen.png"} />
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

        <h1 style={{marginTop:"50px"}}>Danh sách các nhà xe</h1>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={false}>
          {nhaXe.map(nx =>{
            return(
                <Card style={{ margin: "2rem" }} className="shadow card-transform">
                  <Card.Img height={"150px"} variant="top" src={"/img/xe.png"} />
                  <Card.Body>
                      <Card.Title>{nx.tenNhaXe}</Card.Title>
                      <span class="fa fa-star checkedStar"></span>
                      <span class="fa fa-star checkedStar"></span>
                      <span class="fa fa-star checkedStar"></span>
                      <span class="fa fa-star checkedStar"></span>
                      <span class="fa fa-star"></span>
                      <Card.Text>
                      Sđt: {nx.sdt}
                      </Card.Text>
                        <Button style={{marginLeft: "3px", marginBottom:"2px"}} onClick={()=>xemThongTinNhaXe(nx.id)} variant="primary">Xem chi tiết</Button>
                        <Button style={{marginLeft: "3px", marginBottom:"2px"}} onClick={()=>danhGiaNhaXe(nx.id)} variant="primary">Đánh giá</Button>
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