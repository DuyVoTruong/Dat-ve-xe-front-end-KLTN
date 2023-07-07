import { memo } from "react";
import { useTranslation } from "react-i18next";

function Footer(){


    const { t } = useTranslation();

    return(
        <>
            {/* Footer Start */}
            <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{marginTop: "90px",}}>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="mt-n2 text-uppercase text-white"><i className="fa fa-book-reader mr-3"></i>WEBTOUR</h1>
                            </a>
                            <p className="m-0">{t("gioithieuweb")}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h3 className="text-white mb-4">{t('lienlac')}</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>Linh Chiểu, TP Thủ Đức, TP HCM</p>
                            <p><i className="fa fa-phone-alt mr-2"></i>0366441943</p>
                            <p><i className="fa fa-envelope mr-2"></i>voduy89123@gmail.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                {/*<a class="text-white mr-4" href="#"><i class="fab fa-2x fa-twitter"></i></a>*/}
                                <a className="text-white mr-4" href="https://www.facebook.com/truongduy.vo.5011/"><i className="fab fa-2x fa-facebook-f"></i></a>
                                {/*<a class="text-white mr-4" href="#"><i class="fab fa-2x fa-linkedin-in"></i></a>
                                <a class="text-white" href="#"><i class="fab fa-2x fa-instagram"></i></a>*/}
                            </div>
                        </div>
                        {/*
                        <div class="col-md-4 mb-5">
                            <h3 class="text-white mb-4">Our Courses</h3>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Web Design</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Apps Design</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Marketing</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Research</a>
                                <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>SEO</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <h3 class="text-white mb-4">Quick Links</h3>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Privacy Policy</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Terms & Condition</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Regular FAQs</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Help & Support</a>
                                <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>Contact</a>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{borderColor: "rgba(256, 256, 256, .1) !important",}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p className="m-0">Copyright &copy; <a className="text-white" href="#">Vo Truong Duy</a>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <p className="m-0">Designed by <a className="text-white" href="https://htmlcodex.com">Vo Truong Duy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    );
}

export default memo(Footer);