// import { Link } from "react-router-dom";

// const NavOptions = () => (
//   //  GET CART LENGTH
//   //const [cart] = useCart();

//   <>
//     <li>
//       <Link to="/">HOME</Link>
//     </li>
//     <li>
//       <Link to="mycart">MY CART</Link>
//     </li>
//   </>
// );

// export default NavOptions;
// NavOptions.jsx

import { Link } from "react-router-dom";

const NavOptions = ({ onOptionClick }) => {
  return (
    <>
      <li>
        <Link to="/" onClick={onOptionClick}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="mycart" onClick={onOptionClick}>
          MY CART
        </Link>
      </li>
      <li>
        <Link to="order" onClick={onOptionClick}>
        MY ORDER
        </Link>
      </li>
    </>
  );
};

export default NavOptions;
