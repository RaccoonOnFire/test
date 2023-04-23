import arrowRight from "../img/arrow-right-white.svg";
import logo from "../img/seat-logo-white.svg";
import facebookIcon from "../img/facebook-icon.svg";
import instagramIcon from "../img/instagram-icon.svg";
import youtubeIcon from "../img/youtube-icon.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <div className="footer__info-item">
                    <h3 className="footer__info-heading">
                        SEAT Plichta Gdynia
                    </h3>
                    <p className="footer__info-text">
                        Morska 318,
                        <br />
                        81-006 Gdynia
                    </p>
                    <a href="" className="footer__info-link">
                        Sprawdź dojazd
                        <img
                            className="footer__info-icon"
                            src={arrowRight}
                            alt="Strzałka w prawo"
                            width="5"
                            height="9"
                        />
                    </a>
                </div>
                <div className="footer__info-item">
                    <h3 className="footer__info-heading">
                        SEAT Plichta Gdańsk
                    </h3>
                    <p className="footer__info-text">
                        Lubowidzka 40,
                        <br />
                        80-174 Gdańsk
                    </p>
                    <a href="" className="footer__info-link">
                        Sprawdź dojazd
                        <img
                            className="footer__info-icon"
                            src={arrowRight}
                            alt="Strzałka w prawo"
                            width="5"
                            height="9"
                        />
                    </a>
                </div>
                <div className="footer__info-item">
                    <h3 className="footer__info-heading">Godziny otwarcia</h3>
                    <p className="footer__info-text">Salon</p>
                    <div className="footer__info-hours">
                        <p className="footer__info-text">pon-pt:</p>
                        <p className="footer__info-text">9:00 - 19:00</p>
                    </div>
                    <div className="footer__info-hours">
                        <p className="footer__info-text">sob</p>
                        <p className="footer__info-text">9:00 - 15:00</p>
                    </div>
                </div>
                <div className="footer__info-item">
                    <h3 className="footer__info-heading">Serwis</h3>
                    <div className="footer__info-hours">
                        <p className="footer__info-text">pon-pt</p>
                        <p className="footer__info-text">7:00 - 19:00</p>
                    </div>
                    <div className="footer__info-hours">
                        <p className="footer__info-text">sob</p>
                        <p className="footer__info-text">7:00 - 15:00</p>
                    </div>
                </div>
                <div className="footer__info-item">
                    <h3 className="footer__info-heading">Kontakt</h3>
                    <p className="footer__info-text">E-mail</p>
                    <a
                        href="mailto:bdc@plichta.com.pl"
                        className="footer__info-link"
                    >
                        bdc@plichta.com.pl
                    </a>
                </div>
            </div>
            <hr className="footer__separator" />
            <div className="footer__bottom">
                <div className="footer__socials-container">
                    <p className="footer__copyrights-text-mobile">
                        © 2022 Volkswagen Group Polska Sp. z o.o.
                    </p>
                    <img
                        src={logo}
                        className="footer__logo"
                        alt="logo seat"
                        width="56"
                        height="45"
                    />
                    <div className="footer__socials">
                        <a href="" target="_blank">
                            {" "}
                            <img
                                src={facebookIcon}
                                alt="ikona facebook"
                                width="24"
                                height="24"
                            />
                        </a>
                        <a href="" target="_blank">
                            <img
                                src={instagramIcon}
                                alt="ikona instagram"
                                width="24"
                                height="24"
                            />
                        </a>
                        <a href="" target="_blank">
                            <img
                                src={youtubeIcon}
                                alt="ikona youtube"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                </div>
                <div className="footer__copyrights">
                    <p className="footer__copyrights-text">
                        © 2022 Volkswagen Group Polska Sp. z o.o.
                    </p>
                    <div className="footer__copyrights-link-container">
                        <a href="" className="footer__copyrights-link">
                            Polityka prywatności
                        </a>
                        <a href="" className="footer__copyrights-link">
                            Polityka cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
