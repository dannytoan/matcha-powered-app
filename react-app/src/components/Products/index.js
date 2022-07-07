import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProducts } from "../../store/products";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  const products = useSelector((state) => {
    return Object.values(state.products);
  });

  console.log("PRODUCTS in Component", products);

  return (
    <div>
      <div id="styles-header-container">
        <div id="new-arrivals-text-all-products" className="text">
          New Arrivals
        </div>
        <h2 id="all-products-title" className="text">
          All Products
        </h2>
      </div>
      <div id="products-listings-container">
        {products.map((product) => (
          <a href={`/product/${product.id}`}>
            <div className="product-listing-container" key={product.id}>
              <div className="product-image-container">
                <img
                  className="product-image-preview"
                  src={product.image_url_1}
                />
                <div className="product-image-overlay">
                  <div className="text product-image-overlay-details">
                    Details
                  </div>
                </div>
              </div>
              <div id="product-listings-details">
                <div className="product-listings-name text">
                  {product.product_name}
                </div>
                <div className="product-listings-price">
                  $ {product.price} USD
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Products;
