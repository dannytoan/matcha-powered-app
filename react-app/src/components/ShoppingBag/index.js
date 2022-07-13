import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBag } from "../../store/shoppingBag";
import { addOrderHistory, addOrderItem } from "../../store/orderHistory.js";
import "./ShoppingBag.css";

function ShoppingBag() {
  const dispatch = useDispatch();
  const sessionUserId = useSelector((state) => state.session.user.id);
  const bag = JSON.parse(localStorage.getItem("shoppingBag"));
  console.log("BAG", bag);
  const today = new Date();

  const currentOrderHistory = useSelector((state) => state.orderHistory);
  console.log("CURRENT ORDER HISTORY", currentOrderHistory);
  // console.log("OBJ VALUES CURRENT ORDER HISTORY", Object.values(currentOrderHistory))

  const removeBagHandler = (cartItem) => {
    dispatch(removeFromBag(cartItem));
    window.location.reload(false);
  };

  //   const makeOrderItems = () => {
  //     bag.map((bagItem) => {

  //     })
  //   }

  const handleCheckout = () => {
    const shoppingBag = localStorage.getItem("shoppingBag");
    const parsedShoppingBag = JSON.parse(shoppingBag);
    // console.log("SHOPPING BAG IN FRONT END", JSON.parse(shoppingBag))
    let orderHistoryId;

    for (let orderHistory in currentOrderHistory) {
      console.log("ORDER HISTORY", orderHistory);
      if (orderHistory !== undefined) {
        orderHistoryId = orderHistory;
        console.log("NEW ORDER HISTORY ID", orderHistoryId)
      }
    }

    const orderHistoryPayload = {
      user_id: sessionUserId,
      date: today,
    };

    const orderItemsPayload = {
      shoppingBag: parsedShoppingBag,
      orderHistory: orderHistoryId,
    };

    dispatch(addOrderHistory(orderHistoryPayload));
    dispatch(addOrderItem(orderItemsPayload));
  };

  return (
    <div id="bag-body-contiainer">
      <h1 className="text" id="shopping-bag-h1">
        Shopping Bag
      </h1>
      <div id="bag-item-container-outer">
        {bag?.map((bagItem) => (
          <div id="bag-item-container" key={bagItem?.id}>
            <img id="bag-item-img" src={bagItem?.image_url_1} />
            <div id="bag-item-details-cntr">
              <h3 className="text bag-item-name">{bagItem.product_name}</h3>
              <div className="text" id="bag-item-detail-price">
                ${bagItem.price} USD
              </div>
              <button
                className="remove-btn"
                onClick={() => removeBagHandler(bagItem)}
              >
                Remove
              </button>
            </div>
            {/* <div>
            </div> */}
          </div>
        ))}
      </div>
      <div id="continue-div">
        <button onClick={handleCheckout}>Checkout</button>
        <a className="text continue-text" href="/products/all">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default ShoppingBag;
