const VIEW = "order_item/VIEW"
const ADD = "order_item/ADD"

const view = (orderItem) => ({
    type: VIEW,
    orderItem
})

const add = (orderItem) => ({
  type: ADD,
  orderItem
})

export const viewOrderItem = () => async (dispatch) => {
  const response = await fetch("/api/order_items/");

  if (response.ok) {
    const orderItem = await response.json();

    dispatch(view(orderItem.order_items));
    return orderItem.order_items;
  }
}

export const addOrderItem = (payload) => async (dispatch) => {
  const response = await fetch("/api/order_histories/new_order_items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newOrderItems = await response.json();

  if (response.ok) {
    dispatch(add(newOrderItems))
  }
  return newOrderItems
};


const orderItemReducer = (state = {}, action) => {
    switch (action.type) {
      case VIEW:
        const normalizedOrderItems = {};
        action.orderItem.forEach((product) => {
          normalizedOrderItems[product.id] = product;
        });
        return { ...normalizedOrderItems };
      case ADD:

        const addState = {...state, [action.orderItem[0].order_history_id]: action.orderItem };
        return addState
      default:
        return state;
    }
  };

  export default orderItemReducer;
