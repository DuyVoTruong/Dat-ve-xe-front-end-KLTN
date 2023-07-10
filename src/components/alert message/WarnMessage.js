import { toast } from "react-toastify"
import { WARN_MESSAGE } from "../../constants/messages"

const WarnMessage =(message=WARN_MESSAGE)=>{
    toast.success(message,{
        position: toast.POSITION.TOP_RIGHT
    });
}

export default WarnMessage;