import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpPostSignUp } from "./Request";

function useSignUp(){
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const signUp = useCallback(async(data) => {
        if (!data.username||!data.password){
            alert("Missing data");
        }
        else {
            try {
                await httpPostSignUp(data, token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        alert("Success");
                    }
                    else {
                        alert(data.message);
                    }
                })
            }catch(err) {
                alert("Fail");
            }
        }
    })

    return {
       signUp
    }
}

export default useSignUp;