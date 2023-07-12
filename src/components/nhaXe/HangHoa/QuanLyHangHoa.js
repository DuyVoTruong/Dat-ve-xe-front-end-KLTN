import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Table, Toast } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../App";
import { convert_vi_to_en, getHangHoaByTuyenXeId } from "../../hooks/useFunction";
import useHangHoa from "../../hooks/useHangHoa";
import DataTable, { defaultThemes } from "react-data-table-component";
import { GrSearch } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import SuccessMessage from "../../alert message/SuccessMessage";
import InfoMessage from "../../alert message/InfoMessage";
import swal from "sweetalert";



function HangHoaForm({show, setShow, h, update}){
    
    const handleClose = () => setShow(false);
    const {t} = useTranslation();

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
            <Modal.Title>{t("Cập nhật hàng hóa")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="CanNang">
                    <Form.Label className="text-center">
                    {t("Cân nặng")}
                    </Form.Label>
                    <Form.Control type="number" placeholder={t("Nhập cân nặng")} defaultValue={h.canNang}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Gia">
                    <Form.Label className="text-center">
                    {t("Giá (đơn vị: đồng)")}
                    </Form.Label>
                    <Form.Control type="number" placeholder={t("Nhập giá")} defaultValue={h.gia}/>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {t("Đóng")}
            </Button>
            <Button variant="primary" onClick={updateHangHoa}>
                {t("Cập nhật")}
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
    const {t} = useTranslation();


    const updateHangHoa =(id, data)=>{
        fetch("http://localhost:8081/api/hanghoa/"+id, {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res=>res.json()).then(data=>{
            if(data.status==200){
                setLoad(true);
                SuccessMessage();
            }
        })
    }

    const huyDon =(id)=>{

        swal({
            title: t("Bạn muốn hủy đơn giao hàng này"),
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:8081/api/hanghoa/${id}`,{
                    method: "DELETE",
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        "Content-Type": "application/json",
                    }
                }).then(res=>res.json()).then(data=>{
                        if(data.status==200){
                            SuccessMessage();
                            setLoad(true);
                        }
                })

            } else {

            }
        });

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
            InfoMessage("Đã xảy ra lỗi!!! Vui lòng xác nhận lại!!!");
        } else{
            let data = {
                canNang,gia,trangThai
            }

            updateHangHoa(h.id, data);
        }
    }

    const columns = [
        {
            name: <div>{t("Cân nặng")}</div>,
            selector: row => row.canNang,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Giá")}</div>,
            selector: row => row.gia,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Tên người nhận")}</div>,
            selector: row => row.tenNguoNhan,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Số điện thoại của người nhận")}</div>,
            selector: row => row.sdtNguoiNhan,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>Email</div>,
            selector: row => row.email,
            sortable: true,
            wrap: true,
        },
        {
            name: <div>{t("Trạng thái")}</div>,
            selector: row => row.trangThai,
            sortable: true,
            wrap: true,
        },
        {
            name: '',
            selector: (row, index)=>{
                return(()=>{
                    if(row.trangThai==="INACTIVE"){
                        return(
                            <>
                            <Button onClick={()=>{setH(row);setShowUpdate(true)}} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>{t("Xác nhận")}</Button>
                            <Button onClick={()=>huyDon(row.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>{t("Hủy")}</Button>
                            </>
                        )
                    }
                    else if(row.trangThai==="ACTIVE"){
                        return(
                            <>
                            <Button onClick={()=>xacNhanHoanThanh(row)} style={{margin: "10px", backgroundColor:"#33FF99", color:"black"}}>{t("Hoàn thành")}</Button>
                            <Button onClick={()=>huyDon(row.id)} style={{margin: "10px", backgroundColor:"#FF6600", color:"black"}}>{t("Hủy")}</Button>
                            </>
                        )
                    }
                })()
            },
            wrap: true
        },
    ];

    const tableCustomStyles = {
        rows: {
          style: {
            fontSize: "16px",
            borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: defaultThemes.default.divider.default,
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: defaultThemes.default.divider.default,
          },
        },
        headCells: {
            style: {
                fontSize: "16px",
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderTopColor: defaultThemes.default.divider.default,
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: defaultThemes.default.divider.default,
            }
        },
        cells: {
    		style: {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
    		},
    	},
      }

    const [pending, setPending] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleKeyDown=(event)=>{
        if (event.key === 'Enter') {
            setSearch(event.target.value);
        }
    }

    const handleSearch=()=>{
        setSearch(document.getElementById("searchText").value);
    }

    return(
        <>
        <ToastContainer/>
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
            <input id="searchText" onKeyDown={(evt)=>handleKeyDown(evt)} className="form-control" style={{marginTop: "20px", marginBottom: "20px", marginLeft: "25px", width: "30%"}} type={"search"} placeholder={t("Tìm kiếm theo tên bến xe đi")}></input>
            <div style={{marginTop: "20px", marginBottom: "20px", marginRight: "10px"}}><Button onClick={handleSearch} variant="outline-success"><GrSearch></GrSearch>{t("Tìm kiếm")}</Button></div>
            <BsPlusSquareFill style={{marginTop: "25px"}} onClick={0} className="add-btn"></BsPlusSquareFill>
        </div>
        <div style={{padding:"20px", overflow: "auto"}}>
        {
            (()=>{
                if(tuyenXe){
                    if(tuyenXe.benXeDi&&tuyenXe.benXeDen&&tuyenXe.xe)
                    return(
                        <>
                        <div>{t("Quản lý hàng hóa của tuyến xe")}:</div>
                        <div><b>{t("Bến xe đi")}:</b> {tuyenXe.benXeDi.tenBenXe} - <b>{t("Bến xe đến")}:</b> {tuyenXe.benXeDen.tenBenXe} - <b>{t("Biển số xe")}:</b> {tuyenXe.xe.bienSoXe} - <b>{t("Ngày đi")}:</b> {tuyenXe.ngayDi} - <b>{t("Giờ khởi hành")}:</b> {tuyenXe.gioDi}</div>
                        </>
                    )
                }
            })()
        }
        <h1 style={{textAlign: "center"}}>{t("Danh sách các hàng hóa")}</h1>
        <DataTable
            columns={columns}
            data={hangHoa.filter(item=>convert_vi_to_en(item.tenNguoNhan.toLowerCase()).indexOf(convert_vi_to_en(search.toLowerCase()))>=0)}
            pagination
            highlightOnHover
		    pointerOnHover
            striped
            responsive
            customStyles={tableCustomStyles}
            progressPending={pending}
        />
        </div>
        </div>
        </>
    );
}

export default QuanLyHangHoa;


{/*
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
        </div> */}