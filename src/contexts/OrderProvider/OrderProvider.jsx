import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};
const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  // Add order function
  const handleOrder = (food) => {
    setOrder((prevValue) => [...prevValue, food]);
  };

  // Remove order from cart
  const removeOrder = (id) => {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  };

  const value = {
    setOrder,
    order,
    handleOrder,
    removeOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default OrderProvider;
