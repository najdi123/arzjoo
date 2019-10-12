import React  from 'react';
import "./Header.css";
import logo from "../images/arzjoo logo.png";

const Header = () => {

    const mystyle = {
        height: "45px"
    };

    return (
        <div className="header-container">

            <div className="container-fluid d-flex flex-row bg-dark bar-height "  >
                <div className="bottom-line  text-light align-self-center">

                    021 884 840 68
                    <i className="fa fa-volume-control-phone fa-flip-horizontal align-self-center pl-2"></i>
                </div>
                <div className="xs-hidden  text-light align-self-center">
                    ثبت شکایت
                    <i className="fa fa-info align-self-center pl-1"></i>
                </div>
                <div className="xs-hidden  text-light align-self-center">
                    قوانین و مقررات
                    <i className="fa fa-info align-self-center pl-1"></i>
                </div>

                <div className="top-line ml-auto  text-light align-self-center">

                    سبد خرید
                    <i className="fa fa-shopping-cart align-self-center pl-1"></i>
                </div>
                <div className="top-line  text-light align-self-center">
                    ثبت نام کنید
                    <i className="fas fa-user align-self-center pl-1"></i>

                </div>
                <div className="top-line  text-light align-self-center">
                    وارد شوید
                    <i className="fas fa-lock align-self-center pl-1"></i>
                </div>

            </div>

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <img src={logo} alt=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">همکاری با ما<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">
                                <i className="fa fa-book blue"></i>
                                <span className="ml-1">
                                مطالب آموزشی
                                </span>



                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-database blue"></i>
                                <span className="ml-1">
                                خدمات بیمنت
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-shopping-cart blue"></i>
                                <span className="ml-1">
                                محصولات
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-btc blue"></i>
                                <span className="ml-1">
                                فروش ارز دیجیتال
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-btc blue"></i>
                                <span className="ml-1">

                                    خرید ارز دیجیتال
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa fa-home blue"></i>
                                <span className="ml-1">
                            خانه
                            </span>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
