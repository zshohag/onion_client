import Skeleton from "./Skeleton";
import FoodItem from "./FoodItem";

const Foods = ({ foods, loading, menuTab, setMenuTab }) => {
  //menu tab
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      {/*  Menu tab  */}
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            menuTab === "Breakfast"
              ? "active_menu_tab poppins bg-[#f91944]"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Breakfast")}
        >
          Breakfast
        </p>
        <p
          className={
            menuTab === "Lunch"
              ? "active_menu_tab poppins bg-[#f91944]"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Lunch")}
        >
          Lunch
        </p>
        <p
          className={
            menuTab === "Dinner"
              ? "active_menu_tab poppins bg-[#f91944]"
              : "menu_tab poppins"
          }
          onClick={() => handleMenuTabs("Dinner")}
        >
          Dinner
        </p>
      </div>

      {/* all foods  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {foods
          .filter((item) => menuTab === item.type)
          .map((item) =>
            loading ? (
              <Skeleton key={item._id} />
            ) : (
              <FoodItem key={item._id} {...item} />
            )
          )}
      </div>
    </section>
  );
};

export default Foods;
