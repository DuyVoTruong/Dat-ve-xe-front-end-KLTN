import { useCallback, useEffect, useState } from "react";
import { httpDeleteBenXe, httpGetBenXe, httpGetBenXeById, httpPostBenXe, httpPutBenXe } from "./Request";

function useBenXe(){
    const [benXe, setBenXe] = useState([]);

    const getBenXe = useCallback(async () => {
        await httpGetBenXe().then(data=>{
            if(data.status == 200){
                setBenXe(data.object);
            }
        })
    }, [])

    useEffect(()=>{
        getBenXe()
    }, [getBenXe]);

    const addBenXe = (data) => {
       console.log(httpPostBenXe(data))
    }

    const updateBenXe = (data, idBenXe) => {
        console.log(httpPutBenXe(data, idBenXe))
    }

    const deleteBenXe = (idBenXe) => {
        console.log(httpDeleteBenXe(idBenXe))
    }

    const getBenXeById = (idBenXe) =>{
        return httpGetBenXeById(idBenXe).then(data=>{
           return data.object
        });
    }

    return {
        benXe,
        getBenXeById,
        addBenXe,
        updateBenXe,
        deleteBenXe,
    }
}

export default useBenXe;