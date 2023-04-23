import React, { useEffect, useState } from "react";
import Select from "./utilities/Select";
import headerImg from "../img/header1.webp";

const modelOptions = ["Dowolny", "Leon", "Arona", "Ibiza"];
const gearboxOptions = ["Dowolna", "Automatyczna", "Manualna"];
const fuelOptions = ["Dowolny", "Benzyna", "Diesel", "Elektryczny"];
const locationOptions = ["Dowolna", "Gdańsk", "Gdynia", "Toruń"];

const Header = () => {
    const [isFilterSetToDefault, setIsFilterSetToDefault] = useState(true);

    const filterChanged = (result) => {
        result == "modified" ? setIsFilterSetToDefault(prevState => !prevState) : setIsFilterSetToDefault(prevState => !prevState) 
    };
    
    const clearFilterClass = ["btn btn--clear-filter filter__submit", isFilterSetToDefault == 1 ? "transparent" : "visible"].join(" ");

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <h1 className="header__heading">
                        Sprawdź samochody
                        <br />
                        dostępne od ręki{" "}
                    </h1>
                    <h2 className="header__subheading">
                        SEAT{" "}
                        <span className="header__subheading-feature">
                            PLICHTA
                        </span>
                    </h2>
                    <div className="filter">
                        <form id="filter-form">
                            <div className="filter__categories">
                                <Select
                                    id={1}
                                    name="Model"
                                    options={modelOptions}
                                    onFilterChanged={filterChanged}
                                ></Select>
                                <Select
                                    id={2}
                                    name="Skrzynia biegów"
                                    options={gearboxOptions}
                                    onFilterChanged={filterChanged}
                                ></Select>
                                <Select
                                    id={3}
                                    name="Rodzaj paliwa"
                                    options={fuelOptions}
                                    onFilterChanged={filterChanged}
                                ></Select>
                                <Select
                                    id={4}
                                    name="Lokalizacja"
                                    options={locationOptions}
                                    onFilterChanged={filterChanged}
                                ></Select>
                            </div>
                            <div className="filter__submit">
                                <button
                                    className={clearFilterClass}
                                    id="clear-filter"
                                >
                                    Wyczyść filtry{" "}
                                    <img
                                        src="./img/clear-filter.svg"
                                        alt="ikona czyszczenia"
                                        width="8"
                                        height="8"
                                    />
                                </button>
                                <button
                                    className="btn btn--primary"
                                    id="filter-btn"
                                >
                                    Szukaj
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <img
                className="header__img"
                src={headerImg}
                alt="samochoód marki Seat"
                width="1194"
                height="800"
            />
        </header>
    );
};

export default Header;
