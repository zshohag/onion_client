import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import FoodDetails from "../../pages/FoodDetails/FoodDetails";
import MyCart from "../../pages/MyCart/MyCart";
import Login from "../../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignUp from "../../pages/SignUp.jsx/SignUp";
import DeliveryForm from "../../pages/DeliveryForm/DeliveryForm";
import Order from "../../pages/Order/Order";
import OrderSuccess from "../../pages/OrderSuccessful/OrderSuccessful";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foods/:name",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "mycart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "delivery",
        element: <DeliveryForm />,
      },
      {
        path: "order",
        element: (
          <>
            <Order />
          </>
        ),
      },
      {
        path: "ordersuccess",
        element: <OrderSuccess />,
      },
    ],
  },
]);
