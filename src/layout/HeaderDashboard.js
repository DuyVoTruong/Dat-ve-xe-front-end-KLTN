import { memo, useContext, useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import flagEN from "../assets/img/flagEN.jpg";
import flagVN from "../assets/img/flagVN.png";
import { useTranslation } from "react-i18next";
import { httpGetAdminById, httpGetNhaXeById } from "../components/hooks/Request";

function HeaderDashboard(){


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const setAccount = useContext(MyContext).setAccount;
    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);

    const nav = useNavigate();
    const {t} = useTranslation();
    const logout =()=>{
        localStorage.clear();
        setAccount();
        window.location.replace(window.location.origin + window.location.pathname);
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

    useEffect(()=>{
        if(account){
            if(account.role==="NHAXE"){
                httpGetNhaXeById(account.id, token).then(data=>{
                    if(data.object){
                        setThongTinTaiKhoan(data.object);
                    }
                })
            } else {
                httpGetAdminById(account.id, token).then(data=>{
                    if(data.object){
                        setThongTinTaiKhoan(data.object);
                    }
                })
            }
        }
    },[])

    console.log(thongTinTaiKhoan);

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
                                    <div style={{marginRight:"10px", marginLeft:"10px"}}>
                                        <a class="text-white pl-2">
                                            {
                                                (()=>{
                                                    if(thongTinTaiKhoan.tenNhaXe!=null){
                                                        return <Image style={{objectFit: "cover"}} height={30} width={30} src={thongTinTaiKhoan.picture} roundedCircle />
                                                    }else{
                                                        return <Image style={{objectFit: "cover"}} height={30} width={30} src="https://firebasestorage.googleapis.com/v0/b/uploadimage-83b65.appspot.com/o/images%2Fdefault_avatar.png989f063f-864d-497f-aaee-0ad210b3b5e2?alt=media&token=2d270ccf-7dec-4403-973d-6a2109557688" roundedCircle />
                                                    }
                                                })()
                                            }
                                        </a>
                                    </div>

                                    {
                                        (()=>{
                                            if(thongTinTaiKhoan.tenNhaXe!=null){
                                                return(
                                                    <Link to={"thong-tin-tai-khoan"}>{thongTinTaiKhoan.tenNhaXe}</Link>
                                                );
                                            }else{
                                                return(
                                                    <Link to={"thong-tin-tai-khoan"}>{thongTinTaiKhoan.name}</Link>
                                                );
                                            }
                                        })()
                                    }

                                    <div style={{marginRight:"10px", marginLeft:"20px"}}>
                                        <a class="text-white pl-2">
                                            <i class="fas fa-sign-out-alt"></i>
                                        </a>
                                    </div>
                                        <a onClick={logout} className="text-blue pl-2" style={{marginRight: "10px", cursor: "pointer"}} >{t('Đăng xuất')}</a>
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