import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteAdmin, httpGetAdmin, httpPostAdmin, httpPostSignUp, httpPutAdmin, httpPutTaiKhoan } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { useTranslation } from "react-i18next";

function useAdmin(){
    const [admin, setAdmin] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;
    const {t} = useTranslation();

    const getAdmin = useCallback(async() => {
        const fetchedAdmin = await httpGetAdmin(token);
        if (fetchedAdmin.status == 200){
            setAdmin(fetchedAdmin.object)
            console.log(fetchedAdmin.object)
        }
        else {
            setAdmin([]);
        }
    }, [])

    useEffect(() => {
        getAdmin();
    }, [getAdmin]);

    const addAdmin = useCallback(async(data) => {
        if (!data.name||!data.cmnd||!data.sdt||!data.email||!data.username||!data.password||!data.role||!data.trangThaiHoatDong){
            InfoMessage();
        }
        else{
            try {
                await httpPostAdmin(data).then(res => res.json()).then(data => {
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
    }, [getAdmin]);

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
        getAdmin();
    },[getAdmin])

    const updateAdmin = useCallback(async(id, data) => {
        if (!data.name||!data.cmnd||!data.sdt||!data.email||!data.username||!data.role||!data.trangThaiHoatDong){
            InfoMessage();
        }
        else {
            try {
                await httpPutAdmin(id, data, token).then(res => res.json()).then(data =>{
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
            getAdmin();
        }
    },[getAdmin])

    const deleteAdmin = useCallback(async(id) => {
        try {
            await httpDeleteAdmin(id).then(res => res.json()).then(data => {
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
        getAdmin();
    },[getAdmin])

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
        
        getAdmin();
    },[getAdmin])

    return {
        admin,
        addAdmin,
        updateAdmin,
        deleteAdmin,
        signUp,
        updateTaiKhoan,
    }
}

export default useAdmin;