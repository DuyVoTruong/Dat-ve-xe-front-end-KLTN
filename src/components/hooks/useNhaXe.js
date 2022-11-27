import { useEffect, useState } from "react";
import { httpGetNhaXe } from "./Request";

function useNhaXe(){
    const [nhaXe, setNhaXe] = useState([]);

    useEffect(()=>{
        httpGetNhaXe().then(data=>{
            setNhaXe(data);
        });
    }, []);

    return {
        nhaXe,
    }
}

export default useNhaXe;