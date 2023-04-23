import React, { useState } from "react";

import locationImg from "../img/location-icon.svg"

const Car = (props) => { return (
    <div className="car">
    <img src={props.carImg} className="car__image" alt="Samochód marki Skoda" width="468"
        height="313" loading="lazy"/>
    <div className="car__details">
        <h3 className="car__title">{props.name}</h3>
        <div className="car__info">
            <p className="car__status">
                {props.status}
            </p>
            <p className="car__offer-number">{props.offerNumber}</p>
            <div className="car__location">
                <img src={locationImg} alt="ikona lokalizacji" width="16" height="20"
                    loading="lazy"/>
                <p>{props.location}</p>
            </div>
        </div>
        <div className="car-specification">
            <div className="car-specification__item">
                <p className="car-specification__title">Rok produkcji</p>
                <p className="car-specification__data">{props.yearOfProduction}</p>
            </div>
            <div className="car-specification__item">
                <p className="car-specification__title">Przebieg</p>
                <p className="car-specification__data">{props.mileage}</p>
            </div>
            <div className="car-specification__item">
                <p className="car-specification__title">Moc</p>
                <p className="car-specification__data">{props.horsepower}</p>
            </div>
            <div className="car-specification__item">
                <p className="car-specification__title">Rodzaj paliwa</p>
                <p className="car-specification__data">{props.fuelType}</p>
            </div>
            <div className="car-specification__item">
                <p className="car-specification__title">Skrzynia</p>
                <p className="car-specification__data">{props.gearboxType}</p>
            </div>
        </div>
        <div className="car__bottom">
            <div className="car__price">
                <p className="car__price-title">Cena brutto</p>
                <p className="car__price-amount">{props.price}</p>
            </div>
            <a className="btn btn--secondary">Sprawdź ofertę</a>
        </div>
    </div>
</div>
    );
};

export default Car;
