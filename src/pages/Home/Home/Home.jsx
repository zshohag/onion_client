import { useState, useEffect } from "react";
import Foods from "../../Foods Showcase/Foods";
import Banner from "../Banner/Banner";
import useFoods from "../../../hooks/useFoods";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuTab, setMenuTab] = useState("Breakfast");
  const [foods, loading, refetch] = useFoods(searchQuery); 
  // Initialize useFoods here

  const handleSearch = () => {
    refetch(); // Call refetch when search is triggered
  };

  useEffect(() => {
    if (searchQuery) {
      const searchTab = foods.find((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      )?.type;

      if (searchTab) {
        setMenuTab(searchTab);
      }
    }
  }, [searchQuery, foods]);

  return (
    <div>
      <Banner
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <Foods
        foods={foods}
        loading={loading}
        menuTab={menuTab}
        setMenuTab={setMenuTab}
      />{" "}
      {/* Pass foods, loading state, menuTab, and setMenuTab */}
      
     
    </div>
  );
};

export default Home;

// import { useState, useEffect } from 'react';
// import Foods from '../../Foods Showcase/Foods';
// import Banner from '../Banner/Banner';
// import useFoodsAndDeliveries from '../../../hooks/useFoodsAndDeliveries';
// import DeliveryForm from '../../DeliveryForm/DeliveryForm';
// import DeliveryDetails from '../../DeliveryForm/DeliveryDetails';

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { foods, foodsLoading, refetchFoods, deliveries, deliveriesLoading, refetchDeliveries } = useFoodsAndDeliveries(searchQuery);

//   const handleSearch = () => {
//     refetchFoods();
//   };

//   const handleNewDelivery = () => {
//     refetchDeliveries();
//   };

//   useEffect(() => {
//     refetchDeliveries();
//   }, [refetchDeliveries]);

//   return (
//     <div>
//       <Banner 
//         searchQuery={searchQuery} 
//         setSearchQuery={setSearchQuery} 
//         handleSearch={handleSearch} 
//       />
//       <Foods foods={foods} loading={foodsLoading} />
//       <DeliveryForm onNewDelivery={handleNewDelivery} />
//       <DeliveryDetails deliveries={deliveries} loading={deliveriesLoading} />
//     </div>
//   );
// };

// export default Home;


