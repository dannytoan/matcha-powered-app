import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const orderHistory = useSelector((state) => {
    return Object.values(state.orderHistory);
  });

  const sessionUserId = useSelector((state) => state.session.user.id);
  //   console.log("sessionUserId", sessionUserId);

  // console.log(orderHistory)
  const currentUserOrderHistories = orderHistory.filter(
    (myOrder) => sessionUserId === myOrder.user_id
  );
  //   console.log("CURRENT USER ORDER HISTORIES", currentUserOrderHistories);

  const orderItems = useSelector((state) => {
    return Object.values(state.orderItems);
  });
  //   console.log("ORDER ITEMS", orderItems);

  const products = useSelector((state) => {
    return Object.values(state.products);
  });
  //   console.log("PRODUCTS", products)

  const OrderHistoryRender = currentUserOrderHistories.map((order) => {
    // filters order items within one order history
    const myOrderItems = orderItems.filter(
      (item) => order.id === item.order_history_id
    );

    console.log("MY ORDER ITEMS", myOrderItems);

    const filteredMap = myOrderItems.map((orderItem) => {
      const filteredProducts = products.filter(
        (product) => product.id === orderItem.product_id
      );

      console.log("FILTERED PRODUCTS", filteredProducts);

      return (
        <div>
            <img src={filteredProducts[0]?.image_url_1}/>
          {filteredProducts[0]?.product_name}
          {filteredProducts[0]?.price}
        </div>
      );
    });

    // const filteredProducts = products.filter(
    //   (product) => product.id === +myOrderItems.product_id
    // );

    return (
      <div>
        {console.log("FILTERED MAP", filteredMap)}
        {filteredMap.length === 1 ?
        <div id="order-history-entry-cntr">
          <div>ORDER#{order.id}</div>
          <div filteredMap={filteredMap}>
            {console.log(filteredMap)}
            {filteredMap}
          </div>
          <div>ORDER PLACED ON: {order.date}</div>
        </div>
        : <></>}
      </div>
    );
  });

  return (
    <div>
      <h1>User Profile</h1>
      <h1>My Order History</h1>
      {OrderHistoryRender}
    </div>
  );
}

export default Profile;

//   (
//     <div>
//       <div>ORDER#{order.id}</div>

//         {/* {let orderItems = orderItems.filter((item) => order.id === item.order_history_id))} */}
//         {/* {let filteredProducts = products.filter((product) => product.id === orderItems.product_id)} */}

//       <div>ORDER PLACED ON: {order.date}</div>
//     </div>
//   )
