import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

//components
import HomeProducts from "../components/HomeProducts";

// icons
import { BsArrowRight } from "react-icons/bs";

//images
import homeImage from "../images/home.png";

const Home = () => {
  const description =
    "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag";
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <main>
      <div className="container">
        <div className="home_image">
          <div className="home_content">
            <div className="">
              <h1 className="home_title">Grab Your items</h1>
              <h1>New Styles!</h1>
              <p>
                success is'nt always about greatness, it's about consistency.
                Consistent hard work gains success. Greatness will come.
              </p>
              <a href="/products" className="btn">
                Explore Now <BsArrowRight className="arrow" />
              </a>
            </div>
            <img src={homeImage} alt="" />
          </div>
        </div>
        <HomeProducts />
        <div className="home_content" style={{ marginTop: "4em" }}>
          <hr />
          <div className="offer">
            <div className="exclusive">
              <img
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                alt=""
              />
            </div>
            <div className="paragraph">
              <p>Exlucisively Available on OurStore</p>
              <h1>Samsung 49-Inch TV</h1>
              <p>{truncate(description, 115)}</p>
              <Link to={`/product/14`} className="btn">
                Buy Now <BsArrowRight className="arrow" />
              </Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="home_content" style={{ marginBottom: "4em" }}>
          <div className="exlusiveOffer">
            <div className="joinNow">
              <h1>Join Our newsletter and get 20% off</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus aut corrupti assumenda magnam iure vitae dolorum saepe
                voluptatum eveniet repellat. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Cum, incidunt.
              </p>
            </div>
            <div className="input_join">
              <input type="email" name="email" placeholder="Enter Email" />
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
