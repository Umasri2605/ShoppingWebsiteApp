const initialProductsState = {
    products: [],
    loading: false,
    error: null
  };
  
  export default function productsReducer(state = initialProductsState, action) {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true };
  
      case "FETCH_SUCCESS":
        return { ...state, loading: false, products: action.payload };
  
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  }