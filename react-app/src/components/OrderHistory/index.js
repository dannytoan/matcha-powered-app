import { useSelector } from "react-redux";
import "./OrderHistory.css";

function OrderHistory() {
  const orderHistory = useSelector((state) => {
    return Object.values(state.orderHistory);
  });

  console.log("ORDER HISTORY", orderHistory)

  const sessionUserId = useSelector((state) => state.session.user.id);

  const currentUserOrderHistories = orderHistory.filter(
    (myOrder) => sessionUserId === myOrder.user_id
    );

    console.log("CURRENT USER ORDER HISTORY", currentUserOrderHistories)


  const products = useSelector((state) => {
    return Object.values(state.products);
  });

  // const OrderHistoryRender = currentUserOrderHistories.map((order) => {
  //   // filters order items within one order history
  //   const myOrderItems = orderItems.filter(
  //     (item) => order.id === item.order_history_id
  //   );

  //   const currentOrderItems = [];


  //   // Order Items Data
  //   const filteredMap = myOrderItems.map((orderItem) => {
  //     const filteredProducts = products.filter((product) => {
  //       if (product.id === orderItem.product_id) {
  //         return currentOrderItems.push(product);
  //       }
  //     });


  //     return (
  //       <div id="order-history-entry-item-details" className="text">
  //         {currentOrderItems.map((currentOrderItem) => (
  //           <div>
  //             <img
  //               id="order-history-entry-item-pic"
  //               src={currentOrderItem?.image_url_1}
  //             />
  //             <div>{currentOrderItem?.product_name}</div>
  //             <div>{currentOrderItem?.price}</div>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   });


  //   return (
  //     <div>
  //         <div id="order-history-entry-cntr">
  //           <div className="text">ORDER#{order.id}</div>
  //           <div filteredMap={filteredMap}>
  //             {filteredMap}
  //           </div>
  //           <div className="text">ORDER PLACED ON: {order.date}</div>
  //         </div>
  //     </div>
  //   );
  // });



  return (
    <div>
      <h1>User Profile</h1>
      <h1>My Order History</h1>
      {/* {OrderHistoryRender} */}
    </div>
  );
}

export default OrderHistory;
