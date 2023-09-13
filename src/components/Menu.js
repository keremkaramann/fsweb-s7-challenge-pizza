import React, { useState } from "react";
import "./css/menu.css";
import { Link } from "react-router-dom";
import orderPizza from "../Assets/adv-aseets/kart-1.png";
import orderBurger from "../Assets/adv-aseets/kart-2.png";
import npm from "../Assets/adv-aseets/kart-3.png";
import kore from "../Assets/adv-aseets/icons/1.svg";
import pizza from "../Assets/adv-aseets/icons/2.svg";
import burger from "../Assets/adv-aseets/icons/3.svg";
import fries from "../Assets/adv-aseets/icons/4.svg";
import fastFood from "../Assets/adv-aseets/icons/5.svg";
import drinks from "../Assets/adv-aseets/icons/6.svg";
import { tabsData } from "../data/tabsData";
import { AiFillStar } from "react-icons/ai";

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState("Pizza");

  const selectedProducts = tabsData[selectedTab];

  return (
    <section className="middle-menu-container">
      <div className="order-menu">
        <div className="cs-pizza">
          <img src={orderPizza} alt="" />
          <div className="cs-pizza-div">
            <h3>
              Özel <br /> Lezzetus
            </h3>
            <p>Position:Absoulute Acı Burger</p>
            <Link to="/pizza/1" className="order-now">
              SİPARİŞ VER
            </Link>
          </div>
        </div>
        <div className="two-menu-order-cont">
          <div className="cs-same">
            <img src={orderBurger} alt="" />
            <div className="cs-burger">
              <p className="cs-white">
                Hackathlon <br />
                Burger Menü
              </p>

              <Link to="/pizza/1" className="order-now">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
          <div className="cs-same">
            <img src={npm} alt="" />
            <div className="cs-burger">
              <p>
                <span className="cs-span">Çoooook </span>
                hızlı <br />
                npm gibi kurye
              </p>
              <Link to="/pizza/1" className="order-now">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="tab-cont">
          <h4>en çok paketlenen menüler</h4>
          <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
          <div className="tab-container">
            <div
              className={`tab ${selectedTab === "Ramen" ? "active" : ""}`}
              onClick={() => setSelectedTab("Ramen")}
            >
              <img src={kore} alt="RamenIcon" />
              <p>Ramen</p>
            </div>
            <div
              className={`tab ${selectedTab === "Pizza" ? "active" : ""}`}
              onClick={() => setSelectedTab("Pizza")}
            >
              <img src={pizza} alt="pizzaIcon" />
              <p>Pizza</p>
            </div>
            <div
              className={`tab ${selectedTab === "Burger" ? "active" : ""}`}
              onClick={() => setSelectedTab("Burger")}
            >
              <img src={burger} alt="burgerIcon" />
              <p>Burger</p>
            </div>
            <div
              className={`tab ${selectedTab === "Fries" ? "active" : ""}`}
              onClick={() => setSelectedTab("Fries")}
            >
              <img src={fries} alt="friesIcon" />
              <p>French fries</p>
            </div>
            <div
              className={`tab ${selectedTab === "Fast" ? "active" : ""}`}
              onClick={() => setSelectedTab("Fast")}
            >
              <img src={fastFood} alt="fastFoodIcon" />
              <p>Fast Food</p>
            </div>
            <div
              className={`tab ${selectedTab === "Drinks" ? "active" : ""}`}
              onClick={() => setSelectedTab("Drinks")}
            >
              <img src={drinks} alt="drinkIcon" />
              <p>Drinks</p>
            </div>
          </div>
        </div>

        <div className="cs-container">
          {selectedProducts.map((product, index) => {
            const { name, price, rated, numberOfPeopleRated, url, id } =
              product;

            return (
              <div key={index} className="card-container">
                <Link className="linkto-order" to={`/pizza/${id}`}>
                  <img src={url} alt="food_picture" />
                  <p className="first-name">{name} </p>
                  <div className="card-price">
                    <div className="card-rated">
                      <AiFillStar className="star-icon" />
                      <p>{rated}/5 </p>
                      <p>({numberOfPeopleRated})</p>
                    </div>
                    <p className="last-price">{price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
