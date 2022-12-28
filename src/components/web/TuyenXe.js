import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {GrDescend, GrAscend} from "react-icons/gr"
import useTuyenXe from "../hooks/useTuyenXe";
import { getAllBenXeUser, getAllVeXeByTuyenXeId } from "../hooks/useFunction";
import useNhaXe from "../hooks/useNhaXe";
import { MyContext } from "../../App";

function TuyenXe(){

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [benXe, setBenXe] = useState([]);
    const {tuyenXe} = useTuyenXe();
    const {nhaXe} = useNhaXe();
    const tinhThanh = [];
    let d = new Date();
    const toDay = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    const [diemDi, setDiemDi] = useState("");
    const [diemDen, setDiemDen] = useState("");
    const [Ascending, SetAscending] = useState(true);
    let soGheDaDat = 0;


    const onClickAscending = () =>{
        SetAscending(!Ascending);
    }

    useEffect(()=>{
        getAllBenXeUser().then(data=>{
          if(data){
            setBenXe(data)
          }
        })
      },[])

    useEffect(()=>{
        
    },[diemDi,diemDen]);

    useEffect(()=>{
        
    },[]);

    const nav = useNavigate();
    const datVe =(tx)=>{
        nav("/dat-ve-xe/"+tx.id)
    }

    return(
        <>
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
                            <input class="form-control" type="text" placeholder="Chọn điểm đi" list="DiemDi"/>
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
                            <input class="form-control" type="text" placeholder="Chọn điểm đến" list="DiemDen"/>
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
                            <input class="form-control" type="date" required/>
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
        <div style={{marginTop:"30px", height:"500px", overflow: "auto"}} className="shadow">
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
                    <td>{tx.benXeDi.tenBenXe}{" => "}{tx.benXeDen.tenBenXe}</td>
                    <td>{tx.xe.nhaXe.tenNhaXe}</td>
                    <td>{tx.xe.loaiXe.tenLoaiXe}</td>
                    <td>{tx.xe.loaiXe.sucChua}</td>
                    <td>{tx.ngayDi}</td>
                    <td>{tx.gioDi}</td>
                    <td>{tx.thoiGianHanhTrinh}</td>
                    <td>{tx.giaVe}</td>
                    <td style={{textAlign: "center"}}><button onClick={()=>{if(!account){window.alert("Bạn phải đăng nhập để đặt vé!!!")}else{datVe(tx)}}} style={{border:"1px solid #c0c6cc", borderRadius:"15px"}}><img style={{margin:"10px",maxHeight:"80%",height:"30px",width:"30px",maxWidth:"80%"}} src="/ticket-icon.png"></img><span style={{marginRight: "10px"}}>Đặt vé xe</span></button></td>
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
        </Container>
        </>
    )
}

export default TuyenXe;