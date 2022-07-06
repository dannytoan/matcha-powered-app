import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProducts } from "../../store/products";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  const products = useSelector((state) => {
    return Object.values(state.productsReducer);
  });


  console.log("PRODUCTS in Component", products);


  return (
    <div>
      hello
      <div>
            {products.map((product) => (
                <li>{product.product_name}</li>
            ))}
        </div>
    </div>
  );
}

export default Products;
