import { useEffect, useState } from "react";
import { httpGetXe } from "./Request";

function useXe(){
    const [xe, setXe] = useState([]);

    useEffect(() => {
        httpGetXe(data => {
            setXe(data);
        });
    }, []);

    return {
        xe,
    }
}

export default useXe;