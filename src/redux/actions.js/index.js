// Products Actions

export const storeProducts = (products) => {
  return {
    type: "STORE_PRODUCTS",
    payload: products,
  };
};

// export const storeCategories = (categories) => {
//   return {
//     type: "STORE_CATEGORIES",
//     payload: categories,
//   };
// };

export const updateSelectedCategory = (category) => {
  return {
    type: "UPDATE_SELECTED_CATEGORY",
    payload: category,
  };
};

export const addToWishList = (product) => {
  return {
    type: "ADD_TO_WISH_LIST",
    payload: product,
  };
};

export const removeFromWishList = (product) => {
  return {
    type: "REMOVE_FROM_WISH_LIST",
    payload: product,
  };
};

// Cart Actions

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: product,
  };
};

export const increaseQuantity = (product) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: product,
  };
};

export const removeItemFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export const findProducts = (value) => {
  // console.log(value);
  return {
    type: "SEARCH_FOR_PRODUCT",
    payload: value,
  };
};

// export const updateCartTotal = (value) => {
//   return {
//     type: "UPDATE_CART_TOTAL",
//     payload: value,
//   };
// };
