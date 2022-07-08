import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewProducts } from "../../store/products";
import "./ProductDetails.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  console.log("session user", sessionUser)

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  const products = useSelector((state) => {
    return Object.values(state.products);
  });
  const currentProduct = products[id - 1];


  return (
    <div>
        {currentProduct?.user_id === sessionUser?.id ? <div><button>Edit Listing</button> <button>Delete Listing</button></div>: <></>}
      <div id="product-detail-body-ctnr">
        <div id="product-detail-imgs-grid">
          <img
            className="product-detail-img"
            src={`${currentProduct?.image_url_1}`}
          />

          {currentProduct?.image_url_2 ? (
            <img
              className="product-detail-img"
              src={`${currentProduct?.image_url_2}`}
            />
          ) : (
            <></>
          )}
            <img
              className="product-detail-img"
              src={`${currentProduct?.image_url_3}`}
            />
          <img
            className="product-detail-img"
            src={`${currentProduct?.image_url_4}`}
          />
          <img
            className="product-detail-img"
            src={`${currentProduct?.image_url_5}`}
          />
          <img
            className="product-detail-img"
            src={`${currentProduct?.image_url_6}`}
          />
        </div>
        <h1>{currentProduct?.product_name}</h1>
      </div>
    </div>
  );
}

export default ProductDetails;
