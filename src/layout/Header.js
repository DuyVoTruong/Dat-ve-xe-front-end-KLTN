import { memo, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useToken from "../components/hooks/useToken";
import {MyContext} from "../App"
import { useNavigate } from "react-router-dom";

function Header(){

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const setAccount = useContext(MyContext).setAccount;
    const nav = useNavigate();
    const logout =()=>{
        localStorage.clear();
        setAccount();
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
                    <Nav.Link href="#/">TRANG CHỦ</Nav.Link>
                    <Nav.Link href="#/lich-trinh">LỊCH TRÌNH</Nav.Link>
                    <Nav.Link href="#/tuyen-xe">TUYẾN XE</Nav.Link>
                    {
                        (()=>{
                            if(account){
                               return(
                                <>
                                    <Nav.Link href="#/lich-su-dat-ve">XEM LỊCH SỬ ĐẶT VÉ</Nav.Link>
                                    <Nav.Link href="#/lich-su-gui-hang">XEM LỊCH SỬ GỬI HÀNG</Nav.Link>
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
                                        <div style={{marginRight:"10px"}}>
                                            <a class="text-white pl-2">
                                                <i class="fa fa-user"></i>
                                            </a>
                                        </div>
                                            <a href="#/thong-tin-tai-khoan">{account.username}</a>

                                        <div style={{marginRight:"10px", marginLeft:"10px"}}>
                                            <a class="text-white pl-2">
                                                <i class="fas fa-sign-out-alt"></i>
                                            </a>
                                            <a onClick={logout} class="text-blue pl-2" href="#/">Log out</a>
                                        </div>
                                    </Navbar.Collapse>
                                </>
                            )
                        }else {
                            return (
                                <>
                                    <Navbar.Collapse className="justify-content-end">
                                        <div style={{marginRight:"10px"}}>
                                            <a class="text-white pl-2" href="">
                                                <i class="fa fa-user"></i>
                                            </a>
                                        </div>
                                            <a href="#/login">Login</a>

                                        <div style={{marginRight:"10px", marginLeft:"10px"}}>
                                            <a class="text-white pl-2" href="">
                                                <i class="fa fa-user-plus"></i>
                                            </a>
                                        </div>
                                            <a href="#/sign-up">Sign up</a>

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