import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_TO_CART:
      const productIsThere = state.cart.find((element) => element.id === action.payload.id);
      // console.log(typeof action.payload.id);
      if (productIsThere) {
        console.log("Product is there")
        productIsThere.quantity = productIsThere.quantity + 1;
        const newCart = state.cart.filter(
          (product) => product.id != action.payload.id
        );

        return {
          ...state,
          cart: [...newCart, productIsThere],
        };
      } else {
        console.log("Product is not there")
        // console.log("not there")
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default productReducer;
