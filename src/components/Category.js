import React, { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/productActions";

const Category = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const categories = ["all", ...new Set(products.map((item) => item.category))];
  const [active, setActive] = useState("all");
  return (
    <div className="category_menu">
      <h5>Category</h5>
      <div>
        {categories.map((category) => {
          return (
            <button
              type="button"
              className={active == category && "active"}
              onClick={() => {
                dispatch(setCategory(category));
                setActive(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
