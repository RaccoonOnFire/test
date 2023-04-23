import React, { useState } from "react";
import classes from "../css/app.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__heading-container">
                <p className="contact__subheading">Zapytaj o ofertę</p>
                <h2 className="contact__heading">Skontaktuj się z nami</h2>
                <p className="contact__text">
                    Wypełnij formularz - skontaktujemy się z Tobą, odpowiemy na
                    wszystkie pytania i przygotujemy dla Ciebie dedykowaną
                    ofertę.
                </p>
            </div>
            <div className="contact-form">
                <div className="contact-form__upper">
                    <input
                        className="contact-form__input contact-form__input--small"
                        type="text"
                        placeholder="Imię"
                    />
                    <input
                        className="contact-form__input contact-form__input--small"
                        type="text"
                        placeholder="Nazwisko"
                    />
                    <input
                        className="contact-form__input contact-form__input--small"
                        type="tel"
                        placeholder="Numer telefonu"
                    />
                    <input
                        className="contact-form__input contact-form__input--small"
                        type="email"
                        placeholder="Adres e-mail"
                    />
                </div>
                <div className="contact-form__bottom">
                    <textarea
                        className="contact-form__input contact-form__input--big"
                        type="text"
                        placeholder="Twoja wiadomość"
                    ></textarea>
                </div>
            </div>
            <div className="contact-consent">
                <div className="contact-consent__checkbox-container">
                    <div className="checkbox__custom">
                        <input
                            type="checkbox"
                            className="checkbox__input"
                            id="consent1"
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__shadow"></div>
                    </div>
                    <label htmlFor="consent1" className=" contact-consent__label">
                        Wysłanie uzupełnionego formularza oznacza Twoją zgodę na
                        kontakt w celu przedstawienia informacji handlowej w
                        wybrany przez Ciebie sposób w związku xprzesłanym
                        zapytaniem. Podanie Twoich danych jest dobrowolne,
                        jednak bez Twojej zgody nie będziemy się mogli z Tobą
                        skontaktować.
                    </label>
                </div>

                <div className="contact-consent__checkbox-container">
                    <div className="checkbox__custom">
                        <input
                            type="checkbox"
                            className="checkbox__input"
                            id="consent2"
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__shadow"></div>
                    </div>
                    <label htmlFor="consent2" className="contact-consent__label">
                        Zgadzam się na przetwarzanie moich danych osobowych
                        przez Plichta spółka z ograniczoną odpowiedzialnością
                        Spółka Komandytowa w celu przedstawienia mi informacji
                        marketingowych i handlowych dotyczących produktów i
                        usług marki SEAT oraz innych powiązanych z marką SEAT
                        akcesoriów, produktów i usług motoryzacyjnych za pomocą:
                    </label>
                </div>
                <div className="contact-consent__small-section">
                    <div className="checkbox__custom">
                        <input
                            type="checkbox"
                            className="checkbox__input"
                            id="consent-email"
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__shadow"></div>
                    </div>
                    <label
                        htmlFor="consent-email"
                        className="contact-consent__label"
                    >
                        E-mail
                    </label>
                </div>
                <div className="contact-consent__small-section">
                    <div className="checkbox__custom">
                        <input
                            type="checkbox"
                            className="checkbox__input"
                            id="consent-phone"
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__shadow"></div>
                    </div>
                    <label
                        htmlFor="consent-phone"
                        className="contact-consent__label"
                    >
                        Telefon
                    </label>
                </div>
                <div className="contact-consent__small-section">
                    <div className="checkbox__custom">
                        <input
                            type="checkbox"
                            className="checkbox__input"
                            id="consent-sms"
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__shadow"></div>
                    </div>
                    <label htmlFor="consent-sms" className="contact-consent__label">
                        Wiadomość SMS/MMS
                    </label>
                </div>
                <p className="contact-consent__info">
                    {" "}
                    Masz prawo do wglądu, modyfikacji, ograniczenia
                    przetwarzania i usunięcia swoich danych oraz do wycofania w
                    każdym momencie swojej zgody.
                </p>
                <p className="contact-consent__info">
                    {" "}
                    Twoje dane będą przetwarzane tylko w stopniu umożliwiającym
                    realizację wymienionego celu.
                </p>
                <p className="contact-consent__info">
                    Administratorem Twoich danych jest Plichta spółka z
                    ograniczoną odpowiedzialnością Spółka Komandytowa, z
                    siedzibą w&nbsp;Wejherowie przy ulicy Gdańskiej 13c.
                    Zapraszamy do zapoznania się z naszą polityką prywatności
                    umieszczoną pod linkiem:{" "}
                    <a
                        className="contact-consent__link"
                        target="_blank"
                        href="https://www.plichta.com.pl/polityka-prywatnosci"
                    >
                        https://www.plichta.com.pl/polityka-prywatnosci
                    </a>
                </p>
            </div>
            <div className="contact__accept">
                <button className="btn btn--primary">Wyślij wiadomość</button>
            </div>
        </section>
    );
};

export default Contact;
