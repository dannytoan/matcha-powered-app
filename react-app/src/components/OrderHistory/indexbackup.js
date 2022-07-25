import { useSelector } from "react-redux";
// import "./OrderHistory.css";

function OrderHistory() {
  const orderHistory = useSelector((state) => {
    return Object.values(state.orderHistory);
  });

  const sessionUserId = useSelector((state) => state.session.user.id);

  const myOrderHistories = orderHistory.filter(
    (myOrder) => sessionUserId === myOrder.user_id
  );

  let individualOrderItems = [];
  myOrderHistories.forEach((order) => {
    individualOrderItems.push(order.order_items);
  });

  const allProducts = useSelector((state) => {
    return Object.values(state.products);
  });

  let orderProducts = [];
  const currentOrderDetails = individualOrderItems.map((orderItemsArr) => {
    orderItemsArr.forEach((orderItem) => {
      allProducts.forEach((product) => {
        if (product.id === orderItem.product_id) {
          orderProducts.push(product);
        }
      });
    });

    return (
      <div id="order-history-entry-cntr">
        {orderItemsArr[0]?.order_history_id}
        {orderProducts.map((orderProduct) => (
          <div>
            <img
              id="order-history-entry-item-pic"
              src={orderProduct.image_url_1}
            />
          </div>
        ))}
      </div>
    );
  });

  return (
    <div>
      <h1>Order History</h1>
      {currentOrderDetails}
    </div>
  );
}

export default OrderHistory;
