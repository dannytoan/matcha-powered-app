import { useSelector } from "react-redux";
import "./OrderHistory.css";

function OrderHistory() {
  const orderHistory = useSelector((state) => {
    return Object.values(state.orderHistory);
  });

  const sessionUserId = useSelector((state) => state.session.user.id);

  const currentUserOrderHistories = orderHistory.filter(
    (myOrder) => sessionUserId === myOrder.user_id
  );

  const products = useSelector((state) => {
    return Object.values(state.products);
  });


  // Finds order items of an Order History
  let singleOrderHistoryOrderItems;
  // const orderItemExtractFromOrderHist = currentUserOrderHistories.map(
  //   (singleOrderHistory) => {
  //     singleOrderHistoryOrderItems = singleOrderHistory.order_items;
  //   }
  // );


 // Find current order details
  let currentOrder = [];
  const currentOrderFilter = orderHistory.forEach((order) => {
    singleOrderHistoryOrderItems.forEach((orderItem) => {
      if (order.id === orderItem.order_history_id) {
        currentOrder.push(order);
      }
    });
  });


  // Gets product details of specific order
  const productMatch = () => {
    let orderEntryItems = [];

    for (let i = 0; i < products.length; i++) {
      let product = products[i];

      for (let j = 0; j < singleOrderHistoryOrderItems.length; j++) {
        let singleOrderItem = singleOrderHistoryOrderItems[j];

        if (product.id === singleOrderItem.product_id) {
          orderEntryItems.push(product);
        }
      }
    }

    return (
      <div>
        {orderEntryItems.map((item) => (
          <div>
            <div>ORDER#{singleOrderHistoryOrderItems[0].order_history_id}</div>
            <img id="order-history-entry-item-pic" src={item.image_url_1} />
            <div id="order-history-entry-item-details">
              <div>{item.product_name}</div>
              <div>{item.price}</div>
              <div>ORDER PLACED ON: {currentOrder[0].date}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };


  // Render on page
  return (
    <div>
      <h1>User Profile</h1>
      <h1>My Order History</h1>
      <div id="order-history-entry-cntr">{productMatch()}</div>
    </div>
  );
}

// export default OrderHistory;
