import { useSelector } from "react-redux";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  // To read data from store, use selector. Cart is subscribing to the store
  // const cartItems = useSelector((store) => store.cart.items);
  // console.log("inside cart", cartItems);

  const { state } = useCartContext();

  console.log("cart from cart", state.cart);
  return (
    <div className="w-full p-5 flex flex-col mx-auto">
      <h2> Cart Page</h2>
      {state?.cart &&
        state?.cart?.map((cartItem, index) => {
          const { name, price, qty } = cartItem;
          return (
            <div
              className="w-3/4 bg-slate-200 p-5 flex flex-col mx-auto gap-3"
              key={index}
            >
              <h2> {name}</h2>
              <h2> Rs {price / 100} </h2>
              <hr className="mt-3  border-gray-800" />
            </div>
          );
        })}
    </div>
  );
}
