import { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { httpDeleteNhaXe, httpGetNhaXe, httpGetNhaXeUserAll, httpPostNhaXe, httpPostSignUp, httpPutNhaXe, httpPutTaiKhoan } from "./Request";

function useNhaXe(){
    const [nhaXe, setNhaXe] = useState([]);
    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;

    const getNhaXeAdmin = useCallback(async() => {
        const fetchedNhaXe = await httpGetNhaXe(token);
        if (fetchedNhaXe.status == 200){
            setNhaXe(fetchedNhaXe.object)
        }
        else {
            setNhaXe([]);
        }
    }, [])

    const getNhaXeUser = useCallback(async() => {
        const fetchedNhaXe = await httpGetNhaXeUserAll(token);
        if (fetchedNhaXe.status == 200){
            setNhaXe(fetchedNhaXe.object)
        }
        else {
            setNhaXe([]);
        }
    }, [])

    useEffect(() => {
        if(!account){
            getNhaXeUser();
        }
        else if(account.role==="USER"){
            getNhaXeUser();
        }else{
            getNhaXeAdmin();
        }
    }, [getNhaXeAdmin, getNhaXeUser]);

    const addNhaXe = useCallback(async(data) => {
        if (!data.tenNhaXe||!data.diaChi){
            alert("Missing data");
        }
        else{
            try {
                await httpPostNhaXe(data, token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        alert("Success");
                    }
                    else{
                        alert(data.message);
                    }
                })
            } catch(err) {
                alert("Fail");
            }
        }
        getNhaXeAdmin();
    }, [getNhaXeAdmin]);

    const updateNhaXe = useCallback(async(idNhaXe, data) => {
        if (!data.tenNhaXe||!data.diaChi){
            alert("Missing data");
        }
        else {
            try {
                await httpPutNhaXe(idNhaXe, data, token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        alert("Success");
                    }
                    else if(!data.message){
                        alert("Bạn phải đăng nhập lại!!!");
                    }else{
                        alert(data.message)
                    }
                })
            }catch(err) {
                alert("Fail");
            }
        }
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    const deleteNhaXe = useCallback(async(idNhaXe) => {
        try {
            await httpDeleteNhaXe(idNhaXe, token).then(res => res.json()).then(data => {
                if(data.status == 200){
                    alert("Success");
                }
                else{
                    alert(data.message);
                }
            })
        }catch(err) {
            alert("Fail");
        }
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    const updateTaiKhoan = useCallback(async(id, data) => {
        
            try {
                await httpPutTaiKhoan(id, data, token).then(res => res.json()).then(data =>{
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
        
        getNhaXeAdmin();
    },[getNhaXeAdmin])

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
        getNhaXeAdmin();
    },[getNhaXeAdmin])

    return {
        nhaXe,
        addNhaXe,
        updateNhaXe,
        deleteNhaXe,
        updateTaiKhoan,
        signUp

    }
}

export default useNhaXe;