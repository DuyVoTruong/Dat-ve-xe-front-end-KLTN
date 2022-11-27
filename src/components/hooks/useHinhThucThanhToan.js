import { useEffect, useState } from "react";
import { httpGetHinhThucThanhToan } from "./Request";

function useHinhThucThanhToan(){
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState([]);

    useEffect(() => {
        httpGetHinhThucThanhToan(data => {
            setHinhThucThanhToan(data);
        });
    }, []);

    return {
        hinhThucThanhToan,
    }
}

export default useHinhThucThanhToan;