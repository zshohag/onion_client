import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavOptions = ({ onOptionClick }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <li>
        <Link to="/" onClick={onOptionClick}>
          HOME
        </Link>
      </li>

      {user ? (
        <>
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
      ) : (
        <></>
      )}
    </>
  );
};

export default NavOptions;
