import { useContext, useState, useEffect, useRef } from "react";
import NavOptions from "./NavOptions";
import logo from "../../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // GET CART LENGTH
  const [cart] = useCart();

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "User Logged Out",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => console.log(error));
  };

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle menu open/close
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle menu option click
  const handleOptionClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-100 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown" ref={menuRef}>
          <label
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            onClick={handleMenuClick}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </label>
          {menuOpen && (
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavOptions onOptionClick={handleOptionClick} />
            </ul>
          )}
        </div>
        <Link to="/">
          <img className="w-36 cursor-pointer" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavOptions onOptionClick={handleOptionClick} />
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <Link to="mycart">
            <div className="flex justify-between items-center " >
              <FaShoppingCart className="w-5 h-5" />
              <div className="badge badge-secondary bg-[#f32750] mr-2">
                +{cart?.length || 0}
              </div>
            </div>
          </Link>
        )}
        {user ? (
          <>
            <span className="mr-2">{user.displayName.slice(0, 2)}</span>
            <button
              onClick={handleLogOut}
              className="btn bg-[#f91944] hover:bg-[#f91944] text-white"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn bg-[#f91944] hover:bg-[#f91944] text-white">
              LOGIN
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
