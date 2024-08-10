// import { useQuery } from "@tanstack/react-query";
// //import { useEffect, useState } from "react";

// const useFoods = () => {
//   // OLD WAY
//   // const [menu, setMenu] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // useEffect(() => {
//   //   fetch("https://res-server-plum.vercel.app/menu")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setMenu(data);
//   //       setLoading(false);
//   //     });
//   // }, []);
//   // return [menu,loading]

//   // NEW WAY

//NEW WAY
//   const {
//     data: foods = [],
//     isLoading: loading,
//     refetch,
//   } = useQuery({
//     queryKey: ["foods"],
//     queryFn: async () => {
//       const res = await fetch('https://onion-server.vercel.app/foods');
//       //console.log(res);
//       return res.json();
//     },
//   });

//   return [foods, loading, refetch];
// };

// export default useFoods;

import { useQuery } from "@tanstack/react-query";

const useFoods = (searchQuery = "") => {
  const {
    data: foods = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["foods", searchQuery],
    queryFn: async () => {
      const res = await fetch(
        `https://onion-server.vercel.app/foods?search=${searchQuery}`
      );
      return res.json();
    },
  });

  return [foods, loading, refetch];
};

export default useFoods;
