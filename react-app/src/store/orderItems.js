const VIEW = "order_item/VIEW"

const view = (orderItem) => ({
    type: VIEW,
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


const orderItemReducer = (state = {}, action) => {
    switch (action.type) {
      case VIEW:
        const normalizedOrderItems = {};
        action.orderItem.forEach((product) => {
          normalizedOrderItems[product.id] = product;
        });
        // console.log("NORMALIZED ORDER Items in Reducer", {...normalizedOrderItems})
        return { ...normalizedOrderItems };
      default:
        return state;
    }
  };

  export default orderItemReducer;
