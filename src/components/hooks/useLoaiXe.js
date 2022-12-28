import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteLoaiXe, httpGetLoaiXe, httpPostLoaiXe, httpPutLoaiXe } from "./Request";

function useLoaiXe(){
    const [loaiXe, setLoaiXe] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const getLoaiXe = useCallback(async() => {
        const fetchedLoaiXe = await httpGetLoaiXe(token);
        if (fetchedLoaiXe.status == 200){
            setLoaiXe(fetchedLoaiXe.object)
        }
        else {
            setLoaiXe([]);
        }
    }, [])

    useEffect(() => {
        getLoaiXe();
    }, [getLoaiXe]);

    const addLoaiXe = useCallback(async(data) => {
        if (!data.tenLoaiXe||!data.sucChua){
            alert("Missing data");
        }
        else{
            try {
                await httpPostLoaiXe(data,token).then(res => res.json()).then(data => {
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
        getLoaiXe();
    }, [getLoaiXe]);

    const updateLoaiXe = useCallback(async(idLoaiXe, data) => {
        if (!data.tenLoaiXe||!data.sucChua){
            alert("Missing data");
        }
        else {
            try {
                await httpPutLoaiXe(idLoaiXe, data,token).then(res => res.json()).then(data =>{
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
        getLoaiXe();
    },[getLoaiXe])

    const deleteLoaiXe = useCallback(async(idLoaiXe) => {
        try {
            await httpDeleteLoaiXe(idLoaiXe,token).then(res => res.json()).then(data => {
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
        getLoaiXe();
    },[getLoaiXe])

    return {
        loaiXe,
        addLoaiXe,
        updateLoaiXe,
        deleteLoaiXe,
    }
}

export default useLoaiXe;