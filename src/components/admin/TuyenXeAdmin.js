import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TuyenXeAdmin(){
    const [tuyenXe, setTuyenXe] = useState([]);
    const [benXe, setBenXe] = useState([]);
    const [loaiXe, setLoaiXe] = useState([]);
    const [xe, setXe] = useState([]);
    const [nhaXe,setNhaXe]=useState([]);
    let tenBenXeDi="";
    let tenBenXeDen="";
    let tenLoaiXe="";
    let tenNhaXe="";
    let ngayDi="";

    useEffect(()=>{
        fetch("/data/tuyenXe.json").then(res=>res.json()).then(data=>{
            setTuyenXe(data);
        });
        fetch("/data/benXe.json").then(res=>res.json()).then(data=>{
            setBenXe(data);
        });
        fetch("/data/loaiXe.json").then(res=>res.json()).then(data=>{
            setLoaiXe(data);
        });
        fetch("/data/xe.json").then(res=>res.json()).then(data=>{
            setXe(data);
        });
        fetch("/data/nhaXe.json").then(res=>res.json()).then(data=>{
            setNhaXe(data);
        });
    },[]);

    const deleteTuyenXe = (id)=>{
        fetch('/data/nhaXe/delete/'+id, {
            method: 'Delete',
            headers: {
              'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(data=>{
            console.log('Success: ', data)
        }).catch(error=>{
            console.log('Error: ', error)
        })
    }

    return(
        <>
        <Container>
        <div style={{marginTop:"30px", height:"500px", overflowY:"scroll"}}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Tuyến xe</th>
            <th>Nhà xe</th>
            <th>Loại xe</th>
            <th>Ngày đi</th>
            <th>Giờ khởi hành</th>
            <th>Giá vé</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {tuyenXe.map(tx=>{
                ngayDi = tx.ngayDi
                benXe.map(bx=>{
                    if(bx.id==tx.id_benXeDi){
                        tenBenXeDi=bx.tenBenXe;
                    }
                    if(bx.id==tx.id_benXeDen){
                        tenBenXeDen=bx.tenBenXe;
                    }
                });
                xe.map(x=>{
                    if(x.id==tx.id_xe){
                        loaiXe.map(lx=>{
                            if(lx.id==x.id_loaiXe){
                                tenLoaiXe=lx.loaiXe;
                            }
                        })
                        nhaXe.map(nx=>{
                            if(nx.id==x.id_nhaXe){
                                tenNhaXe=nx.tenNhaXe
                            }
                        })
                    }
                })
                return(
                    <>
                    <tr>
                    <td>{tenBenXeDi}{" => "}{tenBenXeDen}</td>
                    <td>{tenNhaXe}</td>
                    <td>{tenLoaiXe}</td>
                    <td>{ngayDi}</td>
                    <td>{tx.gioKhoiHanh}</td>
                    <td>{tx.giaVe}</td>
                    <td><Link onClick={()=>deleteTuyenXe(tx.id)}>Xóa</Link> | <Link to={"/admin/tuyen-xe/update/"+tx.id}>Sửa</Link></td>
                    </tr>
                    </>
                )
            })}
        </tbody>
        </Table>
        </div>
        </Container>
        </>
    );
}

export default TuyenXeAdmin;