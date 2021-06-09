import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

// icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// images
import bagImage from "../images/bag.png";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  setClearCart,
  setRemoveItem,
  setToggleAmount,
} from "../redux/actions/productActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cart } = cartItems;

  const removeItem = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const filterItem = cartItems.filter((cartitem) => cartitem.id !== item.id);
    if (filterItem.length === 0) {
      dispatch(setClearCart());
      return;
    } else {
      dispatch(setRemoveItem({ filterItem, item }));
    }
  };

  const increaseAmount = ({ id, type }) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const exist = cartItems.find((item) => item.id == id);
    if (type == "desc") {
      if (exist.amount === 1) {
        removeItem(exist);
        return;
      }
      dispatch(setToggleAmount({ item_id: id, toggle: type }));
    } else {
      dispatch(setToggleAmount({ item_id: id, toggle: type }));
    }
  };

  const totalAmount = () => {
    let totalamount = 0;
    cart.forEach((element) => {
      totalamount += element.total;
    });
    return Math.round(totalamount * 100) / 100;
  };

  return (
    <main>
      {!localStorage.getItem("cart") ? (
        <section className="section_center section empty_main">
          <div className="empty">
            <img src={bagImage} alt="" />
            <h1>hey, your bag fills so light!</h1>
            <Link
              to="/products"
              className="shopping_btn"
              style={{ background: "rgb(0, 66, 47)", fontSize: "1em" }}
            >
              Fill It
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className="section_center section">
            <div className="top_cart_section">
              <div className="cart_content">
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
              </div>
              <hr />
            </div>
            {cart.map((item) => {
              const { id, title, price, image, amount, total } = item;
              return (
                <article key={id} className="cart_grid">
                  <div className="title">
                    <img src={image} alt={title} />
                    <div>
                      <h5 className="name">{title.substr(0, 10)}</h5>
                      <h5 className="price_small">${price}</h5>
                    </div>
                  </div>
                  <h5 className="price_big">${price}</h5>
                  <div className="amount_btns">
                    <button
                      className="amount_btn"
                      onClick={() => increaseAmount({ id, type: "desc" })}
                    >
                      <FaMinus />
                    </button>
                    <h2>{amount}</h2>
                    <button
                      className="amount_btn"
                      onClick={() => increaseAmount({ id, type: "insc" })}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <h5 className="price_big sub_total">
                    ${Math.round(total * 100) / 100}
                  </h5>
                  <button
                    className="remove_btn"
                    onClick={() => removeItem(item)}
                  >
                    <MdDelete />
                  </button>
                </article>
              );
            })}
            <hr />
            <div className="shopping_btns">
              <Link
                to="/products"
                className="shopping_btn"
                style={{ background: "rgb(0, 66, 47)" }}
              >
                Continue Shopping
              </Link>
              <button
                className="shopping_btn"
                style={{ background: "black", padding: "8px 15px" }}
                onClick={() => dispatch(setClearCart())}
              >
                Clear Shopping Cart
              </button>
            </div>
            <section className="total">
              <div>
                <article>
                  <h5>
                    sub Total : <span>${totalAmount()}</span>
                  </h5>
                  <p>
                    Delivary Charges : <span>$4.50</span>
                  </p>
                  <hr />
                  <h4>
                    Grand Total : <span>${totalAmount() + 4.5}</span>
                  </h4>
                </article>
                <button className="shopping_btn login_btn">Login</button>
              </div>
              <section></section>
            </section>
          </section>
        </>
      )}
    </main>
  );
};
export default Cart;
