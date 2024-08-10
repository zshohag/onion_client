// import { useState } from "react";
// import swal from "sweetalert";
// import useAuth from "../../hooks/useAuth";
// import TextField from "../../components/TextField/TextField";

// const DeliveryForm = ({ cart, onNewDelivery }) => {
//   const { user } = useAuth();

//   const [change, setChange] = useState({
//     country: "",
//     roadNo: "",
//     flatno: "",
//     name: `${user?.displayName}`,
//     phoneNumber: "", // Add phone number state
//   });

//   // handle Change
//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setChange((preValue) => {
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };

//   // handle Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const orderDetails = {
//       delivery: change,
//       cart: cart,
//     };

//     try {
//       const response = await fetch("https://onion-server.vercel.app/deliveries", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderDetails),
//       });
//       if (response.ok) {
//         swal(
//           "Information Updated!",
//           "Your shipping details updated successfully!",
//           "success"
//         );
//         onNewDelivery();
//       } else {
//         const errorData = await response.json();
//         swal(
//           "Failed to update shipping details",
//           errorData.message || "Please try again",
//           "error"
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       swal("Failed to update shipping details", "Please try again", "error");
//     }
//   };

//   return (
//     <div className="flex flex-col mt-2">
//       <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">
//         Edit Delivery Details
//       </h1>
//       <form className="my-4" onSubmit={handleSubmit}>
//         <div className="flex flex-col space-y-3">
//           <TextField
//             type="text"
//             placeholder="Country and District"
//             name="country"
//             value={change.country}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="text"
//             placeholder="Road Name and Road No"
//             name="roadNo"
//             value={change.roadNo}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="text"
//             placeholder="Flat, suite or floor"
//             name="flatno"
//             value={change.flatno}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="tel"
//             placeholder="Phone Number"
//             name="phoneNumber"
//             value={change.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="text"
//             placeholder="Delivery to"
//             name="name"
//             value={change.name}
//             onChange={handleChange}
//             required
//           />

//           <button className="w-full px-6 py-3 rounded-lg bg-[#f91944] text-white poppins ring-red-300 focus:ring-4 transition duration-500">
//             Save & Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DeliveryForm;

// import { useState } from "react";
// import swal from "sweetalert";
// import useAuth from "../../hooks/useAuth";
// import TextField from "../../components/TextField/TextField";

// const DeliveryForm = ({ cart, onNewDelivery }) => {
//   const { user } = useAuth();

//   const [change, setChange] = useState({
//     country: "",
//     roadNo: "",
//     flatno: "",
//     name: `${user?.displayName}`,
//     phoneNumber: "", // Add phone number state
//   });

//   // handle Change
//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setChange((preValue) => {
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };

//   // handle Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const orderDetails = {
//       delivery: change,
//       cart: cart,
//     };

//     try {
//       const response = await fetch("https://onion-server.vercel.app/deliveries", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderDetails),
//       });
//       if (response.ok) {
//         swal(
//           "Information Updated!",
//           "Your shipping details updated successfully!",
//           "success"
//         );
//         onNewDelivery();
//       } else {
//         const errorData = await response.json();
//         swal(
//           "Failed to update shipping details",
//           errorData.message || "Please try again",
//           "error"
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       swal("Failed to update shipping details", "Please try again", "error");
//     }
//   };

//   return (
//     <div className="flex flex-col mt-2">
//       <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">
//         Edit Delivery Details
//       </h1>
//       <form className="my-4" onSubmit={handleSubmit}>
//         <div className="flex flex-col space-y-3">
//           <TextField
//             type="text"
//             placeholder="Country and District"
//             name="country"
//             value={change.country}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="text"
//             placeholder="Road Name and Road No"
//             name="roadNo"
//             value={change.roadNo}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="text"
//             placeholder="Flat, suite or floor"
//             name="flatno"
//             value={change.flatno}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="tel"
//             placeholder="Phone Number"
//             name="phoneNumber"
//             value={change.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             type="text"
//             placeholder="Delivery to"
//             name="name"
//             value={change.name}
//             onChange={handleChange}
//             required
//           />

//           <button className="w-full px-6 py-3 rounded-lg bg-[#f91944] text-white poppins ring-red-300 focus:ring-4 transition duration-500">
//             Save & Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DeliveryForm;

import { useState } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { useDelivery } from "../../contexts/DeliveryProvider/DeliveryProvider";
import TextField from "../../components/TextField/TextField";

const DeliveryForm = () => {
  const { user } = useAuth();

  const [change, setChange] = useState({
    country: "",
    roadNo: "",
    flatno: "",
    name: `${user.displayName}`,
  });
  const { setInput, setDisabled } = useDelivery();

  //handle Change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setChange((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  //handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      country: change.country,
      roadNo: change.roadNo,
      flatno: change.flatno,
      name: change.name,
    });
    swal(
      "Information Updated!",
      "Your shipping details updated successfully!",
      "success"
    );
    setDisabled(false);
  };

  return (
    <div className="flex flex-col mt-20">
      <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">
        Edit Delivery Details
      </h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <TextField
            type="text"
            placeholder="Country and District"
            name="country"
            value={change.country}
            onChange={handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="Road Name and Road No"
            name="roadNo"
            value={change.roadNo}
            onChange={handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="Flat, suite or floor"
            name="flatno"
            value={change.flatno}
            onChange={handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="Delivery to"
            name="name"
            value={change.name}
            onChange={handleChange}
            required
          />
          <button className="w-full px-6 py-3 rounded-lg bg-[#f91944] text-white poppins ring-red-300 focus:ring-4 transition duration-500">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryForm;
