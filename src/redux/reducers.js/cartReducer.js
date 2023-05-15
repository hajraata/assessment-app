const initialState = {
  cart: [],
  // cartTotal: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    total: item.price * (item.quantity + 1),
                  }
                : item
            )
          : [
              ...state.cart,
              { ...action.payload, quantity: 1, total: action.payload.price },
            ],
      };

    case "INCREASE_QUANTITY":
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1),
          };
        } else {
          return { ...item };
        }
      });

      return { ...state, cart: [...newCart] };

    case "DECREASE_QUANTITY":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
            total: item.price * (item.quantity - 1),
          };
        } else {
          return { ...item };
        }
      });

      return { ...state, cart: [...updatedCart] };

    // case "UPDATE_CART_TOTAL":
    //   return {
    //     ...state,
    //     cartTotal: action.payload,
    //   };

    case "REMOVE_FROM_CART":
      const removed = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: [...removed] };

    default:
      return state;
  }
};
