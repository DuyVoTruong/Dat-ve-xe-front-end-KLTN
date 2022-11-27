import { useEffect, useState } from "react";
import { httpGetTuyenXe } from "./Request";

function useTuyenXe(){
    const [tuyenXe, setTuyenXe] = useState([]);

    useEffect(()=>{
        httpGetTuyenXe().then(data=>{
            setTuyenXe(data);
        });
    }, []);

    return {
        tuyenXe,
    }
}

export default useTuyenXe;