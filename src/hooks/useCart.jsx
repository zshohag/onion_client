import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();

  const fetchCart = async () => {
    if (!user?.email) return [];

    const res = await fetch(
      `https://onion-server.vercel.app/carts?email=${user.email}`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: fetchCart,
  });

  return [cart, refetch];
};

export default useCart;
