import { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { httpDeleteNhaXe, httpGetNhaXe, httpGetNhaXeUserAll, httpPostNhaXe, httpPostSignUp, httpPutNhaXe, httpPutTaiKhoan } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { useTranslation } from "react-i18next";

function useNhaXe(){
    const [nhaXe, setNhaXe] = useState([]);
    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const {t} = useTranslation();

    const getNhaXeAdmin = useCallback(async() => {
        const fetchedNhaXe = await httpGetNhaXe(token);
        if (fetchedNhaXe.status == 200){
            setNhaXe(fetchedNhaXe.object)
        }
        else {
            setNhaXe([]);
        }
    }, [])

    const getNhaXeUser = useCallback(async() => {
        const fetchedNhaXe = await httpGetNhaXeUserAll(token);
        if (fetchedNhaXe.status == 200){
            setNhaXe(fetchedNhaXe.object)
        }
        else {
            setNhaXe([]);
        }
    }, [])

    useEffect(() => {
        if(!account){
            getNhaXeUser();
        }
        else if(account.role==="USER"||account.role==="NHAXE"){
            getNhaXeUser();
        }else{
            getNhaXeAdmin();
        }
    }, [getNhaXeAdmin, getNhaXeUser]);

    const addNhaXe = useCallback(async(data) => {
        if (!data.tenNhaXe||!data.diaChi){
            InfoMessage();
        }
        else{
            try {
                await httpPostNhaXe(data, token).then(res => res.json()).then(data => {
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
        getNhaXeAdmin();
    }, [getNhaXeAdmin]);

    const updateNhaXe = useCallback(async(idNhaXe, data) => {
        if (!data.tenNhaXe||!data.diaChi){
            InfoMessage();
        }
        else {
            try {
                await httpPutNhaXe(idNhaXe, data, token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        SuccessMessage(t("Thành công"));
                    }
                    else if(!data.message){
                        alert("Bạn phải đăng nhập lại!!!");
                    }else{
                        ErrorMessage(t("Thắt bại"))
                    }
                })
            }catch(err) {
                FailMessage(t("Thất bại"));
            }
        }
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    const deleteNhaXe = useCallback(async(idNhaXe) => {
        try {
            await httpDeleteNhaXe(idNhaXe, token).then(res => res.json()).then(data => {
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
        getNhaXeAdmin();
    },[getNhaXeAdmin])

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
        
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    const signUp = useCallback(async(data) => {
        if (!data.username||!data.password){
            InfoMessage();
        }
        else {
            try {
                await httpPostSignUp(data, token).then(res => res.json()).then(data =>{
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
        }
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    return {
        nhaXe,
        addNhaXe,
        updateNhaXe,
        deleteNhaXe,
        updateTaiKhoan,
        signUp

    }
}

export default useNhaXe;