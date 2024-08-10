import { useContext } from "react";
import { DeliveryContext } from "./DeliveryProvider";

const useDelivery = () => {
  return useContext(DeliveryContext);
};

export default useDelivery;
