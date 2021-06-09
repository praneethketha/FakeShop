import React from "react";
import "./HomeProducts.css";
import { Link } from "react-router-dom";

//data
import data from "../data";
const HomeProducts = () => {
  return (
    <div className="featured_products">
      <div className="justify_center">
        <h2>Featured Products</h2>
        <div className="underline"></div>
        <div className={`home_products`}>
          {data.map((item) => {
            const { id, title, price, image, category } = item;
            return (
              <section key="id">
                <div className="images">
                  <Link to={`/product/${id}`}>
                    <img src={image} alt={title} />
                  </Link>
                  <hr />
                  <h4>{title}</h4>
                  <h5>${price}</h5>
                  <h5
                    style={{
                      color: "gray",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                      fontSize: "0.8rem",
                    }}
                  >
                    {category}
                  </h5>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
