import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/order.css";
import { useParams } from "react-router-dom";
import { tabsData } from "../data/tabsData";
import { AiFillStar } from "react-icons/ai";
import Footer from "./Footer";
import { useEffect } from "react";

const Order = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("small");
  const [selectedToppings, setSelectedToppings] = useState({
    pepperoni: false,
    sosis: false,
    kanada: false,
    tavuk: false,
    sogan: false,
    domates: false,
    mısır: false,
    sucuk: false,
    jalepeno: false,
    sarımsak: false,
    biber: false,
    kaburga: false,
    Ananas: false,
    kabak: false,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalEkstra, setTotalEkstra] = useState(0);
  const [increase, setIncrease] = useState(1);

  console.log(increase);
  const [formData, setFormData] = useState({
    size: selectedSize,
    hamur: "",
    note: "",
  });

  const toppingPrice = 5;
  const maxToppings = 10;

  const changeHandler = (e) => {
    const { name, checked } = e.target;

    if (name === "size") {
      setSelectedSize(e.target.value);
      setFormData({ ...formData, size: e.target.value });
    } else if (name === "hamur") {
      setFormData({ ...formData, hamur: e.target.value });
    } else if (name === "note") {
      setFormData({ ...formData, note: e.target.value });
    } else {
      const updatedToppings = {
        ...selectedToppings,
        [name]: checked,
      };

      // Calculate the selected toppings as an array
      const selectedToppingsArray = Object.keys(updatedToppings).filter(
        (topping) => updatedToppings[topping]
      );

      if (selectedToppingsArray.length <= maxToppings) {
        const totalEkstra = selectedToppingsArray.length * toppingPrice;
        const totalPrice = parseFloat(selectedItem.price) + totalEkstra;

        setFormData({ ...formData, toppings: selectedToppingsArray });
        setSelectedToppings(updatedToppings);

        setTotalEkstra(totalEkstra);
        setTotalPrice(totalPrice.toFixed(2));
      } else {
        // If more than 10 toppings are selected, don't update the state
        e.preventDefault();
      }
    }
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
    setFormData({ ...formData, size: size });
  };

  let selectedItem = null;

  for (const categoryKey in tabsData) {
    const category = tabsData[categoryKey];
    selectedItem = category.find((item) => item.id === parseInt(id));
    if (selectedItem) {
      break;
    }
  }
  /* show initial value of total price to screen when page loaded */
  useEffect(() => {
    setTotalPrice(selectedItem.price);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  //toast

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
                  <p>{selectedItem.price}₺</p>
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
                    value="small"
                    name="size"
                    className={`size-button ${
                      selectedSize === "small" ? "selected active" : ""
                    }`}
                    onClick={() => handleSelectSize("small")}
                  >
                    S
                  </button>
                  <button
                    value="medium"
                    name="size"
                    className={`size-button ${
                      selectedSize === "medium" ? "selected active" : ""
                    }`}
                    onClick={() => handleSelectSize("medium")}
                  >
                    M
                  </button>
                  <button
                    value="large"
                    name="size"
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
                <select
                  name="hamur"
                  id="hamur"
                  value={formData.hamur}
                  onChange={changeHandler}
                >
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
                <label htmlFor="pepperoni" className="container">
                  <input
                    type="checkbox"
                    id="pepperoni"
                    name="pepperoni"
                    value="pepperoni"
                    checked={selectedToppings.pepperoni}
                    onChange={changeHandler}
                  />
                  Pepperoni
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sosis" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="sosis"
                    name="sosis"
                    value="sosis"
                    checked={selectedToppings.sosis}
                  />
                  Sosis
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="kanada" className="container">
                  <input
                    type="checkbox"
                    id="kanada"
                    name="kanada"
                    value="kanada"
                    checked={selectedToppings.kanada}
                    onChange={changeHandler}
                  />
                  Kanada Jambonu
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="tavuk" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="tavuk"
                    name="tavuk"
                    value="tavuk"
                    checked={selectedToppings.tavuk}
                  />
                  Tavuk Izgara
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sogan" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="sogan"
                    name="sogan"
                    value="sogan"
                    checked={selectedToppings.sogan}
                  />
                  Soğan
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="first-select">
                <label htmlFor="domates" className="container">
                  <input
                    type="checkbox"
                    id="domates"
                    name="domates"
                    value="domates"
                    onChange={changeHandler}
                    checked={selectedToppings.domates}
                  />
                  Domates
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="mısır" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="mısır"
                    name="mısır"
                    value="mısır"
                    checked={selectedToppings.mısır}
                  />
                  Mısır
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sucuk" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="sucuk"
                    name="sucuk"
                    value="sucuk"
                    checked={selectedToppings.sucuk}
                  />
                  Sucuk
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="jalepeno" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="jalepeno"
                    name="jalepeno"
                    value="jalepeno"
                    checked={selectedToppings.jalepeno}
                  />
                  Jalepeno
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="sarımsak" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="sarımsak"
                    name="sarımsak"
                    value="sarımsak"
                    checked={selectedToppings.sarımsak}
                  />
                  Sarımsak
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="first-select">
                <label htmlFor="biber" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="biber"
                    name="biber"
                    value="biber"
                    checked={selectedToppings.biber}
                  />
                  Biber
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="kaburga" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="kaburga"
                    name="kaburga"
                    value="kaburga"
                    checked={selectedToppings.kaburga}
                  />
                  Kaburga
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="Ananas" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="Ananas"
                    name="Ananas"
                    value="Ananas"
                    checked={selectedToppings.Ananas}
                  />
                  Ananas
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="kabak" className="container">
                  <input
                    onChange={changeHandler}
                    type="checkbox"
                    id="kabak"
                    name="kabak"
                    value="kabak"
                    checked={selectedToppings.kabak}
                  />
                  Kabak
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="cs-order-container">
            <div className="text-area">
              <h4>Sipariş Notu</h4>
              <label htmlFor="note"></label>
              <input
                onChange={changeHandler}
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
                    if (increase > 1) {
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
                    <p>{totalEkstra}₺</p>
                  </div>
                  <div className="red-section-last">
                    <p>Toplam</p>
                    <p>{(increase * totalPrice).toFixed(2)}₺</p>
                  </div>
                </div>
                <Link
                  to={{
                    pathname: "/summary",
                    state: {
                      selectedSize,
                      selectedToppings,
                      formData,
                      totalToppingsPrice: totalEkstra,
                      totalPrice: increase * totalPrice,
                      hamur: formData.hamur,
                      itemName: selectedItem.name,
                    },
                  }}
                  className="last-btn"
                >
                  SİPARİŞ VER
                </Link>
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
