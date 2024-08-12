import { useState, useEffect } from "react";
import Foods from "../../Foods Showcase/Foods";
import Banner from "../Banner/Banner";
import useFoods from "../../../hooks/useFoods";
import Footer from "../Footer/Footer";
import About from "../About/About";

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
      {/* Pass foods, loading state, menuTab, and setMenuTab */}
      <Foods
        foods={foods}
        loading={loading}
        menuTab={menuTab}
        setMenuTab={setMenuTab}
      />{" "}
      <About/>
      <Footer />
    </div>
  );
};

export default Home;
