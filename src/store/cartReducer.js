const initialCartState = {
    items: []
  };
  
  export default function cartReducer(state = initialCartState, action) {
    switch (action.type) {
      case "ADD_CART":
        return {
          ...state,
          items: [...state.items, action.payload]
        };
  
      case "REMOVE_CART":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload)
        };
  
      default:
        return state;
    }
  }