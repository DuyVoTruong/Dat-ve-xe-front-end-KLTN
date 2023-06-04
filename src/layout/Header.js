import { memo, useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useToken from "../components/hooks/useToken";
import {MyContext} from "../App"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import flagEN from "../assets/img/flagEN.jpg";
import flagVN from "../assets/img/flagVN.png";

function Header(){

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const setAccount = useContext(MyContext).setAccount;
    const nav = useNavigate();
    const logout =()=>{
        localStorage.clear();
        setAccount();
        window.location.replace(window.location.origin+"/"+window.location.pathname);
    }

    const { t } = useTranslation();

    function handleChangeLanguage(lg) {
        let loc = window.location.href.split('?');
        if(window.location.hash.length==0){
            window.location.replace(loc[0] + "#/?lng=" + lg);
            window.location.reload();
        } else {
            window.location.replace(loc[0] + "?lng=" + lg);
            window.location.reload();
        }
    }

    return(
        <>
            {/* Topbar Start */}
            <div class="container-fluid bg-dark">
                <div class="row py-2 px-lg-5">
                    <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div class="d-inline-flex align-items-center text-white">
                            <small><i class="fa fa-phone-alt mr-2"></i>0366441943</small>
                            <small class="px-3">|</small>
                            <small><i class="fa fa-envelope mr-2"></i>voduy89123@gmail.com</small>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-right">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-white px-2" href="https://www.facebook.com/truongduy.vo.5011/">
                                <i class="fab fa-facebook-f"></i>
                            </a>{/*
                            <a class="text-white px-2" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="text-white px-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="text-white px-2" href="">
                                <i class="fab fa-instagram"></i>
                            </a>*/}
                            <a class="text-white pl-2" href="https://www.youtube.com/channel/UCOoIQP5-UvPBetU6-UO3zaw">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Navbar Start*/}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#/">WEBTOUR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#/" style={{textTransform: "uppercase"}}>{t('trangchu')}</Nav.Link>
                    <Nav.Link href="#/lich-trinh" style={{textTransform: "uppercase"}}>{t('lichtrinh')}</Nav.Link>
                    <Nav.Link href="#/tuyen-xe" style={{textTransform: "uppercase"}}>{t('tuyenxe')}</Nav.Link>
                    {
                        (()=>{
                            if(account){
                               return(
                                <>
                                    <Nav.Link href="#/lich-su-dat-ve" style={{textTransform: "uppercase"}}>{t('lichsudatve')}</Nav.Link>
                                    <Nav.Link href="#/lich-su-gui-hang" style={{textTransform: "uppercase"}}>{t('lichsuguihang')}</Nav.Link>
                                </>
                               ) 
                            }
                        })()
                    }
                </Nav>
                </Navbar.Collapse>
                {
                    (()=>{
                        if(token&&account){
                            return(
                                <>
                                    <Navbar.Collapse className="justify-content-end">
                                        <div>
                                            <img src={flagVN} height={30} width={60} style={{margin: "10px", cursor: "pointer"}} onClick={()=>handleChangeLanguage("vi")}></img>
                                            <img src={flagEN} height={30} width={60} style={{margin: "10px", cursor: "pointer"}} onClick={()=>handleChangeLanguage("en")}></img>
                                        </div>
                                        <div style={{margin:"10px"}}>
                                            <a class="text-white pl-2">
                                                <i class="fa fa-user"></i>
                                            </a>
                                            <a href="#/thong-tin-tai-khoan" style={{marginLeft: "10px"}}>{account.username}</a>
                                        </div>

                                        <div style={{margin:"10px"}}>
                                            <a class="text-white pl-2">
                                                <i class="fas fa-sign-out-alt"></i>
                                            </a>
                                            <a onClick={logout} class="text-blue pl-2" style={{marginLeft: "10px", cursor: "pointer"}} >{t('logout')}</a>
                                        </div>
                                    </Navbar.Collapse>
                                </>
                            )
                        }else {
                            return (
                                <>
                                    <Navbar.Collapse className="justify-content-end">
                                        <div>
                                            <img src={flagVN} height={30} width={60} style={{margin: "10px", cursor: "pointer"}} onClick={()=>handleChangeLanguage("vi")}></img>
                                            <img src={flagEN} height={30} width={60} style={{margin: "10px", cursor: "pointer"}} onClick={()=>handleChangeLanguage("en")}></img>
                                        </div>
                                        <div style={{margin:"10px"}}>
                                            <a class="text-white pl-2" href="">
                                                <i class="fa fa-user"></i>
                                            </a>
                                            <a href="#/login" style={{marginLeft: "10px"}}>{t('login')}</a>
                                        </div>

                                        <div style={{margin:"10px", margin:"10px"}}>
                                            <a class="text-white pl-2" href="">
                                                <i class="fa fa-user-plus"></i>
                                            </a>
                                            <a href="#/sign-up" style={{marginLeft: "10px"}}>{t('signup')}</a>
                                        </div>

                                    </Navbar.Collapse>
                                </>
                            )
                        }
                    })()
                }
            </Container>
            </Navbar>
            {/* Navbar End*/}
        </>
    )
}

export default memo(Header);