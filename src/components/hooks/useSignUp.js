import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpPostSignUp } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

function useSignUp(){
    const nav = useNavigate();
    const token = useContext(MyContext).token;
    const {t} = useTranslation();

    const signUp = useCallback(async(data) => {
        if (!data.username||!data.password){
            InfoMessage();
        }
        else {
            try {
                await httpPostSignUp(data, token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        localStorage.setItem('idHash', data.message);
                        nav("/verify-email");
                        swal({
                            title: t("Bạn đã thực hiện thành công"),
                            text: t("Vui lòng kiểm tra email để lấy mã otp"),
                            icon: "success",
                            button: "Ok",
                        });
                    }
                    else if(data.status==201){
                        nav("/verify-email");
                    } else {
                        swal({
                            title: t("Đã xảy ra lỗi vui lòng thực hiện lại"),
                            text: "",
                            icon: "error",
                            button: "Ok",
                        });
                    }
                })
            }catch(err) {
                swal({
                    title: t("Đã xảy ra lỗi vui lòng thực hiện lại"),
                    text: "",
                    icon: "error",
                    button: "Ok",
                });
            }
        }
    })

    return {
       signUp
    }
}

export default useSignUp;