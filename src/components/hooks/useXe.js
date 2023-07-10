import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteXe, httpGetXe, httpGetXeNhaXe, httpPostXe, httpPutXe } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";

function useXe(){
    const [xe, setXe] = useState([]);
    const account = useContext(MyContext).account;
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const getXeAdmin = useCallback(async() => {
        const fetchedXe = await httpGetXe(token);
        if (fetchedXe.status == 200){
            setXe(fetchedXe.object)
        }
        else {
            setXe([]);
        }
    }, [])

    const getXeNhaXe = useCallback(async() => {
        const fetchedXe = await httpGetXeNhaXe(account.id, token);
        if (fetchedXe.status == 200){
            setXe(fetchedXe.object)
        }
        else {
            setXe([]);
        }
    }, [])

    useEffect(() => {
        if(account.role==="ADMIN"){
            getXeAdmin();
        }else if(account.role==='NHAXE'){
            getXeNhaXe();
        }
    }, [getXeAdmin, getXeNhaXe]);

    const addXe = useCallback(async(data) => {
        if (!data.bienSoXe||!data.tenNhaXe||!data.tenLoaiXe){
            InfoMessage();
        }
        else{
            try {
                await httpPostXe(data,token).then(res => res.json()).then(data => {
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
        if(account.role=="ADMIN"){
            getXeAdmin();
        }else{
            getXeNhaXe()
        }
    }, [getXeAdmin,getXeNhaXe]);

    const updateXe = useCallback(async(idXe, data) => {
        if (!data.tenXe||!data.diaChi){
            InfoMessage();
        }
        else {
            try {
                await httpPutXe(idXe, data,token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        SuccessMessage();
                        nav('/admin/ben-xe');
                    }
                    else {
                        ErrorMessage(data.message);
                    }
                })
            }catch(err) {
                FailMessage();
            }
        }
        if(account.role=="ADMIN"){
            getXeAdmin();
        }else{
            getXeNhaXe();
        }
    },[getXeAdmin,getXeNhaXe])

    const deleteXe = useCallback(async(idXe) => {
        try {
            await httpDeleteXe(idXe,token).then(res => res.json()).then(data => {
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
        if(account.role=="ADMIN"){
            getXeAdmin();
        }else{
            getXeNhaXe()
        }
    },[getXeAdmin,getXeNhaXe])

    return {
        xe,
        addXe,
        updateXe,
        deleteXe,
    }
}

export default useXe;