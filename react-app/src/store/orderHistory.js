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
  console.log("INSIDE VIEW ORDER HISTORY THUNK", response);

  if (response.ok) {
    const orderItem = await response.json();

    dispatch(view(orderItem.order_history));
    return orderItem.order_history;
  }
};

export const addOrderHistory = (payload) => async (dispatch) => {
  const response = await fetch("/api/order_histories/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newOrder = await response.json();

  console.log("NEW ORDER IN THUNK", newOrder)

  if (newOrder) {
    dispatch(newOrderHistory(newOrder))
    return newOrder
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const addOrderItem = (payload) => async (dispatch) => {
  const response = await fetch("/api/order_histories/new_order_items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newOrderItems = await response.json();

  if (newOrderItems) {
    dispatch(newOrderHistory(newOrderItems))
    return newOrderItems
  } else {
    const errors = await response.json();
    return errors;
  }
};



const orderHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW:
      const normalizedOrderHistories = {};
      action.orderItem.forEach((product) => {
        normalizedOrderHistories[product.id] = product;
      });
      // console.log("NORMALIZED ORDER HISTORIES in Reducer", {...normalizedOrderHistories})
      return { ...normalizedOrderHistories };
      case NEW:
        const addState = { ...state, [action.newOrder.id]: action.newOrder };
        return addState;
    default:
      return state;
  }
};

export default orderHistoryReducer;
