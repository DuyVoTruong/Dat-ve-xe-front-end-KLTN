import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../App";
import { getHangHoaByTuyenXeId } from "../../hooks/useFunction";
import useHangHoa from "../../hooks/useHangHoa";



function HangHoaForm({show, setShow, h, update}){
    
    const handleClose = () => setShow(false);

    const updateHangHoa =()=>{
        let canNang = document.getElementById("CanNang").value;
        let gia = document.getElementById("Gia").value;
        let trangThai = "ACTIVE";
        let data={
            canNang,gia,trangThai
        }
        update(h.id,data);
    }

    return (
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Cập nhật hàng hóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="CanNang">
                    <Form.Label className="text-center">
                    Cân nặng
                    </Form.Label>
                    <Form.Control type="number" placeholder="Nhập cân nặng" defaultValue={h.canNang}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Gia">
                    <Form.Label className="text-center">
                    Giá (đơn vị: nghìn đồng)
                    </Form.Label>
                    <Form.Control type="number" placeholder="Nhập giá" defaultValue={h.gia}/>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={updateHangHoa}>
                Update
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

const QuanLyHangHoa =()=>{

    const account = useContext(MyContext).account;
    const token = useContext(MyContext).token;
    const tuyenXeId = useParams().id;
    const [search, setSearch] = useState("");
    const [hangHoa, setHangHoa] = useState([])
    const [tuyenXe, setTuyenXe] = useState([]);
    const [load, setLoad] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [h,setH]=useState([]);
    let stt = 0;


    const updateHangHoa =(id, data)=>{
        fetch("http://localhost:8080/api/hanghoa/"+id, {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res=>res.json()).then(data=>{
            if(data.status==200){
                setLoad(true);
            }
        })
    }

    const huyDon =(id)=>{
        if(window.confirm("Bạn muốn xóa đơn giao hàng này")==true){
            fetch(`http://localhost:8080/api/hanghoa/${id}`,{
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    "Content-Type": "application/json",
                }
            }).then(res=>res.json()).then(data=>{
                    if(data.status==200){
                        window.alert("Success");
                        setLoad(true);
                    }
                })
        }
    }

    useEffect(()=>{
        getHangHoaByTuyenXeId(tuyenXeId, token).then(data=>{
            if(data){
                setHangHoa(data);
            }
        })
        setLoad(false)
    },[load])

    const xacNhanHoanThanh=(h)=>{

        let canNang = h.canNang;
        let gia = h.gia;
        let trangThai = "COMPLETED";

        let data = {
            canNang,gia,trangThai
        }

        console.log(data)

        if(!Number(canNang)||!Number(gia)||!trangThai){
            window.alert("Đã xảy ra lỗi!!! Vui lòng xác nhận lại!!!")
        } else{
            let data = {
                canNang,gia,trangThai
            }

            updateHangHoa(h.id, data);
        }
    }

    return(
        <>
        {
            (()=>{
                if(h)
                return(
                    <HangHoaForm key={h.id} show={showUpdate} setShow={setShowUpdate} h={h} update={updateHangHoa}></HangHoaForm>
                );
            })()
        }
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display: "flex"}}>
            <input onChange={e=>setSearch(e.target.value)} className="form-control" style={{margin: "20px", width: "30%"}} type={"search"} placeholder="Tìm kiếm theo tên người đặt..."></input>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={0} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        {
            (()=>{
                if(tuyenXe){
                    if(tuyenXe.benXeDi&&tuyenXe.benXeDen&&tuyenXe.xe)
                    return(
                        <>
                        <div>Quản lý hàng hóa của tuyến xe:</div>
                        <div><b>Bến xe đi:</b> {tuyenXe.benXeDi.tenBenXe} - <b>Bến xe đến:</b> {tuyenXe.benXeDen.tenBenXe} - <b>Biển số xe:</b> {tuyenXe.xe.bienSoXe} - <b>Ngày đi:</b> {tuyenXe.ngayDi} - <b>Giờ đi:</b> {tuyenXe.gioDi}</div>
                        </>
                    )
                }
            })()
        }
        <h1 style={{textAlign: "center"}}>Danh sách các hàng hóa</h1>
        <Table style={{textAlign: "center"}} striped bordered hover>
        <thead>
            <tr>
            <th>STT</th>
            <th>Cân nặng</th>
            <th>Giá</th>
            <th>Tên người nhận</th>
            <th>Số điện thoại người nhận</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
        {
            hangHoa.map(h=>{
                stt=stt+1;
                return(
                    <tr>
                        <td>{h.id}</td>
                        <td>{h.canNang}</td>
                        <td>{h.gia}</td>
                        <td>{h.tenNguoNhan}</td>
                        <td>{h.sdtNguoiNhan}</td>
                        <td>{h.email}</td>
                        <td>{h.trangThai}</td>
                        {
                            (()=>{
                                if(h.trangThai==="INACTIVE"){
                                    return(
                                        <>
                                        <Button onClick={()=>{setH(h);setShowUpdate(true)}} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>Xác nhận</Button>
                                        <Button onClick={()=>huyDon(h.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>Hủy</Button>
                                        </>
                                    )
                                }
                                else if(h.trangThai==="ACTIVE"){
                                    return(
                                        <>
                                        <Button onClick={()=>xacNhanHoanThanh(h)} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>Xác nhận hoàn thành</Button>
                                        <Button onClick={()=>huyDon(h.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>Hủy</Button>
                                        </>
                                    )
                                }
                            })()
                        }
                    </tr>
                )
            })
        }
        </tbody>
        </Table>
        </div>
        </div>
        </>
    );
}

export default QuanLyHangHoa;