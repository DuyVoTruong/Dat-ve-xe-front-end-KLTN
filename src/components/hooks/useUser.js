import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteUser, httpGetUser, httpPostUser, httpPutUser } from "./Request";

function useUser(){
    const [user, setUser] = useState([]);
    const nav = useNavigate();
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
                        nav("/admin/ben-xe");
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
                //alert("Fail");
                //getUser();
            }
        }
        //getUser();
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

    const load = ()=>{
        getUser();
    }

    return {
        user,
        addUser,
        updateUser,
        deleteUser,
        load
    }
}

export default useUser;