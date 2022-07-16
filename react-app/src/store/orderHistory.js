const VIEW = "order_history/VIEW";
const NEW = "order_history/NEW";

const view = (orderItem) => ({
  type: VIEW,
  orderItem,
});

const newOrderHistory = (newOrder) => ({
  type: NEW,
  newOrder,
});

export const viewOrderHistory = () => async (dispatch) => {
  const response = await fetch("/api/order_histories/");

  if (response.ok) {
    const orderItem = await response.json();
    console.log("VIEW ORDER HISTORY", orderItem)

    dispatch(view(orderItem));
    return orderItem;
  }
};

export const addOrderHistory = (payload) => async (dispatch) => {
  const response = await fetch("/api/order_histories/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newOrder = await response.json();

  if (newOrder) {
    dispatch(newOrderHistory(newOrder))
    return newOrder
  } else {
    const errors = await response.json();
    return errors;
  }
};


const orderHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW:
      const normalizedOrderHistories = {};
      // console.log("ACTION ORDER ITEM", action)
      action.orderItem.order_histories.forEach((order) => {
        normalizedOrderHistories[order.id] = order;
      });
      // console.log("NORMALIZED ORDER HISTORIES in Reducer", {...normalizedOrderHistories})
      return { ...normalizedOrderHistories };
      case NEW:
        const addState = { ...state, [action.newOrder.id]: action.newOrder };
        // console.log("ADD STATE", addState)
        return addState;
    default:
      return state;
  }
};

export default orderHistoryReducer;
