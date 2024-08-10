import { createContext, useContext, useState } from "react";

const DeliveryContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDelivery = () => {
  return useContext(DeliveryContext);
};

const DeliveryProvider = ({ children }) => {
  const [input, setInput] = useState({});
  const [disabled, setDisabled] = useState(true);

  const value = {
    input,
    disabled,
    setInput,
    setDisabled,
  };
  return (
    <DeliveryContext.Provider value={value}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;

// import { createContext, useState } from "react";

// export const DeliveryContext = createContext();

// const DeliveryProvider = ({ children }) => {
//   const [input, setInput] = useState({});
//   const [disabled, setDisabled] = useState(true);

//   const value = {
//     input,
//     disabled,
//     setInput,
//     setDisabled,
//   };

//   return (
//     <DeliveryContext.Provider value={value}>
//       {children}
//     </DeliveryContext.Provider>
//   );
// };

// export default DeliveryProvider;
