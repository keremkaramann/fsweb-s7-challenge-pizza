import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/order.css";
import { useParams } from "react-router-dom";
import { tabsData } from "../data/tabsData";
import { AiFillStar } from "react-icons/ai";
import Footer from "./Footer";

const Order = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("small");
  const [increase, setIncrease] = useState(1);
  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  let selectedItem = null;

  for (const categoryKey in tabsData) {
    const category = tabsData[categoryKey];
    selectedItem = category.find((item) => item.id === parseInt(id));
    if (selectedItem) {
      break;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section>
        <div className="red-header">
          <Link className="header-link" to={`/`}>
            <h1>Teknolojik Yemekler</h1>
          </Link>
        </div>
        <div className="order-container2">
          <div className="order-summary">
            <img src={selectedItem.url} alt={selectedItem.name} />
          </div>
          <div className="cs-order-container">
            <div className="order-navlinks">
              <NavLink className="order-navlinks" to="/">
                Anasayfa
              </NavLink>
              -
              <NavLink className="order-navlinks" to="/">
                Seçenekler
              </NavLink>
              -
              <NavLink className="order-navlinks red" to="/">
                Sipariş Oluştur
              </NavLink>
            </div>
            {selectedItem && (
              <div className="selected-item-content">
                <h3>{selectedItem.name}</h3>
                <div className="price-section">
                  <p>{selectedItem.price}</p>
                  <div className="rate-section">
                    <AiFillStar className="star-icon" />
                    <p>{selectedItem.rated}/5</p>
                    <p>({selectedItem.numberOfPeopleRated})</p>
                  </div>
                </div>
              </div>
            )}
            <p className="lorem-exp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ut non veritatis atque nemo delectus eum placeat quos suscipit?
              Assumenda quos nihil soluta ipsum reprehenderit sequi, tempora
              placeat culpa quo. Dolores alias sint fuga quasi, quibusdam magni
              necessitatibus itaque et, enim repellat excepturi? Maiores
              doloribus voluptate recusandae adipisci, esse quod impedit.
              Deleniti, quidem iure! Ipsum animi similique rerum provident
              eaque? Eum inventore, nobis explicabo mollitia nesciunt vel, nisi
              molestias corporis saepe aperiam velit quod, modi vero?
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="cs-order-container">
            <div className="size-select-cont">
              <div className="pizza-size">
                <h4>
                  Boyut Seç <span>*</span>
                </h4>
                <div className="button-select-size">
                  <button
                    className={`size-button ${
                      selectedSize === "small" ? "selected active" : ""
                    }`}
                    onClick={() => handleSelectSize("small")}
                  >
                    S
                  </button>
                  <button
                    className={`size-button ${
                      selectedSize === "medium" ? "selected active" : ""
                    }`}
                    onClick={() => handleSelectSize("medium")}
                  >
                    M
                  </button>
                  <button
                    className={`size-button ${
                      selectedSize === "large" ? "selected active" : ""
                    }`}
                    onClick={() => handleSelectSize("large")}
                  >
                    L
                  </button>
                </div>
              </div>
              <div className="select-input">
                <h4>
                  Hamur Seç <span>*</span>
                </h4>
                <select name="hamur" id="hamur">
                  <option disabled selected>
                    -Hamur Kalınlığı Seç-
                  </option>
                  <option value="ince">İnce</option>
                  <option value="orta">Orta</option>
                  <option value="kalın">Kalın</option>
                </select>
              </div>
            </div>
          </div>
          <div className="cs-order-container">
            <h4 className="h4-checkbox">Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="checkbox-container">
              <div className="first-select">
                <label for="pepperoni" className="container">
                  <input
                    type="checkbox"
                    id="pepperoni"
                    name="pepperoni"
                    value="Bike"
                  />
                  Pepperoni
                  <span className="checkmark"></span>
                </label>
                <label for="sosis" className="container">
                  <input type="checkbox" id="sosis" name="sosis" value="Boat" />
                  Sosis
                  <span className="checkmark"></span>
                </label>
                <label for="kanada" className="container">
                  <input
                    type="checkbox"
                    id="kanada"
                    name="kanada"
                    value="kanada"
                  />
                  Kanada Jambonu
                  <span className="checkmark"></span>
                </label>
                <label for="tavuk" className="container">
                  <input type="checkbox" id="tavuk" name="tavuk" value="Boat" />
                  Tavuk Izgara
                  <span className="checkmark"></span>
                </label>
                <label for="sogan" className="container">
                  <input type="checkbox" id="sogan" name="sogan" value="Boat" />
                  Soğan
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="first-select">
                <label for="domates" className="container">
                  <input
                    type="checkbox"
                    id="domates"
                    name="domates"
                    value="Bike"
                  />
                  Domates
                  <span className="checkmark"></span>
                </label>
                <label for="mısır" className="container">
                  <input type="checkbox" id="mısır" name="mısır" value="Boat" />
                  Mısır
                  <span className="checkmark"></span>
                </label>
                <label for="sucuk" className="container">
                  <input
                    type="checkbox"
                    id="sucuk"
                    name="sucuk"
                    value="kanada"
                  />
                  Sucuk
                  <span className="checkmark"></span>
                </label>
                <label for="jalepeno" className="container">
                  <input
                    type="checkbox"
                    id="jalepeno"
                    name="jalepeno"
                    value="Boat"
                  />
                  Jalepeno
                  <span className="checkmark"></span>
                </label>
                <label for="sarımsak" className="container">
                  <input
                    type="checkbox"
                    id="sarımsak"
                    name="sarımsak"
                    value="Boat"
                  />
                  Sarımsak
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="first-select">
                <label for="biber" className="container">
                  <input type="checkbox" id="biber" name="biber" value="Bike" />
                  Biber
                  <span className="checkmark"></span>
                </label>
                <label for="kaburga" className="container">
                  <input
                    type="checkbox"
                    id="kaburga"
                    name="kaburga"
                    value="Boat"
                  />
                  Kaburga
                  <span className="checkmark"></span>
                </label>
                <label for="Ananas" className="container">
                  <input
                    type="checkbox"
                    id="Ananas"
                    name="Ananas"
                    value="kanada"
                  />
                  Ananas
                  <span className="checkmark"></span>
                </label>
                <label for="kabak" className="container">
                  <input type="checkbox" id="kabak" name="kabak" value="Boat" />
                  Kabak
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="cs-order-container">
            <div className="text-area">
              <h4>Sipariş Notu</h4>
              <label for="note"></label>
              <input
                type="text"
                id="note"
                name="note"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </div>
          </div>
          <div className="black-border"></div>
          <div className="cs-order-container">
            <div className="increase-cont">
              <div className="increase-btn">
                <button
                  onClick={() => {
                    if (increase > 0) {
                      setIncrease(increase - 1);
                    }
                  }}
                >
                  -
                </button>
                <p>{increase}</p>
                <button onClick={() => setIncrease(increase + 1)}>+</button>
              </div>
              <div className="last-order-cont">
                <div className="p-12">
                  <h4>Sipariş Toplamı</h4>
                  <div className="in-order">
                    <p>Seçimler</p>
                    <p>33₺</p>
                  </div>
                  <div className="red-section-last">
                    <p>Toplam</p>
                    <p>44₺</p>
                  </div>
                </div>
                <Link className="last-btn">SİPARİŞ VER</Link>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};
export default Order;
