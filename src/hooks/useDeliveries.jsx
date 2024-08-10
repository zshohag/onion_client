import { useQuery } from "@tanstack/react-query";

const useDeliveries = () => {
  const {
    data: deliveries = [],
    isLoading: deliveriesLoading,
    refetch: refetchDeliveries,
  } = useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const res = await fetch(`https://onion-server.vercel.app/deliveries`);
      console.log(res);
      return res.json();
    },
  });

  return {
    deliveries,
    deliveriesLoading,
    refetchDeliveries,
  };
};

export default useDeliveries;
