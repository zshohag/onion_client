import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  //console.log(cart);
  const total = cart.reduce((sum, food) => food.price + sum, 0);
  // DELETE food
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
        // DELETE API
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
  return (
    <div className="m-6 mt-20">
      <Helmet>
        <title>Onion | My Cart </title>
      </Helmet>
      <div className="uppercase flex justify-between items-center font-medium mt-4 mb-4">
        <p>TOTAL ORDER : {cart.length} </p>
        <p>TOTAL PRICE : ${total.toFixed(2)} </p>
        <Link to="/order">
          <button className="btn bg-[#f91944] text-sm  hover:bg-[#f91944] btn-sm text-white">
            {" "}
            PLACE ORDER
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>FOOD IMAGE</th>
              <th>FOOD NAME</th>
              <th>QUANTITY</th>
              <th>PRICE </th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex foods-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src={food.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>${food.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(food)}
                    className="btn btn-ghost"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

// const array1 = [{price:1}, {price:2}, {price:3},  {price:4}];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.price,
//   initialValue,
// );

// console.log(sumWithInitial);
