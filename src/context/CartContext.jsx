import { createContext, useReducer } from "react";

const initState = {
  cart: [{ name: "soup", price: 100 }],
};

export const CartContext = createContext(initState);

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

const reducer = (state, action) => {
  const { name, price, id } = action.payload;
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      console.log("inside add context", name, price);
      return {
        ...state,
        cart: [{ ...action.payload, qty: 1 }],
      };
    }

    // keep item that do not match the id of item clicked by user
    case REDUCER_ACTION_TYPE.REMOVE: {
      return {
        ...state,
        cart: [state.cart.filter((item) => item.id !== id)],
      };
    }
    default:
      throw new Error("Unidentified action");
  }
};

export const useCartContext = () => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
  });

  return { state, dispatch };
};

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={useCartContext(initState)}>
      {children}
    </CartContext.Provider>
  );
};
