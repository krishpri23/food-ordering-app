import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Register } from "./components/Navbar/Register";
import { SearchRestaurant } from "./components/Navbar/SearchRestaurant";
import Error from "./components/home/Error";

import {
  Cart,
  Login,
  Register,
  SearchRestaurant,
} from "./components/Navbar/index.js";

import Header from "./components/home/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/search",
        element: <SearchRestaurant />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/collections/:itemName/:itemId",
        element: <Home.DetailedSliderOption />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* To use redux inside react app, react uses provider as a bridge */}
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
