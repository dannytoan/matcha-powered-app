import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import {
  viewProducts,
  viewCurrentProduct,
  removeProduct,
} from "../../store/products";
import EditProductModal from "../EditListingModal";
import Reviews from "../Reviews";
import NewReviewFormModal from "../NewReviewModal";
import "./ProductDetails.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const [users, setUsers] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);
  console.log("session user", sessionUser);
  console.log("USERS", users);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  const products = useSelector((state) => {
    return Object.values(state.products);
  });

  const currentProductFiltered = products.filter(
    (current) => current?.id == id
  );
  const currentProduct = currentProductFiltered[0];
  const currentProductId = currentProduct?.id;

  const currentSeller = users?.filter(
    (user) => user?.id === +currentProduct?.user_id
  );

  const currentSellerUserName = currentSeller[0]?.username;

  const deleteProductHandler = async (e) => {
    // e.preventDefault()

    let deletedProduct = await dispatch(removeProduct(currentProductId));
    if (deletedProduct) {
      return history.push("/products/all");
    }
  };

  return (
    <div>
      <div id="product-detail-body-ctnr">
        <div id="product-detail-imgs-grid">
          <div
            className={
              currentProduct?.image_url_2 ? "first-three-pics" : "no-pic"
            }
          >
            {currentProduct?.image_url_2 ? (
              <img
                className="product-detail-img-top"
                src={`${currentProduct?.image_url_2}`}
              />
            ) : (
              <div className="no-pic"></div>
            )}

            {currentProduct?.image_url_3 ? (
              <img
                className="product-detail-img-top"
                src={`${currentProduct?.image_url_3}`}
              />
            ) : (
              <div className="no-pic"></div>
            )}

            {currentProduct?.image_url_4 ? (
              <img
                className="product-detail-img-top"
                src={`${currentProduct?.image_url_4}`}
              />
            ) : (
              <div className="no-pic"></div>
            )}
          </div>
          <div id="center-pic">
            <img id="center-pic-img" src={`${currentProduct?.image_url_1}`} />
          </div>
          <div
            className={
              currentProduct?.image_url_2 ? "bottom-two-pics" : "no-pic"
            }
          >
            {currentProduct?.image_url_5 ? (
              <img
                className="product-detail-img-bottom"
                src={`${currentProduct?.image_url_5}`}
              />
            ) : (
              <div className="no-pic"></div>
            )}

            {currentProduct?.image_url_6 ? (
              <img
                className="product-detail-img-bottom"
                src={`${currentProduct?.image_url_6}`}
              />
            ) : (
              <div className="no-pic"></div>
            )}
          </div>
        </div>
        <div id="right-side-product-details">
          <div id="product-detail-name-container">
            <h1 id="product-detail-name-title" className="text">
              {currentProduct?.product_name}
            </h1>

            <div id="price-and-seller-container">
              <h2 id="product-detail-price" className="text">
                $ {currentProduct?.price} USD
              </h2>
            </div>
          </div>
            <div id="product-detail-seller-name" className="text">
                Sold by {currentSellerUserName}
              </div>

          <div id="description-container">
            <div id="product-desc-seller-container">

            <h3 id="product-description-title" className="text">
              Description
            </h3>

            </div>
            <div id="product-detail-description" className="text">
              {currentProduct?.description}
            </div>
            <div id="edit-delete-listing-btn-div">
            {currentProduct?.user_id === sessionUser?.id ? (
              <div id="edit-delete-listing-btn-container">
                <EditProductModal />{" "}
                <button className="edit-delete-listing-btn" onClick={(e) => deleteProductHandler(currentProductId)}>
                  Delete Listing
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          </div>


        </div>
      </div>
      <div id="reviews-body">
        <h2 id="reviews-title-header">Reviews</h2>
        {/* <div>{currentProduct?.overall_rating}</div> */}
        {sessionUser?.id === currentProduct?.user_id ? (
          <></>
        ) : (
          <div id="new-review-button-container">
            {sessionUser ? (
              <NewReviewFormModal />
            ) : (
              <p>Log in to create a review</p>
            )}
          </div>
        )}
        <Reviews currentProduct={currentProduct} />
      </div>
    </div>
  );
}

export default ProductDetails;
