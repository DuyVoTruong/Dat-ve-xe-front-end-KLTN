import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header(){
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
                            <a class="text-white px-2" href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="text-white px-2" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="text-white px-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="text-white px-2" href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="text-white pl-2" href="">
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
                <Navbar.Brand href="/">WEBTOUR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">TRANG CHỦ</Nav.Link>
                    <Nav.Link href="/lich-trinh">LỊCH TRÌNH</Nav.Link>
                    <Nav.Link href="/">LIÊN HỆ</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
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
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* Navbar End*/}
        </>
    )
}

export default Header;