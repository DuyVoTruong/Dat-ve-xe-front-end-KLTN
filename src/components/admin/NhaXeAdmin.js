import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function NhaXeAdmin(){

    const [nhaXe,setNhaXe]=useState([]);

    useEffect(()=>{
        fetch('/data/nhaXe.json').then(res=>res.json()).then(data=>{
            setNhaXe(data)
        });
    },[])

    const deleteNhaXe = (id)=>{
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
            <th>Id</th>
            <th>Tên nhà xe</th>
            <th>SĐT</th>
            <th>Giới thiệu</th>
            <th>Trạng thái hoạt động</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {nhaXe.map((nx,index)=>{
                return(
                    <>
                    <tr>
                    <td>{nx.id}</td>
                    <td>{nx.tenNhaXe}</td>
                    <td>{nx.sdt}</td>
                    <td>{nx.gioiThieu}</td>
                    <td>{nx.trangThaiHoatDong}</td>
                    <td><Link onClick={()=>deleteNhaXe(nx.id)}>Xóa</Link> | <Link to={"/admin/nha-xe/update/"+nx.id}>Sửa</Link></td>
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

export default NhaXeAdmin;