import { memo, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

function HeaderDashboard(){


    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const nav = useNavigate();
    const logout =()=>{
        localStorage.clear();
    }

    return(
        <>

            {/* Navbar Start*/}
            <Navbar style={{height: "75px", background:"#181818"}}>
            <Container>
                <Navbar.Collapse className="justify-content-end">

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
                                        <a href="thong-tin-tai-khoan">{account.username}</a>

                                    <div style={{marginRight:"10px", marginLeft:"10px"}}>
                                        <a class="text-white pl-2" href="">
                                            <i class="fas fa-sign-out-alt"></i>
                                        </a>
                                        <a onClick={logout} href="/home">Log out</a>
                                    </div>
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
                                        <a href="/home">Log out</a>
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