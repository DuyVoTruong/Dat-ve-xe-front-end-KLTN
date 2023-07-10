import { toast } from "react-toastify"
import { FAIL_MESSAGE } from "../../constants/messages"

const FailMessage =(message=FAIL_MESSAGE)=>{
    toast.fail(message, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export default FailMessage;