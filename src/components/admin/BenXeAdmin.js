import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useBenXe from "../hooks/useBenXe";

function BenXeAdmin(){

    const {benXe, deleteBenXe} = useBenXe();

    const DeleteBenXe = (id) => {
        deleteBenXe(id)
    }

    return(
        <>
        <Container>
        <div style={{marginTop:"30px", height:"500px", overflowY:"scroll"}}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Tên bến xe</th>
            <th>Địa chỉ</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {benXe.map((bx,index)=>{
                return(
                    <>
                    <tr>
                    <td>{bx.id}</td>
                    <td>{bx.tenBenXe}</td>
                    <td>{bx.diaChi}</td>
                    <td width={"175px"}><img style={{height: "100px", width: "150px"}} src={bx.image}/></td>
                    <td><Link onClick={()=>DeleteBenXe(bx.id)}>Xóa</Link> | <Link to={"/admin/ben-xe/update"} state={{idBenXe:bx.id}}>Sửa</Link></td>
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

export default BenXeAdmin;