import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
//componenets
import Loading from "../components/Loading";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  seelectedProducts,
  setAddToCart,
} from "../redux/actions/productActions";

//icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaShoppingCart, FaBox } from "react-icons/fa";

const url = "https://fakestoreapi.com/products/";
const SingleProduct = () => {
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(true);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  const fetchProductById = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    dispatch(seelectedProducts(response.data));
  };
  useEffect(() => {
    setLoading(true);
    if (id && id !== "") fetchProductById();
  }, [id]);

  const { title, price, description, image, category } = product;
  return (
    <main style={{ minHeight: " 80vh" }}>
      {loading ? (
        <Loading />
      ) : (
        <section className="section_center singleProduct">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="singleProduct__content">
            <h1>{title}</h1>
            <h2>${price}</h2>
            <p>{description}</p>
            <div className="info">
              <span>Available:</span> In stock
            </div>
            <hr />
            <div className="btn_container">
              <div className="amount_btns">
                <button
                  className="amount_btn"
                  onClick={() =>
                    amount > 1 ? setAmount(amount - 1) : setAmount(1)
                  }
                >
                  <FaMinus />
                </button>
                <h2>{amount}</h2>
                <button
                  className="amount_btn"
                  onClick={() => setAmount(amount + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <Link
                to="/cart"
                onClick={() => {
                  dispatch(setAddToCart({ product, amount }));
                }}
              >
                <button className="cart_btn">
                  <span>Add to cart</span>{" "}
                  <FaShoppingCart className="addToCart" />
                  <FaBox className="box" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default SingleProduct;
