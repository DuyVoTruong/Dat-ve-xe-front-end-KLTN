import { memo, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import flagEN from "../assets/img/flagEN.jpg";
import flagVN from "../assets/img/flagVN.png";
import { useTranslation } from "react-i18next";

function HeaderDashboard(){


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const nav = useNavigate();
    const {t} = useTranslation();
    const logout =()=>{
        localStorage.clear();
        let loc = window.location.href.split('?')[0];
        window.location.replace(loc);
    }

    function handleChangeLanguage(lg) {
        let loc = window.location.href.split('?');
        if(window.location.hash.length==0){
            window.location.replace(loc[0] + "/?lng=" + lg);
            window.location.reload();
        } else {
            window.location.replace(loc[0] + "?lng=" + lg);
            window.location.reload();
        }
    }

    return(
        <>

            {/* Navbar Start*/}
            <Navbar style={{height: "75px", background:"#181818"}}>
            <Container>
                <Navbar.Collapse className="justify-content-end">

                <img src={flagVN} height={30} width={60} style={{margin: "10px", cursor: "pointer"}} onClick={()=>handleChangeLanguage("vi")}></img>
                <img src={flagEN} height={30} width={60} style={{margin: "10px", cursor: "pointer"}} onClick={()=>handleChangeLanguage("en")}></img>

                    {
                        (()=>{
                            if(token&&account){
                                return(
                                    <>
                                    <div style={{marginRight:"10px"}}>
                                        <a class="text-white pl-2" href="">
                                            <i class="fa fa-user"></i>
                                        </a>
                                    </div>
                                    <Link to={"thong-tin-tai-khoan"}>{account.username}</Link>

                                    <div style={{marginRight:"10px", marginLeft:"20px"}}>
                                        <a class="text-white pl-2" href="">
                                            <i class="fas fa-sign-out-alt"></i>
                                        </a>
                                    </div>
                                        <a style={{marginRight:"10px"}} onClick={logout} href="/Dat-ve-xe-front-end">{t("logout")}</a>
                                    </>
                                )
                            }else{
                                return(
                                    <>
                                    <div style={{marginRight:"10px"}}>
                                        <a class="text-white pl-2" href="">
                                            <i class="fa fa-user"></i>
                                        </a>
                                    </div>
                                        <a href="/login">Login</a>

                                    <div style={{marginRight:"10px", marginLeft:"10px"}}>
                                        <a class="text-white pl-2" href="">
                                            <i class="fa fa-user-plus"></i>
                                        </a>
                                    </div>
                                        <a href="/sign-up">Sign up</a>

                                    <div style={{marginRight:"10px", marginLeft:"10px"}}>
                                        <a class="text-white pl-2" href="">
                                            <i class="fas fa-sign-out-alt"></i>
                                        </a>
                                        <a>Log out</a>
                                    </div>
                                    </>
                                )
                            }
                        })()
                    }
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* Navbar End*/}
        </>
    )
}

export default memo(HeaderDashboard);