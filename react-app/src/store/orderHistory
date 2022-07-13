const VIEW = "order_history/VIEW"

const view = (orderItem) => ({
  type: VIEW,
  orderItem,
});



export const viewOrderHistory = () => async (dispatch) => {
    const response = await fetch("/api/order_histories");
  //   console.log("INSIDE VIEW PRODUCTS THUNK", response);

    if (response.ok) {
      const orderItem = await response.json();

      dispatch(view(orderItem.orderItem));
      return orderItem.orderItem;
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
      default:
        return state;
    }
  };


export default orderHistoryReducer;
