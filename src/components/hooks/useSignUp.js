import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpPostSignUp } from "./Request";
import InfoMessage from "../alert message/InfoMessage";
import SuccessMessage from "../alert message/SuccessMessage";
import ErrorMessage from "../alert message/ErrorMessage";
import FailMessage from "../alert message/FailMessage";

function useSignUp(){
    const nav = useNavigate();
    const token = useContext(MyContext).token;

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
    })

    return {
       signUp
    }
}

export default useSignUp;