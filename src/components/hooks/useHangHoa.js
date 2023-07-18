import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteHangHoa, httpGetHangHoa, httpPostHangHoa, httpPutHangHoa } from "./Request";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import { useTranslation } from "react-i18next";

function useHangHoa(){
    const [hangHoa, setHangHoa] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;
    const {t} = useTranslation();

    const getHangHoa = useCallback(async() => {
        const fetchedHangHoa = await httpGetHangHoa(token);
        if (fetchedHangHoa.status == 200){
            setHangHoa(fetchedHangHoa.object)
            console.log(fetchedHangHoa.object)
        }
        else {
            setHangHoa([]);
        }
    }, [])

    useEffect(() => {
        getHangHoa();
    }, [getHangHoa]);

    const addHangHoa = useCallback(async(data) => {
        //if (!data.tenHangHoa||!data.diaChiChiTiet||!data.tinhThanh){
            //alert("Missing data");
        //}
        //else{
            let nhaXeId = data.nhaXeId;
            try {
                await httpPostHangHoa(data,token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        SuccessMessage(t("Thành công"));
                        nav("/lich-su-gui-hang/")
                    }
                    else{
                        ErrorMessage(t("Thất bại"));
                    }
                })
            } catch(err) {
                FailMessage(t("Thất bại"));
            }
        //}
        getHangHoa();
    }, [getHangHoa]);

    const updateHangHoa = useCallback(async(idHangHoa, data) => {
        //if (!data.tenHangHoa||!data.diaChiChiTiet||!data.tinhThanh){
            //alert("Missing data");
        //}
        //else {
            try {
                await httpPutHangHoa(idHangHoa, data, token).then(res => res.json()).then(data =>{
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
        //}
        getHangHoa();
    },[getHangHoa])

    const deleteHangHoa = useCallback(async(idHangHoa) => {
        try {
            await httpDeleteHangHoa(idHangHoa, token).then(res => res.json()).then(data => {
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
        getHangHoa();
    },[getHangHoa])

    return {
        hangHoa,
        getHangHoa,
        addHangHoa,
        updateHangHoa,
        deleteHangHoa,
    }
}

export default useHangHoa;