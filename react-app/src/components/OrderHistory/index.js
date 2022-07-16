import { useSelector } from "react-redux";
import "./OrderHistory.css";

function OrderHistory() {
  const orderHistory = useSelector((state) => {
    return Object.values(state.orderHistory);
  });

  const sessionUserId = useSelector((state) => state.session.user.id);

  const myOrderHistories = orderHistory.filter(
    (myOrder) => sessionUserId === myOrder.user_id
  );

//   console.log("MY ORDER HISTORIES", myOrderHistories);

  // Grabbing ORDER_ITEMS array from the property from ORDER_HISTORY
  let individualOrderItems = [];
  myOrderHistories.forEach((order) => {
    individualOrderItems.push(order.order_items);
  });
//   console.log("THIS ORDER'S ITEMS", individualOrderItems);

  const allProducts = useSelector((state) => {
    return Object.values(state.products);
  });

//   console.log("PRODUCTS", allProducts);

  let orderProducts = [];
  const currentOrderDetails = individualOrderItems.map((orderItemsArr) => {
    // console.log("ORDER ITEM", orderItemsArr);

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
            <img id="order-history-entry-item-pic" src={orderProduct.image_url_1}/>
        </div>
    ))}
</div>
    )
  });

//   console.log("ORDER PRODUCTS", orderProducts);

  return (
    <div>
      <h1>Order History</h1>
      {currentOrderDetails}
    </div>
  );
}

export default OrderHistory;
