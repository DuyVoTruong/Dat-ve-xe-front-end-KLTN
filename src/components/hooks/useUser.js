import { useCallback, useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { httpDeleteUser, httpGetUser, httpPostSignUp, httpPostUser, httpPutTaiKhoan, httpPutUser } from "./Request";

function useUser(){
    const [user, setUser] = useState([]);
    const token = useContext(MyContext).token;

    const getUser = useCallback(async() => {
        const fetchedUser = await httpGetUser(token);
        if (fetchedUser.status == 200){
            setUser(fetchedUser.object)
            console.log(fetchedUser.object)
        }
        else {
            setUser([]);
        }
    },[])

    useEffect(() => {
        getUser();
    }, [getUser]);

    const addUser = useCallback(async(data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            alert("Missing data");
        }
        else{
            try {
                await httpPostUser(data, token).then(res => res.json()).then(data => {
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
        getUser();
    }, [getUser]);

    const updateUser = useCallback(async(id, data) => {
        if (!data.username||!data.password||data.trangThaiHoatDong===null){
            alert("Missing data");
        }
        else {
            try {
                await httpPutUser(id, data,token).then(res => res.json()).then(data =>{
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
        getUser();
    },[getUser])

    const deleteUser = useCallback(async(idUser) => {
        try {
            await httpDeleteUser(idUser,token).then(res => res.json()).then(data => {
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
        getUser();
    },[getUser])

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
        
        getUser();
    },[getUser])

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
        getUser();
    },[getUser])

    return {
        user,
        addUser,
        updateUser,
        deleteUser,
        signUp,
        updateTaiKhoan
    }
}

export default useUser;