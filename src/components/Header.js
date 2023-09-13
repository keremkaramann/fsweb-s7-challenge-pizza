import React from "react";
import "./css/header.css";
import Footer from "./Footer";
import kore from "../Assets/adv-aseets/icons/1.svg";
import pizza from "../Assets/adv-aseets/icons/2.svg";
import burger from "../Assets/adv-aseets/icons/3.svg";
import fries from "../Assets/adv-aseets/icons/4.svg";
import fastFood from "../Assets/adv-aseets/icons/5.svg";
import drinks from "../Assets/adv-aseets/icons/6.svg";
import Menu from "./Menu";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <h1>Teknolojik Yemekler</h1>
          <p>fırsatı kaçırma</p>
          <h2>KOD ACIKTIRIR</h2>
          <h2>PIZZA, DOYURUR</h2>
        </div>
        <button type="button">ACIKTIM</button>
      </header>
      <section>
        <div className="icons-container">
          <div className="cs-icons">
            <img src={kore} alt="kore-food" />
            <p>YENİ! Kore</p>
          </div>
          <div className="cs-icons">
            <img src={pizza} alt="kore-food" />
            <p>Pizza</p>
          </div>
          <div className="cs-icons">
            <img src={burger} alt="kore-food" />
            <p>Burger</p>
          </div>
          <div className="cs-icons">
            <img src={fries} alt="kore-food" />
            <p>Kızartmalar</p>
          </div>
          <div className="cs-icons">
            <img src={fastFood} alt="kore-food" />
            <p>Fast Food</p>
          </div>
          <div className="cs-icons">
            <img src={drinks} alt="kore-food" />
            <p>Gazlı İçecek</p>
          </div>
        </div>
      </section>
      <Menu />
      <Footer />
    </>
  );
};
export default Header;
