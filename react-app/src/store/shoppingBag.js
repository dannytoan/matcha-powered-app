const REM_BAG = "cart/REM_BAG";
const ADD_TO_BAG = "cart/ADD_TO_BAG";

const addItem = (product) => ({
  type: ADD_TO_BAG,
  product,
});

const removeItem = (product) => ({
  type: REM_BAG,
  product,
});

export const addToBag = (product) => async (dispatch) => {
  let bag = localStorage.getItem("shoppingBag")
    ? JSON.parse(localStorage.getItem("shoppingBag"))
    : [];


  const duplicate = bag.filter((item) => item.id === product.id)
  console.log("DUPLICATE", duplicate)

  // check for duplicates
  if (duplicate.length > 0) {
    localStorage.setItem("shoppingBag", JSON.stringify(bag));
    dispatch(addItem(bag));
  } else {
    bag.push(product);
    localStorage.setItem("shoppingBag", JSON.stringify(bag));
    dispatch(addItem(bag));
  }

};

export const removeFromBag = (product) => async (dispatch) => {
  let bag = localStorage.getItem("shoppingBag");
  let parsedBag = Object.values(JSON.parse(bag));

  // let parsedCopy = parsedCart.slice()
  // let count = 0;

  // if (parsedCart.length > 1) {
  //   for (let i = 1; i < parsedCopy.length; i++) {
  //     let element = parsedCopy[i];
  //     console.log("ELEMENT", element)

  //     if (parsedCopy[0] !== element) {
  //       count = 1
  //       console.log("PARSED COPY", parsedCopy)
  //       parsedCopy.slice(1)
  //       console.log("SLICE", parsedCopy.slice(1))
  //       i++
  //     } else {
  //       count += 1
  //       parsedCopy.slice(1)
  //       i++
  //     }
  //     console.log("COUNT", count)
  //     if (count > 1) {
  //       const filtered = parsedCart.filter(
  //         (selectItem) => selectItem.id !== product.id
  //       );

  //       const lastItem = filtered.pop()
  //       console.log("last item", lastItem)
  //     }
  //   }
  // }

  // console.log("PARSED CART", parsedCart);

  // works for unique items but not duplicates, deletes all duplicates
  const filtered = parsedBag.filter(
    (selectItem) => selectItem.id !== product.id
  );

  localStorage.setItem("shoppingBag", JSON.stringify(filtered));

  dispatch(removeItem(product));
};

let initialState = {
  bag: [],
};

const shoppingBagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      return {
        bag: [...action.product],
      };
    case REM_BAG:
      const delState = { ...state };
      return delState;
    default:
      return state;
  }
};

export default shoppingBagReducer;
