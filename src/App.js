import classes from "./css/app.css";
import Navigation from "./components/Navigation"
import Header from "./components/Header"
import CarList from "./components/CarList"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState } from "react";

import car1img from "./img/cars/car1.webp"
import car2img from "./img/cars/car2.webp"
import car3img from "./img/cars/car3.webp"
const DUMMY_CARS = [
  {
    id: "1",
    name: "SEAT Leon SP Style 1.5 150KM Automat Kombi",
    carImg:car1img, 
    model: "Leon",
    status: "Nowy",
    offerNumber: "Numer oferty: 6091708456",
    location: "Gdańsk",
    yearOfProduction: "2022",
    mileage: "7 km",
    horsepower: "150 KM",
    fuelType: "Benzyna",
    gearboxType: "Automat",
    price: "130 900 zł",
  },
  {
    id: "2",
    name: "SEAT Arona Full LED 1.0 TSI 110 KM Automat/ Czujniki parkowania z tyłu...",
    carImg:car2img, 
    model: "Arona",
    status: "Używany",
    offerNumber: "Nr oferty: 6087716634",
    location: "Gdańsk",
    yearOfProduction: "2022",
    mileage: "7 km",
    horsepower: "150 KM",
    fuelType: "Diesel",
    gearboxType: "Automat",
    price: "105 100 zł",
  },
  {
    id: "",
    name: "",
    model: "",
    status: "",
    offerNumber: "",
    location: "",
    yearOfProduction: "",
    mileage: "",
    horsepower: "",
    fuelType: "",
    gearboxType: "",
    price: "",
  },
]


//smooth scroll

// const scrollSmoothTo = (elementId) => {
//   let element = document.getElementById(elementId);
//   element.scrollIntoView({
//     block: "start",
//     behavior: "smooth",
//   });
// };

function App() {
  const [cars, setCars] = useState(DUMMY_CARS)

  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <main>
        <CarList data={cars}></CarList>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
