import { useSelector } from "react-redux";
import ProfileSideBar from "../ProfileSidebar";
import "./OrderHistory.css";

function OrderHistory() {
  const orderHistories = useSelector((state) =>
    Object.values(state.orderHistory)
  );
  const sessionUser = useSelector((state) => state.session.user);
  const myOrderHistories = orderHistories.filter(
    (history) => history.user_id === sessionUser.id
  );
  console.log("ORDER HISTORIES", orderHistories);
  console.log("MY ORDER HISTORIES", myOrderHistories);

  return (
    <div id="profile-page-cntr">
      <ProfileSideBar />
      <div id="order-history-outer-ctnr">

    <div className="profile-page-header text">

      <h1><i class="fa-solid fa-file-invoice"></i>&nbsp;My Order History</h1>
    </div>
      <div>
        {myOrderHistories?.map((orderHistory) => (
            <div id="order-history-ctnr">
                <div id="order-history-entry-headers" className="text">

            <div>ORDER#: MTCHSRK80{orderHistory.id}</div>
            <div>Order placed on: {orderHistory.date}</div>
                </div>
            {orderHistory?.order_items?.map((item) => (
                <div id="order-history-item-inner-cntr">
                <img src={item.product_image_url} alt={item.product_name} className="order-history-item-img"/>
                <div id="order-history-item-details" className="text">

                <div>{item.product_name}</div>
                <div>$ {item.product_price} USD</div>
                <div>QTY: {item.qty}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
        </div>
    </div>
  );
}

export default OrderHistory;
