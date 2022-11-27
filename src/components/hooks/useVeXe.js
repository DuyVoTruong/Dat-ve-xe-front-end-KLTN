import { useEffect, useState } from "react";
import { httpGetVeXe } from "./Request";

function useVeXe(){
    const [veXe, setVeXe] = useState([]);

    useEffect(() => {
        httpGetVeXe().then(data => {
            setVeXe(data);
        });
    }, []);

    return {
        veXe,
    }
}

export default useVeXe;