import { useEffect, useState } from "react";
import { httpGetLoaiXe } from "./Request";

function useLoaiXe(){
    const [loaiXe, setLoaiXe] = useState([]);

    useEffect(() => {
        httpGetLoaiXe().then(data => {
            setLoaiXe(data);
        });
    }, []);

    return {
        loaiXe,
    }
}

export default useLoaiXe;