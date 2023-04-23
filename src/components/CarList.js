import React, { useState } from "react";
import Car from "./Car";

const CarList = (props) => {
    return (
        <section className="car-list" id="car-heading">
            <div className="car-list__heading-container">
                <h3 className="car-list__heading">
                    Znaleziono{" "}
                    <span className="car-list__count" id="car-count">
                        13
                    </span>{" "}
                    pojazdów
                </h3>
                <div>
                    <label className="car-list__label" htmlFor="sorting">
                        Sortowanie
                    </label>
                    <select
                        className="car-list__sorting"
                        id="sorting"
                        name="sorting-list"
                    >
                        <option className="volvo">Domyślne</option>
                    </select>
                </div>
            </div>
            <div className="car-list__container">
                {props.data.map((car) => (
                    <Car 
                    key={car.id} 
                    name={car.name} 
                    carImg= {car.carImg}
                    model={car.model}
                    status={car.status}
                    offerNumber={car.offerNumber}
                    location={car.location}
                    yearOfProduction = {car.yearOfProduction}
                    mileage={car.mileage}
                    horsepower={car.horsepower}
                    fuelType={car.fuelType}
                    gearboxType={car.gearboxType}
                    price={car.price}
                    >
                    </Car>
                ))}
            </div>
            <nav className="pagination">
                <button className="pagination__btn" id="prev-pagination">
                    <img
                        src="./img/arrow-left.svg"
                        className="pagination__icon"
                        alt="Strzałka w lewo"
                        width="6"
                        height="9"
                    />
                </button>
                <div id="pagination-numbers"></div>
                <button className="pagination__btn" id="next-pagination">
                    <img
                        src="./img/arrow-right.svg"
                        className="pagination__icon"
                        alt="Strzałka w prwo"
                        width="6"
                        height="9"
                    />
                </button>
            </nav>
        </section>
    );
};

export default CarList;
