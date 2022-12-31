import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { httpDeleteTuyenXe, httpGetTuyenXe, httpPostTuyenXe, httpPutTuyenXe } from "./Request";

function useTuyenXe(){
    const [tuyenXe, setTuyenXe] = useState([]);
    const token = useContext(MyContext).token;

    const getTuyenXe = useCallback(async() => {
        const fetchedTuyenXe = await httpGetTuyenXe();
        if (fetchedTuyenXe.status == 200){
            setTuyenXe(fetchedTuyenXe.object)
        }
        else {
            setTuyenXe([]);
        }
    }, [])

    useEffect(() => {
        getTuyenXe();
    }, [getTuyenXe]);

    const addTuyenXe = useCallback(async(data) => {
        //if (!data.tenTuyenXe||!data.diaChi){
            //alert("Missing data");
        //}
        //else{
            try {
                await httpPostTuyenXe(data,token).then(res => res.json()).then(data => {
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
        //}
        getTuyenXe();
    }, [getTuyenXe]);

    const updateTuyenXe = useCallback(async(idTuyenXe, data) => {
        //if (!data.tenTuyenXe||!data.diaChi){
            //alert("Missing data");
        //}
        //else {
            try {
                await httpPutTuyenXe(idTuyenXe, data, token).then(res => res.json()).then(data =>{
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
        //}
        getTuyenXe();
    },[getTuyenXe])

    const deleteTuyenXe = useCallback(async(idTuyenXe) => {
        try {
            await httpDeleteTuyenXe(idTuyenXe,token).then(res => res.json()).then(data => {
                if(data.status == 200){
                    alert(data.message);
                }
                else{
                    alert(data.message);
                }
            })
        }catch(err) {
            alert("Fail");
        }
        getTuyenXe();
    },[getTuyenXe])

    return {
        tuyenXe,
        addTuyenXe,
        updateTuyenXe,
        deleteTuyenXe,
    }
}

export default useTuyenXe;