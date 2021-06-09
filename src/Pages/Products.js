import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

// icons
import { BsGridFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

//components
import Category from "../components/Category";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import Loading from "../components/Loading";

//redux
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [display, setDisplay] = useState(true);
  const [loading, setLoading] = useState(true);
  const category = useSelector((state) => state.allProducts.category);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);
  return (
    <main>
      <div className="section_center products_container">
        <section>
          <Category />
        </section>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <section className="menu_top">
              <div className="btn_container">
                <button className={display && "active"}>
                  <BsGridFill
                    className="grid__icon"
                    onClick={() => setDisplay(!display)}
                  />
                </button>
                <button className={display || "active"}>
                  <FiMenu
                    className="list__icon"
                    onClick={() => setDisplay(!display)}
                  />
                </button>
              </div>
              <p>{category.length} products found</p>
              <hr />
            </section>
            {display ? <GridView /> : <ListView />}
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
