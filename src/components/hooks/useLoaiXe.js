import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteLoaiXe, httpGetLoaiXe, httpPostLoaiXe, httpPutLoaiXe } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";

function useLoaiXe(){
    const [loaiXe, setLoaiXe] = useState([]);
    const token = useContext(MyContext).token;

    const getLoaiXe = useCallback(async() => {
        const fetchedLoaiXe = await httpGetLoaiXe(token);
        if (fetchedLoaiXe.status == 200){
            setLoaiXe(fetchedLoaiXe.object)
        }
        else {
            setLoaiXe([]);
        }
    }, [])

    useEffect(() => {
        getLoaiXe();
    }, [getLoaiXe]);

    const addLoaiXe = useCallback(async(data) => {
        if (!data.tenLoaiXe||!data.sucChua){
            InfoMessage();
        }
        else{
            try {
                await httpPostLoaiXe(data,token).then(res => res.json()).then(data => {
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
        getLoaiXe();
    }, [getLoaiXe]);

    const updateLoaiXe = useCallback(async(idLoaiXe, data) => {
        if (!data.tenLoaiXe||!data.sucChua){
            InfoMessage();
        }
        else {
            try {
                await httpPutLoaiXe(idLoaiXe, data,token).then(res => res.json()).then(data =>{
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
        getLoaiXe();
    },[getLoaiXe])

    const deleteLoaiXe = useCallback(async(idLoaiXe) => {
        try {
            await httpDeleteLoaiXe(idLoaiXe,token).then(res => res.json()).then(data => {
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
        getLoaiXe();
    },[getLoaiXe])

    return {
        loaiXe,
        addLoaiXe,
        updateLoaiXe,
        deleteLoaiXe,
    }
}

export default useLoaiXe;