import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListView.css";

const ListView = () => {
  const category = useSelector((state) => state.allProducts.category);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <section className="listView">
      {category.map((item) => {
        const { id, title, price, description, image } = item;
        return (
          <article key={id}>
            <div className="image_container">
              <img src={image} alt={title} />
            </div>
            <div>
              <h4>{title}</h4>
              <span>Price : </span>
              <h5 className="price">${price}</h5>
              <p>{truncate(description, 150)}</p>
              <Link to={`/product/${id}`} className="list_btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default ListView;
