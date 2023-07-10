import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteDanhGia, httpGetDanhGia, httpPostDanhGia, httpPutDanhGia } from "./Request";
import FailMessage from "../alert message/FailMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import SuccessMessage from "../alert message/SuccessMessage";

function useDanhGia(){
    const [danhGia, setDanhGia] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const getDanhGia = useCallback(async() => {
        const fetchedDanhGia = await httpGetDanhGia(token);
        if (fetchedDanhGia.status == 200){
            setDanhGia(fetchedDanhGia.object)
            console.log(fetchedDanhGia.object)
        }
        else {
            setDanhGia([]);
        }
    }, [])

    useEffect(() => {
        getDanhGia();
    }, [getDanhGia]);

    const addDanhGia = useCallback(async(data) => {
        //if (!data.tenDanhGia||!data.diaChiChiTiet||!data.tinhThanh){
            //alert("Missing data");
        //}
        //else{
            let nhaXeId = data.nhaXeId;
            try {
                await httpPostDanhGia(data,token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        SuccessMessage();
                        nav("/nha-xe-chi-tiet/"+nhaXeId)
                    }
                    else{
                        ErrorMessage(data.message);
                    }
                })
            } catch(err) {
                FailMessage();
            }
        //}
        getDanhGia();
    }, [getDanhGia]);

    const updateDanhGia = useCallback(async(idDanhGia, data) => {
        //if (!data.tenDanhGia||!data.diaChiChiTiet||!data.tinhThanh){
            //alert("Missing data");
        //}
        //else {
            try {
                await httpPutDanhGia(idDanhGia, data, token).then(res => res.json()).then(data =>{
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
        //}
        getDanhGia();
    },[getDanhGia])

    const deleteDanhGia = useCallback(async(idDanhGia) => {
        try {
            await httpDeleteDanhGia(idDanhGia, token).then(res => res.json()).then(data => {
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
        getDanhGia();
    },[getDanhGia])

    return {
        danhGia,
        getDanhGia,
        addDanhGia,
        updateDanhGia,
        deleteDanhGia,
    }
}

export default useDanhGia;