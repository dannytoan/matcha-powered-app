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
  console.log("NEW ORDER ITEMS", newOrderItems)

  if (newOrderItems) {
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
        // console.log("NORMALIZED ORDER Items in Reducer", {...normalizedOrderItems})
        return { ...normalizedOrderItems };
      case ADD:
        console.log("ORDER ITEM IN ADD REDUCER", action.orderItem[0].order_history_id)
        const addState = {...state, [action.orderItem[0].order_history_id]: action.orderItem };
        console.log("ADD STATE for ORDER ITEM", addState)

        return addState
      default:
        return state;
    }
  };

  export default orderItemReducer;
