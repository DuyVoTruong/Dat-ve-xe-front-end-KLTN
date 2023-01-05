import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteVeXe, httpGetVeXe, httpPostVeXe, httpPutVeXe } from "./Request";

function useVeXe(){
    const [veXe, setVeXe] = useState([]);
    const nav = useNavigate();
    const token = useContext(MyContext).token;

    const getVeXe = useCallback(async(id) => {
        const fetchedVeXe = await httpGetVeXe(id, token);
        if (fetchedVeXe.status == 200){
            setVeXe(fetchedVeXe.object)
        }
        else {
            setVeXe([]);
        }
    }, [])

    useEffect(() => {
        getVeXe();
    }, [getVeXe]);

    const addVeXe = useCallback(async(data) => {
        if (!data.tenVeXe||!data.diaChi){
            alert("Missing data");
        }
        else{
            try {
                await httpPostVeXe(data, token).then(res => res.json()).then(data => {
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
    }, [getVeXe]);

    const updateVeXe = useCallback(async(idVeXe, data) => {
            try {
                await httpPutVeXe(idVeXe, data, token).then(res => res.json()).then(data =>{
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
    },[getVeXe])

    const deleteVeXe = useCallback(async(idVeXe) => {
        try {
            await httpDeleteVeXe(idVeXe, token).then(res => res.json()).then(data => {
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
        getVeXe();
    },[getVeXe])

    return {
        veXe,
        addVeXe,
        updateVeXe,
        deleteVeXe,
    }
}

export default useVeXe;