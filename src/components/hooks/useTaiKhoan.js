import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpGetTaiKhoan, httpPutTaiKhoan } from "./Request";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { useTranslation } from "react-i18next";

function useTaiKhoan(){
    const [taiKhoan, setTaiKhoan] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;
    const {t} = useTranslation();

    const getTaiKhoan = useCallback(async() => {
        const fetchedTaiKhoan = await httpGetTaiKhoan(token);
        if (fetchedTaiKhoan.status == 200){
            setTaiKhoan(fetchedTaiKhoan.object)
            console.log(fetchedTaiKhoan.object)
        }
        else {
            setTaiKhoan([]);
        }
    }, [])

    useEffect(() => {
        getTaiKhoan();
    }, [getTaiKhoan]);

    /*const addTaiKhoan = useCallback(async(data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            alert("Missing data");
        }
        else{
            try {
                await httpPostBenXe(data,token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        alert("Success");
                        nav("/admin/ben-xe");
                    }
                    else{
                        alert(data.message);
                    }
                })
            } catch(err) {
                alert("Fail");
            }
        }
    }, [getBenXe]);*/

    const updateTaiKhoan = useCallback(async(id, data) => {
        try {
            await httpPutTaiKhoan(id, data, token).then(res => res.json()).then(data =>{
                if (data.status == 200){
                    SuccessMessage(t("Thành công"));
                }
                else {
                    ErrorMessage(t("Thất bại"));
                }
            })
        }catch(err) {
            FailMessage(t("Thất bại"));
        }
        getTaiKhoan();
    },[getTaiKhoan])

    /*const deleteBenXe = useCallback(async(idBenXe) => {
        try {
            await httpDeleteBenXe(idBenXe,token).then(res => res.json()).then(data => {
                if(data.status == 200){
                    alert("Success");
                }
                else{
                    alert(data.message);
                }
            })
        }catch(err) {
            alert("Fail");
        }
        getBenXe();
    },[getBenXe])*/

    return {
        taiKhoan,
        updateTaiKhoan,
        getTaiKhoan,
        setTaiKhoan,
    }
}

export default useTaiKhoan;