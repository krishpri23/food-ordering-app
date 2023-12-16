import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("inside cart", cartItems);

  return (
    <div className="w-full p-5 flex flex-col mx-auto">
      <h2> Cart Page</h2>
      {cartItems.map((cartItem, index) => {
        const { name, price } = cartItem.card?.info;
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
