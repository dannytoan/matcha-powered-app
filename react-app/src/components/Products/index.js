import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProducts } from "../../store/products";

function Products() {
  const dispatch = useDispatch();
  //   const products = useSelector((state) => {
  //     return Object.values(state.products);
  //   });

  const products = useSelector((state) =>
    state.products
  );

  console.log("PRODUCTS", products)

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  return (
    <div>
      hello
      {/* <div>
            {products.map((product) => (
                <li>{product.name}</li>
            ))}
        </div> */}
    </div>
  );
}

export default Products;
