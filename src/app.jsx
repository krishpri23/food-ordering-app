import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Register } from "./components/Navbar/Register";
import { SearchRestaurant } from "./components/Navbar/SearchRestaurant";
import {
  Cart,
  Login,
  Register,
  SearchRestaurant,
} from "./components/Navbar/index.js";

import Header from "./components/home/Header";
import DetailedSliderOption from "./components/home/DetailedSliderOption";
// import Logout from "./components/Navbar/Logout.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/search" element={<SearchRestaurant />} />
      <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
      <Route
        path="//collections/:itemName/:itemId"
        element={<DetailedSliderOption />}
      />
    </Route>
  )
);
function App() {
  return (
    <>
      {/* To use redux inside react app, react uses provider as a bridge */}
      {/* <Provider store={appStore}> */}
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>

      {/* </Provider> */}
    </>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
