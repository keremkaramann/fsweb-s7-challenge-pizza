import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./css/summary.css";
import Loader from "./Loader";
const Summery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3300);
  }, []);

  const location = useLocation();
  const {
    itemName,
    hamur,
    selectedSize,
    selectedToppings,
    formData,
    totalToppingsPrice,
    totalPrice,
  } = location.state;

  const selectedToppingsToShow = Object.keys(selectedToppings).filter(
    (topping) => selectedToppings[topping] === true
  );
  const selectedToppingsText = selectedToppingsToShow.join(", ");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="cs-last-page">
          <div>
            <Link className="header-link" to={`/`}>
              <h1>Teknolojik Yemekler</h1>
            </Link>
          </div>
          <div>
            <h3>lezzetin yolda</h3>
            <h2>SİPARİŞ ALINDI</h2>
          </div>
          <div className="border-white-last"></div>
          <div className="cs-item-name">
            <p>{itemName}</p>
          </div>
          <div className="cs-orderSum-last">
            <div className="extra-order-last">
              <p>Boyut:</p>
              <p>{selectedSize}</p>
            </div>
            <div className="extra-order-last">
              <p>Hamur:</p>
              <p>{hamur}</p>
            </div>
            <div className="extra-order-last">
              {selectedToppingsToShow.length > 0 && (
                <>
                  <p>Ek Malzemer:</p>
                  <p>{selectedToppingsText}</p>
                </>
              )}
            </div>
            <div className="extra-order-last">
              {formData.note && (
                <>
                  <p>Sipariş notu:</p>
                  <p>{formData.note}</p>
                </>
              )}
            </div>
          </div>
          <div className="total-area-last">
            <p>Sipariş Toplamı</p>
            <div>
              <div className="total-num-area">
                <p>Seçimler</p>
                <p>{totalToppingsPrice}₺</p>
              </div>
              <div className="total-num-area">
                <p>Toplam</p>
                <p>{totalPrice.toFixed(2)}₺ </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Summery;
