import { toast } from "react-toastify"
import { INFO_MESSAGE } from "../../constants/messages"

const InfoMessage =(message=INFO_MESSAGE)=>{
        toast.info(message, {
            position: toast.POSITION.TOP_RIGHT
    });
}

export default InfoMessage;