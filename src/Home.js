import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="49538094"
            title='Apple 16" MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.3GHz'
            price={3299.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61UOtcMWy5L._AC_SX522_.jpg"
          />
          <Product
            id="325435454"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="234545430"
            title="New Apple iPhone 12 Pro Max (128GB, Pacific Blue)"
            price={1099.0}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="4903850"
            title="Samsung Galaxy Buds Live, True Wireless Earbuds"
            price={169.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71LcAql4%2BaL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
