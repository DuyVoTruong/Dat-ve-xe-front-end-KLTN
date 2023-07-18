import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteBenXe, httpGetBenXe, httpGetBenXeAdmin, httpGetBenXeById, httpGetBenXeUser, httpPostBenXe, httpPutBenXe } from "./Request";
import SuccessMessage from "../alert message/SuccessMessage";
import FailMessage from "../alert message/FailMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import InfoMessage from "../alert message/InfoMessage";
import { useTranslation } from "react-i18next";

function useBenXe(){
    const [benXe, setBenXe] = useState([]);
    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const {t} = useTranslation();

    const getBenXe = useCallback(async() => {
        const fetchedBenXe = await httpGetBenXeUser();
        if (fetchedBenXe.status == 200){
            setBenXe(fetchedBenXe.object)
            console.log(fetchedBenXe.object)
        }
        else {
            setBenXe([]);
        }
    }, [])

    const getAllBenXeAdmin = useCallback(async() => {
        const fetchedBenXe = await httpGetBenXeAdmin(token);
        if (fetchedBenXe.status == 200){
            setBenXe(fetchedBenXe.object)
            console.log(fetchedBenXe.object)
        }
        else {
            setBenXe([]);
        }
    }, []);

    useEffect(() => {
        if(account.role==="NHAXE"||account.role==="USER"){
            getBenXe();
        }else{
            getAllBenXeAdmin();
        }
    }, [getAllBenXeAdmin]);

    const addBenXe = useCallback(async(data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            InfoMessage();
        }
        else{
            try {
                await httpPostBenXe(data, token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        SuccessMessage(t("Thành công"));
                    }
                    else{
                        ErrorMessage(t("Thất bại"));
                    }
                })
            } catch(err) {
                FailMessage(t("Thất bại"));
            }
        }
        getAllBenXeAdmin();
    }, [getAllBenXeAdmin]);

    const updateBenXe = useCallback(async(idBenXe, data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            InfoMessage();
        }
        else {
            try {
                await httpPutBenXe(idBenXe, data, token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        SuccessMessage(t("Thành công"));
                    }
                    else {
                        ErrorMessage(t("Thất bại"));
                    }
                })
            }catch(err) {
                FailMessage();
            }
        }
        getAllBenXeAdmin();
    },[getAllBenXeAdmin])

    const deleteBenXe = useCallback(async(idBenXe) => {
        try {
            await httpDeleteBenXe(idBenXe, token).then(res => res.json()).then(data => {
                if(data.status == 200){
                    SuccessMessage(t("Thành công"));
                }
                else{
                    ErrorMessage(t("Thất bại"));
                }
            })
        }catch(err) {
            FailMessage(t("Thất bại"));
        }
        getAllBenXeAdmin();
    },[getAllBenXeAdmin])

    return {
        benXe,
        getAllBenXeAdmin,
        addBenXe,
        updateBenXe,
        deleteBenXe,
    }
}

export default useBenXe;