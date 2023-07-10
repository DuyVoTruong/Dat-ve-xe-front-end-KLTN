import { toast } from "react-toastify"

const ErrorMessage =(message)=>{
    toast.error(message,{
        position: toast.POSITION.TOP_RIGHT
    });
}

export default ErrorMessage;