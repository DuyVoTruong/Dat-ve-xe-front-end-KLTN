import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteAdmin, httpGetAdmin, httpPostAdmin, httpPostSignUp, httpPutAdmin, httpPutTaiKhoan } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";

function useAdmin(){
    const [admin, setAdmin] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

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
                        SuccessMessage();
                    }
                    else{
                        ErrorMessage(data.message);
                    }
                })
            } catch(err) {
                FailMessage();
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
                        SuccessMessage();
                    }
                    else {
                        ErrorMessage(data.message);
                    }
                })
            }catch(err) {
                FailMessage();
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
                        SuccessMessage();
                    }
                    else {
                        ErrorMessage(data.message);
                    }
                })
            }catch(err) {
                FailMessage();
            }
            getAdmin();
        }
    },[getAdmin])

    const deleteAdmin = useCallback(async(id) => {
        try {
            await httpDeleteAdmin(id).then(res => res.json()).then(data => {
                if(data.status == 200){
                    SuccessMessage();
                }
                else{
                    ErrorMessage(data.message);
                }
            })
        }catch(err) {
            FailMessage();
        }
        getAdmin();
    },[getAdmin])

    const updateTaiKhoan = useCallback(async(id, data) => {
        
            try {
                await httpPutTaiKhoan(id, data, token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        SuccessMessage();
                    }
                    else {
                        ErrorMessage(data.message);
                    }
                })
            }catch(err) {
                FailMessage();
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