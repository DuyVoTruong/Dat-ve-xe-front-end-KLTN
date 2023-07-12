import { memo, useContext, useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import useToken from "../components/hooks/useToken";
import {MyContext} from "../App"
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import flagEN from "../assets/img/flagEN.jpg";
import flagVN from "../assets/img/flagVN.png";
import { httpGetUserById } from "../components/hooks/Request";

function Header(){

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const setAccount = useContext(MyContext).setAccount;
    const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState([]);
    const nav = useNavigate();
    const location = useLocation();
    const logout =()=>{
        localStorage.clear();
        setAccount();
        window.location.replace(window.location.origin + window.location.pathname);
    }

    useEffect(()=>{
        if(account){
            httpGetUserById(account.id, token).then(data=>{
                if(data.object){
                    setThongTinTaiKhoan(data.object);
                }
            })
        }
    },[])

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
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small><i className="fa fa-phone-alt mr-2"></i>0366441943</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2"></i>voduy89123@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-2" href="https://www.facebook.com/truongduy.vo.5011/">
                                <i className="fab fa-facebook-f"></i>
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
                            <a className="text-white pl-2" href="https://www.youtube.com/channel/UCOoIQP5-UvPBetU6-UO3zaw">
                                <i className="fab fa-youtube"></i>
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
                <Nav activeKey={location.pathname} className="me-auto">
                    <Nav.Link href="#/" style={{textTransform: "uppercase"}}>{t('Trang chủ')}</Nav.Link>
                    <Nav.Link href="#/lich-trinh" style={{textTransform: "uppercase"}}>{t('Lịch trình')}</Nav.Link>
                    <Nav.Link href="#/tuyen-xe" style={{textTransform: "uppercase"}}>{t('Tuyến xe')}</Nav.Link>
                    {
                        (()=>{
                            if(account){
                               return(
                                <>
                                    <Nav.Link href="#/lich-su-dat-ve" style={{textTransform: "uppercase"}}>{t('Lịch sử đặt vé')}</Nav.Link>
                                    <Nav.Link href="#/lich-su-gui-hang" style={{textTransform: "uppercase"}}>{t('Lịch sử gửi hàng')}</Nav.Link>
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
                                            <Image style={{objectFit: "cover"}} height={30} width={30} src={thongTinTaiKhoan.picture} roundedCircle />
                                            <a href="#/thong-tin-tai-khoan" style={{marginLeft: "10px"}}>{account.username}</a>
                                        </div>

                                        <div style={{margin:"10px"}}>
                                            <a className="text-white pl-2">
                                                <i className="fas fa-sign-out-alt"></i>
                                            </a>
                                            <a onClick={logout} className="text-blue pl-2" style={{marginLeft: "10px", cursor: "pointer"}} >{t('Đăng xuất')}</a>
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
                                            <a className="text-white pl-2" href="">
                                                <i className="fa fa-user"></i>
                                            </a>
                                            <a href="#/login" style={{marginLeft: "10px"}}>{t('Đăng nhập')}</a>
                                        </div>

                                        <div style={{margin:"10px", margin:"10px"}}>
                                            <a className="text-white pl-2" href="">
                                                <i className="fa fa-user-plus"></i>
                                            </a>
                                            <a href="#/sign-up" style={{marginLeft: "10px"}}>{t('Đăng ký')}</a>
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