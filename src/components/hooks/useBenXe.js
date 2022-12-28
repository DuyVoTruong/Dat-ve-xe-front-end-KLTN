import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteBenXe, httpGetBenXe, httpGetBenXeAdmin, httpGetBenXeById, httpGetBenXeUser, httpPostBenXe, httpPutBenXe } from "./Request";

function useBenXe(){
    const [benXe, setBenXe] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    /*const getBenXe = useCallback(async() => {
        const fetchedBenXe = await httpGetBenXe();
        if (fetchedBenXe.status == 200){
            setBenXe(fetchedBenXe.object)
            console.log(fetchedBenXe.object)
        }
        else {
            setBenXe([]);
        }
    }, [])*/

    const getAllBenXeAdmin = useCallback(async() => {
        const fetchedBenXe = await httpGetBenXeAdmin(token);
        if (fetchedBenXe.status == 200){
            setBenXe(fetchedBenXe.object)
            console.log(fetchedBenXe.object)
        }
        else {
            setBenXe([]);
        }
    }, []);

    useEffect(() => {
        getAllBenXeAdmin();
    }, [getAllBenXeAdmin]);

    const addBenXe = useCallback(async(data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            alert("Missing data");
        }
        else{
            try {
                await httpPostBenXe(data, token).then(res => res.json()).then(data => {
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
        getAllBenXeAdmin();
    }, [getAllBenXeAdmin]);

    const updateBenXe = useCallback(async(idBenXe, data) => {
        if (!data.tenBenXe||!data.diaChiChiTiet||!data.tinhThanh){
            alert("Missing data");
        }
        else {
            try {
                await httpPutBenXe(idBenXe, data, token).then(res => res.json()).then(data =>{
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
        getAllBenXeAdmin();
    },[getAllBenXeAdmin])

    const deleteBenXe = useCallback(async(idBenXe) => {
        try {
            await httpDeleteBenXe(idBenXe, token).then(res => res.json()).then(data => {
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
        getAllBenXeAdmin();
    },[getAllBenXeAdmin])

    return {
        benXe,
        getAllBenXeAdmin,
        addBenXe,
        updateBenXe,
        deleteBenXe,
    }
}

export default useBenXe;