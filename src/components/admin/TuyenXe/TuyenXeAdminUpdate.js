import { useContext, useEffect, useState } from "react";
import { AccordionButton, Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { MyContext } from "../../../App";
import useBenXe from "../../hooks/useBenXe";
import useNhaXe from "../../hooks/useNhaXe";
import useXe from "../../hooks/useXe";
import { useTranslation } from "react-i18next";
import InfoMessage from "../../alert message/InfoMessage";

function TuyenXeAdminUpdate({showForm, setShowForm, update, tx, role}){
    const {xe} = useXe();
    const {benXe} = useBenXe(role);
    const account = useContext(MyContext).account;
    const { t } = useTranslation();

    const UpdateTuyenXe = (event) => {
        //event.preventDefault();
        let tenBenXeDi = document.getElementById("benXeDi")[document.getElementById('benXeDi').selectedIndex].innerHTML;
        let tenBenXeDen = document.getElementById("benXeDen")[document.getElementById('benXeDen').selectedIndex].innerHTML;
        let bienSoXe = document.getElementById("xe").value;
        let ngayDi = document.getElementById("ngayDi").value;
        let gioDi = document.getElementById("gioDi").value;
        console.log("giờ đi "+ gioDi)
        let thoiGianHanhTrinh = document.getElementById("thoiGianHanhTrinh").value;
        let giaVe = Number(document.getElementById("giaVe").value);
        let trangThai = "";
        let groupTrangThai = document.getElementsByName("Group")
        for(let i=0;i<groupTrangThai.length;i++){
            if(groupTrangThai[i].checked===true){
                trangThai=groupTrangThai[i].value
            }
        }
        if(!tenBenXeDi||!tenBenXeDen||!ngayDi||!gioDi||!thoiGianHanhTrinh||!giaVe||!trangThai||!bienSoXe){
            InfoMessage();
        }else if(tenBenXeDen===tenBenXeDi){
            InfoMessage(t("Tên bến xe đi và tên bến xe đến bị trùng nhau!!! Vui lòng chọn lại!!!"))
        }else if(giaVe<0) {
            InfoMessage(t("Giá vé phải lớn hơn hơn 0!!!"))
        }else {
            let data = {
                tenBenXeDi, tenBenXeDen, ngayDi, gioDi,xe,thoiGianHanhTrinh, giaVe, trangThai, bienSoXe
            }
            console.log(data)
            update(tx.id, data);
        }
    }
  
    const handleClose = () => {setShowForm(false)};

    return (
        <>
          <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{t("Cập nhật tuyến xe")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Bến xe đi")}
                    </Form.Label>
                    <Form.Select id="benXeDi">
                        {benXe.map(bx=>{
                            if(tx.benXeDi&&bx.trangThai==="ACTIVE"){
                                if(bx.tenBenXe===tx.benXeDi.tenBenXe){
                                    return(
                                        <option selected key={`benXeDi${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                }
                                return(
                                    <option key={`benXeDi${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                )
                            }
                        })}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Bến xe đến")}
                    </Form.Label>
                    <Form.Select id="benXeDen">
                        {benXe.map(bx=>{
                            if(tx.benXeDen&&bx.trangThai==="ACTIVE"){
                                if(bx.tenBenXe===tx.benXeDen.tenBenXe){
                                    return(
                                        <option selected key={`benXeDen${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                    )
                                }
                                return(
                                    <option key={`benXeDen${bx.id}`} value={bx.id}>{bx.tenBenXe}</option>
                                )
                            }
                        })}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Xe")}
                    </Form.Label>
                    <Form.Select id="xe">
                        {xe.map(x=>{
                            if(role==="NHAXE"){
                                if(x.nhaXe.taiKhoan.username===account.username){
                                    if(tx.xe){
                                        if(tx.xe.bienSoXe===x.bienSoXe){
                                            return(
                                                <option selected key={`xe${x.id}`} value={x.bienSoXe}>{t("Biển số xe")}: {x.bienSoXe} - {t("Nhà xe")}: {tx.xe.nhaXe.tenNhaXe}</option>
                                            )
                                        }
                                    }
                                    return(
                                        <option key={`xe${x.id}`} value={x.bienSoXe}>{t("Biển số xe")}: {x.bienSoXe} - {t("Nhà xe")}: {x.nhaXe.tenNhaXe}</option>
                                    )
                                }
                            }
                            else{
                                if(tx.xe){
                                    if(tx.xe.bienSoXe===x.bienSoXe){
                                        return(
                                            <option selected key={`xe${x.id}`} value={x.bienSoXe}>Biển số xe: {x.bienSoXe} - Nhà xe {tx.xe.nhaXe.tenNhaXe}</option>
                                        )
                                    }
                                }
                                return(
                                    <option key={`xe${x.id}`} value={x.bienSoXe}>Biển số xe: {x.bienSoXe} - Nhà xe {x.nhaXe.tenNhaXe}</option>
                                )
                            }
                        })}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Giờ khởi hành")}
                    </Form.Label>
                    <Form.Control id="gioDi" type="time" defaultValue={tx.gioDi}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Ngày đi")} (yy-mm-dd)
                    </Form.Label>
                    <Form.Control id="ngayDi" type="date" defaultValue={tx.ngayDi}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Thời gian hành trình")}
                    </Form.Label>
                    <Form.Control id="thoiGianHanhTrinh" type="text" defaultValue={tx.thoiGianHanhTrinh}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                        {t("Giá (đơn vị: đồng)")}
                    </Form.Label>
                    <Form.Control id="giaVe" type="number" min={1} defaultValue={tx.giaVe}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                    {t("Trạng thái")}
                    </Form.Label>
                    <br></br>
                        <Form.Check
                            inline
                            defaultChecked
                            label="on"
                            name="Group"
                            type="radio"
                            id="activeOn"
                            value={"ACTIVE"}
                        />
                        <Form.Check
                            inline
                            label="off"
                            name="Group"
                            type="radio"
                            id="activeOff"
                            value={"INACTIVE"}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                {t("Đóng")}
              </Button>
              <Button variant="primary" type="button" onClick={UpdateTuyenXe}>
                {t("Cập nhật")}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default TuyenXeAdminUpdate;