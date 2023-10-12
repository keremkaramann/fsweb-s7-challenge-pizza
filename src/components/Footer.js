import React from "react";
import "./css/footer.css";
import locationIcon from "../Assets/adv-aseets/icons/icon-1.png";
import printerIcon from "../Assets/adv-aseets/icons/icon-2.png";
import phoneIcon from "../Assets/adv-aseets/icons/icon-3.png";
import one from "../Assets/adv-aseets/insta/li-0.png";
import two from "../Assets/adv-aseets/insta/li-1.png";
import three from "../Assets/adv-aseets/insta/li-2.png";
import four from "../Assets/adv-aseets/insta/li-3.png";
import five from "../Assets/adv-aseets/insta/li-4.png";
import six from "../Assets/adv-aseets/insta/li-5.png";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="in_container">
          <div className="first-two">
            <div>
              <h3>
                Teknolojik <br />
                Yemekler
              </h3>
              <address>
                <div>
                  <img src={locationIcon} alt="location-icon" />
                  <p>
                    341 Londonerry Road,
                    <br />
                    İstanbul Türkiye
                  </p>
                </div>
                <div>
                  <img src={printerIcon} alt="mail-icon" />
                  <a href="mailto: aciktim@teknolojikyemekler.com">
                    aciktim@teknolojikyemekler.com
                  </a>
                </div>
                <div>
                  <img src={phoneIcon} alt="phone-icon" />
                  <a href="tel:+90 216 123 45 67">+90 216 123 45 67</a>
                </div>
              </address>
            </div>
            <div className="menu-container">
              <h4>Hot Menu</h4>
              <nav className="footer-nav">
                <a href="https://example.com/tavuklu-pizza" target="_blank">
                  Terminal Pizza
                </a>
                <a href="https://example.com/tavuklu-pizza" target="_blank">
                  5 Kişilik Hackathlon Pizza
                </a>
                <a href="https://example.com/tavuklu-pizza" target="_blank">
                  useEffect Tavuklu Pizza
                </a>
                <a href="https://example.com/tavuklu-pizza" target="_blank">
                  Beyaz Console Frosty
                </a>
                <a href="https://example.com/tavuklu-pizza" target="_blank">
                  Testler Geçti Mutlu Burger
                </a>
                <a href="https://example.com/tavuklu-pizza" target="_blank">
                  Position Absolute Acı Burger
                </a>
              </nav>
            </div>
          </div>
          <div className="insta-container">
            <a href="instagram">
              <h4>Instagram</h4>
            </a>
            <div className="img-container">
              <img src={one} alt="pizza_picture" />
              <img src={two} alt="pizza_picture" />
              <img src={three} alt="burger_picture" />
              <img src={four} alt="bbq_picture" />
              <img src={five} alt="hamburger_picture" />
              <img src={six} alt="hamburger_picture" />
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer">
        <div className="bottom-container">
          <p>&copy; 2023 Teknolojik Yemekler</p>
          <a href="https://example.com/tavuklu-pizza">
            <AiOutlineTwitter className="twit-icon" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
