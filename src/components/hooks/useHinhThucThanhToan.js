import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpDeleteHinhThucThanhToan, httpGetHinhThucThanhToan, httpPostHinhThucThanhToan, httpPutHinhThucThanhToan } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";

function useHinhThucThanhToan(){
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState([]);
    const nav = useNavigate();

    const getHinhThucThanhToan = useCallback(async() => {
        const fetchedHinhThucThanhToan = await httpGetHinhThucThanhToan();
        if (fetchedHinhThucThanhToan.status == 200){
            setHinhThucThanhToan(fetchedHinhThucThanhToan.object)
        }
        else {
            setHinhThucThanhToan([]);
        }
    }, [])

    useEffect(() => {
        getHinhThucThanhToan();
    }, [getHinhThucThanhToan]);

    const addHinhThucThanhToan = useCallback(async(data) => {
        if (!data.tenHinhThucThanhToan){
            InfoMessage();
        }
        else{
            try{
                await httpPostHinhThucThanhToan(data).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        SuccessMessage();
                        nav("/admin/ben-xe");
                    }
                    else{
                        ErrorMessage(data.message);
                    }
                })
            } catch(err){
                FailMessage();
            }
        }
    }, [getHinhThucThanhToan]);

    const updateHinhThucThanhToan = useCallback(async(idHinhThucThanhToan, data) => {
        if (!data.tenHinhThucThanhToan||!data.diaChi){
            InfoMessage();
        }
        else {
            try {
                await httpPutHinhThucThanhToan(idHinhThucThanhToan, data).then(res => res.json()).then(data =>{
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
    },[getHinhThucThanhToan])

    const deleteHinhThucThanhToan = useCallback(async(idHinhThucThanhToan) => {
        try {
            await httpDeleteHinhThucThanhToan(idHinhThucThanhToan).then(res => res.json()).then(data => {
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
        getHinhThucThanhToan();
    },[getHinhThucThanhToan])

    return {
        hinhThucThanhToan,
        addHinhThucThanhToan,
        updateHinhThucThanhToan,
        deleteHinhThucThanhToan,
    }
}

export default useHinhThucThanhToan;