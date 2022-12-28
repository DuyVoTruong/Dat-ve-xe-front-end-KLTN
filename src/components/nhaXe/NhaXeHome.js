import { useContext } from "react";
import { MyContext } from "../../App";

function NhaXeHome(){

    const account = useContext(MyContext).account;

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
            <h1>Welcome {account.username} to home</h1>
        </div>
    );
}

export default NhaXeHome;