import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css"


function Cart() {

    const cart = useSelector((state) => Object.values(state.cart)[0])
    console.log("CART", cart)

    return (
        <div id="cart-body-contiainer">
            <h1 className="text" id="shopping-bag-h1">Shopping Bag</h1>
            <div id="cart-item-container-outer">

            {cart?.map(cartItem => (
                <div id="cart-item-container">
                <img id="cart-item-img" src={cartItem?.image_url_1}/>
                <div id="cart-item-details-cntr">
                <h3 className="text cart-item-name">{cartItem.product_name}</h3>
                <div className="text" id="cart-item-detail-price">${cartItem.price} USD</div>
                </div>
                </div>
            ))}
        </div>
            <div id="continue-div"><a href="/products/all">Continue Shopping</a></div>
            </div>
    )
}

export default Cart;
