const VIEW_CART = "cart/VIEW_CART";
const ADD_TO_CART = "cart/ADD_TO_CART";

const addItem = (product) => ({
  type: ADD_TO_CART,
  product,
});

const view = (products) => ({
    type: VIEW_CART,
    products
})


export const viewCart = () => async (dispatch) => {
    const response = await fetch("/api/order_items");
    //   console.log("INSIDE VIEW PRODUCTS THUNK", response);

      if (response.ok) {
        const cart = await response.json();

        dispatch(view(cart.cart));
        return cart.cart;
      } else {
        const errors = await response.json();
        return errors;
      }
}

export const addToCart = (product) => async (dispatch) => {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(addItem(cart));
  };



let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("INSIDE CART REDUCER");
      return {
        cart: [...action.product],
      };
    default:
      return state;
  }
};

export default cartReducer;
