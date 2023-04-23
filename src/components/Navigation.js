import React, { useState } from "react";
import classes from "../css/app.css";
import logo from "../img/logo.png";
import phoneIcon from "../img/phone-icon.svg";
import mailIcon from "../img/mail-icon.svg";
import mailIconWhite from "../img/mail-icon-white.svg";

// const body = document.querySelector("body");
// const html = document.querySelector("html");

// hiding nav menu after scroll

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navigation").style.top = "0";
//   } else {
//     document.getElementById("navigation").style.top = "-105px";
//   }
//   prevScrollpos = currentScrollPos;
// };

const Navigation = () => {
    
    const [isNavigationActive, setIsNavigationActive] = useState(false);
    const navigationHandler = () => {
        setIsNavigationActive(!isNavigationActive);
    };

    const navigationClass = [
        "mobile-nav-menu",
        isNavigationActive ? "toggle-menu" : "mobile-nav-menu",
    ].join(" ");

    return (
        <nav className="nav" id="navigation">
            <div className="nav__container">
                <a href="#">
                    <img
                        className="nav__logo"
                        src={logo}
                        alt="logo seat"
                        width="142"
                        height="32"
                        loading="lazy"
                    />
                </a>
                <div className="nav-menu">
                    <a className="nav-menu__link" href="">
                        Samochody
                    </a>
                    <a className="nav-menu__link" href="">
                        Lokalizacje
                    </a>
                    <a href="" className="btn btn--transparent">
                        <img
                            src={phoneIcon}
                            alt="ikona telefonu"
                            width="18"
                            height="18"
                        />
                        Zadzwoń
                    </a>
                    <a href="" className="btn btn--white">
                        <img
                            src={mailIcon}
                            alt="ikona wiadomości"
                            width="18"
                            height="18"
                        />
                        Zapytaj o ofertę
                    </a>
                </div>
                <div className="mobile-nav">
                    <a href="">
                        <img
                            src={phoneIcon}
                            width="18"
                            height="18"
                            alt="ikona telefonu"
                            className="mobile-nav__icon"
                            loading="lazy"
                        />
                    </a>
                    <a href="">
                        <img
                            src={mailIconWhite}
                            width="18"
                            height="18"
                            alt="ikona wiadomości"
                            className="mobile-nav__icon"
                            loading="lazy"
                        />
                    </a>
                    <div
                        className={"mobile-nav__bars-container"}
                        onClick={navigationHandler}
                    >
                        <div className="mobile-nav__bar" id="bar1"></div>
                        <div className="mobile-nav__bar" id="bar2"></div>
                        <div className="mobile-nav__bar" id="bar3"></div>
                    </div>
                </div>
            </div>
            <div className={navigationClass}>
                <div className="mobile-nav-menu__top">
                    <a href="">Samochody</a>
                    <a href="">Lokalizacje</a>
                </div>
                <div className="mobile-nav-menu__bottom">
                    <a href="" className="btn btn--transparent">
                        <img
                            src={phoneIcon}
                            alt="ikona telefonu"
                            width="19"
                            height="19"
                        />
                        Zadzwoń
                    </a>
                    <a href="" className="btn btn--white">
                        <img
                            src={mailIcon}
                            alt="ikona wiadomości"
                            width="19"
                            height="19"
                        />
                        Zapytaj o ofertę
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
