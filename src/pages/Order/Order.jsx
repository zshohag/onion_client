import swal from "sweetalert";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import DeliveryForm from "../DeliveryForm/DeliveryForm";
import { useDelivery } from "../../contexts/DeliveryProvider/DeliveryProvider";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, food) => food.price + sum, 0);
  const { input, disabled, setDisabled } = useDelivery();

  const navigate = useNavigate();

  const handleDelete = (food) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://onion-server.vercel.app/carts/${food._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Food Item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //
  // const handlePlaceOrder = async () => {
  //   const orderDetails = {
  //     delivery: input,
  //     cart: cart,
  //     total: parseFloat(total.toFixed(2)),
  //   };

  //   try {
  //     const response = await fetch("https://onion-server.vercel.app/orders", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderDetails),
  //     });
  //     if (response.ok) {
  //       swal(
  //         "Order Placed!",
  //         `You have ordered ${cart.length} items successfully!`,
  //         "success"
  //       );
  //       refetch();
  //       setDisabled(true);
  //       navigate(`/os`)
  //     } else {
  //       const errorData = await response.json();
  //       swal(
  //         "Failed to place order",
  //         errorData.message || "Please try again",
  //         "error"
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     swal("Failed to place order", "Please try again", "error");
  //   }
  // };

  //
  const handlePlaceOrder = async () => {
    const orderDetails = {
      delivery: input,
      cart: cart,
      total: parseFloat(total.toFixed(2)),
    };

    try {
      const response = await fetch("https://onion-server.vercel.app/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        swal(
          "Order Placed!",
          `You have ordered ${cart.length} items successfully!`,
          "success"
        );
        await refetch(); // Clear the cart after placing the order
        setDisabled(true); // Disable the "Place Order" button
        navigate(`/ordersuccess`); // Redirect to the order success screen
      } else {
        const errorData = await response.json();
        swal(
          "Failed to place order",
          errorData.message || "Please try again",
          "error"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      swal("Failed to place order", "Please try again", "error");
    }
  };

  //
  return (
    <main className="h-screen banner">
      <Helmet>
        <title>Onion | Order </title>
      </Helmet>
      <div className="max-w-screen-xl py-20 mx-auto px-6">
        {cart.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* left side form */}
              <div className="col-span-1">
                <DeliveryForm />
              </div>
              {/* right side */}
              <div className="col-span-1">
                <div className="glass p-6 box-border rounded-lg">
                  {/* order details */}
                  <div className="flex flex-col space-y-4 mb-3">
                    <p className="poppins text-gray-700">
                      Deliver Place :{" "}
                      <span className="font-semibold text-black">
                        {input.country ? `${input.country}` : "-----"}
                      </span>
                    </p>
                    <p className="poppins text-gsray-700">
                      Ariving in : 20-30 min
                    </p>
                    <p className="poppins text-gray-700">
                      Road :{" "}
                      <span className="font-semibold text-black">
                        {input.roadNo ? `${input.roadNo}` : "-----"}
                      </span>{" "}
                    </p>
                    <p className="poppins text-gray-700">
                      Floor :{" "}
                      <span className="font-semibold text-black">
                        {input.flatno ? `${input.flatno}` : "-----"}
                      </span>{" "}
                    </p>
                    <p className="poppins text-gray-700">
                      Deliver to :{" "}
                      <span className="font-semibold text-black">
                        {input.name ? `${input.name}` : "-----"}
                      </span>{" "}
                    </p>
                  </div>
                  {/* orders */}
                  <div className="flex flex-col space-y-1 h-60 overflow-y-scroll">
                    {cart.map((food) => (
                      <div
                        className="rounded-lg p-3 flex space-x-2"
                        key={food._id}
                      >
                        <div className="flex">
                          <img
                            className="w-24 object-contain"
                            src={food.image}
                            alt="image"
                          />
                        </div>
                        <div className="flex flex-col space-y-3 flex-grow">
                          <h5 className="font-semibold text-lg poppins text-gray-700">
                            {food.title}
                          </h5>
                          <h1 className="font-semibold text-lg text-black poppins">
                            ${food.price.toFixed(2)}
                          </h1>
                          <p className="text-sm poppins text-black">
                            {food.type}
                          </p>
                        </div>
                        <div className="flex items-center px-4 py-2 space-x-3">
                          <span className="text-lg  text-gray-700 poppins select-none">
                            {food.quantity}{" "}
                            {food.quantity === 1 ? "item" : "items"}
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <AiOutlineDelete
                            className="w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer"
                            onClick={() => handleDelete(food)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* price */}
                  <div className="uppercase flex justify-between items-center font-medium mb-4">
                    <p>TOTAL ORDER : {cart.length} </p>
                    <p>TOTAL PRICE : ${total.toFixed(2)} </p>
                  </div>
                  {/* place order button */}
                  <div>
                    {disabled ? (
                      <button
                        disabled
                        className="w-full px-6 py-3 rounded-lg bg-[#f91944] text-white poppins ring-red-300 focus:ring-4 transition duration-500"
                      >
                        Place Order
                      </button>
                    ) : (
                      <button
                        className="w-full px-6 py-3 rounded-lg bg-[#f91944] text-white poppins ring-red-300 focus:ring-4 transition duration-500"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="pt-24">
            <h1 className="text-center text-5xl poppins">
              No Order has added!!
            </h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Order;
