import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import useFoods from "../../hooks/useFoods";
import { useState } from "react";
import Back from "../../components/Back/Back";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodDetails = () => {
  const { name } = useParams();
  const [foods] = useFoods();
  const [quantity, setQuantity] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //CART REFETCH
  const [, refetch] = useCart();

  //
  const { user } = useContext(AuthContext);

  const handleAddToCart = async (food) => {
    //console.log(food);

    if (user && user.email) {
      const cartItem = {
        foodId: food._id, // use a different field to store the food's original _id
        name: food.name,
        image: food.image,
        type: food.type,
        quantity: quantity,
        email: user.email,
        price: food.price * quantity,
      };
      //console.log(cartItem);
      fetch("https://onion-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          if (data.insertedId) {
            refetch(); // CART NUMBER UPDATE
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          setDisabled(true);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to log in to add items to the cart!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });

      setDisabled(false);
    }
  };

  return (
    <div>
      <main className="max-w-screen-xl mx-auto px-6 my-16">
        <Back />
        {foods
          ?.filter((item) => item.name === name)
          ?.map((food) => (
            <div
              key={food._id}
              className="flex flex-col justify-center items-center h-screen"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                key={food._id}
              >
                {/* left side */}
                <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                  <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
                    {food.name}
                  </h1>
                  <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
                    {food.description}
                  </p>

                  {/* price and quantity */}
                  <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
                    <h1 className="text-3xl text-black poppins select-none">
                      ${(food.price * quantity).toFixed(2)}
                    </h1>
                    {/* quantity */}
                    <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                      <AiOutlineMinus
                        onClick={() => {
                          quantity === 1
                            ? setQuantity(1)
                            : setQuantity(quantity - 1);
                        }}
                        className="text-2xl bg-[#f91944] w-7 h-7 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                      />
                      <span className="text-lg text-gray-700 poppins select-none">
                        {quantity}
                      </span>
                      <AiOutlinePlus
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                        className="text-2xl bg-[#f91944] w-7 h-7 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                      />
                    </div>
                  </div>

                  {/* add button */}
                  <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                    <button
                      disabled={disabled}
                      className={
                        disabled
                          ? "opacity-30 flex items-center space-x-3 bg-[#f91944] px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                          : "flex items-center space-x-3 bg-[#f91944] px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                      }
                      onClick={() => handleAddToCart(food)}
                    >
                      <BsCart2 className="text-xl" />
                      <span>{disabled ? "Added" : "Add to Cart"}</span>
                    </button>
                  </div>
                </div>
                {/* right side */}
                <div className="order-1 md:order-2 lg:order-2">
                  <img
                    src={food.image}
                    className="w-3/4 md:w-3/4 lg:w-full mx-auto"
                    alt="food"
                  />
                </div>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default FoodDetails;
