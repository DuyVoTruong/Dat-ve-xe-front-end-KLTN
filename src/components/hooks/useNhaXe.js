import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteNhaXe, httpGetNhaXe, httpPostNhaXe, httpPutNhaXe } from "./Request";

function useNhaXe(){
    const [nhaXe, setNhaXe] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const getNhaXe = useCallback(async() => {
        const fetchedNhaXe = await httpGetNhaXe(token);
        if (fetchedNhaXe.status == 200){
            setNhaXe(fetchedNhaXe.object)
        }
        else {
            setNhaXe([]);
        }
    }, [])

    useEffect(() => {
        getNhaXe();
    }, [getNhaXe]);

    const addNhaXe = useCallback(async(data) => {
        if (!data.tenNhaXe||!data.diaChi){
            alert("Missing data");
        }
        else{
            try {
                await httpPostNhaXe(data).then(res => res.json()).then(data => {
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
    }, [getNhaXe]);

    const updateNhaXe = useCallback(async(idNhaXe, data) => {
        if (!data.tenNhaXe||!data.diaChi){
            alert("Missing data");
        }
        else {
            try {
                await httpPutNhaXe(idNhaXe, data).then(res => res.json()).then(data =>{
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
    },[getNhaXe])

    const deleteNhaXe = useCallback(async(idNhaXe) => {
        try {
            await httpDeleteNhaXe(idNhaXe).then(res => res.json()).then(data => {
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
        getNhaXe();
    },[getNhaXe])

    return {
        nhaXe,
        addNhaXe,
        updateNhaXe,
        deleteNhaXe,
    }
}

export default useNhaXe;