import { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { httpDeleteNhaXe, httpGetNhaXe, httpGetNhaXeUserAll, httpPostNhaXe, httpPostSignUp, httpPutNhaXe, httpPutTaiKhoan } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";

function useNhaXe(){
    const [nhaXe, setNhaXe] = useState([]);
    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;

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
                        SuccessMessage();
                    }
                    else if(!data.message){
                        alert("Bạn phải đăng nhập lại!!!");
                    }else{
                        ErrorMessage(data.message)
                    }
                })
            }catch(err) {
                FailMessage();
            }
        }
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    const deleteNhaXe = useCallback(async(idNhaXe) => {
        try {
            await httpDeleteNhaXe(idNhaXe, token).then(res => res.json()).then(data => {
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
        getNhaXeAdmin();
    },[getNhaXeAdmin])

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