import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import useBenXe from '../hooks/useBenXe';
import useTuyenXe from '../hooks/useTuyenXe';

function Home(){

    let tenBenXeDen = "";
    let tenBenXeDi = "";
    let tenDiaChiDi = "";
    let tenDiaChiDen = "";

    const {benXe} = useBenXe();
    const {tuyenXe} = useTuyenXe();

    const nav=useNavigate();
    const danhSachTuyenXe =(diemDen)=>{
      nav("/lich-trinh",{state:{diemDen:diemDen}})
    }
    const DatVe =(tx)=>{
      nav("/dat-ve-xe",{state:{idTuyenXe:tx.id}})
    }


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
                  <div class="booking-form">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Điểm đi</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi"/>
                            <datalist id="DiemDi">
                            {benXe.map(bx=>{
                              return(<option value={bx.tenBenXe}></option>);
                            })}
                            </datalist>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Điểm đến</span>
                            <input class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen"/>
                            <datalist id="DiemDen">
                            {benXe.map(bx=>{
                              return(<option value={bx.tenBenXe}></option>);
                            })}
                            </datalist>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <span class="form-label">Ngày đi</span>
                            <input class="form-control" type="date" required/>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-btn">
                          <button class="submit-btn"><i class="text-white px-2 fa fa-search">TÌM KIẾM</i></button>
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

          <h1 style={{marginTop:"50px"}}>Các tuyến xe</h1>
          <Carousel infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
            {tuyenXe.map(tx =>{
              return(
                <Card style={{ marginLeft: '2.5rem', marginRight: '2.5rem'}}>
                    <Card.Body>
                      {benXe.map(bx=>{
                        if(bx.id==tx.id_benXeDi){
                          tenBenXeDi=bx.tenBenXe
                          tenDiaChiDi=bx.diaChi
                        }

                        if(bx.id==tx.id_benXeDen){
                          tenBenXeDen=bx.tenBenXe
                          tenDiaChiDen=bx.diaChi
                        }
                      })}
                        <Card.Title>{tenBenXeDi}{" ("+tenDiaChiDi+")"}{" => "}{tenBenXeDen}{" ("+tenDiaChiDen+")"}</Card.Title>
                        <Card.Text>
                        Ngày đi: {tx.ngayDi}
                        </Card.Text>
                        <Card.Text>
                        Thời gian hành trình: {tx.thoiGianHanhTrinh}
                        </Card.Text>
                        <Card.Text>
                        Giá vé: {tx.giaVe}
                        </Card.Text>
                        <Button onClick={()=>DatVe(tx)} variant="primary">Đặt vé</Button>
                    </Card.Body>
                </Card>
              );
            })}
          </Carousel>


        <h1 style={{marginTop:"50px"}}>Danh sách các điểm đến</h1>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1500} autoPlay={true}>
          {benXe.map(bx =>{
            return(
              <Card style={{ marginLeft: '2.5rem', marginRight: '2.5rem'}}>
                  <Card.Img height={"200px"} variant="top" src={bx.image} />
                  <Card.Body>
                      <Card.Title>{bx.tenBenXe}</Card.Title>
                      <Card.Text>
                      {bx.diaChi}
                      </Card.Text>
                      <Button onClick={()=>danhSachTuyenXe(bx.tenBenXe)} variant="primary">Danh sách các tuyến xe</Button>
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