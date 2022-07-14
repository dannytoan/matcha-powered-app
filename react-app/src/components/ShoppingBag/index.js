import { useDispatch, useSelector } from "react-redux";
import { removeFromBag } from "../../store/shoppingBag";
import { addOrderHistory} from "../../store/orderHistory.js";
import "./ShoppingBag.css";
import { useHistory } from "react-router-dom";

function ShoppingBag() {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUserId = useSelector((state) => state.session.user.id);
  const bag = JSON.parse(localStorage.getItem("shoppingBag"));
  const today = new Date();

  const removeBagHandler = (cartItem) => {
    dispatch(removeFromBag(cartItem));
    window.location.reload(false);
  };

  const handleOrderHistory = async (e) => {
    const orderHistoryPayload = {
      user_id: sessionUserId,
      date: today,
    };

    let successfulOrderHistory = dispatch(addOrderHistory(orderHistoryPayload));

    if (successfulOrderHistory) {
      console.log("successful order history")
      history.push("/payment")
    }
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
          </div>
        ))}
      </div>
      <div id="continue-div">
        <button onClick={handleOrderHistory}>Checkout Step 1</button>
        <a className="text continue-text" href="/products/all">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default ShoppingBag;
