import { useContext } from "react";
import { MyContext } from "../../App";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import { httpGetNhaXeById } from "../hooks/Request";

function NhaXeHome(){

    const account = useContext(MyContext).account;
    const { t } = useTranslation();
    const token = useContext(MyContext).token;


    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);

    useEffect(()=>{
        if(account){
            httpGetNhaXeById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }
    },[account])

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"90vh", textAlign: "center"}}>
            <h1>{t('chaomung', {account: thongTinTaiKhoan.tenNhaXe})}</h1>
        </div>
    );
}

export default NhaXeHome;