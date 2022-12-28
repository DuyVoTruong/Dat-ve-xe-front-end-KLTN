import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpDeleteHinhThucThanhToan, httpGetHinhThucThanhToan, httpPostHinhThucThanhToan, httpPutHinhThucThanhToan } from "./Request";

function useHinhThucThanhToan(){
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState([]);
    const nav = useNavigate();

    const getHinhThucThanhToan = useCallback(async() => {
        const fetchedHinhThucThanhToan = await httpGetHinhThucThanhToan();
        if (fetchedHinhThucThanhToan.status == 200){
            setHinhThucThanhToan(fetchedHinhThucThanhToan.object)
        }
        else {
            setHinhThucThanhToan([]);
        }
    }, [])

    useEffect(() => {
        getHinhThucThanhToan();
    }, [getHinhThucThanhToan]);

    const addHinhThucThanhToan = useCallback(async(data) => {
        if (!data.tenHinhThucThanhToan){
            alert("Missing data");
        }
        else{
            await httpPostHinhThucThanhToan(data).then(res => res.json()).then(data => {
                if (data.status == 200){
                    alert("Success");
                    nav("/admin/ben-xe");
                }
                else{
                    alert(data.message);
                }
            })
        }
    }, [getHinhThucThanhToan]);

    const updateHinhThucThanhToan = useCallback(async(idHinhThucThanhToan, data) => {
        if (!data.tenHinhThucThanhToan||!data.diaChi){
            alert("Missing data");
        }
        else {
            try {
                await httpPutHinhThucThanhToan(idHinhThucThanhToan, data).then(res => res.json()).then(data =>{
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
    },[getHinhThucThanhToan])

    const deleteHinhThucThanhToan = useCallback(async(idHinhThucThanhToan) => {
        try {
            await httpDeleteHinhThucThanhToan(idHinhThucThanhToan).then(res => res.json()).then(data => {
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
        getHinhThucThanhToan();
    },[getHinhThucThanhToan])

    return {
        hinhThucThanhToan,
        addHinhThucThanhToan,
        updateHinhThucThanhToan,
        deleteHinhThucThanhToan,
    }
}

export default useHinhThucThanhToan;