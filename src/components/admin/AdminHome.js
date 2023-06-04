import { useContext } from "react";
import { MyContext } from "../../App";
import { useTranslation } from "react-i18next";

function AdminHome(){

    const account = useContext(MyContext).account;
    const {t} = useTranslation();

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
            <h1>{t("chaomung", {account: account.username})}</h1>
        </div>
    );
}

export default AdminHome;