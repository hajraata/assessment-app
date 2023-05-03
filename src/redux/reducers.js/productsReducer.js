const initialState = {
  products: [],
  allProducts: [],
  categories: [],
  selectedcategory: "all",
  wishList: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
        allProducts: [...action.payload],
      };

    case "STORE_CATEGORIES":
      return { ...state, categories: [...action.payload] };

    case "UPDATE_SELECTED_CATEGORY":
      return { ...state, selectedcategory: action.payload };

    case "ADD_TO_WISH_LIST":
      return { ...state, wishList: [...state.wishList, action.payload] };

    case "REMOVE_FROM_WISH_LIST":
      const newWishList = state.wishList.filter(
        (wish) => wish.id !== action.payload.id
      );

      return { ...state, wishList: [...newWishList] };

    case "SEARCH_FOR_PRODUCT":
      let value = action.payload;

      if (value !== "") {
        const searchResults = state.products.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        );

        return { ...state, products: [...searchResults] };
      } else {
        return { ...state, products: [...state.allProducts] };
      }

    default:
      return state;
  }
};
