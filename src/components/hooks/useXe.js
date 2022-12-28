import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteXe, httpGetXe, httpPostXe, httpPutXe } from "./Request";

function useXe(){
    const [xe, setXe] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const getXe = useCallback(async() => {
        const fetchedXe = await httpGetXe(token);
        if (fetchedXe.status == 200){
            setXe(fetchedXe.object)
        }
        else {
            setXe([]);
        }
    }, [])

    useEffect(() => {
        getXe();
    }, [getXe]);

    const addXe = useCallback(async(data) => {
        if (!data.bienSoXe||!data.tenNhaXe||!data.tenLoaiXe){
            alert("Missing data");
        }
        else{
            try {
                await httpPostXe(data,token).then(res => res.json()).then(data => {
                    if (data.status == 200){
                        alert("Success");
                        nav("/admin/xe");
                    }
                    else{
                        alert(data.message);
                    }
                })
            } catch(err) {
                alert("Fail");
            }
        }
        getXe();
    }, [getXe]);

    const updateXe = useCallback(async(idXe, data) => {
        if (!data.tenXe||!data.diaChi){
            alert("Missing data");
        }
        else {
            try {
                await httpPutXe(idXe, data,token).then(res => res.json()).then(data =>{
                    if (data.status == 200){
                        alert("Success");
                        nav('/admin/ben-xe');
                    }
                    else {
                        alert(data.message);
                    }
                })
            }catch(err) {
                alert("Fail");
            }
        }
        getXe();
    },[getXe])

    const deleteXe = useCallback(async(idXe) => {
        try {
            await httpDeleteXe(idXe,token).then(res => res.json()).then(data => {
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
        getXe();
    },[getXe])

    return {
        xe,
        addXe,
        updateXe,
        deleteXe,
    }
}

export default useXe;