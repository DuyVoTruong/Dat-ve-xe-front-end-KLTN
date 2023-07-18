import { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { httpDeleteUser, httpGetUser, httpPostSignUp, httpPostUser, httpPutTaiKhoan, httpPutUser } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { useTranslation } from "react-i18next";

function useUser(){
    const [user, setUser] = useState([]);
    const token = useContext(MyContext).token;
    const {t} = useTranslation();

    const getUser = useCallback(async() => {
        const fetchedUser = await httpGetUser(token);
        if (fetchedUser.status == 200){
            setUser(fetchedUser.object)
            console.log(fetchedUser.object)
        }
        else {
            setUser([]);
        }
    },[])

    useEffect(() => {
        getUser();
    }, [getUser]);

    const addUser = useCallback(async(data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            InfoMessage();
        }
        else{
            try {
                await httpPostUser(data, token).then(res => res.json()).then(data => {
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
        getUser();
    }, [getUser]);

    const updateUser = useCallback(async(id, data) => {
        if (!data.username||data.trangThaiHoatDong===null){
            InfoMessage();
        }
        else {
            try {
                await httpPutUser(id, data,token).then(res => res.json()).then(data =>{
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
        getUser();
    },[getUser])

    const deleteUser = useCallback(async(idUser) => {
        try {
            await httpDeleteUser(idUser,token).then(res => res.json()).then(data => {
                if(data.status == 200){
                    SuccessMessage(t("Thành công"));
                }
                else{
                    ErrorMessage(t("Thất bại"));
                }
            })
        }catch(err) {
            FailMessage(t("thất bại"));
        }
        getUser();
    },[getUser])

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
        
        getUser();
    },[getUser])

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
        getUser();
    },[getUser])

    return {
        user,
        addUser,
        updateUser,
        deleteUser,
        signUp,
        updateTaiKhoan
    }
}

export default useUser;