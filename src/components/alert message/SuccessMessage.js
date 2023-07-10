import { toast } from "react-toastify"
import { SUCCESS_MESSAGE } from "../../constants/messages"

const SuccessMessage =(message=SUCCESS_MESSAGE)=>{
    toast.success(message,{
        position: toast.POSITION.TOP_RIGHT
    });
}

export default SuccessMessage;