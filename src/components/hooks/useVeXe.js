import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteVeXe, httpGetVeXe, httpPostVeXe, httpPutVeXe } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { useTranslation } from "react-i18next";

function useVeXe(){
    const [veXe, setVeXe] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;
    const {t} = useTranslation();

    const getVeXe = useCallback(async(id) => {
        const fetchedVeXe = await httpGetVeXe(id, token);
        if (fetchedVeXe.status == 200){
            setVeXe(fetchedVeXe.object)
        }
        else {
            setVeXe([]);
        }
    }, [])

    useEffect(() => {
        getVeXe();
    }, [getVeXe]);

    const addVeXe = useCallback(async(data) => {
        if (!data.tenVeXe||!data.diaChi){
            InfoMessage();
        }
        else{
            try {
                await httpPostVeXe(data, token).then(res => res.json()).then(data => {
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
    }, [getVeXe]);

    const updateVeXe = useCallback(async(idVeXe, data) => {
            try {
                await httpPutVeXe(idVeXe, data, token).then(res => res.json()).then(data =>{
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
    },[getVeXe])

    const deleteVeXe = useCallback(async(idVeXe) => {
        try {
            await httpDeleteVeXe(idVeXe, token).then(res => res.json()).then(data => {
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
        getVeXe();
    },[getVeXe])

    return {
        veXe,
        addVeXe,
        updateVeXe,
        deleteVeXe,
    }
}

export default useVeXe;