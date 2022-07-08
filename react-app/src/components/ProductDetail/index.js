import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { viewProducts, viewCurrentProduct, removeProduct } from "../../store/products";
import EditProductModal from "../EditListingModal";
import "./ProductDetails.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  console.log("session user", sessionUser)

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  const products = useSelector((state) => {
    return Object.values(state.products);
  });

  // console.log("PRODUCTS", products[0].id)

  const currentProductFiltered = products.filter((current) => current.id == id)
  const currentProduct = currentProductFiltered[0]
  const currentProductId = currentProduct?.id

console.log("CURRENT PRODUCT", currentProduct)
console.log("CURRENT PRODUCT ID", currentProductId)


  const deleteProductHandler = async (e) => {
    // e.preventDefault()

    let deletedProduct = await dispatch(removeProduct(currentProductId))
    if (deletedProduct) {
      return history.push('/products/all')
    }
  }


  return (
    <div>
        {currentProduct?.user_id === sessionUser?.id ? <div><EditProductModal /> <button onClick={(e) => deleteProductHandler(currentProductId)}>Delete Listing</button></div>: <></>}
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
