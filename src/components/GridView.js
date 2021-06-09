import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const GridView = () => {
  const category = useSelector((state) => state.allProducts.category);
  return (
    <section className="products_menu">
      {category.map((item) => {
        const { id, title, price, description, image, category } = item;
        return (
          <article className="menu_item">
            <div className="product__image">
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="photo" />
              </Link>
              <hr />
              <span>Price : </span>
              <h4 className="price">${price}</h4>
              <h5>{category}</h5>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default GridView;
